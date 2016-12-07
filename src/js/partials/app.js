$(document).ready(function() {
    //---- TOP SLIDER SETTINGS -----
    $('#my-slide').DrSlider({
        width: undefined,
        height: undefined,
        userCSS: false,
        transitionSpeed: 1000,
        duration: 4000,
        showNavigation: false,
        classNavigation: undefined,
        navigationColor: '#9F1F22',
        navigationHoverColor: '#D52B2F',
        navigationHighlightColor: '#DFDFDF',
        navigationNumberColor: '#000000',
        positionNavigation: 'out-center-bottom',
        navigationType: 'circle',
        showControl: true,
        classButtonNext: undefined,
        classButtonPrevious: undefined,
        controlColor: '#FFFFFF',
        controlBackgroundColor: '#000000',
        positionControl: 'left-right',
        transition: 'fade',
        showProgress: false,
        progressColor: '#797979',
        pauseOnHover: false,
        onReady: undefined
    });

    $('#my-slide').hover(function () {
        $('.button-slider').fadeIn(400, function () { });
    }, function () {
        $('.button-slider').fadeOut(400, function () { });
    });
    //---- End top slider settings -----
});