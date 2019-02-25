'use strict';

$(document).ready(function () {
    $('#individual-post').hide();
    $('#indiv-post0').hide();
    $('#indiv-post1').hide();
    $('#indiv-post2').hide();

    $('#post0 button.disc-post').click(function () {
        $('#individual-post').show();
        $('#indiv-post0').show();
        $('#posts-container').hide();
    });

    $('#post1 button.disc-post').click(function () {
        $('#individual-post').show();
        $('#indiv-post1').show();
        $('#posts-container').hide();
    });

    $('#post2 button.disc-post').click(function () {
        $('#individual-post').show();
        $('#indiv-post2').show();
        $('#posts-container').hide();
    });

    $('#add-comment-btn').click(function () {
        var postNum = 0;
        var text = $('#comment-box')[0].value;

        if ($('#indiv-post1').is(':visible')) {
            postNum = 1;
        } else if ($('#indiv-post2').is(':visible')) {
            postNum = 2;
		}
		
		if(text.length > 0) {
			$.post('/add-comment', {
				"postNum": postNum,
				"comment": text,
			}, function (data) {
				$(`#indiv-post${postNum}`).append(`
					<div class="row comment">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header">
									<h5>${data.user}</h5>
								</div>
								<div class="card-body">
									<p class="card-text">${text}</p>
								</div>
							</div>
						</div>
					</div>
					<br />`
                );
                $('#comment-box').val('');
			});
		} else {
			alert("You didn't enter anything!");
		}
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