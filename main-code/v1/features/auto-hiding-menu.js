ReactiveLocalStorage.setDefaultParam('fullscreen', 'false');

function enterFullscreenMode() {
    $(".left-menu").addClass('is-hidden'); 
    $('.body-wrapper').addClass('is-fullscreen');
    ReactiveLocalStorage.setParam('fullscreen', 'true');
}

function exitFullscreenMode() {
    $('.left-menu').removeClass('is-hidden'); 
    $('.body-wrapper').removeClass('is-fullscreen');
    ReactiveLocalStorage.setParam('fullscreen', 'false');
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

//also show bar on clicks
$(document).on('click touchstart', '.body-wrapper', function() {
    if (ReactiveLocalStorage.getParam('fullscreen') == 'true') {
        clearTimeout(mouseMovementHideTimer);
        clearTimeout(mouseMovementShowTimer);

        exitFullscreenMode();

        mouseMovementHideTimer = setTimeout(function(){ 
            enterFullscreenMode();
        }, 4000);
    }
});

$(document).on('click touchstart', '.main-visualisations', function(event) {
    if (ReactiveLocalStorage.getParam('fullscreen') == 'false') {
        console.log('click when not in fullscreen');
        enterFullscreenMode();
        event.stopPropagation();
    }
});

