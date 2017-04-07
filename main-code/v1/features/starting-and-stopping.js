$(document).on('click', '[action-start]', function() {
	ReactiveLocalStorage.setParam('startedOrStopped', 'started');
});

$(document).on('click', '[action-stop]', function() {
	ReactiveLocalStorage.setParam('startedOrStopped', 'stopped');
});

ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
	if (value === 'started') {
		startChangingColorsWithTempo(colorsOrder, tempo);
	} else {
		stopChangingColors();
	}
});