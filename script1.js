document.getElementById('botoncancelar').onclick = function() {
    window.location.href = '../index.html';
}

document.getElementById('miBoton').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var descripcion = document.getElementById('descripcion').value;

    fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            descripcion: descripcion
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
