/**
 * Función para verificar la edad del usuario
 * Si es mayor o igual a 12, redirige a la página principal.
 */
function verificarEdad() {
    // Obtenemos el valor del input y el elemento del mensaje
    const edadInput = document.getElementById("ageInput").value;
    const msg = document.getElementById("ageMsg");

    // Validamos que el campo no esté vacío
    if (edadInput === "") {
        msg.textContent = "⚠ Por favor, ingresa tu edad";
        msg.style.color = "#ffcc00"; // Color preventivo (amarillo)
        return;
    }

    const edad = parseInt(edadInput);

    // Lógica de validación
    if (edad < 12) {
        msg.textContent = "❌ Estimad@, usted no tiene la edad permitida para acceder.";
        msg.style.color = "#ff4d4d"; // Color de error (rojo)
    } else {
        msg.textContent = "✔ Perfecto, ¡BIENVENIDO/A! Redirigiendo...";
        msg.style.color = "#00ff88"; // Color de éxito (verde)

        // Espera 1.5 segundos para que el usuario vea el mensaje de éxito y luego redirige
        setTimeout(() => {
            // "indexx.html" es el enlace a la siguiente página
            window.location.href = "Roche.html";
        }, 1500);
    }
}


document.getElementById("ageInput")?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        verificarEdad();
    }
});