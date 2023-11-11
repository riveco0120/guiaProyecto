function enviar(){ 
    var nombre =document.getElementById("nombre").value
    var texto = document.getElementById("texto")

    //parseInt -> es convertir un string o otro elemento en un numero
    if(parseInt(nombre.length) == 0){
        alert("Ufff no a ingresado el nombre")
    }
    else{
        texto.innerHTML += "Hola " + nombre
    }

}

