// Obtiene el input de búsqueda, el cuerpo de la tabla y el elemento para mostrar mensajes
const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("tableBody");
const mensajeBusqueda = document.getElementById("mensajeBusqueda");

// Agrega un evento que se ejecuta cada vez que el usuario escribe en el input de búsqueda
searchInput.addEventListener("input", function () {
  // Obtiene el texto del input, lo convierte a minúsculas y elimina espacios al inicio/final
  const filtro = searchInput.value.toLowerCase().trim();
  let encontrados = 0;

  // Selecciona todas las filas de la tabla con el rol "row"
  const filas = tableBody.querySelectorAll('[role="row"]');
  filas.forEach((fila) => {
    // Obtiene el texto del primer "cell" de la fila y lo pasa a minúsculas
    const estudiante = fila.querySelector('[role="cell"]').textContent.toLowerCase();
    // Verifica si el nombre del estudiante incluye el texto buscado
    const coincide = estudiante.includes(filtro);

    // Muestra u oculta la fila según si coincide o no
    fila.style.display = coincide ? "" : "none";
    if (coincide) encontrados++; // Si coincide, incrementa el contador
  });

  // Si el filtro está vacío, oculta el mensaje
  if (filtro === "") {
    mensajeBusqueda.textContent = "";
    mensajeBusqueda.classList.add("visually-hidden");
    // Si no se encontró ninguna coincidencia, muestra mensaje de error
  } else if (encontrados === 0) {
    mensajeBusqueda.textContent = "No se encontro un nombre que coincidan.";
    mensajeBusqueda.classList.remove("visually-hidden");
    mensajeBusqueda.style.color = "red";
    // Si hay coincidencias, muestra cuántas se encontraron
  } else {
    mensajeBusqueda.textContent = `${encontrados} estudiante encontrada(o).`;
    mensajeBusqueda.classList.remove("visually-hidden");
    mensajeBusqueda.style.color = "green";
  }
});
