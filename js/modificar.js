const db = firebase.firestore();
const voluntariosCollection = db.collection("PVoluntarios");

const mostrarVoluntarios = (snapshot) => {
  const listaVoluntarios = document.getElementById("listaVoluntarios");

  listaVoluntarios.innerHTML = "";

  snapshot.docChanges().forEach((change) => {
    const voluntario = change.doc.data().PVoluntario;
    const nombre = voluntario.nombre || "Sin nombre";
    const email = voluntario.email || "Sin email";
    const descripcion = voluntario.descripcion || "Sin descripción";
    const opciones = voluntario.opciones || "Sin opciones";
    const fecha = voluntario.fecha || "Sin fecha";

    const li = document.createElement("li");
    li.textContent = `Nombre: ${nombre}, Email: ${email}, Descripción: ${descripcion}, Opciones: ${opciones}, Fecha: ${fecha}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => confirmarEliminarVoluntario(change.doc.id, voluntario));

    const btnModificar = document.createElement("button");
    btnModificar.textContent = "Modificar";
    btnModificar.addEventListener("click", () => mostrarFormularioModificacion(change.doc.id, voluntario));

    li.appendChild(btnEliminar);
    li.appendChild(btnModificar);

    listaVoluntarios.appendChild(li);
  });
};

const unsubscribe = voluntariosCollection.onSnapshot(mostrarVoluntarios);

const confirmarEliminarVoluntario = (docId, voluntario) => {
  const confirmacion = window.confirm(`¿Seguro que quieres eliminar al voluntario?\nNombre: ${voluntario.nombre}\nEmail: ${voluntario.email}`);
  if (confirmacion) {
    eliminarVoluntario(docId);
  }
};

const eliminarVoluntario = (docId) => {
  voluntariosCollection.doc(docId).delete()
    .then(() => {
      console.log("Voluntario eliminado correctamente");
      location.reload();
    })
    .catch((error) => {
      console.error("Error al eliminar el voluntario:", error);
    });
};

const mostrarFormularioModificacion = (docId, voluntario) => {
  // Redirige a la página de modificación con el ID del documento y los datos del voluntario
  window.location.href = `modificado.html?id=${docId}&nombre=${voluntario.nombre}&email=${voluntario.email}&descripcion=${voluntario.descripcion}&opciones=${voluntario.opciones}&fecha=${voluntario.fecha}`;
};

