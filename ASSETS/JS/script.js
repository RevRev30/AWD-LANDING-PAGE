// Replace these URLs with the actual URLs of your projects
const projectUrls = [
  'https://example.com/project1',
  'https://example.com/project2',
  'https://example.com/project3',
  'https://example.com/project4',
  'https://example.com/project5',
  'https://revrev30.github.io/AWD-MIDTERM/',
];

const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  project.addEventListener('click', () => {
    window.location.href = projectUrls[index];
  });
});
