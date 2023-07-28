// using d3 for convenience
const scrolly = d3.select("#scroll-content");
const figure = scrolly.select("#my-svg-chart");
const step = scrolly.selectAll(".step"); 

// initialize the scrollama
const scroller = scrollama();

// generic window resize listener event
function handleResize() {
  
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.style("height", stepH + "px");

  var figureHeight = Math.min(window.innerHeight*0.8,640);
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}


// scrollama event handlers
function handleStepEnter(response) {

  // add color to current step only
  step.classed("is-active", function (d, i) {
    return i === response.index;
  });

  //Scrollama activated steps
  if (response.index == 0) {
    showGrid();
  }
  else if (response.index == 1) {
     showForecast();
   } else if (response.index == 2) {
     initSound();
   } else if (response.index == 3) {
     playForecast();
   }
}


function init() {

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scroll-content .step",
      offset: 0.33,
      debug: true //create a visual line to show where event gets triggered
    })
    .onStepEnter(handleStepEnter);
}


// kick things off
init();