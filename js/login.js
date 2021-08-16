document.getElementById('login-button').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    //redirect to another page on checking email and password
    if (userEmail == 'user@functionalbank.com' && userPassword == 'secret60') {
        window.location.href = 'banking.html';
    }
    else {
        document.getElementById('incorrect-message').innerText = 'Incorrect username or password';
        document.getElementById('section-1').style.borderColor = 'red';
        document.getElementById('email-field').style.borderColor = 'red';
        document.getElementById('password-field').style.borderColor = 'red';
    }
});