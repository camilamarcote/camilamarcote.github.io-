document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultaForm');
    const respuesta = document.getElementById('respuesta');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

       
      respuesta.textContent = '¡Gracias por tu consulta, ' + nombre + '! Te responderemos pronto.';

        
        form.reset();
    });
});
