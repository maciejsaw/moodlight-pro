//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

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

newUniqueId = function(len, radix) {
	var chars = BASE64URICHARS, newId = [], i=0;
	radix = radix || chars.length;
	len = len || 22;

	for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

	return newId.join('');
};

/*
 * jquery.fullscreen v0.6.0
 * https://github.com/private-face/jquery.fullscreen
 *
 * Copyright (c) 2012–2016 Vladimir Zhuravlev
 * Released under the MIT license
 * https://github.com/private-face/jquery.fullscreen/blob/master/LICENSE
 *
 * Date: 2016-08-25
 **/
(function(global, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], function (jQuery) {
			return factory(jQuery);
		});
	} else if (typeof exports === 'object') {
		// CommonJS/Browserify
		factory(require('jquery'));
	} else {
		// Global
		factory(global.jQuery);
	}
}(this, function($) {

function defined(a){return"undefined"!=typeof a}function extend(a,b,c){var d=function(){};d.prototype=b.prototype,a.prototype=new d,a.prototype.constructor=a,b.prototype.constructor=b,a._super=b.prototype,c&&$.extend(a.prototype,c)}function native(a,b){var c;"string"==typeof a&&(b=a,a=document);for(var d=0;d<SUBST.length;++d){b=b.replace(SUBST[d][0],SUBST[d][1]);for(var e=0;e<VENDOR_PREFIXES.length;++e)if(c=VENDOR_PREFIXES[e],c+=0===e?b:b.charAt(0).toUpperCase()+b.substr(1),defined(a[c]))return a[c]}}var SUBST=[["",""],["exit","cancel"],["screen","Screen"]],VENDOR_PREFIXES=["","o","ms","moz","webkit","webkitCurrent"],ua=navigator.userAgent,fsEnabled=native("fullscreenEnabled"),parsedChromeUA=ua.match(/Android.*Chrome\/(\d+)\./),IS_ANDROID_CHROME=!!parsedChromeUA,CHROME_VERSION,ANDROID_CHROME_VERSION;IS_ANDROID_CHROME&&(ANDROID_CHROME_VERSION=parseInt(parsedChromeUA[1]));var IS_NATIVELY_SUPPORTED=(!IS_ANDROID_CHROME||ANDROID_CHROME_VERSION>37)&&defined(native("fullscreenElement"))&&(!defined(fsEnabled)||fsEnabled===!0),version=$.fn.jquery.split("."),JQ_LT_17=parseInt(version[0])<2&&parseInt(version[1])<7,FullScreenAbstract=function(){this.__options=null,this._fullScreenElement=null,this.__savedStyles={}};FullScreenAbstract.prototype={native:native,_DEFAULT_OPTIONS:{styles:{boxSizing:"border-box",MozBoxSizing:"border-box",WebkitBoxSizing:"border-box"},toggleClass:null},__documentOverflow:"",__htmlOverflow:"",_preventDocumentScroll:function(){this.__documentOverflow=document.body.style.overflow,this.__htmlOverflow=document.documentElement.style.overflow,$(this._fullScreenElement).is("body, html")||$("body, html").css("overflow","hidden")},_allowDocumentScroll:function(){document.body.style.overflow=this.__documentOverflow,document.documentElement.style.overflow=this.__htmlOverflow},_fullScreenChange:function(){this.__options&&(this.isFullScreen()?(this._preventDocumentScroll(),this._triggerEvents()):(this._allowDocumentScroll(),this._revertStyles(),this._triggerEvents(),this._fullScreenElement=null))},_fullScreenError:function(a){this.__options&&(this._revertStyles(),this._fullScreenElement=null,a&&$(document).trigger("fscreenerror",[a]))},_triggerEvents:function(){$(this._fullScreenElement).trigger(this.isFullScreen()?"fscreenopen":"fscreenclose"),$(document).trigger("fscreenchange",[this.isFullScreen(),this._fullScreenElement])},_saveAndApplyStyles:function(){var a=$(this._fullScreenElement);this.__savedStyles={};for(var b in this.__options.styles)this.__savedStyles[b]=this._fullScreenElement.style[b],this._fullScreenElement.style[b]=this.__options.styles[b];a.is("body")&&(document.documentElement.style.overflow=this.__options.styles.overflow),this.__options.toggleClass&&a.addClass(this.__options.toggleClass)},_revertStyles:function(){var a=$(this._fullScreenElement);for(var b in this.__options.styles)this._fullScreenElement.style[b]=this.__savedStyles[b];a.is("body")&&(document.documentElement.style.overflow=this.__savedStyles.overflow),this.__options.toggleClass&&a.removeClass(this.__options.toggleClass)},open:function(a,b){a!==this._fullScreenElement&&(this.isFullScreen()&&this.exit(),this._fullScreenElement=a,this.__options=$.extend(!0,{},this._DEFAULT_OPTIONS,b),this._saveAndApplyStyles())},exit:null,isFullScreen:null,isNativelySupported:function(){return IS_NATIVELY_SUPPORTED}};var FullScreenNative=function(){FullScreenNative._super.constructor.apply(this,arguments),this.exit=$.proxy(native("exitFullscreen"),document),this._DEFAULT_OPTIONS=$.extend(!0,{},this._DEFAULT_OPTIONS,{styles:{width:"100%",height:"100%"}}),$(document).bind(this._prefixedString("fullscreenchange")+" MSFullscreenChange",$.proxy(this._fullScreenChange,this)).bind(this._prefixedString("fullscreenerror")+" MSFullscreenError",$.proxy(this._fullScreenError,this))};extend(FullScreenNative,FullScreenAbstract,{VENDOR_PREFIXES:["","o","moz","webkit"],_prefixedString:function(a){return $.map(this.VENDOR_PREFIXES,function(b){return b+a}).join(" ")},open:function(a,b){FullScreenNative._super.open.apply(this,arguments);var c=native(a,"requestFullscreen");c.call(a)},exit:$.noop,isFullScreen:function(){return null!==native("fullscreenElement")},element:function(){return native("fullscreenElement")}});var FullScreenFallback=function(){FullScreenFallback._super.constructor.apply(this,arguments),this._DEFAULT_OPTIONS=$.extend({},this._DEFAULT_OPTIONS,{styles:{position:"fixed",zIndex:"2147483647",left:0,top:0,bottom:0,right:0}}),this.__delegateKeydownHandler()};extend(FullScreenFallback,FullScreenAbstract,{__isFullScreen:!1,__delegateKeydownHandler:function(){var a=$(document);a.delegate("*","keydown.fullscreen",$.proxy(this.__keydownHandler,this));var b=JQ_LT_17?a.data("events"):$._data(document).events,c=b.keydown;JQ_LT_17?b.live.unshift(b.live.pop()):c.splice(0,0,c.splice(c.delegateCount-1,1)[0])},__keydownHandler:function(a){return!this.isFullScreen()||27!==a.which||(this.exit(),!1)},_revertStyles:function(){FullScreenFallback._super._revertStyles.apply(this,arguments),this._fullScreenElement.offsetHeight},open:function(a){FullScreenFallback._super.open.apply(this,arguments),this.__isFullScreen=!0,this._fullScreenChange()},exit:function(){this.__isFullScreen&&(this.__isFullScreen=!1,this._fullScreenChange())},isFullScreen:function(){return this.__isFullScreen},element:function(){return this.__isFullScreen?this._fullScreenElement:null}}),$.fullscreen=IS_NATIVELY_SUPPORTED?new FullScreenNative:new FullScreenFallback,$.fn.fullscreen=function(a){var b=this[0];return a=$.extend({toggleClass:null,overflow:"hidden"},a),a.styles={overflow:a.overflow},delete a.overflow,b&&$.fullscreen.open(b,a),this};
//# sourceMappingURL=jquery.fullscreen.min.js.mapreturn $.fullscreen;
}));

(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});

