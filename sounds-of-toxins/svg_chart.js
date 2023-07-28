// Step 4. load your data with d3.csv()
      //d3.csv("data/happiness-sample-data.csv")
      d3.csv("data/aqi-data-2023-07-24.csv")
      
      // d3.json("happiness-sample-data.json")
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

          const gridSize = 20, gap = 2;

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
              //.transition()
              //.duration(2000)
              .attr('width', gridSize)
              .attr('height', gridSize)
          }

          const showForecast = function() {
            days
              //.transition()
              //.duration(2000)
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

        })