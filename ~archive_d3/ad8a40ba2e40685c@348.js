function _1(md){return(
md`# Don't Give Me Altitude: Google Maps' Pedestrian Breakdown

I created this D3 line chart based on a [line chart template from Observable](https://observablehq.com/@d3/line-chart/2?intent=fork). Data: Commute tracked on [Strava](https://www.strava.com/activities/9430666297)`
)}

function _chart(d3,aapl)
{
  // Declare the chart dimensions and margins.
  const width = 928;
  const height = 500;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc(d3.extent(aapl, d => d.time_seconds), [marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear([0, d3.max(aapl, d => d.elev)], [height - marginBottom, marginTop]);

  // Declare the line generator.
  const line = d3.line()
      .x(d => x(d.time_seconds))
      .y(d => y(d.elev));

  // Create the SVG container.
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // Add the x-axis.
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Elevation (meters)"));

  // Append a path for the line.
  svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "teal")
      .attr("stroke-width", 5)
      .attr("d", line(aapl));

  return svg.node();
}


function _aapl(FileAttachment){return(
FileAttachment("aapl.csv").csv({typed: true})
)}

function _4(md){return(
md`Using [Observable Plot](https://observablehq.com/plot)’s concise API, you can create a line chart with the [line mark](https://observablehq.com/plot/marks/line). Below, a [rule mark](https://observablehq.com/plot/marks/rule) denotes *y* = 0.`
)}

function _5(Plot,aapl){return(
Plot.plot({
  y: {grid: true, label: "Elevation"},
  marks: [
    Plot.ruleY([0]),
    Plot.lineY(aapl, {x: "time_seconds", y: "elev", stroke: "teal"})
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["aapl.csv", {url: new URL("./data/commute_riverside_d3.csv", import.meta.url), mimeType: "text/csv", toString}] 
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("chart")).define("chart", ["d3","aapl"], _chart);
  main.variable(observer("aapl")).define("aapl", ["FileAttachment"], _aapl);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["Plot","aapl"], _5);
  return main;
}
