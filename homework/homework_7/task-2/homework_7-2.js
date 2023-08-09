const changeCSS = () => {
    const textElement = document.getElementById('text');
    textElement.style.color = 'orange';
    textElement.style.fontSize = '20px';
    textElement.style.fontFamily = 'Comic Sans MS';
};

document.addEventListener('DOMContentLoaded', () => {
    const styleButton = document.getElementById('styleButton');
    styleButton.addEventListener('click', changeCSS);
});