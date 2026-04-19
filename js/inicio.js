// ================= CAMBIO DE PANTALLAS =================
function mostrarPantalla(id){
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// ================= VALIDAR EDAD =================
function verificarEdad(){
  const edad = parseInt(document.getElementById("ageInput").value);
  const msg = document.getElementById("ageMsg");

  if (isNaN(edad)) {
    msg.textContent = "⚠ Ingresa una edad válida";
    return;
  }

  if (edad < 12) {
    msg.textContent = "❌ No tienes la edad permitida para acceder";
  } else {
    msg.textContent = "✔ Bienvenido/a";
    setTimeout(() => mostrarPantalla("authScreen"), 1000);
  }
}

// ================= REGISTRO =================
function registrar(){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("authMsg");

  if (!email || !password) {
    msg.textContent = "⚠ Completa todos los campos";
    return;
  }

  msg.textContent = "✔ Registrado correctamente";

  setTimeout(() => redirigir(), 1000);
}

// ================= LOGIN =================
function login(){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("authMsg");

  if (!email || !password) {
    msg.textContent = "⚠ Ingresa correo y contraseña";
    return;
  }

  msg.textContent = "✔ Bienvenido nuevamente";

  setTimeout(() => redirigir(), 1000);
}

function redirigir(){

  mostrarPantalla("mainContent");

  const titulo = document.querySelector("#mainContent h1");

  titulo.textContent = "Bienvenido a la plataforma 💙 - Sesión iniciada correctamente";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
}