function ReactiveLocalStorageOnParamChangeShowElementsOnlyWhenParamXEqualsY(param, paramValue) {
	ReactiveLocalStorage.onParamChange(param, function(value) {
		if (value === paramValue) {
		    $('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		    $('[show-when-'+param+'='+paramValue+']').removeClass('is-hidden');
		} else {
			$('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		}
	});
}

