import React, { Component } from "react";
import cytoscape from "cytoscape";
import edgehandles from "cytoscape-edgehandles";
import "./ShowSchema.css";
cytoscape.use(edgehandles);

export class ShowSchema extends Component {
  static displayName = ShowSchema.name;
  componentDidMount() {
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
            backgroundColor: "#0b5ed7",
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
        nodes: [
          { data: { id: "jean", name: "jean" } },
          { data: { id: "michel", name: "michel" } },
          { data: { id: "edwouard", name: "edwouard" } },
        ],
        edges: [{ data: { source: "jean", target: "michel" } }],
      },
    });

    //drag schema false
    cy.userPanningEnabled(false);
    //zoom schema false
    cy.userZoomingEnabled(false);

    var eh = cy.edgehandles({
      snap: false,
    });

    document.querySelector("#draw-on").addEventListener("click", function () {
      eh.enableDrawMode();
    });

    document.querySelector("#draw-off").addEventListener("click", function () {
      eh.disableDrawMode();
    });

    document.querySelector("#start").addEventListener("click", function () {
      eh.start(cy.$("node:selected"));
    });

    //add node
    document.querySelector("#addedge").addEventListener("click", function () {
      let elem_id = document.getElementById("node_id").value;
      var from_node = document.getElementById("from_node").value;
      if (elem_id.length === 0 || from_node.length === 0) {
        alert("please fill both input fields");
        return;
      }
      cy.add([
        {
          data: {
            id: elem_id,
          },
        },
        {
          data: {
            id: from_node + "" + elem_id,
            source: from_node + "",
            target: elem_id + "",
          },
        },
      ]);
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

    //add node on tap
    cy.on("tap", function (evt) {
      cy.add([
        {
          group: "nodes",
          id: "jean",
          name: "jean",
          renderedPosition: {
            x: evt.renderedPosition.x,
            y: evt.renderedPosition.y,
          },
        },
      ]);
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid p-5">
          <h3 className="d-flex justify-content-center p-5">Show schema</h3>

          <div className="row">
            <div className="col-md-3 border p-3">
              Show schema option
              <div className="border p-2 container col">
                <input
                  className="p-2"
                  type="text"
                  id="from_node"
                  placeholder="from node"
                />
                <input
                  className="p-2"
                  type="text"
                  id="node_id"
                  placeholder="to node"
                />

                <button
                  id="addedge"
                  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2  mt-2"
                >
                  Add edge
                </button>

                <p>Left click on the screen to add a node</p>
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
              <div id="buttons" className="">
                <button
                  id="start"
                  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 "
                >
                  Start on selected
                </button>
                <button
                  id="draw-on"
                  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                >
                  Draw mode on
                </button>
                <button
                  id="draw-off"
                  className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                >
                  Draw mode off
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
