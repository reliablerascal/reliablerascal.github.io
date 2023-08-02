//7/29/23 RR this is based on the original version from Youyou that creates a GRID
//see AQI_scrollama for the new version
// d3.csv("data/aqi-data-2023-07-24.csv", function(data) {
//   console.log(data);
// });

     
      d3.csv("data/aqi-data-2023-07-24.csv")
        .then(data => {

          const myChart = d3
            .select('#my-svg-chart')
            .append('svg')
            .attr('width', 640)
            .attr('height', 640)

          const days = myChart
            .selectAll('rect')
            .data(data)
            .join('rect');

          const gridSize = 60, gap = 10;

          days
            .attr('x', (d,i) => {
              return Math.floor(i%7)*(gridSize+ gap);
            })
            .attr('y', (d,i) => {
              return Math.floor(i/7)*(gridSize+ gap);
            })
            .attr('width', 0)
            .attr('height', 0)
            .style('fill','lightgrey')
          
          //scrollytelling events based on day
          const showGrid = function() {
            days
              .attr('width', gridSize)
              .attr('height', gridSize)
          }

          const showForecast = function() {
            days
              .style('fill', d=> {
                if (d.aqi < 51) {return 'green'}
                else if (d.aqi < 101) {return 'yellow'}
                else if (d.aqi < 151) {return 'orange'}
                else if (d.aqi < 201) {return 'red'}
                else if (d.aqi < 251) {return 'purple'}
                else if (d.aqi < 301) {return 'maroon'}
                else {return 'grey'}
              })
          }

          const playForecast = function() {
            playChord(aqiGood);
            setTimeout(function() {
                playChord(aqiModerate);
            }, 1000);
            setTimeout(function() {
                playChord(aqiUnhealthySensitive);
            }, 2000);
            setTimeout(function() {
                playChord(aqiUnhealthy);
            }, 3000);
            setTimeout(function() {
                playChord(aqiHazardous);
            }, 4000);
            setTimeout(function() {
                playChord(aqiVeryHazardous);
            }, 5000);
          }

          // ======================================
          // === HERE starts the scrollama code ===
          // ======================================

          // using d3 for convenience
          const scrolly = d3.select("#scroll-content");
          const figure = scrolly.select("#my-svg-chart");
          const step = scrolly.selectAll(".step"); 
          // const step = scrolly.data(data);

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
            // add action to current step only
            step.classed("is-active", function (d, i) {
              return i === response.index;
            });

            //step.data(data);
          
            // play out the forecast step by step
            if (response.index == 0) {
              showGrid();
              initSound();
            } else if (response.index == 1) {
              showForecast();
            } else if (response.index == 2) {
              playChord(aqiGood);
            } else if (response.index == 3) {
              playChord(d=> {
                if (d.aqi < 51) {return aqiGood}
                else if (d.aqi < 101) {return aqiModerate}
                else if (d.aqi < 151) {return aqiUnhealthy}
                else if (d.aqi < 201) {return aqiUnhealthySensitive}
                else if (d.aqi < 251) {return aqiHazardous}
                else if (d.aqi < 301) {return aqiVeryHazardous}
              })
            }  else if (response.index >= 4) {
              playChordByNum(d=> {
                d.aqi
              })
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
                offset: 0.10,
                debug: true //create a visual line to show where event gets triggered
              })
              .onStepEnter(handleStepEnter);
          }


          // kick things off
          init();
      


    //end D3      
  })














  //buttons for interaction

  /*
  d3.select('button#btnEnableSound')
            .on('click', initSound)
          d3.select('button#btnShowGrid')
            .on('click', showGrid)
          d3.select('button#btnShowForecast')
            .on('click', showForecast)
          d3.select('button#btnPlayForecast')
            .on('click', playForecast)





  //buttons for testing
  d3.select('button#btn1')
              .on("click", function () {
                playChord(aqiGood);
              })
          d3.select('button#btn2')
              .on("click", function () {
                playChord(aqiHazardous);
              })
          d3.select('button#btn3')
              .on("click", function () {
                playChord(aqiUnhealthySensitive);
              })
          d3.select('button#btn4')
              .on("click", function () {
                playChord(aqiVeryHazardous);
              })
          d3.select('button#btn5')
              .on("click", function () {
                playChord(aqiModerate);
              })
          d3.select('button#btn6')
              .on("click", function () {
                playChord(aqiUnhealthy);
              })
          

          //buttons for legend
          d3.select('button#btnk1')
              .on("click", function () {
                playChord(aqiGood);
              })
          d3.select('button#btnk2')
              .on("click", function () {
                playChord(aqiModerate);
              })
          d3.select('button#btnk3')
              .on("click", function () {
                playChord(aqiUnhealthySensitive);
              })
          d3.select('button#btnk4')
              .on("click", function () {
                playChord(aqiUnhealthy);
              })
          d3.select('button#btnk5')
              .on("click", function () {
                playChord(aqiHazardous);
              })
          d3.select('button#btnk6')
              .on("click", function () {
                playChord(aqiVeryHazardous);
              })
*/

