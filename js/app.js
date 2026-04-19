// seleccionar emoción
const miniEmotions = document.querySelectorAll(".mini-emotion");

miniEmotions.forEach(btn=>{
    btn.addEventListener("click",()=>{
        miniEmotions.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// envío formulario
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    msg.style.opacity="1";
    msg.textContent="✔ Mensaje enviado correctamente. Gracias por confiar en nosotros.";

    form.reset();
    miniEmotions.forEach(b=>b.classList.remove("active"));
});