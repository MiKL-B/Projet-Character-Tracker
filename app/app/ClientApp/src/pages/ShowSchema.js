import React, { Component } from "react";
import "./ShowSchema.css";

import { Input, Range, Button, Select } from "../components/FormInput";
import { ButtonToggle } from "reactstrap";
import Relation from "../components/Relation";
import { withHook } from "../helpers";

const initialState = {
  sourceName: "",
  targetName: "",
};

class ShowSchema extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: [],
      edges: [],
      newRelation: initialState,
      draw: false,
      id: null,
      status: null,
    };
    this.rel = React.createRef();
    this.drawning = this.drawning.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async getPersonage() {
    const listPersonage = await fetch(`api/personage/${this.props.params.id}`)
      .then((res) => res.json())
      .then((pers) =>
        pers.map(({ lastname, firstname, ...rest }) => {
          return {
            data: {
              personage: `${lastname} ${firstname}`,
              ...rest,
            },
          };
        })
      );
    this.setState({ nodes: listPersonage });
  }
  async getRelation() {
    const listRelation = await fetch(
      `api/relation/byrelation/${this.props.params.id}`
    )
      .then((res) => res.json())
      .then((rel) =>
        rel.map(({ id, ...rest }) => {
          return {
            data: { ...rest, idRelation: id },
          };
        })
      )
      .catch((e) => console.error(e));
    this.setState({ edges: listRelation });
  }

  async componentDidMount() {
    await this.getPersonage();
    await this.getRelation();
  }

  drawning = () => {
    this.setState({ draw: !this.state.draw });
    this.state.draw
      ? this.rel.current.disableDrawMode()
      : this.rel.current.enableDrawMode();
  };

  handleInputChange({ target }) {
    const value = target.value;
    const name = target.name;
    this.setState(({ newRelation }) => {
      return {
        newRelation: {
          ...newRelation,
          [name]: value,
        },
      };
    });
  }

  async handleCallback({
    source,
    target,
    id,
    idPrivacy = 1,
    affinity = 5,
    newer = false,
    idRelation,
  }) {
    this.rel.current.disableDrawMode();
    await this.setState(({ newRelation }) => {
      return {
        draw: false,
        newRelation: {
          ...newRelation,
          source: source["id"],
          target: target["id"],
          sourceName: source["personage"],
          targetName: target["personage"],
          schemaId: source["schemaId"],
          affinity,
          idPrivacy,
          idRelation,
          newer,
          id,
        },
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newRelation, edges } = this.state;
    const { id, ...rest } = newRelation;
    if (!newRelation.id) return;
    if (newRelation.newer) {
      this.rel.current.remove(newRelation.id);
      fetch("api/relation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idEvent: 1, ...rest }),
      }).then(() => {
        this.setState({
          edges: [...edges, { data: newRelation }],
          newRelation: initialState,
        });
      });
    } else {
      //update
      fetch(`api/relation/${newRelation["idRelation"]}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...rest,
          id: newRelation["idRelation"],
          idEvent: 1,
        }),
      }).then((res) => {
        console.log(res);
        this.setState({
          edges: [...edges, { data: newRelation }],
          newRelation: initialState,
        });
      });
    }
  }

  handleReset(event) {
    event.preventDefault();
    const { newRelation } = this.state;
    if (newRelation.newer) this.rel.current.remove(newRelation.id);

    this.setState({
      newRelation: initialState,
    });
  }

  handleDelete(event) {
    event.preventDefault();
    const { edges, newRelation } = this.state;
    fetch(`/api/relation/${newRelation["idRelation"]}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: newRelation["idRelation"] }),
    })
      .then((res) => {
        this.setState({
          edges: edges.filter(({ data }) => data["id"] !== newRelation["id"]),
          newRelation: initialState,
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  render() {
    const isDrawning = this.state.draw;
    const { sourceName, targetName, affinity, id, idPrivacy, newer } =
      this.state.newRelation;

    return (
      <div className="row container-fluid wrapper">
        <div className="col-md-2 border-end">
          <h2>SCHEMA NAME</h2>
          <a
            className={"modal-title text-decoration-none"}
            data-bs-toggle="collapse"
            href="#descCollapse"
          >
            Description
          </a>
          <p className={"collapse"} id={"descCollapse"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            animi aut ducimus eius eligendi exercitationem fugit in natus
            perferendis praesentium quis quos ratione reprehenderit repudiandae
            tenetur! Laboriosam repellat unde ut!
          </p>
          <hr />
          <p>Double click on edge to edit a relation</p>
          <form
            className={`formRelation ${
              !Boolean(id) ? null : "opacity-100 visible"
            }`}
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
          >
            <h5>Relation</h5>
            <Input
              name={"source"}
              label={"Source"}
              value={sourceName}
              onChange={this.handleInputChange}
              disabled
            />
            <Input
              name={"target"}
              label={"Target"}
              value={targetName}
              onChange={this.handleInputChange}
              disabled
            />
            <Select
              name={"idPrivacy"}
              label={"Privacy"}
              value={idPrivacy}
              onChange={this.handleInputChange}
              options={["Public", "Private", "Secret"]}
            />
            <Range
              name={"affinity"}
              label={"Affinity"}
              onChange={this.handleInputChange}
              value={affinity}
            />
            <div className="row g-3 mt-1">
              <Button
                type={"submit"}
                value={"submit"}
                col
                disabled={Boolean(id)}
              />
              <Button type={"reset"} value={"cancel"} color={"danger"} col />
              {!newer && (
                <Button
                  value={"delete"}
                  color={"dark"}
                  onClick={this.handleDelete}
                />
              )}
            </div>
          </form>
        </div>
        <div className="col p-3 position-relative">
          <Relation
            ref={this.rel}
            edges={this.state.edges}
            nodes={this.state.nodes}
            setRelation={this.handleCallback}
          />
          <ButtonToggle
            color={!isDrawning ? "primary" : "danger"}
            className={"schemaBtn"}
            onClick={this.drawning}
            onChange={this.drawning}
            disabled={Boolean(id)}
          >
            {!isDrawning ? "Make relation" : "Stop relation"}
          </ButtonToggle>
          <div className={"helpContainer"}>
            <h5>Affinity</h5>
            <p className={"aff enemy"}>Enemy</p>
            <p className={"aff neutral"}>Neutral</p>
            <p className={"aff ally"}>Ally</p>
            <h5>Privacy</h5>
            <p className={"priv public"}>Public</p>
            <p className={"priv private"}>Private</p>
            <p className={"priv secret"}>Secret</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withHook(ShowSchema);
