let botonSend=document.getElementById("botonSend")
let textoChat=document.getElementById("textoChat")
let mensajeChat=document.getElementById("mensajeChat")

let preguntas=[
    "¿Cual es tu nombre?",
    "¿Cuantos años tienes?",
    "¿Cual es tu pelicula favorita?",
    "¿Tienes mascotas?",
    "¿Cual es tu hobby?"
];

let respuestas=[
    "Hola humano, mi nombre es LeonardApp",
    "Tengo 1 año",
    "Los robots mandamos",
    "Aun no, algun dia quisiera tener",
    "Obedecer a los humanos"
];

//Variable para contar el numero de preguntas

let indicePregunta=0;

//Funcion para detectar el inicio y desarrollo del chat

function procesarEntradaChat(){
    let escribeUsuario=textoChat.value.toLowerCase()
    textoChat.value=""
    if (escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta,index)=>`${index+1}.${pregunta}`).join("<br>")
        mensajeChat.innerHTML+=`<p class="text-start">Hola, bienvenido <br> ${listaPreguntas}</p>`
    }else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if (numeroPregunta>=0 && numeroPregunta<preguntas.length) {
            mensajeChat.innerHTML+=`<p class="text-start">${preguntas[numeroPregunta]}</p>`
            mensajeChat.innerHTML+=`<p class="text-end">${respuestas[numeroPregunta]}</p>`
        }
    }
}

//Rutina para activar el chatbot

botonSend.addEventListener("click",procesarEntradaChat)
textoChat.addEventListener("keypress",function(evento){
    if (evento.key=="Enter"){
        evento.preventDefault()
        procesarEntradaChat()
    }
})