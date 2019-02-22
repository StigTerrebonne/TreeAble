'use strict';

$(document).ready(function () {
    $('#individual-post').hide();
    $('#indiv-post0').hide();
    $('#indiv-post1').hide();
    $('#indiv-post2').hide();

    $('#post0 a.disc-post').click(function () {
        $('#individual-post').show();
        $('#indiv-post0').show();
        $('#posts-container').hide();
    });

    $('#post1 a.disc-post').click(function () {
        $('#individual-post').show();
        $('#indiv-post1').show();
        $('#posts-container').hide();
    });

    $('#post2 a.disc-post').click(function () {
        $('#individual-post').show();
        $('#indiv-post2').show();
        $('#posts-container').hide();
    });

    $('#add-comment-btn').click(function () {
        var postNum = 0;
        console.log($('#comment-box'));
        var text = $('#comment-box')[0].value;

        if ($('#indiv-post1').is(':visible')) {
            postNum = 1;
        } else if ($('#indiv-post2').is(':visible')) {
            postNum = 2;
        }
        console.log(text);
        $.post('/add-comment', {
            "postNum": postNum,
            "comment": text,
        }, function (data) {

        });
    });

    $('.back-button').click(function (e) {
        if ($('#posts-container').is(':visible')) {
            window.history.back();
        } else {
            $('#individual-post').hide();
            $('#indiv-post0').hide();
            $('#indiv-post1').hide();
            $('#indiv-post2').hide();
            $("input.form-control").show();
            $('#posts-container').show();
        }
    });

    // Upload picture to server code
	$('#upload-picture').on('submit', function (e) {
		var form = $(this);
		var formdata = new FormData(form[0]);

		$.ajax({
			url: '/upload-picture',
			data: formdata,
			cache: false,
			contentType: false,
			processData: false,
			type: 'POST',
			success: function (data, textStatus, jqXHR) {
				alert(data);
			}
		});

	});
})