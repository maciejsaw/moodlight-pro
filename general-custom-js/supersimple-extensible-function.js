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