import * as vis from "vis-network";

const nodes = [
  {
    id: "0",
    label: "0",
  },
  {
    id: "1",
    label: "1",
  },
  {
    id: "2",
    label: "2",
  },
  {
    id: "3",
    label: "3",
  },
  {
      id: "...",
      label: "..."
  }
];

const edges = [
  {
    from: "0",
    to: "1",
    label: "v"
  },
  {
    from: "1",
    to: "2",
    label: "v"
  },
  {
    from: "2",
    to: "3",
    label: "v"
  },
  {
    from: "3",
    to: "...",
    label: "v"
  }
];

// create a network
var container = document.getElementById("vis1");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  edges: {
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 1,
        type: "arrow",
      },
    },
    color: {
      color: "#848484",
      highlight: "#848484",
      hover: "#848484",
      inherit: "from",
      opacity: 1.0,
    },
    physics: true,
    scaling: {
      customScalingFunction: () => { return 0.1}
    },
  },
};

var network = new vis.Network(container, data, options);
