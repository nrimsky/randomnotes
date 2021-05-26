import * as vis from "vis-network";

const nodes = [
  {
    id: "A",
    label: "A",
  },
  {
    id: "B",
    label: "B",
  },
  {
    id: "C",
    label: "C",
  },
  {
    id: "D",
    label: "D",
  },
];

const edges = [
  {
    from: "A",
    to: "A",
    value: 0.2,
    label: "0.2"
  },
  {
    from: "A",
    to: "B",
    value: 0.3,
    label: "0.3"
  },
  {
    from: "A",
    to: "C",
    value: 0.5,
    label: "0.5"
  },
  {
    from: "B",
    to: "A",
    value: 0.1,
    label: "0.1"
  },
  {
    from: "B",
    to: "B",
    value: 0.7,
    label: "0.7"
  },
  {
    from: "B",
    to: "C",
    value: 0.2,
    label: "0.2"
  },
  {
    from: "C",
    to: "B",
    value: 0.2,
    label: "0.2"
  },
  {
    from: "C",
    to: "C",
    value: 0.5,
    label: "0.5"
  },
  {
    from: "C",
    to: "D",
    value: 0.3,
    label: "0.3"
  },
  {
    from: "D",
    to: "D",
    value: 1,
    label: "1"
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
    font: {
      color: "#add8e6",
      strokeWidth: 1,
      strokeColor: "#add8e6",
      background: '#131213'
    },
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.3,
        type: "arrow",
      },
    },
    color: {
      color: "#fff",
      highlight: "#fff",
      hover: "#fff",
      inherit: "from",
      opacity: 0.8,
    },
    physics: true,
    scaling: {
      customScalingFunction: () => {
        return 0.1;
      },
    },
  },
};

var network = new vis.Network(container, data, options);
