var globalTempoInterval;

ReactiveLocalStorage.setDefaultParam('tempo', '128');

function startChangingColors() {

	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoInMilliseconds = 60000/tempo

	var getColor = function(colorIndex) {
		var color = ReactiveLocalStorage.getParam('color__'+colorIndex);
		if (typeof color !== 'undefined') {
			return color;
		} else {
			return null;
		}
	}

	var colorsOrder = [
		getColor(1);
		getColor(2);
		getColor(3);
		getColor(4);
	];
	
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