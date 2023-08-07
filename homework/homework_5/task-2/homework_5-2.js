document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('h1');
  header.style.backgroundColor = 'lime';

  const firstParagraph = document.querySelector('#myDiv p:nth-child(1)');
  firstParagraph.style.fontWeight = 'bold';

  const secondParagraph = document.querySelector('#myDiv p:nth-child(2)');
  secondParagraph.style.color = 'red';

  const thirdParagraph = document.querySelector('#myDiv p:nth-child(3)');
  thirdParagraph.style.textDecoration = 'underline';

  const fourthParagraph = document.querySelector('#myDiv p:nth-child(4)');
  fourthParagraph.style.fontStyle = 'italic';

  const list = document.querySelector('#myList');
  list.style.display = 'flex';
  list.style.listStyleType = 'none';

  document.querySelectorAll('#myList li').forEach(item => {
    item.style.marginRight = '5px';
  });

  const invisibleSpan = document.querySelector('span');
  invisibleSpan.style.display = 'none';
});