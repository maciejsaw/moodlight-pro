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