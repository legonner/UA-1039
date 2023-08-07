document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    header.style.fontSize = '32px';

    const divParagraphs = document.querySelectorAll('#myDiv p');
    const numberedDiv = document.createElement('ol');
    
    divParagraphs.forEach(paragraph => {
      const listItem = document.createElement('li');
      listItem.textContent = paragraph.textContent;
      numberedDiv.appendChild(listItem);
    });
  
    const myDiv = document.querySelector('#myDiv');
    myDiv.innerHTML = '';
    myDiv.appendChild(numberedDiv);
  
    const list = document.querySelector('#myList');
    list.style.display = 'flex';
    list.style.listStyleType = 'none';
  
    document.querySelectorAll('#myList li').forEach(item => {
      item.style.marginRight = '10px';
    });
  
    const invisibleSpan = document.querySelector('span');
    invisibleSpan.style.display = 'none';
  });
  