document.addEventListener('DOMContentLoaded', () => {
    const { body } = document;
    
    const mainElement = document.createElement('main');
    mainElement.className = 'mainClass check item';
    
    const divElement = document.createElement('div');
    divElement.id = 'myDiv';
    
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'First paragraph';
    
    divElement.appendChild(paragraphElement);
    mainElement.appendChild(divElement);
    body.appendChild(mainElement);
  });  