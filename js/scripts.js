$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

    if (age >=18) {
      $('#adults').show();
    } else {
      $('#minors').show();
    }

});
