ReactiveLocalStorage.setDefaultParam('blendingColors', 'true');

ReactiveLocalStorage.onParamChange('blendingColors', function(value) {

	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoInvervalInMilliseconds = getTempoIntervalInMilliseconds();

	if (value == 'true') {
		$('.main-visualisations__fullscreen-color').addClass('is-blended')
		.css('transition', 'background-color '+tempoInvervalInMilliseconds+'ms');
	} else {
		$('.main-visualisations__fullscreen-color').removeClass('is-blended')
		.css('transition', 'none');
	}
});

ReactiveLocalStorage.onParamChange('tempo', function(value) {
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		ReactiveLocalStorage.retriggerOnParamChange('blendingColors');
	}
});