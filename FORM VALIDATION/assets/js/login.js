function validate() {
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";

    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if (fname == "") {
        document.getElementById('fnameError').innerHTML = "Username is required.";
        return false;
    }
    if (email == "") {
        document.getElementById('emailError').innerHTML = "Email is required.";
        return false;
    } if (pass == "") {
        document.getElementById('passError').innerHTML = "Password is required.";
        return false;
    }
    return true;
}