import React, { Component } from "react";
import { Button } from "reactstrap";
import "./ShowSchema.css";

import Relation from "../components/Relation";

export class ShowSchema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      edges: [],
      draw: false,
    };
    this.rel = React.createRef();
    this.drawning = this.drawning.bind(this);
  }

  drawning = (e) => {
    e.preventDefault();
    this.setState({ draw: !this.state.draw });
    this.state.draw
      ? this.rel.current.disableDrawMode()
      : this.rel.current.enableDrawMode();
  };

  async getPersonage() {
    const listPersonage = await fetch("personage")
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
    const listRelation = await fetch("relation")
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
      <div className="row container-fluid">
        <div className="col-md-2 border p-3">
          Show schema option
          <div className="border p-2 container col">
            <p>Right click on a node or a edge to delete it</p>
          </div>
        </div>
        <div className="col p-3 position-relative">
          {/* name event */}
          <div className="d-flex justify-content-around">
            <h4>Name Event</h4>
            <div>
              <span>&lt;</span> <span>2 / 12</span>
              <span>&gt;</span>
            </div>
          </div>
          <Relation
            edges={this.state.edges}
            nodes={this.state.nodes}
            ref={this.rel}
          />
          <Button
            color={!isDrawning ? "primary" : "danger"}
            className={"text-uppercase fw-bold"}
            onClick={this.drawning}
          >
            {!isDrawning ? "Link On" : "Link Off"}
          </Button>
        </div>
      </div>
    );
  }
}
