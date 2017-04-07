var globalTempoInterval;

ReactiveLocalStorage.setDefaultParam('tempo', '128');

var colorsOrder = [
	'white',
	'black'
];

function startChangingColorsWithTempo(colorsOrder, tempo) {

	var colorIndex = 0; 

	var tempoInMilliseconds = 60000/tempo

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