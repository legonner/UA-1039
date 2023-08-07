document.addEventListener('DOMContentLoaded', () => {
    const circleElements = document.querySelectorAll('.circle');
    
    circleElements.forEach(circle => {
      const animationClass = circle.getAttribute('data-anim');
      circle.classList.add(animationClass);
    });
  });
  