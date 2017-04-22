ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
	if (value === 'started') {
		$('body').fullscreen();
	}
});		