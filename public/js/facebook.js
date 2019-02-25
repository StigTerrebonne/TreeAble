function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        FB.api('/me?fields=name,first_name,email,picture.width(480)', changeUser);
        // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');

    }
}

function changeUser(response) {
    var name = response.name;
    var username = response.first_name + Math.ceil(Math.random() * 999 + 1);
    var email = response.email;
    var image = response.picture.data.url;

    var json = {
        "name": name,
        "username": username,
        "email": email,
        "image": image
    }

    $.post("/update-user", json, function (data) {
        window.location.replace('/home');
    });

}