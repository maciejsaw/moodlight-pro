/*   
Based on xternal script
//https://github.com/livejs/tap-tempo/blob/master/index.js 
*/

var TapTempo = function(){
  var tapTempo;
  var timeout = 2000;
  var times = [];

  var lastTime = null;
  var lastDifference = null;

  var tap = function(){
    var time = Date.now()
    if (lastTime){
      lastDifference = time - lastTime
      times.push(lastDifference)
      refresh()
    }
    lastTime = time
    beginTimeout()
    $(document).trigger('tap');
  }

  var refresh = function(){
    if (times.length > 2){
      var average = times.reduce(function(result, t){ return result += t }) / times.length
      var bpm = (1 / (average / 1000)) * 60
      $(document).trigger('tempoSetByTapping', bpm);
    }
  }

  var timer = null
  var beginTimeout = function(){
    clearTimeout(timer)
    timer = setTimeout(function(){
      times = [lastDifference]
      lastTime = null
    }, timeout)
  }

  return {
    tap: tap;  
  }
}

/* End of external script */

console.log(module.exports);

$(document).on('click', '[action-tap-tempo]', function() {
  TapTempo.tap();
});

$(document).on('tempoSetByTapping', function(event, bpm) {
  console.log(bpm);
  ReactiveLocalStorage.setParam('tempo', bpm);
});
