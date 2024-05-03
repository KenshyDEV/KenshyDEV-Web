document.addEventListener("DOMContentLoaded", function() {
    const webappsContainer = document.getElementById("webapps-container");
    const juegosContainer = document.getElementById("juegos-container");
    const prototiposContainer = document.getElementById("prototipos-container");
  
    // URL del archivo JSON
    const projectsURL = "/json/proyectos.json";
  
    // Cargar y mostrar proyectos
    fetch(projectsURL)
      .then(response => response.json())
      .then(data => {
        data.forEach(project => {
          const article = document.createElement("article");
          article.innerHTML = `
            <div class="card">
              <a href="${project.url}"><img src="${project.image}" alt="${project.title}"></a>
              <h2>${project.title}</h2>
              <p>${project.description}</p>
              <a href="#" class="btn">Ver más</a>
            </div>
          `;
  
          // Agregar proyecto al contenedor correspondiente según la categoría
          if (project.category === "webapps") {
            webappsContainer.appendChild(article);
          } else if (project.category === "juegos") {
            juegosContainer.appendChild(article);
          } else if (project.category === "prototipos") {
            prototiposContainer.appendChild(article);
          }
        });
      })
      .then(() => {
        // Ajustar la altura de los contenedores para que tengan la misma altura
        const containers = [webappsContainer, juegosContainer, prototiposContainer];
        const maxHeight = Math.max(...containers.map(container => container.offsetHeight));
        containers.forEach(container => container.style.height = `${maxHeight}px`);
      })
      .catch(error => console.error("Error al cargar proyectos:", error));
  });
  

  $(document).ready(function(){
    // Agregar efecto de desplazamiento suave a los enlaces internos
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});
