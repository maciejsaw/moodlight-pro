$(document).on('click', '[action-confirm-order]', function() {
	QueryStringRouter.setParam('modalContent', 'fill-in-personal-data');
});

$(document).on('click', '[action-cancel-confirm-order]', function() {
	QueryStringRouter.setParam('subpage', 'via-transfer');
});

QueryStringRouter.onParamChange('subpage', function(value) {
	if (value === 'confirm-order' || value === 'transaction-received') {
		hideTabBarsForCheckOutFlow();
	} else {
		showTabBarAfterExitFromChecktouFlow();
	}
});

function endpoint__submitTransaction(objectWithTransactionData) {

	function getRandomNumber(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var transactionData = {
		id: getRandomNumber(322334, 434323),
		dateSubmitted: "17 kwietnia",
		status: "pending",
		buyOrSell: objectWithTransactionData.buyOrSell,
		inputAmount: objectWithTransactionData.inputAmount,
		inputCurrency: objectWithTransactionData.inputCurrency,
		outputAmount: objectWithTransactionData.outputAmount,
		outputAmount: objectWithTransactionData.outputCurrency,
	}

	ReactiveLocalStorage.appendToBeginningOfTheArray('transactionsInProgressList', transactionData);

	var response = {
		id: transactionData.id,
	};

	return response;
}

function submitViaTransferTransaction() {
	var response = endpoint__submitTransaction({
		inputAmount: ReactiveLocalStorage.getParam('via-transfer__input-amount'),
		inputCurrency: ReactiveLocalStorage.getParam('via-transfer__input-currency'),
		outputAmount: ReactiveLocalStorage.getParam('via-transfer__output-amount'),
		outputCurrency: ReactiveLocalStorage.getParam('via-transfer__output-currency'),
		buyOrSell: ReactiveLocalStorage.getParam('via-transfer__buy-or-sell'),
	});

	QueryStringRouter.setParam('subpage', 'transaction-received', {doNotCreateHistoryState: true});
	QueryStringRouter.setParam('transactionId', response.id, {doNotCreateHistoryState: true});
}

