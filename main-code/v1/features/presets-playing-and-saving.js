ReactiveLocalStorage.setDefaultParam('listOfPresets', [
	{
		id: 'default1',
		name: "Strobe",
		tempoMultiplyFactor: 1,
		color__1: 'white',
		color__2: 'black',
		color__3: 'null',
		color__4: 'null',
		color__5: 'null',
		color__6: 'null',
		color__7: 'null',
		color__8: 'null',
		color__9: 'null',
		color__10: 'null',
		color__11: 'null',
		color__12: 'null',
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
		color__5: 'null',
		color__6: 'null',
		color__7: 'null',
		color__8: 'null',
		color__9: 'null',
		color__10: 'null',
		color__11: 'null',
		color__12: 'null',
		blendingColors: 'true'
	},
	{
		id: 'default3',
		name: "Slow purple",
		tempoMultiplyFactor: 0.5,
		color__1: 'MediumPurple',
		color__2: 'MidnightBlue',
		color__3: 'null',
		color__4: 'null',
		color__5: 'null',
		color__6: 'null',
		color__7: 'null',
		color__8: 'null',
		color__9: 'null',
		color__10: 'null',
		color__11: 'null',
		color__12: 'null',
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
	var blend = ReactiveLocalStorage.getParam('blendingColors');

	if (blend === 'true') {
		blend = 'blend';
	} else {
		blend = '';
	}

	var resultName = color1+" "+color2+" "+blend+" @x"+factor;

	return resultName;
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
		color__5: ReactiveLocalStorage.getParam('color__5'),
		color__6: ReactiveLocalStorage.getParam('color__6'),
		color__7: ReactiveLocalStorage.getParam('color__7'),
		color__8: ReactiveLocalStorage.getParam('color__8'),
		color__9: ReactiveLocalStorage.getParam('color__9'),
		color__10: ReactiveLocalStorage.getParam('color__10'),
		color__11: ReactiveLocalStorage.getParam('color__11'),
		color__12: ReactiveLocalStorage.getParam('color__12'),
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

QueryStringRouter.onParamChange('startPreset', function(value) {
	if (typeof value !== 'undefined') {
		console.log("Starting preset "+value);
		setTimeout(function() {
			playPresetById(value);
		}, 1000);
	}
});

