$(document).on('click', '[action-expand-personal-data-form-info]', function() {
	if ( ReactiveLocalStorage.getParam('personal-data-form__help-text-expanded') === 'true') {
		ReactiveLocalStorage.removeParam('personal-data-form__help-text-expanded');
	} else {
		ReactiveLocalStorage.setParam('personal-data-form__help-text-expanded', 'true');
	}
});

ReactiveLocalStorage.onParamChange('personal-data-form__help-text-expanded', function(value) {
	if (value === 'true') {
		$('[js-selector="personal-data-form__expanded-help-box"]').removeClass('is-collapsed');
		$('.font-icon.in-personal-data-form-more-details').addClass('is-flipped');
	} else {
		$('[js-selector="personal-data-form__expanded-help-box"]').addClass('is-collapsed');
		$('.font-icon.in-personal-data-form-more-details').removeClass('is-flipped');
	}
});

$(document).on('click', '[action-continue-in-personal-data-form]', function() {
	submitViaTransferTransaction();
});

ReactiveLocalStorage.onParamChange('personal-data-form__id-without-expiration', function(value) {
	if (value === 'true') {
		$('.personal-data-form__expiry-inputs').addClass('is-hidden');
	} else {
		$('.personal-data-form__expiry-inputs').removeClass('is-hidden');
	}
});

ReactiveLocalStorage.onParamChange('personal-data-form__pesel', function(value) {
	if (typeof value !== 'undefined') {
		var parsedPESEL = value.substring(0,6);
		console.log(parsedPESEL);
		var lastDayWhenPeopleCanGetIdWithoutExpiration = 500228;
		if (parsedPESEL < lastDayWhenPeopleCanGetIdWithoutExpiration) {
			$('.personal-data-form__id-without-expiration-checkbox').removeClass('is-hidden');
		} else {
			$('.personal-data-form__id-without-expiration-checkbox').addClass('is-hidden');
		}

		if (parsedPESEL == "") {
			$('.personal-data-form__id-without-expiration-checkbox').addClass('is-hidden');
		}
	} else {
		$('.personal-data-form__id-without-expiration-checkbox').addClass('is-hidden');
	}
});

