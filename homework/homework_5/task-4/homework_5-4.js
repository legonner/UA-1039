document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.btn');
    const outBlock = document.querySelector('.out');
  
    submitButton.addEventListener('click', () => {
      const inputFields = document.querySelectorAll('.arr');
      const outputText = [...inputFields]
        .map(input => `${input.getAttribute('data-form')}: ${input.value}`)
        .join('<br>');
  
      outBlock.innerHTML = outputText;
    });
  });
  