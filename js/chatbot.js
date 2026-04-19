/* ================= CHAT TOGGLE ================= */

const chatToggle = document.getElementById("chatToggle");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");

chatToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // evita conflictos con otros toggles
    chatbox.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
    chatbox.classList.add("hidden");
    
    document.body.style.cursor = "default";
});


/* ================= CHAT LOGIC ================= */

const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");
const typing = document.getElementById("typing");


function addMessage(text, type){
    const div = document.createElement("div");
    div.className = "message " + type;
    div.textContent = text;
    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
}


function botReply(userText){

    typing.style.display = "block";

    setTimeout(()=>{

        typing.style.display = "none";

        let texto = userText.toLowerCase();
        let reply = "Estoy aquí para escucharte 💙";

        if(texto.includes("ans")) {
            reply = "Respira profundo conmigo, cuenta hasta 4 💨.";
        } 
        else if(texto.includes("trist")) {
            reply = "No estás solo. Hablar ayuda mucho 💙.";
        } 
        else if(texto.includes("fel")) {
            reply = "¡Eso es genial! Sigue cultivando esa emoción 🌞.";
        } 
        else if(texto.includes("contact")) {
            reply = "¿Con quién deseas contactarte?";
        } 
        else if(texto.includes("roche")) {
            reply = `
📍 Dirección: Dionisio Derteano 144, Piso 13, San Isidro, Lima  
📞 Línea Central: +51 1 630 2930  
🕒 Atención: Lunes a viernes de 07:00 a 16:45
            `;
        } 
        else if(texto.includes("producto")) {
            reply = `
📍 Dirección: Dionisio Derteano 144, Piso 12, San Isidro, Lima  
📞 Línea Central: +51 1 618 8888
            `;
        } 
        else if(texto.includes("ensayo")) {
            reply = `
🌐 Ensayos clínicos:
www.ensayosclinicos.roche.com.pe
            `;
        } 
        else if(texto.includes("cliente")) {
            reply = `
📞 Teléfono: +51 1 6250840  
🕒 Lunes a viernes de 09:00 a 18:00
            `;
        } 
        else if(texto.includes("evento")) {
            reply = `
📧 farmacovigilancia.peru@roche.com  
📞 +51 1 630 2930  
🕒 Lunes a viernes de 07:00 a 16:45
            `;
        }

        addMessage(reply,"bot");

    },1200);
}


/* ================= ENVIAR MENSAJE ================= */

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e)=>{
    if(e.key === "Enter") sendMessage();
});


function sendMessage(){

    const text = input.value.trim();
    if(!text) return;

    addMessage(text,"user");
    input.value="";

    botReply(text.toLowerCase());
}