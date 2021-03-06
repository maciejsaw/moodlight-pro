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

		//when keyboard is clicked, always hide the menu
		enterFullscreenMode();

		if (e.keyCode === keyNameToCode["Space"]) { 
			toggleStartOrStop();
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