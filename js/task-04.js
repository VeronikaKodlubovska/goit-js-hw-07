const registeredForm = document.querySelector('.login-form');
const emailEl = registeredForm.querySelector('label input[type = "email"]')
const passwordEl = registeredForm.querySelector('label input[type = "password"]')
const buttonEl = registeredForm.querySelector('label input[type = "submit"]')

registeredForm.addEventListener("submit", register);

function register(event) {
    event.preventDefault();
    const form = event.target;
    const addedEmail = form.elements.email.value.trim();
    const addedPassword = form.elements.password.value.trim();

    if (addedEmail === "" || addedPassword === "") {
        alert("All form fields must be filled in")
        return;
    }
    const formData = {
        email: addedEmail,
        password: addedPassword,
    };
    console.log(formData);
    registeredForm.reset();
}