/* Notes about the convention used here
- subpages are main content views, like a separate subpage in the main card
- subpages are preloaded on page load into their containers
- Only one active subpage is shown at a time
- Tabs and subpages containers share the same id and are binded together this way
*/

//preload all views into respective containers
//until the subpages are loaded the UI is covered by loading overlay
//after they are preloaded, we retrigger the state of all components
//and fade in the UI to prevent flicker
//we can define for what specific events we wait until we show the UI, 
//for example we may want to preload not only subpages, but additional promo modals etc.


function initialLoadHtmlsubpages(callbackFunction) {
	var numberOfSubpagesToLoad = $('[subpage-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[subpage-id]').each(function() {
			var urlSlug = "/subpages";
		    var subpageToLoad = $(this).attr('subpage-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('subpagesReady');
				}
			});
		});	
	} else {
		$(document).trigger('subpagesReady');
	}

}

function initialLoadModalsContent(callbackFunction) {
	var numberOfSubpagesToLoad = $('[modal-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[modal-id]').each(function() {
			var urlSlug = "/modals";
		    var subpageToLoad = $(this).attr('modal-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('modalsReady');
				}
			});
		});	
	} else {
		$(document).trigger('modalsReady');
		console.log('modalsReady');
	}

}

function initialLoadComponents(callbackFunction) {
	var numberOfSubpagesToLoad = $('[component-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[component-id]').each(function() {
			var urlSlug = "/components";
		    var subpageToLoad = $(this).attr('component-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('componentsReady');
				}
			});
		});	
	} else {
		$(document).trigger('componentsReady');
		console.log('componentsReady');
	}
}

function waitForInitialAjaxLoadingToFinishThenShowUI(eventsToWaitFor, callbackFunction) {

	var numberOfEventsThatHappened = 0;

	$.each(eventsToWaitFor, function(index, value) {
		$(document).one(value, function() {
			numberOfEventsThatHappened = numberOfEventsThatHappened + 1;
			if (numberOfEventsThatHappened === eventsToWaitFor.length) {
				if (typeof callbackFunction === 'function') { callbackFunction(); };
			}
		});
	});
}

function initTheUIAfterPreloading() {
	QueryStringRouter.retriggerOnParamChangeForAll();
	ReactiveLocalStorage.retriggerOnParamChangeForAll();
	$('.initial-load-overlay').fadeOutAndHide(500);
	$(document).trigger('preloadingComplete');
	console.log('preloading complete');
}

//components should load after subapges and modals
waitForInitialAjaxLoadingToFinishThenShowUI([
	'modalsReady',
	'subpagesReady'
], function() {
	initialLoadComponents(function() {
		initTheUIAfterPreloading();
	});
});

//after all the load dependencies are defined, start loading modals and subpages simulataneously
initialLoadHtmlsubpages();
initialLoadModalsContent();

