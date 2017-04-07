//Main tabs
QueryStringRouter.onParamChange('mainTab', function(value) {
	if (typeof value != 'undefined') {
		$('[main-tab-id]').not('[main-tab-id="'+value+'"]').removeClass('is-current');
		$('[main-tab-id="'+value+'"]').addClass('is-current');

	    $('[secondary-navbar-id]').not('[secondary-navbar-id="'+value+'"]').addClass('is-hidden');
	    $('[secondary-navbar-id="'+value+'"]').removeClass('is-hidden');
	}
});

$(document).on('click', '[main-tab-id]', function(event) {
	var valueToSet = $(event.currentTarget).attr('main-tab-id');
	QueryStringRouter.setParam('mainTab', valueToSet);

	//clicking on tab should load the first subtab content
	var relatedSecondaryNavbarId = $(event.currentTarget).attr('main-tab-id');
	var firstSecondaryTab = $('[secondary-navbar-id="'+relatedSecondaryNavbarId+'"]').find('[secondary-tab-id]').first();
	var subpageId = firstSecondaryTab.attr('secondary-tab-id');
	console.log(subpageId);
	QueryStringRouter.setParam('subpage', subpageId, {doNotCreateHistoryState: true});
	QueryStringRouter.setParam('secondaryTab', subpageId, {doNotCreateHistoryState: true});

});

//Secondary nav tabs
QueryStringRouter.onParamChange('subpage', function(value) {
	if (typeof value != 'undefined') {
	    $('[subpage-id]').not('[subpage-id="'+value+'"]').addClass('is-hidden');
	    $('[subpage-id="'+value+'"]').removeClass('is-hidden');
	}
});

$(document).on('click', '[secondary-tab-id]', function(event) {
	var valueToSet = $(event.currentTarget).attr('secondary-tab-id');
	setTimeout(function() {
		QueryStringRouter.setParam('secondaryTab', valueToSet, {doNotCreateHistoryState: true});
	}, 1);
	QueryStringRouter.setParam('subpage', valueToSet);
});

QueryStringRouter.onParamChange('secondaryTab', function(value) {
	$('[secondary-tab-id]').not('[secondary-tab-id="'+value+'"]').removeClass('is-current');
	$('[secondary-tab-id="'+value+'"]').addClass('is-current');
});

function hideTabBarsForCheckOutFlow() {
	$('.secondary-navbar__tabbar').addClass('is-hidden');
	$('.main-navbar').addClass('is-hidden');
}

function showTabBarAfterExitFromChecktouFlow() {
	$('.main-navbar').removeClass('is-hidden');
	QueryStringRouter.retriggerOnParamChange('mainTab');
	QueryStringRouter.retriggerOnParamChange('secondaryTab');
}

function goToMyTransactions() {
	$('[main-tab-id="my-transactions"]').trigger('click');
}

$(document).on('click', '[action-go-to-my-transactions]', function(event) {
	goToMyTransactions();
});




