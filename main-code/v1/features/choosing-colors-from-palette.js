var colorsPaletteTable = [
	'PowderBlue',
	'LightBlue',
	'LightSkyBlue',
	'DeepSkyBlue',
	'DodgerBlue',
	'SteelBlue',
	'MidnightBlue',
	'pink',
	'DeepPink',
	'PaleVioletRed',
	'MediumVioletRed',
	'LightCoral',
	'Crimson',
	'MediumPurple',
	'DarkMagenta',
	'Indigo',
	'DarkSlateBlue',
	'SlateBlue',
	'Azure',
	'AliceBlue',
	'Ivory',
	'Honeydew',
	'Silver',
	'DimGray',
	'LightSlateGray',
	'FireBrick',
	'DarkRed',
	'OrangeRed',
	'Tomato',
	'Coral',
	'DarkOrange',
	'Orange',
	'yellow',
	'PapayaWhip',
	'Gold',
	'Cornsilk',
	'RosyBrown',
	'Maroon',
	'BurlyWood',
	'LimeGreen',
	'SpringGreen',
	'LightGreen',
	'MediumSeaGree',
	'SeaGreen',
	'ForestGreen',
	'Cyan',
	'LightCyan',
	'Aquamarine',
	'Turquoise',
	'LightSeaGreen',
	'Teal',
	'LightSteelBlue',
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

ReactiveLocalStorage.retriggerOnParamChange('color__1');
ReactiveLocalStorage.retriggerOnParamChange('color__2');
ReactiveLocalStorage.retriggerOnParamChange('color__3');
ReactiveLocalStorage.retriggerOnParamChange('color__4');