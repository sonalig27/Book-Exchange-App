function validateEmail(emailField) {
  var reg = /^[a-zA-Z0-9_]+@student\.uml\.edu$/;
  if (reg.test(emailField.value) == false) {
    alert("Enter a valid UML student email address");
    return false;
  }
  return true;
}
// Below Function Executes On Form Submit
function loadPage() {
  // Storing Field Values In Variables
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // Regular Expression For Email
  var emailReg = /^[a-zA-Z0-9_]+@student\.uml\.edu$/;
  // Conditions
  if (email == "") {
    alert("Email can't be empty");
    return false;
  }
  if (!email.match(emailReg)) {
    alert("Enter a valid UML student email address");
    return false;
  }
  if (password == "") {
    alert("Password can't be empty");
    return false;
  }
  if (password.length < 5) {
    alert("Password you entered is incorrect");
    return false;
  }
  return true;
}

function yesnoCheck() {
  if (document.getElementById("Sell").checked) {
    document.getElementById("rentDepositAmount").style.display = "none";
    document.getElementById("rentDueDate").style.display = "none";
  } else {
    document.getElementById("rentDepositAmount").style.display = "block";
    document.getElementById("rentDueDate").style.display = "block";
  }
}

function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
$(document).ready(function(){
  $("#search-submit").click(function() {
    $('#result').html('');
  var search = $("#book").val();
  document.getElementById('book').value = '';
  if (search == '' || search.length < 10 || search.length == 11 || search.length == 12)
  {
   alert("Please enter a valid ISBN number, it is either 10 digit or 13 digit");
  }
  else{
  var url = '';
  var img = '';
  var title = '';
  var author = '';
  var publisher = '';
  
  $.get("https://www.googleapis.com/books/v1/volumes?q="+ search, function(data){
    title=$('<h6 class="form-group">Book Title: '+ data.items[0].volumeInfo.title + '</h6>');
  
   author=$('<h6 class="form-group">Book Author: '+ data.items[0].volumeInfo.authors + '</h6>');

   publisher=$('<h6 class="form-group">Book Publisher: '+ data.items[0].volumeInfo.publisher + '</h6>');
  
   img=$('<img class="form-group card z-depth-5" id = "dynamic"><br><a href =' + data.items[0].volumeInfo.infoLink + '><button id= "readmore" type="button" class="btn btn-primary mb-2 form-group">Read More </button></a><button id= "request" type="button" class="btn btn-primary mb-2 form-group">Request Book </button>');

   url= data.items[0].volumeInfo.imageLinks.thumbnail;
  
   img.attr('src',url);
  title.appendTo("#result");
  author.appendTo("#result");
  publisher.appendTo("#result");
  img.appendTo("#result");
});
  }
  });
  return false;
  
  });