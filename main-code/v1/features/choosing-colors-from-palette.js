var colorsPaletteTable = [
	'pink',
	'DeepPink',
	'PaleVioletRed',
	'MediumVioletRed',
	'LightCoral',
	'Crimson',
	'FireBrick'
	'DarkRed'
	'OrangeRed',
	'Tomato',
	'Coral',
	'DarkOrange',
	'Orange',
	'yellow'
];

function appendColorToDropdowns(colorName) {
	var $dropdownChoiceTemplate = $('[color-choice-template]').first();
	var $dropdownChosenTemplate = $('[color-chosen-template]').first();
	var $dropdownChoicesToAppendTo = $('.colors-dropdown').find('.bem-select-dropdown__list.for-color-picker');
	var $dropdownChosenItemsToAppendTo = $('.colors-dropdown').find('.bem-select-dropdown__button.for-color-icon');

	var $newDropdownChoice = $dropdownChoiceTemplate.clone();
	$newDropdownChoice.attr('choice-value', colorName).find('.color-symbol-icon').css('background-color', colorName);
	
	var $newDropdownChosen = $dropdownChosenTemplate.clone();
	$newDropdownChosen.addClass('is-hidden').attr('chosen-value', colorName).find('.color-symbol-icon').css('background-color', colorName);

	$dropdownChosenItemsToAppendTo.append($newDropdownChosen);
	$dropdownChoicesToAppendTo.append($newDropdownChoice);
}

$.each(colorsPaletteTable, function(arrayIndex, arrayValue) {
	appendColorToDropdowns(arrayValue);
});