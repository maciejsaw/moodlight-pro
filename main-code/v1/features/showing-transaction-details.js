QueryStringRouter.onParamChange('transactionId', function(value) {
	if (typeof value !== 'undefined') {

		transactionData = ReactiveLocalStorage.findInArrayXObjectWithIdY('transactionsInProgressList', 'id', value);

		if (typeof transactionData !== 'undefined') {
			var dataBindingTextMapping = {
				'transaction-data__date-submitted': transactionData.dateSubmitted,
				'transaction-data__id': transactionData.id,
				'transaction-data__input-amount': transactionData.inputAmount,
				'transaction-data__input-currency': transactionData.inputCurrency,
			}

			$.each(dataBindingTextMapping, function(objectKey, objectValue) {
				$('[data-bind="'+objectKey+'"]').text(objectValue);
			});	
		}

	}
});

ReactiveLocalStorage.onParamChange('transactionsInProgressList', function(value) {
	QueryStringRouter.retriggerOnParamChange('transactionId');
});