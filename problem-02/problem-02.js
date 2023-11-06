function validatePassword() {
    let password = document.login.password.value;
    let regex = /[A-Z]+[a-z]*[0-9]*/g;
    let match = regex.exec(password);

    if (match === null) {
        alert("Password must contain at least 1 uppercase and no special characters!");
    }
}