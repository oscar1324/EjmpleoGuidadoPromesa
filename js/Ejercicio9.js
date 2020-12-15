window.addEventListener("load",() => {
    document.getElementById("Ver").addEventListener('click',manejarVerAnimales,false);
    document.getElementById("nuevo").addEventListener('submit',manejarCrearAnimales,false);
});

/**Promesa: ver animales */
function manejarVerAnimales(){
    
    fetch(url) // ojo
    .then(response => {
        if(response.ok){
            console.log("Entra en if");
            return response.json();
        } else {
            return "error";
        }
    })
    .then(datosRespuesta => DatosAnimales(datosRespuesta))
    .catch(err => console.error(err));
}

function DatosAnimales(datosRespuesta){
    if(datosRespuesta == "error"){
        alert("Se ha producido un error");
    } else {
        let obtenerdiv = document.getElementById("texto");
        console.log("Entra");

        for(i=0 ; i <datosRespuesta.length; i++){
            console.log("Entra bucle for");
            console.log(datosRespuesta[i]);

            let par = document.createElement("p");
            par.innerHTML = "<p>" + datosRespuesta[i].Tipo + "</p>"  + "<p>" + datosRespuesta[i].Observacion + "</p>" + "<p>" + datosRespuesta[i].Rasgos + "</p>" +  " ___________";
            // revisar mayusculas
            obtenerdiv.appendChild(par);
        };
    }
}

/**Promesa: Crear nuevo Animal */


function manejarCrearAnimales(){
    let url = "http://localhost:3000/animales";
    let nuevoAnimal={
        id:document.getElementById("idAnimal").value ,
        Tipo:document.getElementById("tipoAnimal").value ,
        Nombre:document.getElementById("nombre").value ,
        Observacion:document.getElementById("observacion").value ,
        Rasgos:document.getElementById("rasgos").value 
    };
    let init = {
        method:'POST',
        body:JSON.stringify(nuevoAnimal),
        headers:{'Content-Type': 'application/json'}
    };
    console.log("entra 1");
    fetch(url,init)
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            return "Error"
        }
    })
    .then(datosNuevos => creacionAnimal(datosNuevos))
    .catch(err => console.error(err))
}

function creacionAnimal(datosNuevos){

    let parrafo = document.getElementById("texto");
    if(datosNuevos == "Error"){
        return "Se ha producido un error, vuelva a intentarlo"
    } else {
        console.log(datosNuevos);
    }
}


