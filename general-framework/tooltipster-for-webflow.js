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