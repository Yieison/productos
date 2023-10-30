document.addEventListener("DOMContentLoaded", function() {
    // Elemento donde se mostrarán los datos
    var dataBody = document.getElementById("data-body");

    // Realizar la solicitud a la URL
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos")
        .then(function(response) {
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(function(data) {
            // Procesar los datos y agregarlos a la tabla
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

                row.appendChild(numberCell);
                row.appendChild(nameCell);
                row.appendChild(priceCell);
                row.appendChild(descriptionCell);

                dataBody.appendChild(row);
            });
        })
        .catch(function(error) {
            console.error("Error al obtener los datos:", error);
        });
});
