ReactiveLocalStorage.setDefaultParam('tempo', '128');

var colorsOrder = [
	'red',
	'white',
	'black'
];

function startChangingColorsWithTempo(colorsOrder, tempo) {

	var colorIndex = 0; 
	var tempo = 60000/ReactiveLocalStorage.getParam('tempo');

	setInterval(function() {
		var colorToSet = colorsOrder[colorIndex];
		$('.main-visualisations__fullscreen-color').css('background-color', colorToSet);
		colorIndex = colorIndex + 1;
	}, tempo)

}