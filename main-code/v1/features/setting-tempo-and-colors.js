var globalTempoInterval;

ReactiveLocalStorage.setDefaultParam('tempo', '128');

//we have a defined number of colors slots, each stored in separate state
var colorIndexesInReactiveLocalStorage = [
	1,
	2,
	3,
	4,
];

function getColors() {

	//we filter the stored state colors and leave only values
	var resultColorsTable = [];

	$.each(colorIndexesInReactiveLocalStorage, function(arrayIndex, arrayValue) {
		var color = ReactiveLocalStorage.getParam('color__'+arrayIndex);
		if (typeof color !== 'undefined' && color !== 'null') {
			resultColorsTable.push(color);
		}
	});

	return resultColorsTable;
}

function startChangingColors() {

	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoInMilliseconds = 60000/tempo

	var colorsOrder = getColors();	
	var colorIndex = 0; 

	var changeToNextColor = function() {
		var colorToSet = colorsOrder[colorIndex];
		$('.main-visualisations__fullscreen-color').css('background-color', colorToSet);
		colorIndex = colorIndex + 1;
		if (colorIndex >= colorsOrder.length) {
			colorIndex = 0;
		}
	};

	changeToNextColor();

	clearInterval(globalTempoInterval);
	globalTempoInterval = setInterval(function() {
		changeToNextColor()
	}, tempoInMilliseconds)

}

function stopChangingColors() {
	clearInterval(globalTempoInterval);
	$('.main-visualisations__fullscreen-color').attr('style', '');
}

ReactiveLocalStorage.onParamChange('tempo', function(value) {
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		startChangingColors();
	}
});

//updating colors when changing them
$.each(colorIndexesInReactiveLocalStorage, function(arrayIndex, arrayValue) {
	ReactiveLocalStorage.onParamChange('color__'+arrayValue+'', function(value) {
		if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
			startChangingColors();
		}
	});
});

//validating tempo input?
ReactiveLocalStorage.onParamChange('tempo', function(value) {
	//if user enteres wrong tempo, we reset to 128
	//TODO: show error below input
	if (isNaN(value)) {
		console.error('Tempo is not a number');
		ReactiveLocalStorage.setParam('tempo', '128');
	}
});

function multiplyTempo(factor) {
	var currentTempo = ReactiveLocalStorage.getParam('tempo');
	var updatedTempo = currentTempo*factor;
	ReactiveLocalStorage.setParam('tempo', updatedTempo);
}

function divideTempo(factor) {
	var currentTempo = ReactiveLocalStorage.getParam('tempo');
	var updatedTempo = currentTempo/factor;
	ReactiveLocalStorage.setParam('tempo', updatedTempo);
}

$(document).on('click', '[action-tempo-multiply-2]', function() {
	multiplyTempo(2);
});

$(document).on('click', '[action-tempo-divide-2]', function() {
	divideTempo(2);
});