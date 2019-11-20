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

$(document).ready(function(){
  $("#search-submit").click(function() {
  var search = $("#book").val();
  
  if (search == '')
  {
   alert("Please enter something in this field");
  }
  else{
  var url = '';
  var img = '';
  var title = '';
  var author = '';
  var publisher = '';
  
  $.get("https://www.googleapis.com/books/v1/volumes?q="+ search, function(data){
    title=$('<h5 class="form-group">Book Title: '+ data.items[0].volumeInfo.title + '</h5>');
  
   author=$('<h5 class="form-group">Book Author: '+ data.items[0].volumeInfo.authors + '</h5>');

   publisher=$('<h5 class="form-group">Book Publisher: '+ data.items[0].volumeInfo.publisher + '</h5>');
  
   img=$('<img class="form-group card z-depth-5" id = "dynamic"><br><a href =' + data.items[0].volumeInfo.infoLink + '><button id= "imagebutton" class="btn red form-group">Read More </button></a>');

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