/*! tooltipster v4.2.3 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.3",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var e=c.__geometry(),f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state&&b.option("animationDuration",0)._close(null,null,!0),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=b,this.__instance._trigger("created");
},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});

(function(){var a=this,b=a._,d=Array.prototype,f=Object.prototype,l=d.push,k=d.slice,n=d.concat,p=f.toString,C=f.hasOwnProperty,f=Array.isArray,D=Object.keys,w=Function.prototype.bind,c=function(e){return e instanceof c?e:this instanceof c?void(this._wrapped=e):new c(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=c),exports._=c):a._=c;c.VERSION="1.7.0";var t=function(e,a,c){if(void 0===a)return e;switch(null==c?3:c){case 1:return function(c){return e.call(a,
c)};case 2:return function(c,g){return e.call(a,c,g)};case 3:return function(c,g,b){return e.call(a,c,g,b)};case 4:return function(c,g,b,d){return e.call(a,c,g,b,d)}}return function(){return e.apply(a,arguments)}};c.iteratee=function(e,a,g){return null==e?c.identity:c.isFunction(e)?t(e,a,g):c.isObject(e)?c.matches(e):c.property(e)};c.each=c.forEach=function(e,a,g){if(null==e)return e;a=t(a,g);var q=e.length;if(q===+q)for(g=0;q>g;g++)a(e[g],g,e);else{var b=c.keys(e);g=0;for(q=b.length;q>g;g++)a(e[b[g]],
b[g],e)}return e};c.map=c.collect=function(e,a,g){if(null==e)return[];a=c.iteratee(a,g);for(var q=e.length!==+e.length&&c.keys(e),b=(q||e).length,d=Array(b),m=0;b>m;m++)g=q?q[m]:m,d[m]=a(e[g],g,e);return d};c.reduce=c.foldl=c.inject=function(e,a,g,q){null==e&&(e=[]);a=t(a,q,4);var b,d=e.length!==+e.length&&c.keys(e),m=(d||e).length,f=0;if(3>arguments.length){if(!m)throw new TypeError("Reduce of empty array with no initial value");g=e[d?d[f++]:f++]}for(;m>f;f++)b=d?d[f]:f,g=a(g,e[b],b,e);return g};
c.reduceRight=c.foldr=function(e,a,g,b){null==e&&(e=[]);a=t(a,b,4);var h,d=e.length!==+e.length&&c.keys(e),f=(d||e).length;if(3>arguments.length){if(!f)throw new TypeError("Reduce of empty array with no initial value");g=e[d?d[--f]:--f]}for(;f--;)h=d?d[f]:f,g=a(g,e[h],h,e);return g};c.find=c.detect=function(e,a,g){var b;return a=c.iteratee(a,g),c.some(e,function(e,c,g){return a(e,c,g)?(b=e,!0):void 0}),b};c.filter=c.select=function(e,a,g){var b=[];return null==e?b:(a=c.iteratee(a,g),c.each(e,function(e,
c,g){a(e,c,g)&&b.push(e)}),b)};c.reject=function(e,a,g){return c.filter(e,c.negate(c.iteratee(a)),g)};c.every=c.all=function(e,a,g){if(null==e)return!0;a=c.iteratee(a,g);var b,h=e.length!==+e.length&&c.keys(e),d=(h||e).length;for(g=0;d>g;g++)if(b=h?h[g]:g,!a(e[b],b,e))return!1;return!0};c.some=c.any=function(e,a,g){if(null==e)return!1;a=c.iteratee(a,g);var b,h=e.length!==+e.length&&c.keys(e),d=(h||e).length;for(g=0;d>g;g++)if(b=h?h[g]:g,a(e[b],b,e))return!0;return!1};c.contains=c.include=function(e,
a){return null==e?!1:(e.length!==+e.length&&(e=c.values(e)),0<=c.indexOf(e,a))};c.invoke=function(e,a){var g=k.call(arguments,2),b=c.isFunction(a);return c.map(e,function(e){return(b?a:e[a]).apply(e,g)})};c.pluck=function(e,a){return c.map(e,c.property(a))};c.where=function(e,a){return c.filter(e,c.matches(a))};c.findWhere=function(e,a){return c.find(e,c.matches(a))};c.max=function(e,a,g){var b,h=-1/0,d=-1/0;if(null==a&&null!=e){e=e.length===+e.length?e:c.values(e);for(var f=0,r=e.length;r>f;f++)g=
e[f],g>h&&(h=g)}else a=c.iteratee(a,g),c.each(e,function(e,c,g){b=a(e,c,g);(b>d||b===-1/0&&h===-1/0)&&(h=e,d=b)});return h};c.min=function(e,a,g){var b,h=1/0,d=1/0;if(null==a&&null!=e){e=e.length===+e.length?e:c.values(e);for(var f=0,r=e.length;r>f;f++)g=e[f],h>g&&(h=g)}else a=c.iteratee(a,g),c.each(e,function(e,c,g){b=a(e,c,g);(d>b||1/0===b&&1/0===h)&&(h=e,d=b)});return h};c.shuffle=function(e){for(var a=e&&e.length===+e.length?e:c.values(e),g=a.length,b=Array(g),h=0;g>h;h++)e=c.random(0,h),e!==
h&&(b[h]=b[e]),b[e]=a[h];return b};c.sample=function(e,a,g){return null==a||g?(e.length!==+e.length&&(e=c.values(e)),e[c.random(e.length-1)]):c.shuffle(e).slice(0,Math.max(0,a))};c.sortBy=function(e,a,g){return a=c.iteratee(a,g),c.pluck(c.map(e,function(e,c,g){return{value:e,index:c,criteria:a(e,c,g)}}).sort(function(e,a){var c=e.criteria,g=a.criteria;if(c!==g){if(c>g||void 0===c)return 1;if(g>c||void 0===g)return-1}return e.index-a.index}),"value")};var u=function(e){return function(a,g,b){var d=
{};return g=c.iteratee(g,b),c.each(a,function(c,b){var q=g(c,b,a);e(d,c,q)}),d}};c.groupBy=u(function(e,a,g){c.has(e,g)?e[g].push(a):e[g]=[a]});c.indexBy=u(function(e,a,c){e[c]=a});c.countBy=u(function(e,a,g){c.has(e,g)?e[g]++:e[g]=1});c.sortedIndex=function(e,a,g,b){g=c.iteratee(g,b,1);a=g(a);b=0;for(var d=e.length;d>b;){var f=b+d>>>1;g(e[f])<a?b=f+1:d=f}return b};c.toArray=function(e){return e?c.isArray(e)?k.call(e):e.length===+e.length?c.map(e,c.identity):c.values(e):[]};c.size=function(e){return null==
e?0:e.length===+e.length?e.length:c.keys(e).length};c.partition=function(e,a,g){a=c.iteratee(a,g);var b=[],d=[];return c.each(e,function(e,c,g){(a(e,c,g)?b:d).push(e)}),[b,d]};c.first=c.head=c.take=function(e,a,c){return null==e?void 0:null==a||c?e[0]:0>a?[]:k.call(e,0,a)};c.initial=function(e,a,c){return k.call(e,0,Math.max(0,e.length-(null==a||c?1:a)))};c.last=function(e,a,c){return null==e?void 0:null==a||c?e[e.length-1]:k.call(e,Math.max(e.length-a,0))};c.rest=c.tail=c.drop=function(e,a,c){return k.call(e,
null==a||c?1:a)};c.compact=function(e){return c.filter(e,c.identity)};var v=function(e,a,g,b){if(a&&c.every(e,c.isArray))return n.apply(b,e);for(var d=0,f=e.length;f>d;d++){var m=e[d];c.isArray(m)||c.isArguments(m)?a?l.apply(b,m):v(m,a,g,b):g||b.push(m)}return b};c.flatten=function(e,a){return v(e,a,!1,[])};c.without=function(e){return c.difference(e,k.call(arguments,1))};c.uniq=c.unique=function(e,a,b,d){if(null==e)return[];c.isBoolean(a)||(d=b,b=a,a=!1);null!=b&&(b=c.iteratee(b,d));d=[];for(var h=
[],f=0,m=e.length;m>f;f++){var r=e[f];if(a)f&&h===r||d.push(r),h=r;else if(b){var k=b(r,f,e);0>c.indexOf(h,k)&&(h.push(k),d.push(r))}else 0>c.indexOf(d,r)&&d.push(r)}return d};c.union=function(){return c.uniq(v(arguments,!0,!0,[]))};c.intersection=function(e){if(null==e)return[];for(var a=[],b=arguments.length,d=0,h=e.length;h>d;d++){var f=e[d];if(!c.contains(a,f)){for(var m=1;b>m&&c.contains(arguments[m],f);m++);m===b&&a.push(f)}}return a};c.difference=function(e){var a=v(k.call(arguments,1),!0,
!0,[]);return c.filter(e,function(e){return!c.contains(a,e)})};c.zip=function(e){if(null==e)return[];for(var a=c.max(arguments,"length").length,b=Array(a),d=0;a>d;d++)b[d]=c.pluck(arguments,d);return b};c.object=function(a,c){if(null==a)return{};for(var b={},d=0,h=a.length;h>d;d++)c?b[a[d]]=c[d]:b[a[d][0]]=a[d][1];return b};c.indexOf=function(a,b,g){if(null==a)return-1;var d=0,h=a.length;if(g){if("number"!=typeof g)return d=c.sortedIndex(a,b),a[d]===b?d:-1;d=0>g?Math.max(0,h+g):g}for(;h>d;d++)if(a[d]===
b)return d;return-1};c.lastIndexOf=function(a,c,b){if(null==a)return-1;var d=a.length;for("number"==typeof b&&(d=0>b?d+b+1:Math.min(d,b+1));0<=--d;)if(a[d]===c)return d;return-1};c.range=function(a,c,b){1>=arguments.length&&(c=a||0,a=0);b=b||1;for(var d=Math.max(Math.ceil((c-a)/b),0),h=Array(d),f=0;d>f;f++,a+=b)h[f]=a;return h};var y=function(){};c.bind=function(a,b){var g,d;if(w&&a.bind===w)return w.apply(a,k.call(arguments,1));if(!c.isFunction(a))throw new TypeError("Bind must be called on a function");
return g=k.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,g.concat(k.call(arguments)));y.prototype=a.prototype;var h=new y;y.prototype=null;var f=a.apply(h,g.concat(k.call(arguments)));return c.isObject(f)?f:h}};c.partial=function(a){var b=k.call(arguments,1);return function(){for(var g=0,d=b.slice(),h=0,f=d.length;f>h;h++)d[h]===c&&(d[h]=arguments[g++]);for(;g<arguments.length;)d.push(arguments[g++]);return a.apply(this,d)}};c.bindAll=function(a){var b,g,d=arguments.length;
if(1>=d)throw Error("bindAll must be passed function names");for(b=1;d>b;b++)g=arguments[b],a[g]=c.bind(a[g],a);return a};c.memoize=function(a,b){var g=function(d){var h=g.cache,f=b?b.apply(this,arguments):d;return c.has(h,f)||(h[f]=a.apply(this,arguments)),h[f]};return g.cache={},g};c.delay=function(a,c){var b=k.call(arguments,2);return setTimeout(function(){return a.apply(null,b)},c)};c.defer=function(a){return c.delay.apply(c,[a,1].concat(k.call(arguments,1)))};c.throttle=function(a,b,d){var f,
h,x,m=null,k=0;d||(d={});var l=function(){k=!1===d.leading?0:c.now();m=null;x=a.apply(f,h);m||(f=h=null)};return function(){var p=c.now();k||!1!==d.leading||(k=p);var n=b-(p-k);return f=this,h=arguments,0>=n||n>b?(clearTimeout(m),m=null,k=p,x=a.apply(f,h),m||(f=h=null)):m||!1===d.trailing||(m=setTimeout(l,n)),x}};c.debounce=function(a,b,d){var f,h,k,m,l,p=function(){var n=c.now()-m;b>n&&0<n?f=setTimeout(p,b-n):(f=null,d||(l=a.apply(k,h),f||(k=h=null)))};return function(){k=this;h=arguments;m=c.now();
var n=d&&!f;return f||(f=setTimeout(p,b)),n&&(l=a.apply(k,h),k=h=null),l}};c.wrap=function(a,b){return c.partial(b,a)};c.negate=function(a){return function(){return!a.apply(this,arguments)}};c.compose=function(){var a=arguments,c=a.length-1;return function(){for(var b=c,d=a[c].apply(this,arguments);b--;)d=a[b].call(this,d);return d}};c.after=function(a,c){return function(){return 1>--a?c.apply(this,arguments):void 0}};c.before=function(a,c){var b;return function(){return 0<--a?b=c.apply(this,arguments):
c=null,b}};c.once=c.partial(c.before,2);c.keys=function(a){if(!c.isObject(a))return[];if(D)return D(a);var b=[],d;for(d in a)c.has(a,d)&&b.push(d);return b};c.values=function(a){for(var b=c.keys(a),d=b.length,f=Array(d),h=0;d>h;h++)f[h]=a[b[h]];return f};c.pairs=function(a){for(var b=c.keys(a),d=b.length,f=Array(d),h=0;d>h;h++)f[h]=[b[h],a[b[h]]];return f};c.invert=function(a){for(var b={},d=c.keys(a),f=0,h=d.length;h>f;f++)b[a[d[f]]]=d[f];return b};c.functions=c.methods=function(a){var b=[],d;for(d in a)c.isFunction(a[d])&&
b.push(d);return b.sort()};c.extend=function(a){if(!c.isObject(a))return a;for(var b,d,f=1,h=arguments.length;h>f;f++)for(d in b=arguments[f],b)C.call(b,d)&&(a[d]=b[d]);return a};c.pick=function(a,b,d){var f,h={};if(null==a)return h;if(c.isFunction(b))for(f in b=t(b,d),a){var l=a[f];b(l,f,a)&&(h[f]=l)}else{l=n.apply([],k.call(arguments,1));a=Object(a);for(var m=0,p=l.length;p>m;m++)f=l[m],f in a&&(h[f]=a[f])}return h};c.omit=function(a,b,d){if(c.isFunction(b))b=c.negate(b);else{var f=c.map(n.apply([],
k.call(arguments,1)),String);b=function(a,e){return!c.contains(f,e)}}return c.pick(a,b,d)};c.defaults=function(a){if(!c.isObject(a))return a;for(var b=1,d=arguments.length;d>b;b++){var f=arguments[b],h;for(h in f)void 0===a[h]&&(a[h]=f[h])}return a};c.clone=function(a){return c.isObject(a)?c.isArray(a)?a.slice():c.extend({},a):a};c.tap=function(a,b){return b(a),a};var z=function(a,b,d,f){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;a instanceof c&&(a=a._wrapped);b instanceof c&&
(b=b._wrapped);var h=p.call(a);if(h!==p.call(b))return!1;switch(h){case "[object RegExp]":case "[object String]":return""+a==""+b;case "[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case "[object Date]":case "[object Boolean]":return+a===+b}if("object"!=typeof a||"object"!=typeof b)return!1;for(var k=d.length;k--;)if(d[k]===a)return f[k]===b;var k=a.constructor,m=b.constructor;if(k!==m&&"constructor"in a&&"constructor"in b&&!(c.isFunction(k)&&k instanceof k&&c.isFunction(m)&&m instanceof
m))return!1;d.push(a);f.push(b);var l;if("[object Array]"===h){if(l=a.length,h=l===b.length)for(;l--&&(h=z(a[l],b[l],d,f)););}else{var n,k=c.keys(a);if(l=k.length,h=c.keys(b).length===l)for(;l--&&(n=k[l],h=c.has(b,n)&&z(a[n],b[n],d,f)););}return d.pop(),f.pop(),h};c.isEqual=function(a,b){return z(a,b,[],[])};c.isEmpty=function(a){if(null==a)return!0;if(c.isArray(a)||c.isString(a)||c.isArguments(a))return 0===a.length;for(var b in a)if(c.has(a,b))return!1;return!0};c.isElement=function(a){return!(!a||
1!==a.nodeType)};c.isArray=f||function(a){return"[object Array]"===p.call(a)};c.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a};c.each("Arguments Function String Number Date RegExp".split(" "),function(a){c["is"+a]=function(b){return p.call(b)==="[object "+a+"]"}});c.isArguments(arguments)||(c.isArguments=function(a){return c.has(a,"callee")});"function"!=typeof/./&&(c.isFunction=function(a){return"function"==typeof a||!1});c.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};
c.isNaN=function(a){return c.isNumber(a)&&a!==+a};c.isBoolean=function(a){return!0===a||!1===a||"[object Boolean]"===p.call(a)};c.isNull=function(a){return null===a};c.isUndefined=function(a){return void 0===a};c.has=function(a,b){return null!=a&&C.call(a,b)};c.noConflict=function(){return a._=b,this};c.identity=function(a){return a};c.constant=function(a){return function(){return a}};c.noop=function(){};c.property=function(a){return function(b){return b[a]}};c.matches=function(a){var b=c.pairs(a),
d=b.length;return function(a){if(null==a)return!d;a=Object(a);for(var c=0;d>c;c++){var e=b[c],f=e[0];if(e[1]!==a[f]||!(f in a))return!1}return!0}};c.times=function(a,b,c){var d=Array(Math.max(0,a));b=t(b,c,1);for(c=0;a>c;c++)d[c]=b(c);return d};c.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};c.now=Date.now||function(){return(new Date).getTime()};var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=c.invert(f),E=function(a){var b=
function(b){return a[b]},d="(?:"+c.keys(a).join("|")+")",f=RegExp(d),h=RegExp(d,"g");return function(a){return a=null==a?"":""+a,f.test(a)?a.replace(h,b):a}};c.escape=E(f);c.unescape=E(u);c.result=function(a,b){if(null!=a){var d=a[b];return c.isFunction(d)?a[b]():d}};var F=0;c.uniqueId=function(a){var b=++F+"";return a?a+b:b};c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,G={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028",
"\u2029":"u2029"},H=/\\|'|\r|\n|\u2028|\u2029/g,I=function(a){return"\\"+G[a]};c.template=function(a,b,d){!b&&d&&(b=d);b=c.defaults({},b,c.templateSettings);d=RegExp([(b.escape||A).source,(b.interpolate||A).source,(b.evaluate||A).source].join("|")+"|$","g");var f=0,h="__p+='";a.replace(d,function(b,c,d,g,k){return h+=a.slice(f,k).replace(H,I),f=k+b.length,c?h+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?h+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(h+="';\n"+g+"\n__p+='"),b});h+="';\n";b.variable||
(h="with(obj||{}){\n"+h+"}\n");h="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+h+"return __p;\n";try{var k=new Function(b.variable||"obj","_",h)}catch(l){throw l.source=h,l;}d=function(a){return k.call(this,a,c)};return d.source="function("+(b.variable||"obj")+"){\n"+h+"}",d};c.chain=function(a){a=c(a);return a._chain=!0,a};var B=function(a){return this._chain?c(a).chain():a};c.mixin=function(a){c.each(c.functions(a),function(b){var d=c[b]=a[b];c.prototype[b]=
function(){var a=[this._wrapped];return l.apply(a,arguments),B.call(this,d.apply(c,a))}})};c.mixin(c);c.each("pop push reverse shift sort splice unshift".split(" "),function(a){var b=d[a];c.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!==a&&"splice"!==a||0!==c.length||delete c[0],B.call(this,c)}});c.each(["concat","join","slice"],function(a){var b=d[a];c.prototype[a]=function(){return B.call(this,b.apply(this._wrapped,arguments))}});c.prototype.value=function(){return this._wrapped};
"function"==typeof define&&define.amd&&define("underscore",[],function(){return c})}).call(this);for(var BASE_64_CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",BASE_64_VALS={},i=0;i<BASE_64_CHARS.length;i++)BASE_64_VALS[BASE_64_CHARS.charAt(i)]=i;
Base64={encode:function(a){if("string"===typeof a){var b=a;a=Base64.newBinary(b.length);for(var d=0;d<b.length;d++){var f=b.charCodeAt(d);if(255<f)throw Error("Not ascii. Base64.encode can only take ascii strings.");a[d]=f}}for(var b=[],l=f=null,k=null,n=null,d=0;d<a.length;d++)switch(d%3){case 0:f=a[d]>>2&63;l=(a[d]&3)<<4;break;case 1:l|=a[d]>>4&15;k=(a[d]&15)<<2;break;case 2:k|=a[d]>>6&3,n=a[d]&63,b.push(getChar(f)),b.push(getChar(l)),b.push(getChar(k)),b.push(getChar(n)),n=k=l=f=null}null!=f&&
(b.push(getChar(f)),b.push(getChar(l)),null==k?b.push("="):b.push(getChar(k)),null==n&&b.push("="));return b.join("")}};var getChar=function(a){return BASE_64_CHARS.charAt(a)},getVal=function(a){return"="===a?-1:BASE_64_VALS[a]};Base64.newBinary=function(a){if("undefined"===typeof Uint8Array||"undefined"===typeof ArrayBuffer){for(var b=[],d=0;d<a;d++)b.push(0);b.$Uint8ArrayPolyfill=!0;return b}return new Uint8Array(new ArrayBuffer(a))};
Base64.decode=function(a){var b=Math.floor(3*a.length/4);"="==a.charAt(a.length-1)&&(b--,"="==a.charAt(a.length-2)&&b--);for(var b=Base64.newBinary(b),d=null,f=null,l=null,k=0,n=0;n<a.length;n++){var p=a.charAt(n),p=getVal(p);switch(n%4){case 0:if(0>p)throw Error("invalid base64 string");d=p<<2;break;case 1:if(0>p)throw Error("invalid base64 string");d|=p>>4;b[k++]=d;f=(p&15)<<4;break;case 2:0<=p&&(f|=p>>2,b[k++]=f,l=(p&3)<<6);break;case 3:0<=p&&(b[k++]=l|p)}}return b};EJSON={};EJSONTest={};
var customTypes={};EJSON.addType=function(a,b){if(_.has(customTypes,a))throw Error("Type "+a+" already present");customTypes[a]=b};
var isInfOrNan=function(a){return _.isNaN(a)||Infinity===a||-Infinity===a},builtinConverters=[{matchJSONValue:function(a){return _.has(a,"$date")&&1===_.size(a)},matchObject:function(a){return a instanceof Date},toJSONValue:function(a){return{$date:a.getTime()}},fromJSONValue:function(a){return new Date(a.$date)}},{matchJSONValue:function(a){return _.has(a,"$InfNaN")&&1===_.size(a)},matchObject:isInfOrNan,toJSONValue:function(a){return{$InfNaN:_.isNaN(a)?0:Infinity===a?1:-1}},fromJSONValue:function(a){return a.$InfNaN/
0}},{matchJSONValue:function(a){return _.has(a,"$binary")&&1===_.size(a)},matchObject:function(a){return"undefined"!==typeof Uint8Array&&a instanceof Uint8Array||a&&_.has(a,"$Uint8ArrayPolyfill")},toJSONValue:function(a){return{$binary:Base64.encode(a)}},fromJSONValue:function(a){return Base64.decode(a.$binary)}},{matchJSONValue:function(a){return _.has(a,"$escape")&&1===_.size(a)},matchObject:function(a){return _.isEmpty(a)||2<_.size(a)?!1:_.any(builtinConverters,function(b){return b.matchJSONValue(a)})},
toJSONValue:function(a){var b={};_.each(a,function(a,f){b[f]=EJSON.toJSONValue(a)});return{$escape:b}},fromJSONValue:function(a){var b={};_.each(a.$escape,function(a,f){b[f]=EJSON.fromJSONValue(a)});return b}},{matchJSONValue:function(a){return _.has(a,"$type")&&_.has(a,"$value")&&2===_.size(a)},matchObject:function(a){return EJSON._isCustomType(a)},toJSONValue:function(a){var b=Meteor._noYieldsAllowed(function(){return a.toJSONValue()});return{$type:a.typeName(),$value:b}},fromJSONValue:function(a){var b=
a.$type;if(!_.has(customTypes,b))throw Error("Custom EJSON type "+b+" is not defined");var d=customTypes[b];return Meteor._noYieldsAllowed(function(){return d(a.$value)})}}];EJSON._isCustomType=function(a){return a&&"function"===typeof a.toJSONValue&&"function"===typeof a.typeName&&_.has(customTypes,a.typeName())};
var adjustTypesToJSONValue=EJSON._adjustTypesToJSONValue=function(a){if(null===a)return null;var b=toJSONValueHelper(a);if(void 0!==b)return b;if("object"!==typeof a)return a;_.each(a,function(b,f){if("object"===typeof b||void 0===b||isInfOrNan(b)){var l=toJSONValueHelper(b);l?a[f]=l:adjustTypesToJSONValue(b)}});return a},toJSONValueHelper=function(a){for(var b=0;b<builtinConverters.length;b++){var d=builtinConverters[b];if(d.matchObject(a))return d.toJSONValue(a)}};
EJSON.toJSONValue=function(a){var b=toJSONValueHelper(a);if(void 0!==b)return b;"object"===typeof a&&(a=EJSON.clone(a),adjustTypesToJSONValue(a));return a};
var adjustTypesFromJSONValue=EJSON._adjustTypesFromJSONValue=function(a){if(null===a)return null;var b=fromJSONValueHelper(a);if(b!==a)return b;if("object"!==typeof a)return a;_.each(a,function(b,f){if("object"===typeof b){var l=fromJSONValueHelper(b);b!==l?a[f]=l:adjustTypesFromJSONValue(b)}});return a},fromJSONValueHelper=function(a){if("object"===typeof a&&null!==a&&2>=_.size(a)&&_.all(a,function(a,b){return"string"===typeof b&&"$"===b.substr(0,1)}))for(var b=0;b<builtinConverters.length;b++){var d=
builtinConverters[b];if(d.matchJSONValue(a))return d.fromJSONValue(a)}return a};EJSON.fromJSONValue=function(a){var b=fromJSONValueHelper(a);return b===a&&"object"===typeof a?(a=EJSON.clone(a),adjustTypesFromJSONValue(a),a):b};EJSON.stringify=function(a,b){var d=EJSON.toJSONValue(a);return b&&(b.canonical||b.indent)?EJSON._canonicalStringify(d,b):JSON.stringify(d)};EJSON.parse=function(a){if("string"!==typeof a)throw Error("EJSON.parse argument should be a string");return EJSON.fromJSONValue(JSON.parse(a))};
EJSON.isBinary=function(a){return!!("undefined"!==typeof Uint8Array&&a instanceof Uint8Array||a&&a.$Uint8ArrayPolyfill)};
EJSON.equals=function(a,b,d){var f,l=!(!d||!d.keyOrderSensitive);if(a===b||_.isNaN(a)&&_.isNaN(b))return!0;if(!a||!b||"object"!==typeof a||"object"!==typeof b)return!1;if(a instanceof Date&&b instanceof Date)return a.valueOf()===b.valueOf();if(EJSON.isBinary(a)&&EJSON.isBinary(b)){if(a.length!==b.length)return!1;for(f=0;f<a.length;f++)if(a[f]!==b[f])return!1;return!0}if("function"===typeof a.equals)return a.equals(b,d);if("function"===typeof b.equals)return b.equals(a,d);if(a instanceof Array){if(!(b instanceof
Array)||a.length!==b.length)return!1;for(f=0;f<a.length;f++)if(!EJSON.equals(a[f],b[f],d))return!1;return!0}switch(EJSON._isCustomType(a)+EJSON._isCustomType(b)){case 1:return!1;case 2:return EJSON.equals(EJSON.toJSONValue(a),EJSON.toJSONValue(b))}if(l){var k=[];_.each(b,function(a,b){k.push(b)});f=0;return(a=_.all(a,function(a,l){if(f>=k.length||l!==k[f]||!EJSON.equals(a,b[k[f]],d))return!1;f++;return!0}))&&f===k.length}f=0;return(a=_.all(a,function(a,k){if(!_.has(b,k)||!EJSON.equals(a,b[k],d))return!1;
f++;return!0}))&&_.size(b)===f};
EJSON.clone=function(a){var b;if("object"!==typeof a)return a;if(null===a)return null;if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return a;if(EJSON.isBinary(a)){b=EJSON.newBinary(a.length);for(var d=0;d<a.length;d++)b[d]=a[d];return b}if(_.isArray(a)||_.isArguments(a)){b=[];for(d=0;d<a.length;d++)b[d]=EJSON.clone(a[d]);return b}if("function"===typeof a.clone)return a.clone();if(EJSON._isCustomType(a))return EJSON.fromJSONValue(EJSON.clone(EJSON.toJSONValue(a)),!0);b={};
_.each(a,function(a,d){b[d]=EJSON.clone(a)});return b};EJSON.newBinary=Base64.newBinary;Meteor={isClient:!0,active:!1,currentComputation:null};
var setCurrentComputation=function(a){Meteor.currentComputation=a;Meteor.active=!!a},_debugFunc=function(){return"undefined"!==typeof Meteor?Meteor._debug:"undefined"!==typeof console&&console.log?function(){console.log.apply(console,arguments)}:function(){}},_throwOrLog=function(a,b){if(throwFirstError)throw b;var d;b.stack&&b.message?(d=b.stack.indexOf(b.message),d=0<=d&&10>=d?b.stack:b.message+("\n"===b.stack.charAt(0)?"":"\n")+b.stack):d=b.stack||b.message;_debugFunc()("Exception from Meteor "+
a+" function:",d)},withNoYieldsAllowed=function(a){return"undefined"===typeof Meteor||Meteor.isClient?a:function(){var b=arguments;Meteor._noYieldsAllowed(function(){a.apply(null,b)})}},nextId=1,pendingComputations=[],willFlush=!1,inFlush=!1,inCompute=!1,throwFirstError=!1,afterFlushCallbacks=[],requireFlush=function(){willFlush||(setTimeout(Meteor.flush,0),willFlush=!0)},constructingComputation=!1;
Meteor.Computation=function(a,b){if(!constructingComputation)throw Error("Meteor.Computation constructor is private; use Meteor.run");this.invalidated=this.stopped=constructingComputation=!1;this.firstRun=!0;this._id=nextId++;this._onInvalidateCallbacks=[];this._parent=b;this._func=a;this._recomputing=!1;var d=!0;try{this._compute(),d=!1}finally{this.firstRun=!1,d&&this.stop()}};
Meteor.Computation.prototype.onInvalidate=function(a){var b=this;if("function"!==typeof a)throw Error("onInvalidate requires a function");b.invalidated?Meteor.nonreactive(function(){withNoYieldsAllowed(a)(b)}):b._onInvalidateCallbacks.push(a)};
Meteor.Computation.prototype.invalidate=function(){var a=this;if(!a.invalidated){a._recomputing||a.stopped||(requireFlush(),pendingComputations.push(this));a.invalidated=!0;for(var b=0,d;d=a._onInvalidateCallbacks[b];b++)Meteor.nonreactive(function(){withNoYieldsAllowed(d)(a)});a._onInvalidateCallbacks=[]}};Meteor.Computation.prototype.stop=function(){this.stopped||(this.stopped=!0,this.invalidate())};
Meteor.Computation.prototype._compute=function(){this.invalidated=!1;var a=Meteor.currentComputation;setCurrentComputation(this);inCompute=!0;try{withNoYieldsAllowed(this._func)(this)}finally{setCurrentComputation(a),inCompute=!1}};Meteor.Computation.prototype._recompute=function(){this._recomputing=!0;try{for(;this.invalidated&&!this.stopped;)try{this._compute()}catch(a){_throwOrLog("recompute",a)}}finally{this._recomputing=!1}};Meteor.Dependency=function(){this._dependentsById={}};
Meteor.Dependency.prototype.depend=function(a){if(!a){if(!Meteor.active)return!1;a=Meteor.currentComputation}var b=this,d=a._id;return d in b._dependentsById?!1:(b._dependentsById[d]=a,a.onInvalidate(function(){delete b._dependentsById[d]}),!0)};Meteor.Dependency.prototype.changed=function(){for(var a in this._dependentsById)this._dependentsById[a].invalidate()};Meteor.Dependency.prototype.hasDependents=function(){for(var a in this._dependentsById)return!0;return!1};
Meteor.flush=function(a){if(inFlush)throw Error("Can't call Meteor.flush while flushing");if(inCompute)throw Error("Can't flush inside Meteor.run");willFlush=inFlush=!0;throwFirstError=!(!a||!a._throwFirstError);a=!1;try{for(;pendingComputations.length||afterFlushCallbacks.length;){for(;pendingComputations.length;)pendingComputations.shift()._recompute();if(afterFlushCallbacks.length){var b=afterFlushCallbacks.shift();try{b()}catch(d){_throwOrLog("afterFlush",d)}}}a=!0}finally{a||(inFlush=!1,Meteor.flush({_throwFirstError:!1})),
inFlush=willFlush=!1}};Meteor.run=function(a){if("function"!==typeof a)throw Error("Meteor.run requires a function argument");constructingComputation=!0;var b=new Meteor.Computation(a,Meteor.currentComputation);if(Meteor.active)Meteor.onInvalidate(function(){b.stop()});return b};Meteor.nonreactive=function(a){var b=Meteor.currentComputation;setCurrentComputation(null);try{return a()}finally{setCurrentComputation(b)}};
Meteor.onInvalidate=function(a){if(!Meteor.active)throw Error("Meteor.onInvalidate requires a currentComputation");Meteor.currentComputation.onInvalidate(a)};Meteor.afterFlush=function(a){afterFlushCallbacks.push(a);requireFlush()};var stringify=function(a){return void 0===a?"undefined":EJSON.stringify(a)},parse=function(a){return void 0===a||"undefined"===a?void 0:EJSON.parse(a)};ReactiveMap=function(a){this.keys=a||{};this.keyDeps={};this.keyValueDeps={}};
_.extend(ReactiveMap.prototype,{set:function(a,b){b=stringify(b);var d="undefined";_.has(this.keys,a)&&(d=this.keys[a]);if(b!==d){this.keys[a]=b;var f=this.keyDeps[a];f&&f.changed();this.keyValueDeps[a]&&((d=this.keyValueDeps[a][d])&&d.changed(),(d=this.keyValueDeps[a][b])&&d.changed())}},setDefault:function(a,b){void 0===this.keys[a]&&this.set(a,b)},get:function(a){this._ensureKey(a);this.keyDeps[a].depend();return parse(this.keys[a])},equals:function(a,b){var d=this,f=Package["mongo-livedata"]&&
Meteor.Collection.ObjectID;if(!("string"===typeof b||"number"===typeof b||"boolean"===typeof b||"undefined"===typeof b||b instanceof Date||f&&b instanceof f)&&null!==b)throw Error("ReactiveMap.equals: value must be scalar");var l=stringify(b);if(Meteor.active&&(d._ensureKey(a),_.has(d.keyValueDeps[a],l)||(d.keyValueDeps[a][l]=new Meteor.Dependency),d.keyValueDeps[a][l].depend()))Meteor.onInvalidate(function(){d.keyValueDeps[a][l].hasDependents()||delete d.keyValueDeps[a][l]});f=void 0;_.has(d.keys,
a)&&(f=parse(d.keys[a]));return EJSON.equals(f,b)},_ensureKey:function(a){a in this.keyDeps||(this.keyDeps[a]=new Meteor.Dependency,this.keyValueDeps[a]={})},getMigrationData:function(){return this.keys}});ReactiveVar=function(a,b){if(!(this instanceof ReactiveVar))return new ReactiveVar(a,b);this.curValue=a;this.equalsFunc=b;this.dep=new Meteor.Dependency};ReactiveVar._isEqual=function(a,b){return a!==b?!1:!a||"number"===typeof a||"boolean"===typeof a||"string"===typeof a};
ReactiveVar.prototype.get=function(){Meteor.active&&this.dep.depend();return this.curValue};ReactiveVar.prototype.set=function(a){(this.equalsFunc||ReactiveVar._isEqual)(this.curValue,a)||(this.curValue=a,this.dep.changed())};ReactiveVar.prototype.toString=function(){return"ReactiveVar{"+this.get()+"}"};ReactiveVar.prototype._numListeners=function(){var a=0,b;for(b in this.dep._dependentsById)a++;return a};
ReactiveObject=function(a){var b;this._definePrivateProperty("_items",{});this._definePrivateProperty("_itemsMeteor",{});b=this;_.isArray(a)&&_.each(a,function(a){return b.defineProperty(a,void 0)});_.isObject(a)&&_.each(a,function(a,f){return b.defineProperty(f,a)})};
ReactiveObject.prototype.wrapArrayMethods=function(a,b){var d=this;_.each("pop push reverse shift sort slice unshift splice".split(" "),function(f){b[f]=function(){d._itemsMeteor[a].changed();return Array.prototype[f].apply(this,arguments)}});b.clean=function(){return _.filter(this,function(a){return!Match.test(a,Function)})};return b};
ReactiveObject.prototype.defineProperty=function(a,b){Object.defineProperty(this,a,{configurable:!0,enumerable:!0,get:_.bind(this._propertyGet,this,a),set:_.bind(this._propertySet,this,a)});this[a]=b;return this};ReactiveObject.prototype.undefineProperty=function(a){var b;b=this._itemsMeteor[a];delete this[a];delete this._items[a];delete this._itemsMeteor[a];b&&b.changed();return this};ReactiveObject.prototype.clone=function(){return new ReactiveObject(_.clone(this._items))};
ReactiveObject.prototype.equals=function(a){return null!=a&&a instanceof ReactiveObject&&_.isEqual(a._items,this._items)};ReactiveObject.prototype.typeName=function(){return"reactive-object"};ReactiveObject.prototype.toJSONValue=function(){return EJSON.toJSONValue(this._items)};
ReactiveObject.prototype._propertySet=function(a,b){var d,f;_.isArray(b)&&(b=this.wrapArrayMethods(a,b));this._items[a]=b;null==(d=this._itemsMeteor)[a]&&(d[a]=new Meteor.Dependency);null!=(f=this._itemsMeteor[a])&&f.changed();return this._items[a]};ReactiveObject.prototype._propertyGet=function(a){this._itemsMeteor[a].depend();return this._items[a]};ReactiveObject.prototype._definePrivateProperty=function(a,b){return Object.defineProperty(this,a,{configurable:!0,enumerable:!1,writable:!0,value:b})};
EJSON.addType("reactive-object",function(a){return new ReactiveObject(a)});

(function(deparam){
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        try {
            var jquery = require('jquery');
        } catch (e) {
        }
        module.exports = deparam(jquery);
    } else if (typeof define === 'function' && define.amd){
        define(['jquery'], function(jquery){
            return deparam(jquery);
        });
    } else {
        var global;
        try {
          global = (false || eval)('this'); // best cross-browser way to determine global for < ES5
        } catch (e) {
          global = window; // fails only if browser (https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives)
        }
        global.deparam = deparam(global.jQuery); // assume jQuery is in global namespace
    }
})(function ($) {
    var deparam = function( params, coerce ) {
        var obj = {},
        coerce_types = { 'true': !0, 'false': !1, 'null': null };

        // If params is an empty string or otherwise falsy, return obj.
        if (!params) {
            return obj;
        }

        // Iterate over all name=value pairs.
        params.replace(/\+/g, ' ').split('&').forEach(function(v){
            var param = v.split( '=' ),
            key = decodeURIComponent( param[0] ),
            val,
            cur = obj,
            i = 0,

            // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
            // into its component parts.
            keys = key.split( '][' ),
            keys_last = keys.length - 1;

            // If the first keys part contains [ and the last ends with ], then []
            // are correctly balanced.
            if ( /\[/.test( keys[0] ) && /\]$/.test( keys[ keys_last ] ) ) {
                // Remove the trailing ] from the last keys part.
                keys[ keys_last ] = keys[ keys_last ].replace( /\]$/, '' );

                // Split first keys part into two parts on the [ and add them back onto
                // the beginning of the keys array.
                keys = keys.shift().split('[').concat( keys );

                keys_last = keys.length - 1;
            } else {
                // Basic 'foo' style key.
                keys_last = 0;
            }

            // Are we dealing with a name=value pair, or just a name?
            if ( param.length === 2 ) {
                val = decodeURIComponent( param[1] );

                // Coerce values.
                if ( coerce ) {
                    val = val && !isNaN(val) && ((+val + '') === val) ? +val        // number
                    : val === 'undefined'                       ? undefined         // undefined
                    : coerce_types[val] !== undefined           ? coerce_types[val] // true, false, null
                    : val;                                                          // string
                }

                if ( keys_last ) {
                    // Complex key, build deep object structure based on a few rules:
                    // * The 'cur' pointer starts at the object top-level.
                    // * [] = array push (n is set to array length), [n] = array if n is
                    //   numeric, otherwise object.
                    // * If at the last keys part, set the value.
                    // * For each keys part, if the current level is undefined create an
                    //   object or array based on the type of the next keys part.
                    // * Move the 'cur' pointer to the next level.
                    // * Rinse & repeat.
                    for ( ; i <= keys_last; i++ ) {
                        key = keys[i] === '' ? cur.length : keys[i];
                        cur = cur[key] = i < keys_last
                        ? cur[key] || ( keys[i+1] && isNaN( keys[i+1] ) ? {} : [] )
                        : val;
                    }

                } else {
                    // Simple key, even simpler rules, since only scalars and shallow
                    // arrays are allowed.

                    if ( Object.prototype.toString.call( obj[key] ) === '[object Array]' ) {
                        // val is already an array, so push on the next value.
                        obj[key].push( val );

                    } else if ( {}.hasOwnProperty.call(obj, key) ) {
                        // val isn't an array, but since a second value has been specified,
                        // convert val into an array.
                        obj[key] = [ obj[key], val ];

                    } else {
                        // val is a scalar.
                        obj[key] = val;
                    }
                }

            } else if ( key ) {
                // No value was defined, so set something meaningful.
                obj[key] = coerce
                ? undefined
                : '';
            }
        });

        return obj;
    };
    if ($) {
      $.prototype.deparam = $.deparam = deparam;
    }
    return deparam;
});


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.0
 */
