particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00f0ff"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/*scrip publicar juegos*/

document.addEventListener("DOMContentLoaded", function () {
    fetch("/Assets/json/juegos.json")
        .then(response => response.json())
        .then(data => {
            const juegosContainer = document.getElementById("juegos-container");
            data.juegos.forEach(juego => {
                const boxContainer = document.createElement("div");
                boxContainer.classList.add("box-container");

                const link = document.createElement("a");
                link.href = juego.link;

                const box = document.createElement("div");
                box.classList.add("box");

                const img = document.createElement("img");
                img.src = juego.imagen;
                img.alt = juego.titulo;

                box.appendChild(img);
                link.appendChild(box);
                boxContainer.appendChild(link);

                const titulo = document.createElement("h2");
                titulo.textContent = juego.titulo;
                boxContainer.appendChild(titulo);

                juegosContainer.appendChild(boxContainer);
            });
        })
        .catch(error => console.error("Error al cargar los juegos:", error));
});


/*scrip publicar proyectos de desarrollo web o apps*/

document.addEventListener("DOMContentLoaded", function () {
    fetch("/Assets/json/desarrollo.json")
        .then(response => response.json())
        .then(data => {
            const desarrolloContainer = document.getElementById("desarrollo-container");
            data.desarrollo.forEach(proyecto => {
                const boxContainer = document.createElement("div");
                boxContainer.classList.add("box-container");

                const link = document.createElement("a");
                link.href = proyecto.link;

                const box = document.createElement("div");
                box.classList.add("box");

                const img = document.createElement("img");
                img.src = proyecto.imagen;
                img.alt = proyecto.titulo;

                box.appendChild(img);
                link.appendChild(box);
                boxContainer.appendChild(link);

                const titulo = document.createElement("h2");
                titulo.textContent = proyecto.titulo;
                boxContainer.appendChild(titulo);

                desarrolloContainer.appendChild(boxContainer);
            });
        })
        .catch(error => console.error("Error al cargar los proyectos de desarrollo:", error));
});

/*scrip publicar proyectos de prototipos*/

document.addEventListener("DOMContentLoaded", function () {
    fetch("/Assets/json/prototipo.json")
        .then(response => response.json())
        .then(data => {
            const prototiposContainer = document.getElementById("prototipos-container");
            data.prototipos.forEach(prototipo => {
                const boxContainer = document.createElement("div");
                boxContainer.classList.add("box-container");

                const link = document.createElement("a");
                link.href = prototipo.link;

                const box = document.createElement("div");
                box.classList.add("box");

                const img = document.createElement("img");
                img.src = prototipo.imagen;
                img.alt = prototipo.titulo;

                box.appendChild(img);
                link.appendChild(box);
                boxContainer.appendChild(link);

                const titulo = document.createElement("h2");
                titulo.textContent = prototipo.titulo;
                boxContainer.appendChild(titulo);

                prototiposContainer.appendChild(boxContainer);
            });
        })
        .catch(error => console.error("Error al cargar los prototipos:", error));
});





