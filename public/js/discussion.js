'use strict';

$(document).ready(function() {
    // jQuery click listener for the discussion posts
    $('#post0').click(function(e) {
        // render json data in second div
    });

    $('#post1').click(function(e) {
        // render json data in second div
    });

    $('#post2').click(function(e) {
        // render json data in second div
    });

    $('.back-button').click(function(e) {
        if($('#posts-container').is(':visible')) {
            window.history.back();
        } else {
            $('#individual-post').hide();
            $("input.form-control").show();
            $('#posts-container').show();
        }
    });
})