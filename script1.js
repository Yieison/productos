let products=[];
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el ID del producto desde la URL
    var urlParams = new URLSearchParams(window.location.search);
    var productIndex = urlParams.get('id');

    // Ahora, realizar una solicitud para obtener todos los productos
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos")
        .then(response => response.json())
        .then(data => {
            products= data;
            let product = data[productIndex];
            if (product) {
                // Mostrar datos en los inputs
                document.getElementById('productName').value = product.nombre;
                document.getElementById('productPrice').value = product.precio;
                document.getElementById('productDescription').value = product.descripcion;
            }
        })
        .catch(error => console.error("Error:", error));
});
/*CANCELAR*/
document.getElementById('botoncancelar').onclick = function() {
    window.location.href = '../index.html';
}

document.getElementById('updateButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    
    // Obtener los datos actualizados de los inputs
    let updatedName = document.getElementById('productName').value;
    let updatedPrice = document.getElementById('productPrice').value;
    let updatedDescription = document.getElementById('productDescription').value;

    var urlParams = new URLSearchParams(window.location.search);
    var productIndex = urlParams.get('id');
    //Suponiendo que el backend acepte una solicitud PUT para actualizar el producto
    fetch(`https://siaweb-nodejs.carlos-reneren7.repl.co/productos/${products[productIndex].nombre}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: updatedName,
            precio: updatedPrice,
            descripcion: updatedDescription
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) { // Suponiendo que el backend responda con un objeto que tiene una propiedad 'success'
            alert('Producto actualizado con éxito!');
            window.location.href = '../index.html';
        } else {
            alert('Hubo un error al actualizar el producto.');
            window.location.href = '../index.html';
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert('Hubo un error al actualizar el producto.');
    });
});

document.getElementById('deleteButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    
    // Confirmación antes de eliminar
    var confirmDelete = confirm("¿Estás seguro de que quieres borrar este producto?");
    if (!confirmDelete) {
        return; // Si el usuario cancela, no hagas nada
    }
    var urlParams = new URLSearchParams(window.location.search);
    var productIndex = urlParams.get('id');
    // Suponiendo que el backend acepta una solicitud DELETE para borrar el producto
    fetch(`https://siaweb-nodejs.carlos-reneren7.repl.co/productos/${products[productIndex].nombre}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) { // Suponiendo que el backend responda con un objeto que tiene una propiedad 'success'
            alert('Producto borrado con éxito!');
            window.location.href = '../index.html'; // Redirigir al usuario a la página de lista de productos o a donde prefieras
        } else {
            alert('Hubo un error al borrar el producto.');
            window.location.href = '../index.html';
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert('Hubo un error al borrar el producto.');
    });
});
