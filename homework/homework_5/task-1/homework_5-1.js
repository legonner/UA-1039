const modalButton = document.getElementById('showModal');
const modalContent = document.getElementById('modalContent');
const listItems = [...document.querySelectorAll('#list li')];

modalButton.addEventListener('click', () => {
  const order = [0, 4, 1, 3, 2];
  const formattedContent = order.map(i => listItems[i].textContent).join(', ');
  modalContent.textContent = formattedContent;
  modal.style.display = 'block';
});