const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("tableBody");
const mensajeBusqueda = document.getElementById("mensajeBusqueda");

searchInput.addEventListener("input", function () {
  const filtro = searchInput.value.toLowerCase().trim();
  let encontrados = 0;

  const filas = tableBody.querySelectorAll('[role="row"]');
  filas.forEach((fila) => {
    const estudiante = fila.querySelector('[role="cell"]').textContent.toLowerCase();
    const coincide = estudiante.includes(filtro);

    fila.style.display = coincide ? "" : "none";
    if (coincide) encontrados++;
  });

  if (filtro === "") {
    mensajeBusqueda.textContent = "";
    mensajeBusqueda.classList.add("visually-hidden");
  } else if (encontrados === 0) {
    mensajeBusqueda.textContent = "No se encontro un nombre que coincidan.";
    mensajeBusqueda.classList.remove("visually-hidden");
    mensajeBusqueda.style.color = "red";
  } else {
    mensajeBusqueda.textContent = `${encontrados} estudiante encontrada(o).`;
    mensajeBusqueda.classList.remove("visually-hidden");
    mensajeBusqueda.style.color = "green";
  }
});
