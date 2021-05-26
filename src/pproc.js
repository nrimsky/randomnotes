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
    label: "λ(0)"
  },
  {
    from: "1",
    to: "2",
    label: "λ(1)"
  },
  {
    from: "2",
    to: "3",
    label: "λ(2)"
  },
  {
    from: "3",
    to: "...",
    label: "λ(3)"
  },
  {
    from: "1",
    to: "0",
    label: "μ(1)"
  },
  {
    from: "2",
    to: "1",
    label: "μ(2)"
  },
  {
    from: "3",
    to: "2",
    label: "μ(3)"
  },
  {
    to: "3",
    from: "...",
    label: "μ(4)"
  },
  
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
        scaleFactor: 0.5,
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
