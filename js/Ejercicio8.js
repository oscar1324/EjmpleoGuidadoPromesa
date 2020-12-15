window.addEventListener("load",() => {
    document.getElementById("form").addEventListener("submit",manejarEventoSubmit, false )
}, false);

function manejarEventoSubmit(event){
    event.preventDefault(); 

    fetch("https://jsonplaceholder.typicode.com/users/") //devuelve una promesa
 .then(response => response.json()) //El método json() devuelve otra promesa
 .then(datosUsuario => mostrarDatosUsuario(datosUsuario)) //then() de la segunda promesa
 .catch(error => console.error(error));

}

function mostrarDatosUsuario(datosUsuario){
    let filadeLaTabla = document.getElementById("tabla");
    for(i=0; i < datosUsuario.length;i++){
       console.log(datosUsuario[i]);
   
       let tr = document.createElement("tr");
       //recordar siempre entre comillas aun que los reconozcan además de los + entre elemento y elemento
       tr.innerHTML ="<td>"+ datosUsuario[i].id + "</td>" +"<td>" + datosUsuario[i].name +"</td>"  + "<td>" + datosUsuario[i].username +"</td>"  + "<td>" +datosUsuario[i].email +"<td>";
       filadeLaTabla.appendChild(tr);
    }
}

function crearTabla (datos){
    for(i = 0; i< datos.length; i++);
    
    let tabla = document.getElementById("tr");
    let a1 = document.getElementById("td");
    let a2 = document.getElementById("td");
    console.log(datos[i]);
    
}