function verificarEdad() {
  const edadInput = document.getElementById("ageInput").value;
  const msg = document.getElementById("ageMsg");

  // Verificar si el campo está vacío
  if (edadInput === "") {
    msg.textContent = "⚠ Por favor, ingresa tu edad";
    msg.style.color = "#ffcc00";
    return;
  }

  const edad = parseInt(edadInput);

  if (edad < 12) {
    msg.textContent = "❌ Estimad@, usted no tiene la edad permitida para acceder.";
    msg.style.color = "#ff4d4d";
  } else {
    msg.textContent = "✔ Perfecto, ¡BIENVENIDO/A! Redirigiendo...";
    msg.style.color = "#00ff88";

    // Espera un momento para que se vea el mensaje de éxito
    setTimeout(() => {

      window.location.href = "roche.html"; 
    }, 1500);
  }
}