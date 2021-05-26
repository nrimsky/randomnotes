import * as d3 from "d3";
import networks from "./data/networks.json";

function simulate(svg, graph) {
  const width = svg.attr("width");
  const height = svg.attr("height");
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  const simulation = d3
    .forceSimulation()
    .force(
      "link",
      d3.forceLink().id(function (d) {
        return d.id;
      })
    )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

  const link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function (d) {
      return Math.sqrt(d.value);
    });

  const node = svg
    .append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter()
    .append("g");

  const circles = node
    .append("circle")
    .attr("r", 5)
    .attr("fill", function (d) {
      return color(d.group);
    })
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

  const lables = node
    .append("text")
    .text(function (d) {
      return d.id;
    })
    .attr("x", 6)
    .attr("y", 3);

  node.append("title").text(function (d) {
    return d.id;
  });

  simulation.nodes(graph.nodes).on("tick", ticked);

  simulation.force("link").links(graph.links);

  function ticked() {
    link
      .attr("x1", function (d) {
        return d.source.x;
      })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });

    node.attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  }

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}

const svg1 = d3.select("#svg1");
simulate(svg1, networks.graph1);

const svg2 = d3.select("#svg2");
simulate(svg2, networks.c1);

const svg3 = d3.select("#svg3");
simulate(svg3, networks.c13);

const svg4 = d3.select("#svg4");
simulate(svg4, networks.c0);