;(function(l){'use strict';l(['jquery'],function($){var k=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};k.defaults={axis:'xy',duration:0,limit:true};function isWin(a){return!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}$.fn.scrollTo=function(f,g,h){if(typeof g==='object'){h=g;g=0}if(typeof h==='function'){h={onAfter:h}}if(f==='max'){f=9e9}h=$.extend({},k.defaults,h);g=g||h.duration;var j=h.queue&&h.axis.length>1;if(j){g/=2}h.offset=both(h.offset);h.over=both(h.over);return this.each(function(){if(f===null)return;var d=isWin(this),elem=d?this.contentWindow||window:this,$elem=$(elem),targ=f,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=d?$(targ):$(targ,elem);if(!targ.length)return;case'object':if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var e=$.isFunction(h.offset)&&h.offset(elem,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a==='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,prev=$elem[key](),max=k.max(elem,a);if(toff){attr[key]=toff[pos]+(d?0:prev-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b),10)||0;attr[key]-=parseInt(targ.css('border'+b+'Width'),10)||0}attr[key]+=e[pos]||0;if(h.over[pos]){attr[key]+=targ[a==='x'?'width':'height']()*h.over[pos]}}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)==='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&h.axis.length>1){if(prev===attr[key]){attr={}}else if(j){animate(h.onAfterFirst);attr={}}}});animate(h.onAfter);function animate(a){var b=$.extend({},h,{queue:true,duration:g,complete:a&&function(){a.call(elem,targ,h)}});$elem.animate(attr,b)}})};k.max=function(a,b){var c=b==='x'?'Width':'Height',scroll='scroll'+c;if(!isWin(a))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,doc=a.ownerDocument||a.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var a=this.get(t);if(t.options.interrupt&&t._last&&t._last!==a){return $(t.elem).stop()}var b=Math.round(t.now);if(a!==b){$(t.elem)[t.prop](b);t._last=this.get(t)}}};return k})}(typeof define==='function'&&define.amd?define:function(a,b){'use strict';if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));


