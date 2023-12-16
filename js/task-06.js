function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const randomNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const newBoxes = document.querySelector('#boxes');

function createBoxes(amount) {
    newBoxes.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        const boxSize = 30 + i * 10;

        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();

        newBoxes.appendChild(box);
    }
}

buttonCreate.addEventListener('click', () => {
    const amount = parseInt(randomNumber.value, 10);
    createBoxes(amount);
    randomNumber.value = "";
});

buttonDestroy.addEventListener('click', () => {
    newBoxes.innerHTML = "";
});