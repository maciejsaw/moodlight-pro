var scriptsToLoad = [
	"https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/underscore-min.js",
	"https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/uuid.js",
	"https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/jquery.transit.min.js",
	"https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/tooltipster/tooltipster.bundle.min.js",
	"https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/mini-meteor.min.js",
	"https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/jquery-deparam.js",
	"https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/jquery.scrollTo.min.js",
	"https://maciejsaw.github.io/moodlight-pro/general-custom-js/query-string-router.js",
	"https://maciejsaw.github.io/moodlight-pro/general-custom-js/reactiveLocalStorage.js",
	"https://maciejsaw.github.io/moodlight-pro/general-custom-js/WebflowCustomCode.js",
	"https://maciejsaw.github.io/moodlight-pro/general-custom-js/transitions-functions-wrapper.js",
	"https://maciejsaw.github.io/moodlight-pro/general-custom-js/supersimple-extensible-function.js",
	"https://maciejsaw.github.io/moodlight-pro/general-custom-js/ensureAlignmentOfTableWithInnerScroll.js",
	"https://maciejsaw.github.io/moodlight-pro/main-code/v1/general/routes.js", 
	"https://maciejsaw.github.io/moodlight-pro/general-framework/tooltipster-for-webflow.js",
	"https://maciejsaw.github.io/moodlight-pro/general-framework/modals.js",
	"https://maciejsaw.github.io/moodlight-pro/general-framework/select-dropdowns-with-state.js",
	"https://maciejsaw.github.io/moodlight-pro/general-framework/input-fields-binded-to-reactive-local-storage.js",
	"https://maciejsaw.github.io/moodlight-pro/general-framework/checkboxes-binded-to-reactive-local-storage.js",
	"https://maciejsaw.github.io/moodlight-pro/general-framework/data-binding-and-data-lists.js",
	"https://maciejsaw.github.io/moodlight-pro/general-framework/initial-preloading.js", //preloading needs to be after other framework files
	"https://maciejsaw.github.io/moodlight-pro/main-code/v1/features/setting-tempo-and-colors.js",
	"https://maciejsaw.github.io/moodlight-pro/main-code/v1/features/starting-and-stopping.js",
	"https://maciejsaw.github.io/moodlight-pro/main-code/v1/features/auto-hiding-menu.js",
	"https://maciejsaw.github.io/moodlight-pro/main-code/v1/features/blending-colors.js",
	"https://maciejsaw.github.io/moodlight-pro/main-code/v1/features/key-shortcuts.js",
]; 

https://maciejsaw.github.io/moodlight-pro/main-code/v1

scriptsToLoad.forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
});
