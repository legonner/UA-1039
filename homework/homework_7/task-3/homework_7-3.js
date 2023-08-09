const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');

button1.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink';
});

let isButton3Pressed = false;
button3.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown';
    isButton3Pressed = true;
});
button3.addEventListener('mouseup', () => {
    if (isButton3Pressed) {
        document.body.style.backgroundColor = 'white';
        isButton3Pressed = false;
    }
});

link.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
});