var QueryStringRouter = (function() {

	/*----------  Reacting to route changes  ----------*/

	var reactiveRouterParams = new ReactiveMap();

	//decode query string
	function getQueryStringParams() {
		return deparam(window.location.search.substring(1));
	}

	function getQueryStringParam(key) {
		return deparam(window.location.search.substring(1))[key];
	} 

	//each time this function is fired, all Meteor.run functions will run, but only
	//the ones for which the value changed

	//we diff against the previous params, so that we can remove the params that are not present
	//in the query string from the reactive params
	var previousQueryStringParams = {};
	function processQueryStringParams() {
		var queryStringParams = getQueryStringParams();
		//console.log(previousQueryStringParams);

		//check what previous params are not present in the new query string
		$.each(previousQueryStringParams, function(key, value) {
			if (typeof queryStringParams[key] == 'undefined') {
				reactiveRouterParams.set(key, undefined);
			}
		});

		$.each(queryStringParams, function(key, value) {
			reactiveRouterParams.set(key, value);
		});

		previousQueryStringParams = queryStringParams

		//console.log(queryStringParams);
		//console.log(reactiveRouterParams);

		return queryStringParams;	
	}

	//when document loads, set reactive params 
	processQueryStringParams();

	//when url changes, also set reactive params
	$(window).on('popstate', function() {
		processQueryStringParams();
		//console.log('popstate');
	});

	//when ajax reloads something, also trigger the reactive functions.
	//They should not do anything if nothing was changed
	$(document).on('ajaxComplete', function() {
		//retrigger actions for all params, so that the ajax loaded views are updated
		//TODO: how to do this?
	});

	function queryStringRouterSetParam(key, value, options) {
		var queryStringParams = deparam(window.location.search.substring(1));
		queryStringParams[key] = value;
		var newQueryString = $.param(queryStringParams);

		options = options || {};
		if (options.doNotCreateHistoryState === true) {
			window.history.replaceState('','', '?'+newQueryString);
		} else {
			window.history.pushState('','', '?'+newQueryString);
		}

		$(window).trigger('popstate');    
	}

	function removeParam(key, options) {
		var queryStringParams = deparam(window.location.search.substring(1));
		delete queryStringParams[key];
		var newQueryString = $.param(queryStringParams);

		options = options || {};
		if (options.doNotCreateHistoryState === true) {
			window.history.replaceState('','', '?'+newQueryString);
		} else {
			window.history.pushState('','', '?'+newQueryString);
		}

		$(window).trigger('popstate'); 
	}

	function setFreshParams(newParamsObj, options) {
		var newQueryString = $.param(newParamsObj);

		options = options || {};
		if (options.doNotCreateHistoryState === true) {
			window.history.replaceState('','', '?'+newQueryString);
		} else {
			window.history.pushState('','', '?'+newQueryString);
		}
		$(window).trigger('popstate'); 
	}

	function queryStringRouterGetReactiveParam(key) {
		return reactiveRouterParams.get(key);
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction) {
		//for each key in the reactive router params, define a reactive autorun 
		//Each of the params will react to change independently, only if changed
		Meteor.run(function() {
			var param = reactiveRouterParams.get(key); //note that this is reactive getParam, not the static getQueryStringParam used elsewhere
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
		var param = getQueryStringParam(key);
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

	function setDefaultRootParams(paramsObjects) {
		$(document).ready(function() {
			if (window.location.pathname === "/" & window.location.search === "") {
				setFreshParams(paramsObjects, {doNotCreateHistoryState: true});
			}
		});
	}

	return {
		setParam: queryStringRouterSetParam,
		getAllParams: processQueryStringParams,
		setFreshParams: setFreshParams,
		setDefaultRootParams: setDefaultRootParams,
		getParam: queryStringRouterGetReactiveParam,
		onParamChange: onParamChange,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		version: '1.0'
	}

})();



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



function hideWebflowDropdowns() {
    $(".w-dropdown-list").removeClass("w--open");
    $(".w-dropdown-toggle").removeClass("w--open");
}

//open and close Webflow dropdowns in ajax-loaded content
$(document).on('click tap', '.w-dropdown-toggle', function(event) {
    event.preventDefault();

    var thisDropdownButton = $(this);
    var thisDropdownList = $(this).next(".w-dropdown-list");
    var otherDropdownLists = $('.w-dropdown-list').not(thisDropdownList);
    var otherDropdownButtons = $('.w-dropdown-toggle').not(thisDropdownButton);

    var dropdownIsInitiallyOpen = thisDropdownButton.hasClass('w--open');

    //dirty fix for Webflow dropdowns events interfering
    setTimeout(function() {
        var dropdownIsStillOpen = thisDropdownButton.hasClass('w--open');
        if (dropdownIsInitiallyOpen && dropdownIsStillOpen) {
            thisDropdownButton.removeClass('w--open');
            thisDropdownList.removeClass('w--open');
        } else if (!dropdownIsInitiallyOpen && !dropdownIsStillOpen) {
            thisDropdownButton.addClass('w--open');
            thisDropdownList.addClass('w--open');
        }
    }, 200);

    otherDropdownLists.removeClass('w--open');
    otherDropdownButtons.removeClass('w--open');
});

$(document).on('click.dropdown', document, function(event) {
    //if clicked outside the dropdown button and content, close it
    if ($(event.target).closest(".w-dropdown-toggle").length === 0 && $(event.target).closest(".w-dropdown-list").length === 0) {
        console.log("hide all dropdowns");
        hideWebflowDropdowns() 
    } else {
        //console.log("don't hide dropdowns");
    }
});

//Webflow tabs need this to work with Ajax content
//Add attribute ajax-true for tabs loaded with ajax. This is needed to prevent Webflow switching the tabs twice.
$(document).on('click', '[data-w-tab][ajax="true"]', function() {
    var tabToActivate = $(this).attr('data-w-tab');
    $(this).closest('.w-tabs').find('.w-tab-menu').find('.w--current').removeClass('w--current');
    $(this).closest('.w-tabs').find('.w-tab-content').find('.w--tab-active').removeClass('w--tab-active').end();
    $(this).addClass('w--current').closest('.w-tabs').find('.w-tab-content').find('[data-w-tab="'+tabToActivate+'"]').addClass('w--tab-active').end();
    console.log('ajaxTabs');
});

/* automatic triangles for popup boxes [unfinished]
function addBoxTriangle() {
    var box_background_color;
    var box_border_color;
    box_background_color === $('[box-triangle]').css('background-color');
    box_border_color === $('[box-triangle]').css('border-color');

    //triangles
    var triangle
} */

//sequential tabs, to use tabs as step by step flow
function inititTabsNextPrevActions() {
    $(document).on('click', '[tabs-nav="next"]', function() {
        $(this).closest('.w-tab-content').prev('.w-tab-menu').find('.w-tab-link.w--current').next('.w-tab-link').click();
    });

    $(document).on('click', '[tabs-nav="prev"]', function() {
        $(this).closest('.w-tab-content').prev('.w-tab-menu').find('.w-tab-link.w--current').prev('.w-tab-link').click();
    });
}
  
$(document).ready(function() {
    inititTabsNextPrevActions();
});

//links with attributes, without link blocks
$(document).on('click', '[click-link]', function(e) {
    e.preventDefault();
    console.log('manual link redirect');
    window.location.href = $(this).attr('click-link'); 
});




jQuery.fn.extend({
    fadeOutAndHide: function(duration, classToAdd, functionAfterFadeOut) {

        if (typeof classToAdd === 'undefined') {
            classToAdd = 'is-hidden';
        } else if (typeof classToAdd === 'function') {
            functionAfterFadeOut = classToAdd;
            classToAdd = 'is-hidden';
        }

    	if (this.hasClass(classToAdd) === false) {
    		this.transition({opacity: 0}, duration, function() {
    			$(this).addClass(classToAdd);
                if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
    		});	
    	}
    },
    showAndFadeIn: function(duration, classToRemove, functionBeforeShowing) {
    	if (typeof classToRemove === 'undefined') {
            classToRemove = 'is-hidden';
        } else if (typeof classToRemove === 'function') {
            functionBeforeShowing = classToRemove;
            classToRemove = 'is-hidden';
        }

    	if (this.hasClass(classToRemove) === true) {
	    	this.transition({opacity: 0}, 0, function() {
                $(this).removeClass(classToRemove);
                if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
	    		$(this).transition({opacity: 1}, duration);
	    	});
    	}
    },
    showWithScaleEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }
        
        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.8}, 0, function() {
                if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
                $(this).removeClass(classToToggle);
                $(this).transition({opacity: 1, scale: 1}, duration);
            });
        }
    },
    hideWithScaleEffect: function(duration, classToToggle, functionAfterFadeOut) {
        
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionAfterFadeOut = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (this.hasClass(classToToggle) === false) {
            this.transition({opacity: 0, scale: 0.8}, duration, function() {
                $(this).addClass(classToToggle);
                if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
            }); 
        }
    },
    showWithScaleEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (typeof functionBeforeShowing === 'undefined') {
            functionBeforeShowing = function() {};
        }
        
        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.8}, 0, function() {
                functionBeforeShowing();
                $(this).removeClass(classToToggle);
                $(this).transition({opacity: 1, scale: 1}, duration);
            });
        }
    },    
    loadAndFadeIn: function(whatToLoad, duration, callbackFunctionBeforeFadeIn) {
        var containerToLoadAndFadeIn = this;
        containerToLoadAndFadeIn.transition({opacity: 0}, 0, function() {
            containerToLoadAndFadeIn.load(whatToLoad, function() {
                if (typeof callbackFunctionBeforeFadeIn !== 'undefined') callbackFunctionBeforeFadeIn();
                containerToLoadAndFadeIn.transition({opacity: 1}, duration);
            });
        });   
    },
    // showWithVerticalSlideEffect: function(duration, classToToggle, functionBeforeShowing) {
    //     if (typeof classToToggle === 'undefined') {
    //         classToToggle = 'is-hidden';
    //     } else if (typeof classToToggle === 'function') {
    //         functionBeforeShowing = classToToggle;
    //         classToToggle = 'is-hidden';
    //     }

    //     if ($(this).closest('.slide-transition-wrapper').length === 0) {
    //         $(this).wrap('<div class="slide-transition-wrapper">');
    //     }

    //     var $thisTransitionWrapper = $(this).closest('.slide-transition-wrapper');
    //     var $thisElement = $(this);
        
    //     if ($thisElement.hasClass(classToToggle) === true) {
    //         $thisTransitionWrapper.transition({opacity: 0, maxHeight: 0, overflow: 'hidden'}, 0, function() {
    //             if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
    //             $thisElement.removeClass(classToToggle);
    //             var originalHeight = $thisElement.height();
    //             $thisTransitionWrapper.transition({opacity: 1, maxHeight: originalHeight + 200}, duration, function() {
    //                 $thisTransitionWrapper.attr({style: ''});
    //             });
    //         });
    //     }
    // }, 
    // hideWithVerticalSlideEffect: function(duration, classToToggle, functionAfterFadeOut) {

    //     if (typeof classToToggle === 'undefined') {
    //         classToToggle = 'is-hidden';
    //     } else if (typeof classToToggle === 'function') {
    //         functionAfterFadeOut = classToToggle;
    //         classToToggle = 'is-hidden';
    //     }

    //     if ($(this).closest('.slide-transition-wrapper').length === 0) {
    //         $(this).wrap('<div class="slide-transition-wrapper">');
    //     }

    //     var $thisTransitionWrapper = $(this).closest('.slide-transition-wrapper');
    //     var $thisElement = $(this);

    //     var originalHeight = $thisTransitionWrapper.height();
    //     console.log(originalHeight);

    //     if ($thisElement.hasClass(classToToggle) === false) {
    //         $thisTransitionWrapper.transition({opacity: 1, maxHeight: originalHeight + 200, overflow: 'hidden'}, 0, function() {
    //             $thisTransitionWrapper.transition({opacity: 0, maxHeight: 0}, duration, function() {
    //                 $thisElement.addClass(classToToggle);
    //                 if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
    //                 $thisElement.attr({style: ''});
    //             }); 
    //         });
    //     }
    // },
});

