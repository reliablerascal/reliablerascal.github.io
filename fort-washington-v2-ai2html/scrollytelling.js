//step 1 code
d3.select("#step-one").on('stepin',
function(e){
  console.log("We have ARRIVED at step one");
  d3.select("#sl-icon").style('fill','green')
})

//step 2 code
d3.select("#step-two").on('stepin',
function(e){
  console.log("We have ARRIVED at step two");
  d3.select("#texas").style('fill','green')
  d3.select("#florida").style('fill','green')
})

d3.select("#step-two").on('stepout',
function(e){
  console.log("We have LEFT step two");
  d3.select("#texas").style('fill','purple')
  d3.select("#florida").style('fill','purple')
})

d3.select("#step-three").on('stepin',
function(e){
  console.log("We have ENTERED step three");
  d3.select("#sl-icon").style('fill','teal')
  d3.select("#florida").style('fill','teal')
})