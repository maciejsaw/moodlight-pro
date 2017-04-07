ReactiveLocalStorage.setDefaultParam('blendingColors', 'false');

ReactiveLocalStorage.onParamChange('blendingColors', function(value) {
	if (value == 'true') {
		$('.main-visualisations__fullscreen-color').addClass('is-blended');
	} else {
		$('.main-visualisations__fullscreen-color').removeClass('is-blended');
	}
});

function toggleColorBlending() {
	var currentState = ReactiveLocalStorage.getParam('blendingColors');
	if (currentState == 'true') {
		ReactiveLocalStorage.setParam('blendingColors', 'false');
	} else {
		ReactiveLocalStorage.setParam('blendingColors', 'true');
	}
}