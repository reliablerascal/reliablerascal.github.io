



////////////////////////////////////////////////////////////
//                                                        //
//            DEFINE BUTTONS                              //
//                                                        //
////////////////////////////////////////////////////////////

          //buttons for interaction
          d3.select('button#btnEnableSound')
            .on('click', initSound)
          d3.select('button#btnShowGrid')
            .on('click', showGrid)
          d3.select('button#btnShowForecast')
            .on('click', showForecast)
          d3.select('button#btnPlayForecast')
            .on('click', playForecast)
          

        //buttons for sound testing
          //d3.select('button#btn1')
          //  .on('click', playChord1)
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



          //buttons for forecast legend
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