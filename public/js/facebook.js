function checkLoginState() {
  FB.login(function(response) {
    if (response.status === 'connected') {
      console.log('Successfully logged in with Facebook');
      FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    } 
    else {
      console.log('Did Not login to Facebook'); 
    }
  },{scope: 'public_profile,email'});
}

function changeUser(response){
  console.log(response);
  $('.facebookLogin').hide();
  $('#name').text(response.name);
  $('#photo').attr('src',response.picture.data.url);
}