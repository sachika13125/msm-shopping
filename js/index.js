$('#loginForm').submit(function(e) {
    e.preventDefault();
    var emailInput = $('#email').val();
    var passwordInput = $('#password').val();

    if (emailInput == '') {
        alert("Email is null");
    } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
        alert("It's not an email type");
    } else if (passwordInput == '') {
        alert("Password is null");
    } else if (passwordInput.length < 12) {
        alert("Include at least 12 letters");
    } else if (!/[A-Z]/.test(passwordInput)) {
        alert("Include at least 1 uppercase");
    } else if (!/[0-9]/.test(passwordInput)) {
        alert("Include at least 1 number");
    } else {
        window.location.href = "shopping.html";    
    }
});




