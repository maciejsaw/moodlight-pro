var globalTempoInterval;

ReactiveLocalStorage.setDefaultParam('tempo', '128');


function startChangingColors() {

	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoInMilliseconds = 60000/tempo

	var colorsOrder = [
		'white',
		'black'
	];
	
	var colorIndex = 0; 
	clearInterval(globalTempoInterval);
	globalTempoInterval = setInterval(function() {
		var colorToSet = colorsOrder[colorIndex];
		$('.main-visualisations__fullscreen-color').css('background-color', colorToSet);
		colorIndex = colorIndex + 1;
		if (colorIndex >= colorsOrder.length) {
			colorIndex = 0;
		}
	}, tempoInMilliseconds)

}

function stopChangingColors() {
	clearInterval(globalTempoInterval);
	$('.main-visualisations__fullscreen-color').attr('style', '');
}

ReactiveLocalStorage.onParamChange('tempo', function(value) {
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		var tempo = value;
		startChangingColorsWithTempo(colorsOrder, tempo);
	}
});