//Idea: show with directional effect, coming from where mouse was clicked
//Get XY coordinates where mouse was clicked on screen
//Get coordinates where the target element is shown on screen
//Calculate the delta between them
//Use this delta for CSS transition XY
jQuery.fn.extend({
    showWithClickTransitionEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (typeof functionBeforeShowing === 'undefined') {
            functionBeforeShowing = function() {};
        }

        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.2}, 0, function() {
                functionBeforeShowing();
                $(this).removeClass(classToToggle);

                var clickX = event.pageX;
                var clickY = event.pageY;

                var leftPos  = this[0].getBoundingClientRect().left   + $(window)['scrollLeft']();
                var rightPos = this[0].getBoundingClientRect().right  + $(window)['scrollLeft']();
                var topPos   = this[0].getBoundingClientRect().top    + $(window)['scrollTop']();
                var bottomPos= this[0].getBoundingClientRect().bottom + $(window)['scrollTop']();
                var centerX = (leftPos+rightPos)/2;
                var centerY = (topPos+bottomPos)/2;

                var xDelta = centerX - clickX;
                var yDelta = centerY - clickY;

                console.log(event);
                console.log(clickY)
                console.log(topPos);
                console.log(xDelta);
                console.log(yDelta);

                $(this).transition({x: -xDelta*2.5, y: -yDelta*2.5}, 0, function() {
                    $(this).transition({opacity: 1, scale: 1, x: 0, y: 0}, duration);
                });
            });
        }

    }
});







