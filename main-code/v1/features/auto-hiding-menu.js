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

$('body').on('mousemove', '.main-visualisations, .left-menu', function(event) {

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

    event.stopPropagation(); //to prevent bubbling to body-wrapper which exited fullscreen
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

//also show bar on touchstart for mobile
$(document).on('touchstart', '.quick-buttons', function() {    
    enterFullscreenMode();
    event.stopPropagation(); //to prevent bubbling to body-wrapper which exited fullscreen
});

//prevent hiding when clicking in the menu
$(document).on('click touchstart', '.left-menu', function(event) {
    clearTimeout(mouseMovementHideTimer);
    clearTimeout(mouseMovementShowTimer);

    event.stopPropagation(); //to prevent bubbling to body-wrapper which exited fullscreen
});


