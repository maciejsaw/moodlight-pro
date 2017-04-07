$(document).on('click', '[action-start]', function() {
	startChangingColorsWithTempo(colorsOrder, tempo);
});

$(document).on('click', '[action-stop]', function() {
	stopChangingColors();
});