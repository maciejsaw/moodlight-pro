var colorsPaletteTable = [
	'yellow',
	'pink',
	'aqua',
];

function appendColorToDropdowns(colorName) {
	var $dropdownChoiceTemplate = $('[color-choice-template]').first();
	var $dropdownChosenTemplate = $('[color-chosen-template]').first();
	var $dropdownChoicesToAppendTo = $('.colors-dropdown').find('.bem-select-dropdown__list.for-color-picker');
	var $dropdownChosenItemsToAppendTo = $('.colors-dropdown').find('.bem-select-dropdown__button.for-color-icon');

	var $newDropdownChoice = $dropdownChoiceTemplate.clone();
	$newDropdownChoice.find('.color-symbol-icon').css('background-color', colorName);
	
	var $newDropdownChosen = $dropdownChosenTemplate.clone();
	$newDropdownChosen.find('.color-symbol-icon').css('background-color', colorName).addClass('is-hidden');

	$dropdownChosenItemsToAppendTo.append($newDropdownChosen);
	$dropdownChoicesToAppendTo.append($newDropdownChoice);
}

$.each(colorsPaletteTable, function(arrayIndex, arrayValue) {
	//////
});