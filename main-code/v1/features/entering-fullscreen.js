//this will automatically go into fullscreen mode whenever play is triggered
ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
	if (value === 'started') {
		$('body').fullscreen();
		enterFullscreenMode(); //also hides the menu
	}
});		

