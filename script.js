document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionContent = button.closest('section').querySelector('.section-content');
      const icon = button.querySelector('i');
      
      sectionContent.classList.toggle('collapsed');
      button.classList.toggle('collapsed');
      
      if (sectionContent.classList.contains('collapsed')) {
        sectionContent.style.maxHeight = '0';
      } else {
        sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
      }
    });
  });
  const projectToggleButtons = document.querySelectorAll('.project-toggle-button');
  projectToggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
      const projectContent = button.closest('.project').querySelector('.project-content');
      const icon = button.querySelector('i');
      
      projectContent.classList.toggle('collapsed');
      button.classList.toggle('collapsed');
      
      if (projectContent.classList.contains('collapsed')) {
        projectContent.style.maxHeight = '0';
      } else {
        projectContent.style.maxHeight = projectContent.scrollHeight + 'px';
      }
    });
  });
});