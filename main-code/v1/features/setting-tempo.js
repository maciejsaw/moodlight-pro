ReactiveLocalStorage.setDefaultParam('tempo', '128');

var colorsOrder = [
	'red',
	'white',
	'black'
];

var tempo = ReactiveLocalStorage.getParam('tempo');

function startChangingColorsWithTempo(colorsOrder, tempo) {

	var colorIndex = 0; 

	var tempoInMilliseconds = 60000/tempo

	setInterval(function() {
		var colorToSet = colorsOrder[colorIndex];
		$('.main-visualisations__fullscreen-color').css('background-color', colorToSet);
		colorIndex = colorIndex + 1;
		console.log(colorIndex);
		if (colorIndex >= colorsOrder.length) {
			colorIndex = 0;
		}
	}, tempoInMilliseconds)

}