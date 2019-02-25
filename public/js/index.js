$(document).ready(function() {
	$('#chevron').click(function () {
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 900);
	});

	$('#create-account-btn').click(function() {
	 	var name = $('#acc-name').val();
	 	var username = $('#acc-username').val();
	 	var email = $('#acc-email').val();
	 	var password = $('#acc-password').val();
		
		var newUser = {
			"username": username,
			"password": password,
			"email": email,
			"name": name,
			"image": "https://qph.fs.quoracdn.net/main-qimg-7ca600a4562ef6a81f4dc2bd5c99fee9-c"
		}

		if(password === $('#confirm-password').val()) {
			$.post('/create-account', newUser, function(res) {
				if(res === 'account created') {				
					$.post('/update-user', newUser, function (data) {
						window.location.replace('/home');
					});
				} else {
					alert('Account already exists! Please log in instead.');
				}
			})
		} else {
			alert('Passwords don\'t match!');
		}

		$('#acc-name').val('');
		$('#acc-username').val('');
		$('#acc-email').val('');
		$('#acc-password').val('');
		$('#confirm-password').val('');
	});

	$('#login-btn').click(function() {
		var email = $('#login-email').val();
		var password = $('#login-password').val();

		var credentials = {
			"email": email,
			"password": password,
			"name": "",
			"username": "",
			"image": "https://qph.fs.quoracdn.net/main-qimg-7ca600a4562ef6a81f4dc2bd5c99fee9-c"
		}

		$.post('/verify-login', credentials, function(res) {
			if(res === 'account doesn\'t exist') {
				alert('Account doesn\'t exist. Please create an account.');
			} else if(res === 'password doesn\'t match') {
				alert('Email or password is incorrect.');
			} else {
				credentials.name = res.name;
				credentials.username = res.username;
				$.post('/update-user', credentials, function(res) {
					window.location.replace('/home');
				});
			}
		});

		$('#login-email').val('');
		$('#login-password').val('');
	});
});
	