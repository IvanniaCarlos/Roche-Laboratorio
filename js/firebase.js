// IMPORTS CORRECTOS (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAijDM7KS0YEZV2pHNjBsTcxAIh7COPMRM",
  authDomain: "roche-laboratorio.firebaseapp.com",
  projectId: "roche-laboratorio"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// FORM
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

let emocionSeleccionada = "";

// EMOCIONES
document.querySelectorAll(".mini-emotion").forEach(btn => {
  btn.addEventListener("click", () => {
    emocionSeleccionada = btn.textContent;

    document.querySelectorAll(".mini-emotion").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// SUBMIT
form.addEventListener("submit", async (e) => {
  e.preventDefault();

    const nombre = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const mensaje = form.querySelector("textarea").value.trim();

  // VALIDACIÓN
  if (!emocionSeleccionada) {
    msg.innerHTML = "⚠ Selecciona una emoción";
    return;
  }

  try {
    await addDoc(collection(db, "mensajes"), {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        emocion: emocionSeleccionada,
        fecha: new Date(),
        
    });
    
    msg.innerHTML = " ✔ Mensaje enviado correctamente";
    form.reset();
    emocionSeleccionada = "";

    document.querySelectorAll(".mini-emotion").forEach(b => b.classList.remove("active"));

  } catch (error) {
    msg.innerHTML = "X Error al enviar";
    console.error(error);
  }
});

