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

function like() {
    var likeCount = parseInt(document.getElementById('like-count').innerText); // Obtener el conteo actual de likes
    likeCount++; // Incrementar el conteo de likes
    document.getElementById('like-count').innerText = likeCount; // Actualizar el conteo de likes en el elemento span
}





