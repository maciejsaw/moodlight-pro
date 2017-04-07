$(document).on('click', '[action-confirm-transaction-cancel-prompt]', function() {
	goToMyTransactions();
	var currentlyVisibleTransactionId = QueryStringRouter.getParam('transactionId');
	endpoint__removeTransaction(currentlyVisibleTransactionId);
});

$(document).on('click', '[action-cancel-transaction]', function() {
	QueryStringRouter.setParam('modalContent', 'prompt-cancel-transaction');
});

function endpoint__removeTransaction(transactionId) {

	ReactiveLocalStorage.removeElementFromArrayXWithIdY('transactionsInProgressList', transactionId);

	var response = {
		//
	};

	return response;
}