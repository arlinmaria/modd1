function validation() {

    status = 1;
    
    
    count = 0;
    
    localStorage.setItem("count", count);
    
    firstname_error = document.getElementById("firstname_error");
    email = document.getElementById("email");
    phone = document.getElementById("phone");
    password = document.getElementById("password");
    confirm_password
    document.getElementById("confirm_password");

firstname_error = document.getElementById("firstname_error");
email_error = document.getElementById ("email_error");
phone_error = document.getElementById("phone_error");
password_error = document.getElementById ("password_error");

if (firstname.value == "") {
status = 0;
firstname.style.borderColor = "#FF0000";
firstname_error.style.display = "block"
firstname_error.style.color = "#FF0000"
firstname_error.innerHTML = "Please enter your first name";
} else {
firstname.style.borderColor = "#ced4da"
firstname_error.style.display = "none"
}}