export const style = [
  {
    selector: "node[personage]",
    style: {
      content: "data(personage)",
      "background-image":
        "https://static.miraheze.org/windowswallpaperwiki/thumb/9/94/User_(Windows_8.x).png/192px-User_(Windows_8.x).png",
      "background-fit": "cover cover",
      "font-size": 16,
    },
  },
  {
    selector: "node[?img]",
    style: {
      "background-image": "data(img)",
    },
  },
  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      "line-opacity": 0.6,
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

const lineStyle = (privacy) => {
  privacy = Number(privacy);
  if (privacy === 1) return "solid";
  if (privacy === 2) return "dashed";
  if (privacy === 3) return "dotted";
};

const lineColor = (affinity) => {
  if (affinity === 5) return "blue";
  if (affinity > 5) return "green";
  if (affinity < 5) return "red";
};

export const layout = {
  name: "circle",
  fit: true,
  padding: 50,
  ready: ({ cy }) => {
    cy.edges().forEach((e) => {
      const affinity = lineColor(e.data("affinity"));
      const privacy = lineStyle(e.data("idPrivacy"));
      return e.style({
        "line-style": privacy,
        "line-color": affinity,
        "target-arrow-color": affinity,
      });
    });
  },
};
