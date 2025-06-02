document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionContent = button.closest('section').querySelector('.section-content');
      const icon = button.querySelector('i');
      
      sectionContent.classList.toggle('collapsed');
      button.classList.toggle('collapsed');
      
      // Adjust max-height dynamically for smooth animation
      if (sectionContent.classList.contains('collapsed')) {
        sectionContent.style.maxHeight = '0';
      } else {
        sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
      }
    });
  });
});