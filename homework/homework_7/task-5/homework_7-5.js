const interactionButton = document.getElementById('interactionButton');
const message = document.getElementById('message');

interactionButton.addEventListener('click', () => {
    showMessage("I was pressed!");
});

interactionButton.addEventListener('mouseover', () => {
    showMessage("Mouse on me!");
});

interactionButton.addEventListener('mouseout', () => {
    showMessage("Mouse is not on me!");
});

function showMessage(text) {
    message.textContent = text;
};
