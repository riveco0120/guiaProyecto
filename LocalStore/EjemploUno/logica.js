var listaPersona = ["Jose","Miguel"]


alert(typeof(listaPersona))
//localStorage.setItem("listaPersona",JSON.stringify(listaPersona))

function mostrarLista(){
    for(var i =0; i<listaPersona.length;i++){
        alert(listaPersona[i])
    }
}
console.log(localStorage.getItem("usuario"))

let nombres = JSON.parse(localStorage.getItem("listaPersona"))
console.log(nombres)