/*===================================================
=            Extensible function snippet            =
===================================================*/

var extensibleFunction = function() {
	this.run = function() {
		this.atTheBeginning.apply(this, arguments);
		this.before.apply(this, arguments);
		this.core.apply(this, arguments);
		this.after.apply(this, arguments);
		this.atTheEnd.apply(this, arguments);
	}

	this.atTheBeginning = function() {
		//console.log("--run extensions at the beginning...");
	}

	this.before = function() {
		//console.log("--run extensions before core...");
	}

	this.core = function() {
		//console.log("--run core functions...");
	}

	this.after = function() {
		//console.log("--run extensions after core functions...");
	}

	this.atTheEnd = function() {
		//console.log("--run extensions at the End of the whole function...");
	}

	this.extendCore = function(functionThatExtends) {
		var old = this.core;
		this.core = function() {
			old.apply(this, arguments);
			functionThatExtends.apply(this, arguments);
		}
	}
  
  this.setCoreFunctionality = function(functionThatExtends) {
		var old = this.core;
		this.core = function() {
			old.apply(this, arguments);
			functionThatExtends.apply(this, arguments);
		}
	}

	this.extendBefore = function(functionThatExtends) {
		var old = this.before;
		this.before = function() {
			old.apply(this, arguments);
			functionThatExtends.apply(this, arguments);
		}
	}

	this.extendAfter = function(functionThatExtends) {
		var old = this.before;
		this.after = function() {
			old.apply(this, arguments);
			functionThatExtends.apply(this, arguments);
		}
	}

	this.extendAtTheEnd = function(functionThatExtends) {
		var old = this.atTheEnd;
		this.atTheEnd = function() {
			old.apply(this, arguments);
			functionThatExtends.apply(this, arguments);
		}
	}

	this.extendAtTheBeginning = function(functionThatExtends) {
		var old = this.atTheBeginning;
		this.atTheBeginning = function() {
			old.apply(this, arguments);
			functionThatExtends.apply(this, arguments);
		}
	}

	this.exportedVars = {};

};

/*=====  End of Extensible function snippet  ======*/

BEMDataGrid = (function() {

	var originalHeaderPadding;	

	function ensureAlignemntOfFixedHeader(jQueryObjectWithDataGrids) {

		// .each is needed because there might be more than one such table on the page
		jQueryObjectWithDataGrids.each(function(index) { 
			var $thisContent = $(this).find('.bem-datagrid__content');
			var $thisHeader = $(this).find('.bem-datagrid__header-row');

			var contentWidth = $thisContent.width();
			var contentScrollWidth = $thisContent.prop('scrollWidth');
			var widthDelta = contentWidth - contentScrollWidth;

			if (typeof originalHeaderPadding == 'undefined') {
				originalHeaderPadding = parseInt($thisHeader.css('padding-right').replace("px", ""));
			}

			if (widthDelta > 0 && widthDelta < 40) { //double-checking if the widthDelta number makes sense, it should never be more than 40
				var newPaddingForHeader = originalHeaderPadding + widthDelta;
				$thisHeader.css('padding-right', newPaddingForHeader+'px');
			} else if (widthDelta === 0) {
				$thisHeader.css('padding-right', originalHeaderPadding+'px');
			}
		});

	}

	return {
		ensureAlignemntOfFixedHeader: ensureAlignemntOfFixedHeader
	}
})();

//EXAMPLE usage:
//each time you modify the content of the table, you should ensure that headers are aligned
BEMDataGrid.ensureAlignemntOfFixedHeader($('.bem-datagrid--shared-links'));


var ROOT_QUERYSTRING_PARAMS = {
    //
};

QueryStringRouter.setDefaultRootParams(ROOT_QUERYSTRING_PARAMS);

$(document).on('click', '[action-go-to-home-page]', function(event) {
	QueryStringRouter.setFreshParams(ROOT_QUERYSTRING_PARAMS);
});




///Tooltipster activate
tooltipster_init = new extensibleFunction();
tooltipster_init.setCoreFunctionality(function() {
    $('[tooltipster="top"]').tooltipster({
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        speed: 150,
        maxWidth: 300,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="bottom"]').tooltipster({
        animation: 'fade',
        delay: 20,
        speed: 150,
        position: 'bottom',
        maxWidth: 300,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="left"]').tooltipster({
        animation: 'fade',
        delay: 20,
        speed: 150,
        position: 'left',
        maxWidth: 300,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="right"]').tooltipster({
        animation: 'fade',
        delay: 20,
        speed: 150,
        maxWidth: 300,
        position: 'right',
        maxWidth: 300,
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="right-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'right',
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="top-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'top',
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="left-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'left',
        theme: 'tooltipster-borderless'
    });
    $('[tooltipster="bottom-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'bottom',
        theme: 'tooltipster-borderless'
    });
});

//tooltipster activate
tooltipster_init.run();
$(document).on('ajaxComplete', function() {
    tooltipster_init.run();
});

//Elements with action-open-modal should show modals container and 
// and show the respective modal modal
$(document).on('click', '[action-open-modal]', function(event) {
    var modalToLoad = $(this).attr("action-open-modal");
    QueryStringRouter.setParam('modalContent', modalToLoad);
     
    hideWebflowDropdowns();      
});

$(document).on('click', '[action-close-modal="true"]', function(event) {
    QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
});

function bindEscButtonToCloseModal() {
    $(document).one('keydown.modal', function(event) {
        if (event.which === 27) {
            QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
        }
    });
}

function closeModal() {
    //deselectAll();
    $(".modal-wrapper").fadeOutAndHide(300);
    $('[modal-id]').addClass('hidden');          
}

