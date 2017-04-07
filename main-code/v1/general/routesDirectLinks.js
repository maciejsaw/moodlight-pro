/*
DON'T USE JQUERY HERE, AS ITS NOT LOADED YET
*/

/* Redirect links before rendering the page.
We can redirect to query string to trigger an action on the main app
or we can set persistent localStorage flag that will be checked on load on the main app
to set app states, for example to show or hide some sections for admin or regular user etc.
*/

var currentUrl = window.location.pathname;

/*

EXAMPLE:

var reg = /\/files\/.+/g;
var reg2 = /\/mytasks\/.+/g;
var reg3 = /\/search/g;
if ( reg.test(currentUrl) || reg2.test(currentUrl) || reg3.test(currentUrl)) {
    window.location.pathname = '/';
}

if (currentUrl === "/onboarding-route") {
	localStorage.clear()
	  
	setTimeout(function() {
		location.href = "/?folderPath=%2Ffiles%2Ffinance&onboarding=true";
	}, 200);
}

*/






