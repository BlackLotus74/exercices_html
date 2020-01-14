window.addEventListener('DomContentLoaded', function () {
    
    const $ = (s, o = document) => o.querySelector(s);
    const $$ = (s, o = document) => o.querySelectorAll(s);

    $('.restart').addEventListener('click', e => {

        e.preventDefault();

        $$('.loading').forEach(elem => {
            elem.parentNode.replaceChild(elem.cloneNode(true), elem);
        });

    });

    // Reload trick for css animation from here https://css-tricks.com/restart-css-animation

});