QueryStringRouter.onParamChange('modalContent', function(value) {
    if (typeof value != 'undefined') {
        $(".modal-wrapper").showAndFadeIn(200, function() {
            $('[modal-id]').not('[modal-id="'+value+'"]').addClass('is-hidden');
            $('[modal-id="'+value+'"]').removeClass('is-hidden');
        });

        //esc button closes modal, binded only after modal was opened
        bindEscButtonToCloseModal();
    } else {
        closeModal();
    }
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //Webflow dropdowns as select dropdown
    //Each dropdown state is stored in a separate reactive local storage state
    $(document).on('click', '[choice-value]', function() {
        var valueToSet = $(this).attr('choice-value');
        var paramToSet = $(this).closest('[action-select-dropdown]').attr('action-select-dropdown');
        ReactiveLocalStorage.setParam(paramToSet, valueToSet);
        $(this).closest('[action-select-dropdown]').find('.select-dropdown__list.w-dropdown-list').removeClass('w--open');
        hideWebflowDropdowns();
    });

    $('[action-select-dropdown]').each(function() {
        var paramToChange = $(this).attr('action-select-dropdown');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            var chosenItem = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value="'+value+'"]');
            var otherNotChosenItems = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value]').not(chosenItem);
            chosenItem.removeClass('is-hidden');
            otherNotChosenItems.addClass('is-hidden');
        });
    });

    $('[action-select-dropdown]').not('[skip-setting-first-available-value-as-default]').each(function() {
        //default state is the first from the dropdown list
        var firstAvailableChoice = $(this).find('[choice-value]').attr('choice-value');
        ReactiveLocalStorage.setDefaultParam(paramToChange, firstAvailableChoice );
    });

});
//

//This will bind all the input fields for the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('blur', '[name]', function(event) {
	var thisNameAttr = $(this).attr('name');
	ReactiveLocalStorage.setParam(thisNameAttr, $(this).val() );
});

$(document).on('input', '[name][update-on-input="true"]', function(event) {
	var thisNameAttr = $(this).attr('name');
	ReactiveLocalStorage.setParam(thisNameAttr, $(this).val() );
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

	//for each input field existing in the html we check if there's a matching state
    $('[name]').each(function() {
        var paramToChange = $(this).attr('name');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            $('[name="'+paramToChange+'"]').val(value);
        });
    });

});

//This will bind all checkboxes with attribute [action-checkbox] the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //Each checkbox state is stored in reactivelocalstorage
    $(document).on('click', '[action-checkbox]', function(event) {
    	var paramToChange = $(this).attr('action-checkbox');
    	var valueToSet;
    	if (ReactiveLocalStorage.getParam(paramToChange) == 'true') {
    		valueToSet = 'false';
    	} else if (ReactiveLocalStorage.getParam(paramToChange) == 'false') {
    		valueToSet = 'true';
    	}

    	ReactiveLocalStorage.setParam(paramToChange, valueToSet );
    });

    $('[action-checkbox]').each(function() {
        var paramToChange = $(this).attr('action-checkbox');
        
        //default state is the Webflow default state based on the class
        var $thisCheckmark = $(this).find('.bem-checkbox__checkmark');
        var initialCheckedState;
        if ($thisCheckmark.hasClass('is-unchecked') ) {
        	initialCheckedState = 'false';
        } else if ( $thisCheckmark.hasClass('is-checked') ) {
        	initialCheckedState = 'true';
        }
        ReactiveLocalStorage.setDefaultParam(paramToChange, initialCheckedState );

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            if (value == 'true') {
            	$thisCheckmark.addClass('is-checked').removeClass('is-unchecked');
            } else if (value == 'false') {
            	$thisCheckmark.removeClass('is-checked').addClass('is-unchecked');
            }
        });
    });

});








/*
How to bind an array?
Add attributes to the DOM
- data-bind-array="paramWithArrayToBind"
- data-bind-repeatable-template="true"
 for the item that will repeat
- data-bind-array-empty-state="true" for empty state container

Then initialise the binding by function, do it in a separate file related to the specific feature
ReactiveLocalStorageDataBindArrayList('transactionsInProgressList', function($elementToAppend, elementData) {
	//callback what to do with each item
	//so you can modify each of then depending on state,

	console.log(elementData);
	if (elementData.status === 'pending') {
		$elementToAppend.find('[data-bind="status__is-pending"]').addClass('is-hidden');
	} else {
		$elementToAppend.find('[data-bind="status__is-pending"]').removeClass('is-hidden');
	}
});


!!!!TODO: prevent the whole list from rerendering when something changes, because this blocks input field!
//Current workaround: focus the input field after each rerender
*/


function ReactiveLocalStorageDataBindArrayList(paramNameWithArray, functionToModifyEachItemBeforeShowing) {

	//DON"T SET DEFAULT EMPTY ARRAY, BECAUSE THERE"S A BUG WITH $.PARAM IN REACTIVELOCALSTORAGE
	//ReactiveLocalStorage.setDefaultParam(paramNameWithArray, []);

	ReactiveLocalStorage.onParamChange(paramNameWithArray, function(value) {

		var $thisList = $('[data-bind-array="'+paramNameWithArray+'"]');

		//there might be more than one table binded to the same array, hence "each"
		$thisList.each(function(thisListIndex, thisListValue) {

			var $repeatableElementTemplate = $thisList.find('[data-bind-repeatable-template]').first();
			var $parentContainerWhereWeAppend = $repeatableElementTemplate.parent();

			//the template is stored in html, so we want to hide it and only use it later
			//as a tempalte source for repeatable items
			$repeatableElementTemplate.addClass('is-hidden'); 

			//empty the list before rerendering
			$thisList.find('[data-bind-repeatable-clone]').remove();

			if (typeof value !== 'undefined' && value.length !== 0 && !$.isEmptyObject(value) ) {
				$thisList.find('[data-bind-array-empty-state]').addClass('is-hidden');

				$.each(value, function(arrayIndex, arrayValue) {

					//prepare template
					var $elementToAppend = $repeatableElementTemplate.clone();
					$elementToAppend.removeAttr('data-bind-repeatable-template');
					$elementToAppend.attr('data-bind-repeatable-clone', 'true');

					//map object attributes as attributes to DOM
					//we need this to quickly reference respective object in ReactiveLocalStorage
					if (typeof arrayValue == 'object') {
						$.each(arrayValue, function(objectIndex, objectValue) {
							$elementToAppend.attr(objectIndex, objectValue);
						});
					}

					$elementToAppend.appendTo($parentContainerWhereWeAppend);

					$elementToAppend.showAndFadeIn(0, function() {
						//we pass the $elementToAppend to the function, so that we can 
						//refer to it from other places where we init the binding
						functionToModifyEachItemBeforeShowing($elementToAppend, arrayValue);
					});
				});
			} else {
				$thisList.find('[data-bind-array-empty-state]').removeClass('is-hidden');
			}

		});
	});
}

//use this to bind elements with attribute data-bind to selected reactive local storage params
function ReactiveLocalStorageDataBindText(objectWithAttrubiteValuePairs) {
	$.each(objectWithAttrubiteValuePairs, function(attribute, bidedParamValue) {
		ReactiveLocalStorage.onParamChange(bidedParamValue, function(value) {
			$('[data-bind="'+attribute+'"').text(value);
		})
	});
};





/* Notes about the convention used here
- subpages are main content views, like a separate subpage in the main card
- subpages are preloaded on page load into their containers
- Only one active subpage is shown at a time
- Tabs and subpages containers share the same id and are binded together this way
*/

//preload all views into respective containers
//until the subpages are loaded the UI is covered by loading overlay
//after they are preloaded, we retrigger the state of all components
//and fade in the UI to prevent flicker
//we can define for what specific events we wait until we show the UI, 
//for example we may want to preload not only subpages, but additional promo modals etc.


function initialLoadHtmlsubpages(callbackFunction) {
	var numberOfSubpagesToLoad = $('[subpage-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[subpage-id]').each(function() {
			var urlSlug = "/subpages";
		    var subpageToLoad = $(this).attr('subpage-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('subpagesReady');
				}
			});
		});	
	} else {
		$(document).trigger('subpagesReady');
		console.log('subpagesReady');
	}

}

function initialLoadModalsContent(callbackFunction) {
	var numberOfSubpagesToLoad = $('[modal-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[modal-id]').each(function() {
			var urlSlug = "/modals";
		    var subpageToLoad = $(this).attr('modal-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('modalsReady');
				}
			});
		});	
	} else {
		$(document).trigger('modalsReady');
		console.log('modalsReady');
	}

}

function initialLoadComponents(callbackFunction) {
	var numberOfSubpagesToLoad = $('[component-id]').length;
	var numberOfCompletedLoads = 0;

	if (numberOfSubpagesToLoad > 0) {
		$('[component-id]').each(function() {
			var urlSlug = "/components";
		    var subpageToLoad = $(this).attr('component-id');
			$(this).load(urlSlug + "/" + subpageToLoad + " .content-to-load", function() {
				numberOfCompletedLoads = numberOfCompletedLoads + 1;

				if (numberOfCompletedLoads === numberOfSubpagesToLoad) {
					if (typeof callbackFunction === 'function') { callbackFunction(); };
					$(document).trigger('componentsReady');
				}
			});
		});	
	} else {
		$(document).trigger('componentsReady');
		if (typeof callbackFunction === 'function') { callbackFunction(); };
		console.log('componentsReady');
	}
}

function waitForInitialAjaxLoadingToFinishThenShowUI(eventsToWaitFor, callbackFunction) {

	var numberOfEventsThatHappened = 0;

	$.each(eventsToWaitFor, function(index, value) {
		$(document).one(value, function() {
			numberOfEventsThatHappened = numberOfEventsThatHappened + 1;
			if (numberOfEventsThatHappened === eventsToWaitFor.length) {
				if (typeof callbackFunction === 'function') { callbackFunction(); };
				$(document).trigger('preloadingComplete');
				console.log('preloading complete');
			}
		});
	});
}

function initTheUIAfterPreloading() {
	QueryStringRouter.retriggerOnParamChangeForAll();
	ReactiveLocalStorage.retriggerOnParamChangeForAll();
	$('.initial-load-overlay').fadeOutAndHide(500);
}

//components should load after subapges and modals
waitForInitialAjaxLoadingToFinishThenShowUI([
	'modalsReady',
	'subpagesReady'
], function() {
	initialLoadComponents(function() {
		initTheUIAfterPreloading();
	});
});

//after all the load dependencies are defined, start loading modals and subpages simulataneously
initialLoadHtmlsubpages();
initialLoadModalsContent();



var globalTempoInterval;

ReactiveLocalStorage.setDefaultParam('tempo', '128');
ReactiveLocalStorage.setDefaultParam('color__1', 'white');
ReactiveLocalStorage.setDefaultParam('color__2', 'black');
ReactiveLocalStorage.setDefaultParam('color__3', 'null');
ReactiveLocalStorage.setDefaultParam('color__4', 'null');
ReactiveLocalStorage.setDefaultParam('tempoMultiplyFactor', '1');

function getTempoIntervalInMilliseconds() {
	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoMultiplyFactor = ReactiveLocalStorage.getParam('tempoMultiplyFactor');
	var tempoInMilliseconds = (60000/tempo)/tempoMultiplyFactor;
	return tempoInMilliseconds;
}

//we have a defined number of colors slots, each stored in separate state
var colorIndexesInReactiveLocalStorage = [
	1,
	2,
	3,
	4,
];

function getColors() {

	//we filter the stored state colors and leave only values
	var resultColorsTable = [];

	$.each(colorIndexesInReactiveLocalStorage, function(arrayIndex, arrayValue) {
		var color = ReactiveLocalStorage.getParam('color__'+arrayValue);
		if (typeof color !== 'undefined' && color !== 'null') {
			resultColorsTable.push(color);
		}
	});

	console.log(resultColorsTable);
	return resultColorsTable;
}

function startChangingColors() {

	var tempoIntervalInMilliseconds = getTempoIntervalInMilliseconds();
	var colorsOrder = getColors();	
	var colorIndex = 0; 

	var changeToNextColor = function() {
		var colorToSet = colorsOrder[colorIndex];
		$('.main-visualisations__fullscreen-color').css('background-color', colorToSet);
		colorIndex = colorIndex + 1;
		if (colorIndex >= colorsOrder.length) {
			colorIndex = 0;
		}
	};

	changeToNextColor();

	clearInterval(globalTempoInterval);
	globalTempoInterval = setInterval(function() {
		changeToNextColor()
	}, tempoIntervalInMilliseconds )

}

