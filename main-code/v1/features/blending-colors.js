ReactiveLocalStorage.setDefaultParam('blendingColors', 'false');

ReactiveLocalStorage.onParamChange('blendingColors', function(value) {

	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoInMilliseconds = 60000/tempo;

	if (value == 'true') {
		$('.main-visualisations__fullscreen-color').addClass('is-blended')
		.css('transition', 'background-color '+tempoInMilliseconds+'ms');
	} else {
		$('.main-visualisations__fullscreen-color').removeClass('is-blended');
	}
});