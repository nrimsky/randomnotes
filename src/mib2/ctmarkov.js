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
    to: "B",
    label: "0.2/s",
  },
  {
    from: "A",
    to: "C",
    label: "1.5/s",
  },
  {
    from: "B",
    to: "A",
    label: "2/s",
  },
  {
    from: "C",
    to: "B",
    label: "3/s",
  },
  {
    from: "C",
    to: "D",
    label: "0.1/s",
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

const nodes2 = [
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
];

const edges2 = [
  {
    from: "1",
    to: "2",
    label: "3/s",
  },
  {
    from: "2",
    to: "1",
    label: "2/s",
  },
  {
    from: "1",
    to: "3",
    label: "1/s",
  },
  {
    from: "3",
    to: "2",
    label: "3/s",
  },
];

var container2 = document.getElementById("vis2");
var data2 = {
  nodes: nodes2,
  edges: edges2,
};

var network2 = new vis.Network(container2, data2, options);
