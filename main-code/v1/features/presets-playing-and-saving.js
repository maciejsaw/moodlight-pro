ReactiveLocalStorage.setDefaultParam('listOfPresets', [
	{
		id: 'default1',
		name: "Strobe",
		multiplyFactor: 1,
		color__1: 'white',
		color__2: 'black',
		color__3: 'null',
		color__4: 'null',
		blendingColors: 'false'
	}
]);

ReactiveLocalStorageDataBindArrayList('listOfPresets', function($elementToAppend, elementData) {
	//callback what to do with each item
	//so you can modify each of then depending on state,

	console.log(elementData);
	$elementToAppend.find('[js-selector="preset-name"]').val(elementData.name);
});

$(document).on('click', '[action-play-preset]', function() {
	var presetId = $(this).closest('[id]').attr('id');
	console.log(presetId);
});

function playPresetById(presetId) {
	var presetData = ReactiveLocalStorage.findInArrayXObjectWithIdY('listOfPresets', presetId);
	ReactiveLocalStorage.setParam('col')

	//for each value in preset different than id, set the global state for their value
	$.each(presetData, function(key, value) {
		if (key !== 'id') {
			ReactiveLocalStorage.setParam(key, value);
		}
	});
}

