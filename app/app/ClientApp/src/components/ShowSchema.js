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
          name: personage.firstname,
          source: personage.firstname,
          target: personage.firstname,
          // name: [`${personage.lastname} ${personage.firstname}`],
        },
      };
    });
    // console.log(data);
    this.setState({ personages: data, loading: false });
  }

  async componentDidMount() {
    await this.getAllPersonage();

    var cy = cytoscape({
      container: document.getElementById("cy"),

      layout: {
        name: "concentric",
        concentric: function (n) {
          return n.id() === "j" ? 200 : 0;
        },
        levelWidth: function (nodes) {
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

        // some style for the extension

        {
          selector: ".eh-handle",
          style: {
            "background-color": "red",
            width: 12,
            height: 12,
            shape: "ellipse",
            "overlay-opacity": 0,
            "border-width": 12, // makes the handle easier to hit
            "border-opacity": 0,
          },
        },

        {
          selector: ".eh-hover",
          style: {
            "background-color": "red",
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
            "background-color": "orange",
            "line-color": "lightblue",
            "target-arrow-color": "lightblue",
            "source-arrow-color": "orange",
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
        edges: this.state.personages,
      },
    });

    //drag schema false
    cy.userPanningEnabled(false);
    //zoom schema false
    cy.userZoomingEnabled(false);

    var eh = cy.edgehandles({
      snap: false,
    });

    document.querySelector("#addnode").addEventListener("click", function () {
      cy.add([
        {
          group: "nodes",

          position: {
            x: 200,
            y: 200,
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

    //todo get source and target of the edge
    var collection = cy.collection();
    cy.on("tap", "edges", function (e) {
      var clickedNode = e.target;
      collection = collection.union(clickedNode);
      console.log("source : ", e.target._private.data.source);
      console.log("target : ", e.target._private.data.target);
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
                  add node
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
