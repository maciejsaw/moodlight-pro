ReactiveLocalStorage.setDefaultParam('listOfPresets', [
	{
		id: 'default1',
		name: "Strobe",
		tempoMultiplyFactor: 1,
		color__1: 'white',
		color__2: 'black',
		color__3: 'null',
		color__4: 'null',
		blendingColors: 'false'
	},
	{
		id: 'default2',
		name: "Emergency",
		tempoMultiplyFactor: 1,
		color__1: 'red',
		color__2: 'blue',
		color__3: 'null',
		color__4: 'null',
		blendingColors: 'true'
	}
]);

ReactiveLocalStorageDataBindArrayList('listOfPresets', function($elementToAppend, elementData) {
	//callback what to do with each item
	//so you can modify each of then depending on state,

	console.log(elementData);
	$elementToAppend.find('[action-set-preset-name]').val(elementData.name);
});

$(document).on('click', '[action-play-preset]', function() {
	var presetId = $(this).closest('[id]').attr('id');
	playPresetById(presetId);
});

$(document).on('click', '[action-remove-preset]', function() {
	var presetId = $(this).closest('[id]').attr('id');
	console.log(presetId);
	removePresetById(presetId);
});

$(document).on('blur', '[action-set-preset-name]', function() {
	var presetId = $(this).closest('[id]').attr('id');
	console.log(presetId);
	var newName = $(this).val();
	updatePresetName(presetId, newName);
});

$(document).on('click', '[action-save-preset]', function() {
	savePreset();
});

function playPresetById(presetId) {
	var presetData = ReactiveLocalStorage.findInArrayXObjectWithIdY('listOfPresets', presetId);

	console.log(presetData);
	//for each value in preset different than id, set the global state for their value
	$.each(presetData, function(key, value) {
		if (key !== 'id') {
			ReactiveLocalStorage.setParam(key, value);
		}
	});

	ReactiveLocalStorage.setParam('startedOrStopped', 'started');
}

function removePresetById(presetId) {
	ReactiveLocalStorage.removeElementFromArrayXWithIdY('listOfPresets', presetId);
}

function getNewPresetName() {
	var color1 = ReactiveLocalStorage.getParam('color__1');
	var color2 = ReactiveLocalStorage.getParam('color__2');
	var factor = ReactiveLocalStorage.getParam('tempoMultiplyFactor');
	var resultName = nameToSet.color1+" "+nameToSet.color2+" @x"+nameToSet.factor;

	return resultName
}

function savePreset() {

	var currentStateToSave = {
		id: newUniqueId(),
		name: getNewPresetName(),
		tempoMultiplyFactor: ReactiveLocalStorage.getParam('tempoMultiplyFactor'),
		color__1: ReactiveLocalStorage.getParam('color__1'),
		color__2: ReactiveLocalStorage.getParam('color__2'),
		color__3: ReactiveLocalStorage.getParam('color__3'),
		color__4: ReactiveLocalStorage.getParam('color__4'),
		blendingColors: ReactiveLocalStorage.getParam('blendingColors'),
	};

	ReactiveLocalStorage.appendToArray('listOfPresets', currentStateToSave);
}

function updatePresetName(presetId, newName) {
	ReactiveLocalStorage.updateObjectInArray('listOfPresets', {
		findObjectWithId: presetId,
		propertyToUpdate: 'name',
		newValue: newName,
	});
}

