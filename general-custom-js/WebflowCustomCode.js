function hideWebflowDropdowns() {
    $(".w-dropdown-list").removeClass("w--open");
    $(".w-dropdown-toggle").removeClass("w--open");
}

//open and close Webflow dropdowns in ajax-loaded content
$(document).on('click', '.w-dropdown-toggle', function(event) {
    event.preventDefault();

    var thisDropdownButton = $(this);
    var thisDropdownList = $(this).next(".w-dropdown-list");
    var otherDropdownLists = $('.w-dropdown-list').not(thisDropdownList);
    var otherDropdownButtons = $('.w-dropdown-toggle').not(thisDropdownButton);

    thisDropdownButton.toggleClass('w--open');
    thisDropdownList.toggleClass("w--open");
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


