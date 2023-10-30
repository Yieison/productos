const apiUrl = 'https://siaweb-nodejs.carlos-reneren7.repl.co/productos';

const dataTable = document.getElementById('data-table');
const dataBody = document.getElementById('data-body');

function fetchData(page) {

    // Hacer una solicitud GET a la API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json(); // Convierte la respuesta en formato JSON
      })
      .then(data => {
        // Limpiar cualquier contenido previo en el cuerpo de la tabla
        dataBody.innerHTML = '';

        // Mostrar los datos de la API en la página actual
        for (let i = startIndex; i < endIndex && i < data.length; i++) {
          const item = data[i];
          const row = document.createElement('tr');
          const cell1 = document.createElement('td');
          const cell2 = document.createElement('td');
          const cell3 = document.createElement('td');
          const cell4 = document.createElement('td');

          cell1.textContent = i + 1; // Número de producto
          cell2.textContent = item.nombre;
          cell3.textContent = item.precio;
          cell4.textContent = item.descripcion;

         
          row.appendChild(cell1);
          row.appendChild(cell2);
          row.appendChild(cell3);
          row.appendChild(cell4);

          dataBody.appendChild(row);
        }

      })
      .catch(error => {
        // Manejar errores
        console.error('Error:', error);
      });
};