document.addEventListener('DOMContentLoaded', () => {

  const projectContents = document.querySelectorAll('.project-content');
  const projectToggleButtons = document.querySelectorAll('.project-toggle-button');
  
  projectContents.forEach(content => {
    content.classList.add('collapsed');
    content.style.maxHeight = '0';
  });
  
  projectToggleButtons.forEach(button => {
    button.classList.add('collapsed');
  });


  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionContent = button.closest('section').querySelector('.section-content');
      sectionContent.classList.toggle('collapsed');
      button.classList.toggle('collapsed');
      
      if (sectionContent.classList.contains('collapsed')) {
        sectionContent.style.maxHeight = '0';
      } else {
        sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
      }
    });
  });

  projectToggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const projectContent = button.closest('.project').querySelector('.project-content');
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