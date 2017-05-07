//this will automatically go into fullscreen mode whenever play is triggered
if (typeof window.cordova === 'undefined') {
	ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
		if (value === 'started') {
			$('.body-wrapper').fullscreen();
			setTimeout(function() {
				enterFullscreenMode(); //also hides the menu
			}, 1000);
		}
	});		
}