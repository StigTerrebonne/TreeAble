'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    lightGallery(document.getElementById('lightgallery'), {
        pager: true,
        mode:'lg-fade',
        thumbnail: true
    });
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});