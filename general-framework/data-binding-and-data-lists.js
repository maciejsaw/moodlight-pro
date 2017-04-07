/*
How to bind an array?
Add attributes to the DOM
- data-bind-array="paramWithArrayToBind"
- data-bind-repeatable-template="true"
 for the item that will repeat
- data-bind-array-empty-state="true" for empty state container

Then initialise the binding by function, do it in a separate file related to the specific feature
ReactiveLocalStorageDataBindArrayList('transactionsInProgressList', function($elementToAppend, elementData) {
	//callback what to do with each item
	//so you can modify each of then depending on state,

	console.log(elementData);
	if (elementData.status === 'pending') {
		$elementToAppend.find('[data-bind="status__is-pending"]').addClass('is-hidden');
	} else {
		$elementToAppend.find('[data-bind="status__is-pending"]').removeClass('is-hidden');
	}
});

*/


function ReactiveLocalStorageDataBindArrayList(paramNameWithArray, functionToModifyEachItemBeforeShowing) {

	//DON"T SET DEFAULT EMPTY ARRAY, BECAUSE THERE"S A BUG WITH $.PARAM IN REACTIVELOCALSTORAGE
	//ReactiveLocalStorage.setDefaultParam(paramNameWithArray, []);

	ReactiveLocalStorage.onParamChange(paramNameWithArray, function(value) {

		var $thisList = $('[data-bind-array="'+paramNameWithArray+'"]');

		//there might be more than one table binded to the same array, hence "each"
		$thisList.each(function(thisListIndex, thisListValue) {

			var $repeatableElementTemplate = $thisList.find('[data-bind-repeatable-template]').first();
			var $parentContainerWhereWeAppend = $repeatableElementTemplate.parent();

			//the template is stored in html, so we want to hide it and only use it later
			//as a tempalte source for repeatable items
			$repeatableElementTemplate.addClass('is-hidden'); 

			//empty the list before rerendering
			$thisList.find('[data-bind-repeatable-clone]').remove();

			if (typeof value !== 'undefined' && value.length !== 0 && !$.isEmptyObject(value) ) {
				$thisList.find('[data-bind-array-empty-state]').addClass('is-hidden');

				$.each(value, function(arrayIndex, arrayValue) {

					//prepare template
					var $elementToAppend = $repeatableElementTemplate.clone();
					$elementToAppend.removeAttr('data-bind-repeatable-template');
					$elementToAppend.attr('data-bind-repeatable-clone', 'true');

					//map object attributes as attributes to DOM
					//we need this to quickly reference respective object in ReactiveLocalStorage
					if (typeof arrayValue == 'object') {
						$.each(arrayValue, function(objectIndex, objectValue) {
							$elementToAppend.attr(objectIndex, objectValue);
						});
					}

					$elementToAppend.appendTo($parentContainerWhereWeAppend);

					$elementToAppend.showAndFadeIn(0, function() {
						//we pass the $elementToAppend to the function, so that we can 
						//refer to it from other places where we init the binding
						functionToModifyEachItemBeforeShowing($elementToAppend, arrayValue);
					});
				});
			} else {
				$thisList.find('[data-bind-array-empty-state]').removeClass('is-hidden');
			}

		});
	});
}

//use this to bind elements with attribute data-bind to selected reactive local storage params
function ReactiveLocalStorageDataBindText(objectWithAttrubiteValuePairs) {
	$.each(objectWithAttrubiteValuePairs, function(attribute, bidedParamValue) {
		ReactiveLocalStorage.onParamChange(bidedParamValue, function(value) {
			$('[data-bind="'+attribute+'"').text(value);
		})
	});
};



