let url="http://localhost:8000/leonardApp"

let peticion={
    method:"GET"
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})