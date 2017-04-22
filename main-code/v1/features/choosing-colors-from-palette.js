var colorsPaletteTable = [
	'yellow',
	'pink',
	'aqua',
];

function appendColorToDropdowns(colorName) {
	var $dropdownChoiceTemplate = $('[color-choice-template]');
	var $dropdownChosenTemplate = $('[color-chosen-template]');
	var $dropdownChoicesToAppendTo = $('.colors-dropdown').find('.bem-select-dropdown__list.for-color-picker');
	var $dropdownChosenItemsToAppendTo = $('.colors-dropdown').find('.bem-select-dropdown__button.for-color-icon');

	var $newDropdownChoice = $dropdownChoiceTemplate.clone().find('.color-symbol-icon').css('background-color', colorName);
	var $newDropdownChosen = $dropdownChosenTemplate.clone().find('.color-symbol-icon').css('background-color', colorName);

	$dropdownChosenItemsToAppendTo.append($newDropdownChosen);
	$dropdownChoicesToAppendTo.append($newDropdownChoice);
}

$.each(colorsPaletteTable, function(arrayIndex, arrayValue) {
	//
});