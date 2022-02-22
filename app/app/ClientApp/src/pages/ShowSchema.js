import React, { Component } from "react";
import "./ShowSchema.css";

import { Input, Range, Button, Select } from "../components/FormInput";
import { ButtonToggle } from "reactstrap";
import Relation from "../components/Relation";

const initialState = {
  sourceName: "",
  targetName: "",
};

export class ShowSchema extends Component {
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
    // this.auth();
  }

  async auth() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    };
    const response = await fetch("api/auth/verif", requestOptions);
    const data = await response.json();
    this.setState({ id: data, status: response.status });
    if (this.state.status !== 200) {
      this.props.history.push("/");
    }
  }
  async getPersonage() {
    const listPersonage = await fetch("api/personage")
      .then((res) => res.json())
      .then((pers) =>
        pers.map(({ lastname, firstname, img, ...rest }) => {
          return {
            data: {
              personage: `${lastname} ${firstname}`,
              img:
                img ||
                "https://static.miraheze.org/windowswallpaperwiki/thumb/9/94/User_(Windows_8.x).png/192px-User_(Windows_8.x).png",
              ...rest,
            },
          };
        })
      );
    this.setState({ nodes: listPersonage });
  }
  async getRelation() {
    const listRelation = await fetch("api/relation")
      .then((res) => res.json())
      .then((rel) =>
        rel.map(({ id, ...rest }) => {
          return {
            data: { ...rest },
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
          newer,
          id,
        },
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newRelation, edges } = this.state;
    if (!newRelation.id) return;
    if (newRelation.newer) this.rel.current.remove(newRelation.id);
    this.setState({
      edges: [...edges, { data: newRelation }],
      newRelation: initialState,
    });
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
    this.setState({
      edges: edges.filter(({ data }) => data["id"] !== newRelation["id"]),
      newRelation: initialState,
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            animi aut ducimus eius eligendi exercitationem fugit in natus
            perferendis praesentium quis quos ratione reprehenderit repudiandae
            tenetur! Laboriosam repellat unde ut!
          </p>
          <hr />
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
              {!Boolean(newer) && (
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
            edges={this.state.edges}
            nodes={this.state.nodes}
            ref={this.rel}
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
          <div className={"help-affinity"}>
            <p className={"enemy"}>Enemy</p>
            <p className={"neutral"}>Neutral</p>
            <p className={"ally"}>Ally</p>
          </div>
        </div>
      </div>
    );
  }
}