function stopChangingColors() {
	clearInterval(globalTempoInterval);
	$('.main-visualisations__fullscreen-color').attr('style', '');
}

ReactiveLocalStorage.onParamChange('tempo', function(value) {
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		startChangingColors();
	}
});

ReactiveLocalStorage.onParamChange('tempoMultiplyFactor', function(value) {
	$('[data-bind="tempo-multiply-factor"]').text(value);

	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		startChangingColors();
	}
});

function onColorChangeWhenStarted(callbackFunction) {
	$.each(colorIndexesInReactiveLocalStorage, function(arrayIndex, arrayValue) {
		ReactiveLocalStorage.onParamChange('color__'+arrayValue+'', function(value) {
			if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
				callbackFunction(value);
			}
		});
	});
}

onColorChangeWhenStarted(function() {
	startChangingColors();
});

//validating tempo input?
ReactiveLocalStorage.onParamChange('tempo', function(value) {
	//if user enteres wrong tempo, we reset to 128
	//TODO: show error below input
	if (isNaN(value)) {
		console.error('Tempo is not a number');
		ReactiveLocalStorage.setParam('tempo', '128');
	}
});

function multiplyTempo(factor) {
	var currentFactor = ReactiveLocalStorage.getParam('tempoMultiplyFactor');
	var updatedFactor = currentFactor*factor;
	ReactiveLocalStorage.setParam('tempoMultiplyFactor', updatedFactor);
}

function divideTempo(factor) {
	var currentFactor = ReactiveLocalStorage.getParam('tempoMultiplyFactor');
	var updatedFactor = currentFactor/factor;
	ReactiveLocalStorage.setParam('tempoMultiplyFactor', updatedFactor);
}

$(document).on('click', '[action-tempo-multiply-2]', function() {
	multiplyTempo(2);
});

$(document).on('click', '[action-tempo-divide-2]', function() {
	divideTempo(2);
});

$(document).on('click', '[action-tempo-multiply-4]', function() {
	multiplyTempo(4);
});

$(document).on('click', '[action-tempo-divide-4]', function() {
	divideTempo(4);
});

//fix placement of last colors dropdown
$('[action-select-dropdown="color__4"]').find('.bem-select-dropdown__list').addClass('is-near-right-edge');

ReactiveLocalStorage.setParam('startedOrStopped', 'stopped'); //always stop when refreshing the page

$(document).on('click', '[action-start]', function() {
	ReactiveLocalStorage.setParam('startedOrStopped', 'started');
});

$(document).on('click', '[action-stop]', function() {
	ReactiveLocalStorage.setParam('startedOrStopped', 'stopped');
});

ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
	if (value === 'started') {
		startChangingColors();
		$('[action-start]').addClass('is-hidden');
		$('[action-stop]').removeClass('is-hidden');
	} else {
		stopChangingColors();
		$('[action-start]').removeClass('is-hidden');
		$('[action-stop]').addClass('is-hidden');
	}
});



ReactiveLocalStorage.setDefaultParam('fullscreen', 'false');

function enterFullscreenMode() {
    $(".left-menu").addClass('is-hidden'); 
    $('.body-wrapper').addClass('is-fullscreen');
    if (ReactiveLocalStorage.getParam('fullscreen') !== 'true') {
        ReactiveLocalStorage.setParam('fullscreen', 'true');
    }
}

function exitFullscreenMode() {
    $('.left-menu').removeClass('is-hidden'); 
    $('.body-wrapper').removeClass('is-fullscreen');
    if (ReactiveLocalStorage.getParam('fullscreen') !== 'false') {
        ReactiveLocalStorage.setParam('fullscreen', 'false');
    }
}

var mouseMovementHideTimer;

//should appear only if mouse movement was large enough, that's why we need counter
var mouseMovementCounter = 0;
var mouseMovementShowTimer = 0;

$('body').on('mousemove', '.body-wrapper', function(event) {

    clearTimeout(mouseMovementHideTimer);
    clearTimeout(mouseMovementShowTimer);

    mouseMovementCounter = mouseMovementCounter + 1;

    if (mouseMovementCounter > 10) {
        exitFullscreenMode();

        mouseMovementHideTimer = setTimeout(function(){ 
            enterFullscreenMode();
            mouseMovementCounter = 0;
        }, 4000);
    }

    mouseMovementShowTimer = setTimeout(function(){ 
        mouseMovementCounter = 0;
    }, 4000);

});

//also show bar on touchstart for mobile
$(document).on('touchstart', '.main-visualisations', function() {
    clearTimeout(mouseMovementHideTimer);
    clearTimeout(mouseMovementShowTimer);
    
    if (ReactiveLocalStorage.getParam('fullscreen') == 'true') {
        exitFullscreenMode();

        mouseMovementHideTimer = setTimeout(function(){ 
            enterFullscreenMode();
        }, 4000);
    } else if (ReactiveLocalStorage.getParam('fullscreen') == 'false') {
        console.log('click when not in fullscreen2');
        enterFullscreenMode();
    }

    event.stopPropagation(); //to prevent bubbling to body-wrapper which exited fullscreen
});

//prevent hiding when clicking in the menu
$(document).on('click', '.left-menu', function(event) {
    clearTimeout(mouseMovementHideTimer);
    clearTimeout(mouseMovementShowTimer);

    event.stopPropagation(); //to prevent bubbling to body-wrapper which exited fullscreen
});




ReactiveLocalStorage.setDefaultParam('blendingColors', 'true');

ReactiveLocalStorage.onParamChange('blendingColors', function(value) {

	var tempo = ReactiveLocalStorage.getParam('tempo');
	var tempoInvervalInMilliseconds = getTempoIntervalInMilliseconds();

	if (value == 'true') {
		$('.main-visualisations__fullscreen-color').addClass('is-blended')
		.css('transition', 'background-color '+tempoInvervalInMilliseconds+'ms');
	} else {
		$('.main-visualisations__fullscreen-color').removeClass('is-blended')
		.css('transition', 'none');
	}
});

ReactiveLocalStorage.onParamChange('tempo', function(value) {
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		ReactiveLocalStorage.retriggerOnParamChange('blendingColors');
	}
});

ReactiveLocalStorage.onParamChange('tempoMultiplyFactor', function(value) {
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		ReactiveLocalStorage.retriggerOnParamChange('blendingColors');
	}
});

var keyNameToCode = {"Backspace":8,"Tab":9,"Enter":13,"Shift":16,"Ctrl":17,"Alt":18,"Pause/Break":19,"Caps Lock":20,"Esc":27,"Space":32,"Page Up":33,"Page Down":34,"End":35,"Home":36,"Left":37,"Up":38,"Right":39,"Down":40,"Insert":45,"Delete":46,"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90,"Windows":91,"Right Click":93,"Numpad 0":96,"Numpad 1":97,"Numpad 2":98,"Numpad 3":99,"Numpad 4":100,"Numpad 5":101,"Numpad 6":102,"Numpad 7":103,"Numpad 8":104,"Numpad 9":105,"Numpad *":106,"Numpad +":107,"Numpad -":109,"Numpad .":110,"Numpad /":111,"F1":112,"F2":113,"F3":114,"F4":115,"F5":116,"F6":117,"F7":118,"F8":119,"F9":120,"F10":121,"F11":122,"F12":123,"Num Lock":144,"Scroll Lock":145,"My Computer":182,"My Calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222};

function toggleStartOrStop() {
	console.log('toggle start or stopped');
	if (ReactiveLocalStorage.getParam('startedOrStopped') === 'started') {
		ReactiveLocalStorage.setParam('startedOrStopped', 'stopped');
	} else if (ReactiveLocalStorage.getParam('startedOrStopped') === 'stopped') {
		ReactiveLocalStorage.setParam('startedOrStopped', 'started');
	}
}

var checkIfTextInputIsInFocus = function() {
	return $('input').is(":focus") || $('textarea').is(":focus"); 
};

$(document).on('keydown', function(e){
	if( !checkIfTextInputIsInFocus() ) {
		if (e.keyCode === keyNameToCode["Space"]) { 
			toggleStartOrStop();
			enterFullscreenMode();
		} else if (e.keyCode === keyNameToCode["B"]) {
		    $('[action-checkbox="blendingColors"]').trigger('click');
		} else if (e.keyCode === keyNameToCode["Left"]) {
		    $('[action-tempo-divide-2]').trigger('click');
		} else if (e.keyCode === keyNameToCode["Right"]) {
		    $('[action-tempo-multiply-2]').trigger('click');
		} else if (e.keyCode === keyNameToCode["T"]) {
			$('[action-tap-tempo]').trigger('mousedown');
		//binding numers to presets	
		} else if (e.keyCode === keyNameToCode["1"]) {
		    triggerPlayOfPresetOfIndexX(0);
		} else if (e.keyCode === keyNameToCode["2"]) {
		    triggerPlayOfPresetOfIndexX(1);
		} else if (e.keyCode === keyNameToCode["3"]) {
		    triggerPlayOfPresetOfIndexX(2);
		} else if (e.keyCode === keyNameToCode["4"]) {
		    triggerPlayOfPresetOfIndexX(3);
		} else if (e.keyCode === keyNameToCode["5"]) {
		    triggerPlayOfPresetOfIndexX(4);
		} else if (e.keyCode === keyNameToCode["6"]) {
		    triggerPlayOfPresetOfIndexX(5);
		} else if (e.keyCode === keyNameToCode["7"]) {
		    triggerPlayOfPresetOfIndexX(6);
		} else if (e.keyCode === keyNameToCode["8"]) {
		    triggerPlayOfPresetOfIndexX(7);
		} else if (e.keyCode === keyNameToCode["9"]) {
		    triggerPlayOfPresetOfIndexX(8);
		}
	}
});

function triggerPlayOfPresetOfIndexX(indexNumber) {
	$('.presets-list__row[data-bind-repeatable-clone="true"]').eq(indexNumber).find('[action-play-preset="true"]').trigger('click');
};

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



var TapTempo = (function(){

  var listOfTapDates = [];
  var listOfTapsDelays = [];
  var triggerTimer;

  var pushDate = function() {
    listOfTapDates.push(Date.now());
  };

  var pushDelay = function() {
    $.each(listOfTapDates, function(index, value) {
      if (index > 0) {
        var thisTapDate = value;
        var previousTapDate = listOfTapDates[index - 1];
        var delayAfterPreviousTap = thisTapDate - previousTapDate;

        listOfTapsDelays.push(delayAfterPreviousTap);
      }
    });
  };  

  var getAvgFromArray = function(array) {
    var sum = array.reduce(function (p, c) {
      return p + c;
    });

    var avg = sum / array.length;

    return avg;
  }

  var calculateResultBpm = function() {
    var averageDelayBetweenTaps = getAvgFromArray(listOfTapsDelays);
    var numberOfMillisecondsInMinute = 60000;
    var resultBpm = (numberOfMillisecondsInMinute/averageDelayBetweenTaps);
    return resultBpm;
  }

  var resetAllGatheredTappingData = function() {
     listOfTapDates = [];
     listOfTapsDelays = [];
  };
  
  var triggerCalculation = function() {
    clearTimeout(triggerTimer);

    pushDate();

    if (listOfTapDates.length > 1) {
      pushDelay();
      var resultBpm = calculateResultBpm();
      $(document).trigger('tempoSetByTapping', resultBpm)
    }

    triggerTimer = setTimeout(function() {
        resetAllGatheredTappingData();
    }, 2000);
  }

  return {
    triggerCalculation: triggerCalculation
  }

})();

$(document).on('mousedown', '[action-tap-tempo]', function() {
  TapTempo.triggerCalculation();
});

$(document).on('tempoSetByTapping', function(event, bpm) {
  ReactiveLocalStorage.setParam('tempo', bpm);
});

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

//this will automatically go into fullscreen mode whenever play is triggered
ReactiveLocalStorage.onParamChange('startedOrStopped', function(value) {
	if (value === 'started') {
		$('body').fullscreen();
		enterFullscreenMode(); //also hides the menu
	}
});		



//# sourceMappingURL=scripts.js.map