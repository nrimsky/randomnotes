import * as vis from "vis-network";

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
      customScalingFunction: () => {
        return 0.1;
      },
    },
  },
};

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
];

const edges = [
  {
    from: "A",
    to: "B",
    label: "2/s",
  },
  {
    from: "B",
    to: "C",
    label: "2/s",
  },
  {
    from: "C",
    to: "A",
    label: "1/s",
  },
];

const nodes_stat = [
  {
    id: "A",
    label: "A (p=0.25)",
  },
  {
    id: "B",
    label: "B (p=0.25)",
  },
  {
    id: "C",
    label: "C (p=0.25)",
  },
];

const edges_stat = [
  {
    from: "A",
    to: "B",
    label: "0.5/s",
  },
  {
    from: "B",
    to: "C",
    label: "0.5/s",
  },
  {
    from: "C",
    to: "A",
    label: "0.5/s",
  },
];

const edges_stat_db = [
  {
    from: "A",
    to: "B",
    label: "1/s",
  },
  {
    from: "B",
    to: "A",
    label: "1/s",
  },
  {
    from: "B",
    to: "C",
    label: "2/s",
  },
  {
    from: "C",
    to: "B",
    label: "1/s",
  },
  {
    from: "C",
    to: "A",
    label: "2/s",
  },
  {
    from: "A",
    to: "C",
    label: "4/s",
  },
];

var container1 = document.getElementById("vis1");
var container2 = document.getElementById("vis2");
var container3 = document.getElementById("vis3");
var data1 = {
  nodes: nodes,
  edges: edges,
};
var data2 = {
  nodes: nodes_stat,
  edges: edges_stat,
};
var data3 = {
  nodes: nodes,
  edges: edges_stat_db,
};
var network1 = new vis.Network(container1, data1, options);
var network2 = new vis.Network(container2, data2, options);
var network3 = new vis.Network(container3, data3, options);
