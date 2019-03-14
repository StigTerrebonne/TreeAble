'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    $('#leaderboard').DataTable();

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
				$('#upload-body-info').append(
					`<br /><p>${data}</p>`
				);
			}
		});
		e.preventDefault();
	});
})

$('#count').each(function () {
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