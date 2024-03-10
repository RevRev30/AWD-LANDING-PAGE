const projectUrls = [
  'https://<your-github-username>.github.io/jumping-letters/',
  'https://<your-github-username>.github.io/notification-bell/',
  'https://<your-github-username>.github.io/scroll-indicator/',
  'https://<your-github-username>.github.io/color-switch/',
  'https://revrev30.github.io/AWD-MIDTERM/',
  'https://revrev30.github.io/AWD-MIDTERM/',
];

window.onload = function() {
  const projects = document.querySelectorAll('.project');

  projects.forEach((project, index) => {
    project.addEventListener('click', () => {
     .location.href = projectUrls[index];
    });
  });
};
