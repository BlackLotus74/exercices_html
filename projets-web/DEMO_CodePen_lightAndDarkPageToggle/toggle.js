window.addEventListener('DOMContentLoaded', () => {

    $( ".mask" ).click(function() {
        $( ".icon-wrap" ).toggleClass('active');
        $('body, .bar').toggleClass('dark');
    });
});