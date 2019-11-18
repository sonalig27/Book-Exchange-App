/* <script type="text/javascript">
document.getElementById("myButton").onclick = function () {
    location.href = "file:///C:/Users/ketul/OneDrive/Desktop/Sem2/IWS/Project/ISBN.html";
};
</script> */


function validateEmail(emailField){
    var reg = /^[a-zA-Z0-9_]+@student\.uml\.edu$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Enter a valid UML student email address');
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
    if(email == ''){
        alert("Email can't be empty");
        return false;
    }
    if (!email.match(emailReg)) {
        alert('Enter a valid UML student email address');
        return false;
    }
    if (password == '') {
        alert("Password can't be empty");
        return false;
    }
    if(password.length < 5){
        alert("Password you entered is incorrect");
        return false;
        }
    return true;
    }

    function yesnoCheck() {
        if (document.getElementById('Sell').checked) {
            document.getElementById("rentDepositAmount").style.display = 'none';
            document.getElementById("rentDueDate").style.display = 'none';
        }else {
            document.getElementById("rentDepositAmount").style.display = 'block';
            document.getElementById("rentDueDate").style.display = 'block';
        }    
    }