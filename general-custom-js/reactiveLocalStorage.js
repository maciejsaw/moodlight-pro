var ReactiveLocalStorage = (function() {

	var paramsString; //this will be a string containing params
	var reactiveParams = new ReactiveMap(); //this will be a reactive object that contains the same data as the string
	var previousStringParams = {}; //this will be used to compare changes in params

	//at the beginning, check if params are stored in local storage and proccess them, so that they become reactive
	if (typeof localStorage.getItem('paramsString') == 'undefined') {
		paramsString = "";
		processStringParams();
	} else {
		paramsString = localStorage.getItem('paramsString');
		processStringParams();
	}

	//each time this function is fired, the onParamChange (Meteor.run) functions will run, but only
	//the ones for which the value changed
	//this is used to 'transform' the static string into a reactive object after each update of the string param
	function processStringParams() {
		//before updating reactive values, store the params in local storage
		localStorage.setItem('paramsString', paramsString);

		var paramsObject = deparam(paramsString);

		//check what previous params are not present in the new string
		//and reset them in the reactive object
		$.each(previousStringParams, function(key, value) {
			if (typeof paramsObject[key] == 'undefined') {
				reactiveParams.set(key, undefined);
			}
		});

		//update the params in the reactive object
		$.each(paramsObject, function(key, value) {
			reactiveParams.set(key, value);
		});

		//save the current params for future comparisons
		previousStringParams = paramsObject

		//console.log(paramsObject);
		//console.log(reactiveParams);

		return paramsObject;	
	}

	/*----------  Changing Params  ----------*/

	function setParam(key, value, options) {
		options = options || {};

		var paramsObject = deparam(paramsString);
		paramsObject[key] = value;

		paramsString = $.param(paramsObject);
		processStringParams();    
	}

	function setDefaultParam(key, value) {
		var paramsObject = deparam(paramsString);

		if (typeof paramsObject[key] == 'undefined') {
			paramsObject[key] = value;

			paramsString = $.param(paramsObject);
			processStringParams();  
		}
	}

	function appendToBeginningOfTheArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.unshift(objectToAppend);

		ReactiveLocalStorage.setParam(paramNameThatContainsArray, array);
	}

	function appendToArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.push(objectToAppend);

		ReactiveLocalStorage.setParam(paramNameThatContainsArray, array);
	}

	function removeElementFromArrayXWithIdY(paramNameThatContainsArray, idThatShouldBeRemoved) {
		var array = getParam(paramNameThatContainsArray);

		array = $.grep(array, function(elementOfArray, indexInArray){ // just use arr
			return elementOfArray.id != idThatShouldBeRemoved;
		});

		ReactiveLocalStorage.setParam(paramNameThatContainsArray, array);
	}

	function findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, objectPropertyToSearchIn, propertyValueThatShouldMatch) {
		var array = getParam(paramNameWithArray);

		console.log(array);

		if (typeof array === 'array') {
			var arrayData = $.grep(array, function(elementOfArray, indexInArray){ // just use arr
				console.log(elementOfArray);
				return elementOfArray[objectPropertyToSearchIn] === propertyValueThatShouldMatch;
			});
			if (arrayData.length > 0) {
				return arrayData[0];
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
		options = options || {};

		var paramsObject = deparam(paramsString);
		delete paramsObject[key];

		paramsString = $.param(paramsObject);
		processStringParams();
	}

	function setFreshParams(newParamsObj) {
		paramsString = $.param(newParamsObj);
		processStringParams();
	}

	function getParam(key) {
		var paramsObject = deparam(paramsString);
		return paramsObject[key];
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction) {
		//for each key in the reactive router params, define a reactive autorun 
		//Each of the params will react to change independently, only if changed
		Meteor.run(function() {
			var param = reactiveParams.get(key); //note that this is a getter for reactive object, not the static string
			actionFunction(param);
		});

		//store the action on param in a separate array, so that we can retrigger this route manually
		//because this might be needed for ajax loaded content etc.
		if (typeof actionsOnParamChange[key] === 'undefined') {
			actionsOnParamChange[key] = [];
		}
		actionsOnParamChange[key].push(actionFunction);
	}

	function retriggerOnParamChange(key) {
		var param = deparam(paramsString)[key];
		console.log(param);
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

	//when document loads, set reactive params 
	$(document).ready(function() {
		//
	});

	//when ajax reloads something, also trigger the reactive functions.
	//They should not do anything if nothing was changed
	$(document).on('ajaxComplete', function() {
		//retrigger actions for all params, so that the ajax loaded views are updated
		//TODO: how to do this? or should this be done manually?
	});

	return {
		setParam: setParam,
		getAllParams: processStringParams,
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

