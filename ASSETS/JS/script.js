const projectsContainer = document.querySelector('.projects');

fetch('./file.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');

      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title;
      projectDiv.appendChild(img);

      const title = document.createElement('h2');
      title.textContent = project.title;
      projectDiv.appendChild(title);

      const description = document.createElement('p');
      description.textContent = project.description;
      projectDiv.appendChild(description);

      projectsContainer.appendChild(projectDiv);

      projectDiv.addEventListener('click', () => {
        window.location.href = project.link;
      });
    });
  })
  .catch(error => console.error('Error:', error));
