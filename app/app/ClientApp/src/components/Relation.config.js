export const style = [
  {
    selector: "node[personage]",
    style: {
      content: "data(personage)",
      "background-image": "data(img)",
      "background-fit": "cover cover",
      "font-size": 12,
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
    selector: "edge[affinity]",
    style: {
      "target-arrow-color": "data(affinity)",
      "line-color": "data(affinity)",
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
      "border-color": "lightgreen",
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
];

export const layout = {
  name: "concentric",
  levelWidth: () => {
    return 100;
  },
  minNodeSpacing: 150,
};
