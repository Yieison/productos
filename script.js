/*OBTENER PRODUCTOS*/
document.addEventListener("DOMContentLoaded", function() {
    var dataBody = document.getElementById("data-body");

    // Realizar la solicitud a la URL
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos")
        .then(function(response) {
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(function(data) {
            data.forEach(function(product, index) {
                var row = document.createElement("tr");

                var numberCell = document.createElement("td");
                numberCell.textContent = index + 1;

                var nameCell = document.createElement("td");
                nameCell.textContent = product.nombre;

                var priceCell = document.createElement("td");
                priceCell.textContent = product.precio;

                var descriptionCell = document.createElement("td");
                descriptionCell.textContent = product.descripcion;

                var viewCell = document.createElement("td"); // Nueva celda

                // Agregar un enlace "Ver" que enlace a la página "ver_producto.html"
                var viewLink = document.createElement("a");
                viewLink.href = "./html/actualizar.html?id=" + index; // Puedes pasar el ID del producto como parámetro

                var viewButton = document.createElement("button");
                viewButton.textContent = "Ver";
                viewLink.appendChild(viewButton);

                viewCell.appendChild(viewLink);

                row.appendChild(numberCell);
                row.appendChild(nameCell);
                row.appendChild(priceCell);
                row.appendChild(descriptionCell);
                row.appendChild(viewCell); // Agregar la nueva celda a la fila
                dataBody.appendChild(row);
            });
        })
        .catch(function(error) {
            console.error("Error al obtener los datos:", error);
        });
});

/* AÑADIR PRODUCTOS */
document.getElementById('miBoton').addEventListener('click', function() {

    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var descripcion = document.getElementById('descripcion').value;

    if (nombre.trim() === "" || precio.trim() === "" || descripcion.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

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
        window.location.href = '../index.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

/*CANCELAR*/
document.getElementById('botoncancelar').onclick = function() {
    window.location.href = '../index.html';
};
