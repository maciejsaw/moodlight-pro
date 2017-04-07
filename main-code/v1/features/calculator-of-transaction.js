ReactiveLocalStorage.setDefaultParam('via-transfer__output-amount', '100');
ReactiveLocalStorage.setDefaultParam('via-transfer__input-currency', 'PLN');

ReactiveLocalStorage.onParamChange('via-transfer__input-amount', function(value) {
	if (typeof value !== 'undefined') {
		$('[name="via-transfer__input-amount"]').val(value);
		calculateViaTransferOutputAmount(value, 4.25)
	}
});

ReactiveLocalStorage.onParamChange('via-transfer__output-amount', function(value) {
	if (typeof value !== 'undefined') {
		calculateViaTransferInputAmountBasedOnOutput(value, 4.25);
	}
});

function calculateViaTransferOutputAmount(inputAmount, exchangeRate) {
	var output = inputAmount/exchangeRate;
	output = +output.toFixed(2);
	$('[name="via-transfer__output-amount"]').val(output).trigger('input');
}

function calculateViaTransferInputAmountBasedOnOutput(outputAmount, exchangeRate) {
	var output = outputAmount*exchangeRate;
	output = +output.toFixed(2);
	$('[name="via-transfer__input-amount"]').val(output).trigger('blur');
}

$(document).on('click', '[action-continue-exchange]', function(event) {
	QueryStringRouter.setParam('subpage', 'confirm-order');
});

ReactiveLocalStorage.onParamChange('via-transfer__type-of-acceptance', function(value) {
	if (value === 'auto-advanced') {
		$('.via-transfer__advanced-options-section').removeClass('is-hidden');
	} else {
		$('.via-transfer__advanced-options-section').addClass('is-hidden');
	}
});

ReactiveLocalStorage.onParamChange('advanced-options__wait-for-exchange-rate', function(value) {
	if (value === 'true') {
		$('[js-selector="advanced-exchange-options__wait-until-form"]').removeClass('is-grayed-out');
	} else {
		$('[js-selector="advanced-exchange-options__wait-until-form"]').addClass('is-grayed-out');
	}
});


