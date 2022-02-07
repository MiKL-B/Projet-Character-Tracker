import React, { Component } from "react";
import cytoscape from "cytoscape";
import edgehandles from "cytoscape-edgehandles";
import "./ShowSchema.css";
cytoscape.use(edgehandles);

export class ShowSchema extends Component {
  static displayName = ShowSchema.name;

  render() {
    return (
      <div>
        <div class="container-fluid p-5">
          <h3 class="d-flex justify-content-center p-5">Show schema</h3>

          <div class="row">
            <div class="col-md-3 border p-3">Show schema option</div>
            <div class="col border p-3">
              {/* name event */}
              <div class="d-flex justify-content-around">
                <h4>Name Event</h4>
                <div>
                  <span>&lt;</span> <span>2 / 12</span>
                  <span>&gt;</span>
                </div>
              </div>

              {/* event */}
              <div id="cy"></div>
              <div id="buttons" class="">
                <button
                  id="start"
                  class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 "
                >
                  Start on selected
                </button>
                <button
                  id="draw-on"
                  class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                >
                  Draw mode on
                </button>
                <button
                  id="draw-off"
                  class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
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
document.addEventListener("DOMContentLoaded", function () {
  var cy = (window.cy = cytoscape({
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
          "border-color": "red",
        },
      },

      {
        selector: ".eh-target",
        style: {
          "border-width": 2,
          "border-color": "red",
        },
      },

      {
        selector: ".eh-preview, .eh-ghost-edge",
        style: {
          "background-color": "red",
          "line-color": "red",
          "target-arrow-color": "red",
          "source-arrow-color": "red",
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
        { data: { id: "j", name: "Jerry" } },
        { data: { id: "e", name: "Elaine" } },
        { data: { id: "k", name: "Kramer" } },
        { data: { id: "g", name: "George" } },
      ],
      edges: [
        { data: { source: "j", target: "e" } },
        { data: { source: "j", target: "k" } },
        { data: { source: "j", target: "g" } },
        { data: { source: "e", target: "j" } },
        { data: { source: "e", target: "k" } },
        { data: { source: "k", target: "j" } },
        { data: { source: "k", target: "e" } },
        { data: { source: "k", target: "g" } },
        { data: { source: "g", target: "j" } },
      ],
    },
  }));

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
});
