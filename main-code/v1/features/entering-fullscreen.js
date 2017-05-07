//this will automatically go into fullscreen mode whenever play is triggered
ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
	if (value === 'started') {

		if (typeof window._cordovaNative === 'undefined') {
			$('.body-wrapper').fullscreen();
			console.log('enter fullscreen browser mode');
		}
		
		setTimeout(function() {
			enterFullscreenMode(); //also hides the menu
		}, 1000);
	}
});