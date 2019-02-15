'use strict';

$(document).ready(function() {
    // jQuery click listener for the discussion posts
    $("#posts-container").click(function(e) {
        e.preventDefault();

        // Hide all posts and search bar
        $(this).hide();
        $("input.form-control").hide();

        var projectID = $('.panel-group').find('.single-post').attr('id');
        var url = 'discussion/' + projectID;

        $.get(url, function(response) {
            var postHTML =
                "<div class='panel-group'>" +
                    "<div id=" + response['id'] + "class='panel panel-default'>" +
                        "<div class='panel-heading'>" + response['title'] + "</div>" +
                        "<div class='panel-body'>" + response['preview'] + "</div>" +
                    "</div>" +
                "<br />" +
                "</div>" +

                "<form class='form-inline' role='form'>" +
                    "<div class='form-group'>" +
                        "<input class='form-control' type='text' placeholder='Add comment here' />" +
                    "</div>" +
                    "<div class='form-group'>" +
                        "<button class='btn btn-default'>Reply</button>" +
                    "</div>" +
                "</form>";
            
            $('#individual-post').html(postHTML);
        });

        $('#individual-post').show();
    });


    $('.back-button').click(function (e) {
        if($('#posts-container').is(':visible')) {
            window.history.back();
        } else {
            $('#individual-post').hide();
            $("input.form-control").show();
            $('#posts-container').show();
        }
    });
})