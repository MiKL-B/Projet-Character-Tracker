import React, { Component } from "react";
import cytoscape from "cytoscape";
import edgehandles from "cytoscape-edgehandles";
import "./ShowSchema.css";
cytoscape.use(edgehandles);

export class ShowSchema extends Component {
  static displayName = ShowSchema.name;

  constructor(props) {
    super(props);
    this.state = { personages: [], loading: true };
  }

  async getAllPersonage() {
    const response = await fetch("personage");
    const raw = await response.json();
    const data = raw.map((personage) => {
      return {
        data: {
          id: personage.id,
          name: [`${personage.lastname} ${personage.firstname}`],
        },
      };
    });
    this.setState({ personages: data, loading: false });
  }

  async componentDidMount() {
    await this.getAllPersonage();

    var cy = cytoscape({
      container: document.getElementById("cy"),
      layout: {
        name: "concentric",
        concentric: (n) => {
          return n.id() === "j" ? 200 : 0;
        },
        levelWidth: () => {
          return 100;
        },
        minNodeSpacing: 100,
      },

      style: [
        {
          selector: "node[name]",
          style: {
            content: "data(name)",
            "background-image": "https://picsum.photos/100",
            "background-fit": "cover cover",
          },
        },

        {
          selector: "edge",
          style: {
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
          },
        },

        {
          selector: ".eh-source",
          style: {
            "border-width": 2,
            "border-color": "lightblue",
          },
        },

        {
          selector: ".eh-target",
          style: {
            "border-width": 2,
            "border-color": "orange",
          },
        },

        {
          selector: ".eh-preview, .eh-ghost-edge",
          style: {
            "line-color": "lightblue",
            "target-arrow-color": "lightblue",
          },
        },

        {
          selector: ".eh-ghost-edge.eh-preview-active",
          style: {
            opacity: 0,
          },
        },
      ],

      elements: {
        nodes: this.state.personages,
      },
    });

    //drag schema false
    cy.userPanningEnabled(false);
    //zoom schema false
    cy.userZoomingEnabled(false);

    var eh = cy.edgehandles({
      snap: true,
      snapThreshold: 50,
    });

    cy.on("ehcomplete", (event, sourceNode, targetNode) => {
      const source = sourceNode._private.data.id;
      const target = targetNode._private.data.id;
      console.log("source : ", source);
      console.log("target : ", target);

      localStorage.setItem("source", source);
      localStorage.setItem("target", target);
    });

    document.querySelector("#addnode").addEventListener("click", function () {
      cy.add([
        {
          group: "edges",
          position: {
            x: 200,
            y: 200,
          },
          data: {
            source: localStorage.getItem("source"),
            target: localStorage.getItem("target"),
          },
        },
      ]);
    });
    document.querySelector("#draw-on").addEventListener("click", function () {
      eh.enableDrawMode();
    });

    document.querySelector("#draw-off").addEventListener("click", function () {
      eh.disableDrawMode();
    });

    //remove node on right click
    cy.on("cxttap", "node", function (evt) {
      var node = evt.target;
      console.log("tapped", node.id());
      cy.remove(node);
    });
    //remove edge on right click
    cy.on("cxttap", "edges", function (evt) {
      var edge = evt.target;
      console.log("tapped", edge.id());
      cy.remove(edge);
    });
  }

  static renderPersonages(personages) {
    return (
      <div className="renderPerso">
        {personages.map((personage) => (
          <ul key={personage.data.id}>
            <li>{personage.data.lastname}</li>
            <li>{personage.data.firstname}</li>
          </ul>
        ))}
      </div>
    );
  }

  render() {
    let dataspersonages = this.state.loading ? (
      <p>
        <em>loading ...</em>
      </p>
    ) : (
      ShowSchema.renderPersonages(this.state.personages)
    );

    return (
      <div className="test">
        {dataspersonages}
        <div className="container-fluid ">
          <h3 className="d-flex justify-content-center p-5">Show schema</h3>

          <div className="row">
            <div className="col-md-2 border p-3">
              Show schema option
              <div className="border p-2 container col">
                <p>Right click on a node or a edge to delete it</p>
              </div>
            </div>
            <div className="col border p-3">
              {/* name event */}
              <div className="d-flex justify-content-around">
                <h4>Name Event</h4>
                <div>
                  <span>&lt;</span> <span>2 / 12</span>
                  <span>&gt;</span>
                </div>
              </div>

              {/* event */}
              <div id="cy"></div>
              <div id="buttons">
                <button
                  id="addnode"
                  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                >
                  add edge
                </button>
                <button
                  id="draw-on"
                  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                >
                  Link On
                </button>
                <button
                  id="draw-off"
                  className="btn btn-lg btn-danger btn-login text-uppercase fw-bold mb-2"
                >
                  Link Off
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
