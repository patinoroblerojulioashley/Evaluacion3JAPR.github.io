
const db=firebase.firestore();

const guardarForm = (PVoluntario) => {
    db.collection("PVoluntarios").add({
        PVoluntario
    })
    .then(() => {
        //borra los datos del formulario
        formaV.reset();
        // Muestra un mensaje de éxito
        alert('Los datos se han guardado correctamente en la base de datos.');
        console.log('Datos guardados correctamente en la base de datos.');
    })
    .catch(err => {
        alert('No se han podido guardar los datos');
        console.log('No se han podido guardar los datos');
        console.log('Código de error:', err.code);
        console.log('Mensaje de error:', err.message);
    });
};



const formaV=document.getElementById('crearVoluntario');

formaV.addEventListener('submit',(e)=>{
    e.preventDefault();//Para que no actualize la ventana
//asigno valor a datos del formulario
    const nombre=formaV['nombreVoluntario'].value;
    const email=formaV['emailVoluntario'].value;
    const descripcion=formaV['descripcionVoluntario'].value;
    const opciones=formaV['opcionesVoluntario'].value;
    const fecha=formaV['fechaVoluntario'].value;
   const PVoluntario={
    nombre,
    email,
    descripcion,
    opciones,
    fecha,
   }
    guardarForm(PVoluntario);
})
