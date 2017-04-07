/*
Copyright (c) 2010 Aaron BLohowiak
Dual licensed under the MIT and GPL licenses.
*/


// (function(exports){
//   var BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

//   exports.newId = function(len, radix) {
//     var chars = BASE64URICHARS, newId = [], i=0;
//     radix = radix || chars.length;
//     len = len || 22;

//     for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

//     return newId.join('');
//   };

// })(typeof exports === 'undefined'? this['newId']={}: exports);;


BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

newId = function(len, radix) {
	var chars = BASE64URICHARS, newId = [], i=0;
	radix = radix || chars.length;
	len = len || 22;

	for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

	return newId.join('');
};