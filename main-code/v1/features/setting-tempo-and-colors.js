var globalTempoInterval;

ReactiveLocalStorage.setDefaultParam('tempo', '128');
ReactiveLocalStorage.setDefaultParam('color__1', 'white');
ReactiveLocalStorage.setDefaultParam('color__2', 'black');
ReactiveLocalStorage.setDefaultParam('color__3', 'null');
ReactiveLocalStorage.setDefaultParam('color__4', 'null');
ReactiveLocalStorage.setDefaultParam('tempoMultiplyFactor', '1');

function getTempoIntervalInMilliseconds() {
	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoMultiplyFactor = ReactiveLocalStorage.getParam('tempoMultiplyFactor');
	var tempoInMilliseconds = (60000/tempo)/tempoMultiplyFactor;
	return tempoInMilliseconds;
}

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
		var color = ReactiveLocalStorage.getParam('color__'+arrayValue);
		if (typeof color !== 'undefined' && color !== 'null') {
			resultColorsTable.push(color);
		}
	});

	console.log(resultColorsTable);
	return resultColorsTable;
}

function startChangingColors() {

	var tempoIntervalInMilliseconds = getTempoIntervalInMilliseconds();
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
	}, tempoIntervalInMilliseconds )

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

ReactiveLocalStorage.onParamChange('tempoMultiplyFactor', function(value) {
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		startChangingColors();
	}
});

function onColorChangeWhenStarted(callbackFunction) {
	$.each(colorIndexesInReactiveLocalStorage, function(arrayIndex, arrayValue) {
		ReactiveLocalStorage.onParamChange('color__'+arrayValue+'', function(value) {
			if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
				callbackFunction(value);
			}
		});
	});
}

onColorChangeWhenStarted(function() {
	startChangingColors();
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
	var currentFactor = ReactiveLocalStorage.getParam('tempoMultiplyFactor');
	var updatedFactor = currentFactor*factor;
	ReactiveLocalStorage.setParam('tempoMultiplyFactor', updatedFactor);
}

function divideTempo(factor) {
	var currentFactor = ReactiveLocalStorage.getParam('tempoMultiplyFactor');
	var updatedFactor = currentFactor/factor;
	ReactiveLocalStorage.setParam('tempoMultiplyFactor', updatedFactor);
}

$(document).on('click', '[action-tempo-multiply-2]', function() {
	multiplyTempo(2);
});

$(document).on('click', '[action-tempo-divide-2]', function() {
	divideTempo(2);
});

$(document).on('click', '[action-tempo-multiply-4]', function() {
	multiplyTempo(4);
});

$(document).on('click', '[action-tempo-divide-4]', function() {
	divideTempo(4);
});