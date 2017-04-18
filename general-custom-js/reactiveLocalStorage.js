var ReactiveLocalStorage = (function() {

	var paramsString; //this will be a string containing params to save in local storage

	//at the beginning, check if params are stored in local storage
	if (typeof localStorage.getItem('paramsString') == 'undefined' || localStorage.getItem('paramsString') == null) {
		var paramsObject = {};
		saveParamObjectToLocalStorageAsString(paramsObject);
	} else {
		paramsString = localStorage.getItem('paramsString');
	}

	//each time this function is fired, the onParamChange (Meteor.run) functions will run, but only
	//the ones for which the value changed
	//this is used to 'transform' the static string into a reactive object after each update of the string param
	function saveParamObjectToLocalStorageAsString(paramsObject) {
		paramsString = $.param(paramsObject);
		localStorage.setItem('paramsString', paramsString);
	}

	function getParam(key) {
		//this return only values, not direct access to paramsObject
		//that's why we deparam here
		return deparam(paramsString)[key]; 
	}

	function getAllParams() {
		return deparam(paramsString);
	}

	function setParam(key, value, options) {
		options = options || {};

		var paramsObject = deparam(paramsString);

		if (paramsObject[key] !== value) {
			paramsObject[key] = value;
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged'); 
		}

	}

	function setDefaultParam(key, value) {
		var paramsObject = deparam(paramsString);

		if (typeof paramsObject[key] == 'undefined') {
			setParam(key, value); 
		}
	}

	function appendToBeginningOfTheArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.unshift(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function appendToArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.push(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function removeElementFromArrayXWithIdY(paramNameThatContainsArray, idThatShouldBeRemoved) {
		var array = getParam(paramNameThatContainsArray);

		array = $.grep(array, function(elementOfArray, indexInArray){
			return elementOfArray.id != idThatShouldBeRemoved;
		});

		setParam(paramNameThatContainsArray, array);
	}

	function updateObjectInArray(paramNameThatContainsArray, options) {
		var array = getParam(paramNameThatContainsArray);

		//this is to show the schema of options here in code
		var idToLookFor = options.findObjectWithId;
		var propertyToUpdate = options.propertyToUpdate;
		var newValue = options.newValue;

		$.grep(array, function(elementOfArray, indexInArray){
			if (elementOfArray['id'] === idToLookFor) {
				elementOfArray[propertyToUpdate] = newValue;
			}
		});

		setParam(paramNameThatContainsArray, array);
	}

	function findInArrayXObjectWithPropertyYMatchingZ(paramNameThatContainsArray, objectPropertyToSearchIn, propertyValueThatShouldMatch) {
		var array = getParam(paramNameThatContainsArray);

		if ($.isArray(array)) {
			var filteredData = $.grep(array, function(elementOfArray, indexInArray){
				return elementOfArray[objectPropertyToSearchIn] === propertyValueThatShouldMatch;
			});
			if (filteredData.length > 0) {
				return filteredData[0];
			} else {
				return [];
			}
		} else {
			return [];
		}

	}

	function findInArrayXObjectWithIdY(paramNameWithArray, idThatShouldMatch) {
		return findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, 'id', idThatShouldMatch);
	}

	function removeParam(key, options) {
		var paramsObject = deparam(paramsString);

		options = options || {};

		if (typeof paramsObject[key] !== 'undefined') {
			delete paramsObject[key];
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged'); 
		}
	}

	function setFreshParams(newParamsObj) {
		var paramsObject = deparam(paramsString);
		saveParamObjectToLocalStorageAsString(paramsObject);
		retriggerOnParamChangeForAll();
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction) {
		$(document).on('reactiveLocalStorage__'+key+'__paramChanged', function(event) {
			var paramsObject = deparam(paramsString);
			var value = paramsObject[key];
			actionFunction(value);
		});

		//store the action on param in a separate array, so that we can retrigger this route manually
		//because this might be needed for ajax loaded content etc.
		if (typeof actionsOnParamChange[key] === 'undefined') {
			actionsOnParamChange[key] = [];
		}
		actionsOnParamChange[key].push(actionFunction);

		//when the onParamChanged is defined, also retrigger the state
		retriggerOnParamChange(key);
	}

	function retriggerOnParamChange(key) {
		var paramsObject = deparam(paramsString);
		var param = paramsObject[key];
		var arrayOfFunctionsAssociatedWithThisParam = actionsOnParamChange[key];
		$.each(arrayOfFunctionsAssociatedWithThisParam, function(index, value) {
			value(param);
		});
	}

	function retriggerOnParamChangeForAll() {
		$.each(actionsOnParamChange, function(key, value) {
			retriggerOnParamChange(key);
		});
	}

	return {
		varsion: {
			version: 2,
			versionNotes: 'In v2 removed the mini-meteor dependecy and built only with jQuery'
		},
		setParam: setParam,
		getAllParams: getAllParams,
		setFreshParams: setFreshParams,
		setDefaultParam: setDefaultParam,
		getParam: getParam,
		onParamChange: onParamChange,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		appendToBeginningOfTheArray: appendToBeginningOfTheArray,
		appendToArray: appendToArray,
		removeElementFromArrayXWithIdY: removeElementFromArrayXWithIdY,
		findInArrayXObjectWithIdY: findInArrayXObjectWithIdY,
		findInArrayXObjectWithPropertyYMatchingZ: findInArrayXObjectWithPropertyYMatchingZ,
		updateObjectInArray: updateObjectInArray,
	}

})();

//EXAMPLES:

// ReactiveLocalStorage.onParamChange('openModal' , function(value) {
// 	if (value === 'true') {
// 		console.log('modal will be open!');
// 	} else {
// 		console.log('hide  modal!');
// 	}
// });

// ReactiveLocalStorage.onParamChange('activeTab' , function(value) {
// 	if (value === 'comments') {
// 		console.log('switch tab to comments');
// 	} else if (value === 'products') {
// 		console.log('switch tab to products');
// 	} else if (value === 'pictures') {
// 		console.log('switch tab to pictures');
// 	}
// });

// ReactiveLocalStorage.onParamChange('centralPanelFolderPath' , function(value) {
// 	if (typeof value != 'undefined') { //how to make sure that you don't need to write this
// 		console.log('in the central panel, a folder with path '+value+' will be loaded');
// 	}
// });

// ReactiveLocalStorage.retriggerOnParamChange('activeTab');

//TODO: allow storing empty object

