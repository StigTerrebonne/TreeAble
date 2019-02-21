function login() {
  FB.login(function (responce) {
    if (response.authResponse) {
      console.log('Successfully logged in with Facebook');
      FB.api('/me?fields=name,first_name,email,picture.width(480)', changeUser);
    } 
    else {
      console.log("Login attempt failed");
    }
  }, {scope: 'public_profile, email'});
}

function changeUser(response){
  console.log(response);
  var name = response.name;
  var email = response.email;
  var image = response.picture.data.url;
  var newUser = {'name': name, 'email': email, 'image': image};
  
  var users = require("../profile.json");
  users.profile.push(newUser);
}