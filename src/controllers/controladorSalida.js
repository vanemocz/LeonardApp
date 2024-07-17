import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  
import { getAuth, signOut, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyATaFS3y2HtZA4y-3WQm7fRtbsaAycB6uU",
  authDomain: "loginsuradualjjg.firebaseapp.com",
  projectId: "loginsuradualjjg",
  storageBucket: "loginsuradualjjg.appspot.com",
  messagingSenderId: "270841800332",
  appId: "1:270841800332:web:99ae746100c68433effda9",
  measurementId: "G-3NGP4DKQEW"
};

const app = initializeApp(firebaseConfig);

let avatar=document.getElementById("avatar")
let botonSalida=document.getElementById("botonsalir")

const auth=getAuth()
onAuthStateChanged(auth,(user)=>{
  avatar.classList.remove("invisible")
  avatar.textContent=user.email
})

botonSalida.addEventListener("click",function(){
  alert("saliendo")
})