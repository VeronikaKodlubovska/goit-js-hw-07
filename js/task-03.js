const form = document.querySelector('#name-input')
const greetings = document.querySelector('h1')
const name = greetings.querySelector('span')
const initialName = name.textContent

form.addEventListener('input', setOtherName)

function setOtherName(event) {
    event.preventDefault();
    const addedValue = event.currentTarget.value.trim();
    if (addedValue === " " || addedValue === "") {
        name.textContent = initialName;
    } else {
        name.textContent = addedValue;
    }
}