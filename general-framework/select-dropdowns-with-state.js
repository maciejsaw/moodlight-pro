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
