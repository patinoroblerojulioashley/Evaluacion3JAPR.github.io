const db = firebase.firestore();
const voluntariosCollection = db.collection("PVoluntarios");

const mostrarVoluntarios = (snapshot) => {
  const listaVoluntarios = document.getElementById("listaVoluntarios");

  // Limpia la lista antes de agregar nuevos elementos
  listaVoluntarios.innerHTML = "";

  snapshot.docChanges().forEach((change) => {
    const voluntario = change.doc.data().PVoluntario;

    // Verifica cada campo antes de mostrarlo
    const nombre = voluntario.nombre || "Sin nombre";
    const email = voluntario.email || "Sin email";
    const descripcion = voluntario.descripcion || "Sin descripción";
    const opciones = voluntario.opciones || "Sin opciones";
    const fecha = voluntario.fecha || "Sin fecha";

    // Crea un elemento de lista (li) para cada voluntario
    const li = document.createElement("li");
    li.textContent = `Nombre: ${nombre}, Email: ${email}, Descripción: ${descripcion}, Opciones: ${opciones}, Fecha elegida: ${fecha}`;

    // Agrega el elemento de lista a la lista principal
    listaVoluntarios.appendChild(li);
  });
};

const unsubscribe = voluntariosCollection.onSnapshot(mostrarVoluntarios);
