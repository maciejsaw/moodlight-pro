/*   
Based on xternal script
//https://github.com/livejs/tap-tempo/blob/master/index.js 
*/

// var TapTempo = (function(){
//   var tapTempo;
//   var timeout = 2000;
//   var times = [];

//   var lastTime = null;
//   var lastDifference = null;

//   var tap = function(){
//     var time = Date.now()
//     if (lastTime){
//       lastDifference = time - lastTime
//       times.push(lastDifference)
//       refresh()
//     }
//     lastTime = time
//     beginTimeout()
//     $(document).trigger('tap');
//   }

//   var refresh = function(){
//     if (times.length > 2){
//       var average = times.reduce(function(result, t){ return result += t }) / times.length
//       var bpm = (1 / (average / 1000)) * 60;
//       $(document).trigger('tempoSetByTapping', bpm/2);
//     }
//   }

//   var timer = null
//   var beginTimeout = function(){
//     clearTimeout(timer)
//     timer = setTimeout(function(){
//       times = [lastDifference]
//       lastTime = null
//     }, timeout)
//   }

//   return {
//     tap: tap 
//   }
// })();

var TapTempo = (function(){

  var listOfTapDates = [];
  var listOfTapsDelays = [];

  var pushDate = function() {
    listOfTapsTimes.push(Date.now());
  };

  var pushDelay = function() {
    $.each(listOfTapDates, function(index, value) {
      if (index > 1) {
        var thisTapDate = value;
        var previousTapDate = listOfTapDates[index - 1];
        var delayAfterPreviousTap = thisTapDate - previousTapDate;

        listOfTapsDelays.push(delayAfterPreviousTap);
      }
    });
  };  

  var getAvgFromArray = function(grades) {
    var sum = grades.reduce(function (p, c) {
      return p + c;
    });

    var avg = sum / grades.length;

    return avg;
  }

  var calculateResultBpm = function() {
    var averageDelayBetweenTaps = getAvgFromArray(listOfTapsDelays);
    var numberOfMillisecondsInMinute = 60000;
    var resultBpm = numberOfMillisecondsInMinute/averageDelayBetweenTaps();
    return resultBpm;
  }

  var triggerCalculation = function() {
    pushDate();

    if (listOfTapDates.length > 1) {
      pushDelay();
      var resultBpm = calculateResultBpm();
      $(document).trigger('tempoSetByTapping', resultBpm)
    }
  }

  return {
    triggerCalculation: triggerCalculation
  }

})();

/* End of external script */

$(document).on('click', '[action-tap-tempo]', function() {
  TapTempo.triggerCalculation();
});

$(document).on('tempoSetByTapping', function(event, bpm) {
  console.log(bpm);
  ReactiveLocalStorage.setParam('tempo', bpm);
});
