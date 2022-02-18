import React, { Component } from "react";
import { Button } from "reactstrap";
import "./ShowSchema.css";

import Relation from "../components/Relation";

export class ShowSchema extends Component {

  constructor(props) {
    super(props);
    this.state = { nodes: [], edges: [], draw: false, id: null, status: null };
    this.rel = React.createRef();
    this.drawning = this.drawning.bind(this);
    this.auth();
    }

    async auth() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: localStorage.getItem("token") }),
        };
        const response = await fetch("api/auth/verif", requestOptions)
        const data = await response.json();
        this.setState({ id: data, status: response.status })
        if (this.state.status !== 200) {
            this.props.history.push('/');
        }
    }

  drawning = (e) => {
    e.preventDefault();
    this.setState({ draw: !this.state.draw });
    this.state.draw
      ? this.rel.current.disableDrawMode()
      : this.rel.current.enableDrawMode();
  };

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
        rel.map(({ actor, id, affinity, ...rest }) => {
          return {
            data: {
              source: actor,
              affinity:
                affinity === 5 ? "blue" : affinity > 5 ? "green" : "red",
              ...rest,
            },
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

  render() {
    const isDrawning = this.state.draw;

    return (
      <div className="row container-fluid wrapper">
        <div className="col-md-2 border-end">
          <h2>SCHEMA NAME</h2>
        </div>
        <div className="col p-3 position-relative">
          <Relation
            edges={this.state.edges}
            nodes={this.state.nodes}
            ref={this.rel}
          />
          <Button
            color={!isDrawning ? "primary" : "danger"}
            className={"text-uppercase fw-bold schemaBtn"}
            onClick={this.drawning}
          >
            {!isDrawning ? "Make relation" : "Stop relation"}
          </Button>
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
