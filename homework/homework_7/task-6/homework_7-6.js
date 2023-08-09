const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');

function updateWindowSize() {
    widthValue.textContent = window.innerWidth;
    heightValue.textContent = window.innerHeight;
}

window.addEventListener('resize', updateWindowSize);
updateWindowSize(); 
