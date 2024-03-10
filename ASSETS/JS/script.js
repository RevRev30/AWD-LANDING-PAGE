const projectUrls = [
  'https://revrev30.github.io/AWD---JUMPING-LETTERS/',
  'https://revrev30.github.io/AWD---NOTIFICATION-BELL/',
  'https://revrev30.github.io/AWD---SCROLL-INDICATOR/',
  'https://revrev30.github.io/AWD---COLOR-SWITCH/',
  'https://revrev30.github.io/AWD---CALCULATOR',
  'https://revrev30.github.io/AWD-MIDTERM/',
];

window.onload = function() {
  const projects = document.querySelectorAll('.project');

  projects.forEach((project, index) => {
    project.addEventListener('click', () => {
      window.location.href = projectUrls[index];
    });
  });
};
