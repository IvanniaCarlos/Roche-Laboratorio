const toggleBtn = document.getElementById("darkModeToggle");
const icon = toggleBtn.querySelector(".icon");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    /* animación */
    toggleBtn.classList.add("animate");

    setTimeout(()=>{
        toggleBtn.classList.remove("animate");
    },500);

    /* cambiar icono */
    if(document.body.classList.contains("dark-mode")){
        icon.textContent="☀️";
    }else{
        icon.textContent="🌙";
    }
});


const canvas = document.getElementById("medicineParticles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 420;

let particles=[];

class Particle{
 constructor(){
   this.x = canvas.width/2;
   this.y = canvas.height/2;
   this.size = Math.random()*4+1;
   this.speedX=(Math.random()-0.5)*6;
   this.speedY=(Math.random()-0.5)*6;
   this.life=100;
 }

 update(){
   this.x+=this.speedX;
   this.y+=this.speedY;
   this.life--;
 }

 draw(){
   ctx.fillStyle="rgba(255,255,255,0.8)";
   ctx.beginPath();
   ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
   ctx.fill();
 }
}

function explode(){
 for(let i=0;i<120;i++){
   particles.push(new Particle());
 }
}

explode();

function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);

 particles.forEach((p,i)=>{
   p.update();
   p.draw();
   if(p.life<=0) particles.splice(i,1);
 });

 requestAnimationFrame(animate);
}

animate();

/* ¿Cómo te sientes hoy?*/ 

const emotions = document.querySelectorAll(".emotion-card");
const result = document.getElementById("emotionResult");
const advice = document.getElementById("emotionAdvice");

const tips = {
    "Feliz":" Sigue haciendo lo que amas y comparte tu energía positiva.",
    "Calmado":" Excelente momento para reflexionar o meditar.",
    "Ansioso":" Respira profundo durante 30 segundos y toma una pausa.",
    "Triste":" Hablar con alguien cercano puede ayudarte a sentirte mejor."
};

emotions.forEach(card => {

    card.addEventListener("click", () => {

        emotions.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const emotion = card.dataset.emotion;

        result.textContent = emotion;
        advice.textContent = tips[emotion];

        advice.style.animation = "none";
        advice.offsetHeight;
        advice.style.animation = "fadeAdvice .8s forwards";
    });

});

//Whole //

function scrollCarousel(direction) {
  const container = document.getElementById("carousel");
  const scrollAmount = 300;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}


//Dashboard//
let habitos = {
  pausa: 0,
  respiracion: 0,
  mental: 0
};

function registrarHabito(tipo){

  habitos[tipo]++;

  document.getElementById(tipo + "Count").textContent = habitos[tipo];

  evaluarEstres();
}

function evaluarEstres(){

  const total = habitos.pausa + habitos.respiracion + habitos.mental;

  let nivel = "";
  let consejo = "";

  if(total <= 2){
    nivel = "🔴 Tu puedes sigue";
    consejo = "Te recomendamos hacer ejercicios de respiración y tomar una pausa.";
  }
  else if(total <= 5){
    nivel = "🟡 Ya casi lo logras";
    consejo = "Vas bien, intenta mantener el equilibrio.";
  }
  else{
    nivel = "🟢 ¡Felicidades, Lo lograste!";
    consejo = "Excelente, sigue cuidando tu bienestar.";
  }

  document.getElementById("stressNivel").textContent = nivel;
  document.getElementById("recomendacion").textContent = consejo;
}

let puntos = 0;
let racha = 0;
let tiempo = 10;
let intervalo;

const retos = [
  {
    texto: "Respira profundamente 10 segundos",
    imagen: "/assets/images/respirar.jpg",
    mensaje: "Respira lentamente..."
  },
  {
    texto: "Estírate y mueve tu cuerpo",
    imagen: "/assets/images/estiramiento.jpg",
    mensaje: "Muévete suavemente..."
  },
  {
    texto: "Tómate un momento de calma",
    imagen: "/assets/images/relajacion.jpg",
    mensaje: "Relájate y desconéctate..."
  }
];

function iniciarReto(){

 clearInterval(intervalo);

// elegir reto aleatorio
const retoActual = Math.floor(Math.random() * retos.length);

document.getElementById("retoTexto").textContent = retos[retoActual].texto;
document.getElementById("gameImage").src = retos[retoActual].imagen;

tiempo = 10;
document.getElementById("timer").textContent = tiempo;
document.getElementById("mensajeGame").textContent = retos[retoActual].mensaje;

intervalo = setInterval(() => {

  tiempo--;
  document.getElementById("timer").textContent = tiempo;

  if (tiempo <= 0) {
    clearInterval(intervalo);
    completarReto();
  }

}, 1000);
}

function completarReto(){

  puntos += 10;
  racha++;

  document.getElementById("puntos").textContent = puntos;
  document.getElementById("racha").textContent = racha;

  const mensaje = document.getElementById("mensajeGame");
  mensaje.textContent = "¡Bien hecho! Ganaste 10 puntos 💙";

  //  animación texto
  mensaje.classList.add("animar");
  setTimeout(()=> mensaje.classList.remove("animar"), 800);

  //  animación imagen
  const img = document.getElementById("gameImage");
  img.classList.add("img-success");
  setTimeout(()=> img.classList.remove("img-success"), 800);
}

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// cerrar al tocar fuera
overlay.addEventListener("click", () => {
  btn.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

//Lyra//

function enviarConsulta(e){
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const pregunta = document.getElementById("pregunta").value;
  const msg = document.getElementById("confirmacion");

  if(!nombre || !correo || !pregunta){
    msg.textContent = "⚠ Completa todos los campos";
    return;
  }

  // Simulación de envío
  msg.textContent = "✔ Consulta enviada correctamente";

  // Limpiar formulario
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("pregunta").value = "";
}

function toggleForm() {
  const form = document.getElementById("formularioBox");
  form.classList.toggle("hidden");
}

