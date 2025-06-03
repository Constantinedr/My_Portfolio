document.addEventListener('DOMContentLoaded', () => {

  const setupToggleButtons = (buttonSelector, contentSelector, parentSelector) => {
    const buttons = document.querySelectorAll(buttonSelector);

    buttons.forEach(button => {
      const parent = button.closest(parentSelector);
      const content = parent.querySelector(contentSelector);

      button.classList.add('collapsed');
      content.classList.add('collapsed');
      content.style.maxHeight = '0';
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const isCollapsed = content.classList.toggle('collapsed');
        button.classList.toggle('collapsed');

        if (isCollapsed) {
          content.style.maxHeight = '0';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  };

  setupToggleButtons('.toggle-button', '.section-content', 'section');
  setupToggleButtons('.project-toggle-button', '.project-content', '.project');
});
