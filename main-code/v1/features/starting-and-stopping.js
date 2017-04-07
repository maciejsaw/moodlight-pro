$(document).on('click', '[action-start]', function() {
	ReactiveLocalStorage.setParam('startedOrStopped', 'started');
});

$(document).on('click', '[action-stop]', function() {
	ReactiveLocalStorage.setParam('startedOrStopped', 'stopped');
});

ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
	if (value === 'started') {
		startChangingColors();
		$('[action-start]').addClass('is-hidden');
		$('[action-stop]').removeClass('is-hidden');
	} else {
		stopChangingColors();
		$('[action-start]').removeClass('is-hidden');
		$('[action-stop]').addClass('is-hidden');
	}
});

