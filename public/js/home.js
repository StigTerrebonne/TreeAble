'use strict';

$(document).ready(function () {
	chart();

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

	$('#upload-btn').click(function(e) {
		e.preventDefault();
		ga('create','UA-135070139-1', 'auto');
		ga('send', 'event', 'open-modal', 'click');
	});
	$('#upload-input').click(function(e) {
		e.preventDefault();
		ga('create',, 'UA-135070139-1', 'auto');
		ga('send', "event", 'upload', 'click');
	});
	$('#choose-file').click(function(e) {
		e.preventDefault();
		ga('create', 'UA-135070139-1', 'auto');
		ga("send", "event", 'choose-file', 'click');
	});
});

function chart() {
	var options = {
		chart: {
			height: 350,
			type: 'line',
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		series: [{
			name: "Items recycled",
			data: [0, 4, 2, 3, 1, 4, 5]
		}],
		title: {
			text: 'Weekly Recycling Progress Chart',
			align: 'left'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			},
		},
		xaxis: {
			categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
		}
	}

	var variable = $('#progress-chart');
	var chart = new ApexCharts(document.querySelector("#progress-chart"), options);


	chart.render().then(function (res) {

	})
		.catch(function (err) {
			console.log(err);
		});
}