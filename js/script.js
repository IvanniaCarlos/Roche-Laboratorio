function verificarEdad(){
  const edad = document.getElementById("ageInput").value;
  const msg = document.getElementById("ageMsg");

  if(edad === "") {
    msg.textContent = "Por favor, ingresa tu edad";
    return;
  }

  if(edad < 12){
    msg.textContent = "Estimad@ usted no tiene la edad permitida para inicio de esta página";
  } else {
    msg.textContent = "Perfecto BIENVENIDO/A";
    
    // Aquí está el truco: después de 1.5 segundos te manda a la página de tu amiga
    setTimeout(() => {
      window.location.href = "indexx.html"; // Asegúrate que el archivo se llame exactamente así
    }, 1500);
  }
}