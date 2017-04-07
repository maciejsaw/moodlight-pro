ReactiveLocalStorageDataBindArrayList('transactionsInProgressList', function($elementToAppend, elementData) {
	if (elementData.status === 'pending') {
		$elementToAppend.find('[data-bind="status__is-pending"]').removeClass('is-hidden');
	} else {
		$elementToAppend.find('[data-bind="status__is-pending"]').addClass('is-hidden');
	}

	if (elementData.status === 'waiting-for-acceptance') {
		$elementToAppend.find('[data-bind="status__waiting-for-acceptance"]').removeClass('is-hidden');
	} else {
		$elementToAppend.find('[data-bind="status__waiting-for-acceptance"]').addClass('is-hidden');
	}

	var dataBindingTextMapping = {
		"transaction-number": elementData.id,
		"date-submitted": elementData.dateSubmitted,
		"input-amount": elementData.inputAmount,
		"input-currency": elementData.inputCurrency,
	};

	$.each(dataBindingTextMapping, function(index, value) {
		$elementToAppend.find('[data-bind="'+index+'"]').text(value);
	});

	//TODO: possible problem: namespacing of data-bind
});

$(document).on('click', '[action-show-transaction-details]', function(event) {
	var elementTransactionId = $(this).closest('[id]').attr('id');
	QueryStringRouter.setParam('transactionId', elementTransactionId);
	QueryStringRouter.setParam('subpage', 'transaction-details', {doNotCreateHistoryState: true});
});