/* ============================================================
    LÓGICA DEL BUSCADOR DE BIENESTAR (VERSIÓN PROFESIONAL)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("results");
    const tags = document.querySelectorAll(".tag");

    // 1. Base de datos ampliada con contenido enriquecido
    const infoBienestar = {
        "ansiedad": {
            titulo: "Manejo Integral de la Ansiedad",
            definicion: "La ansiedad es un mecanismo de defensa natural del organismo frente a situaciones consideradas amenazantes. Sin embargo, cuando es desproporcionada o persistente, se convierte en un trastorno que afecta la salud física y mental, provocando taquicardia, sudoración y pensamientos catastróficos.",
            consejo: "Aprende a observar tus pensamientos sin juzgarlos. La ansiedad se alimenta del miedo al futuro; traer tu mente al presente mediante los sentidos es la herramienta más poderosa que tienes.",
            donde: "Si experimentas ataques de pánico recurrentes, te recomendamos acudir a un psicólogo especialista en Terapia Cognitivo-Conductual o contactar a la línea de salud mental de tu ciudad (en Perú, Línea 113 opción 5).",
            tips: [
                "Técnica 4-7-8: Inhala en 4s, mantén 7s y exhala en 8s.",
                "Diario de preocupaciones: Escribe lo que sientes para sacarlo de tu mente.",
                "Reducción de estímulos: Evita el exceso de cafeína y las pantallas antes de dormir.",
                "Grounding 5-4-3-2-1: Identifica 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles y 1 que saboreas."
            ],
            aliento: "¡Tu valentía es más grande que tus miedos! Cada respiración es una oportunidad para empezar de nuevo. ✨"
        },
        "relajacion": {
            titulo: "Técnicas Avanzadas de Relajación",
            definicion: "La relajación es un estado de conciencia en el que se busca la liberación de la tensión muscular y mental. No es solo reposo; es una desactivación voluntaria del sistema nervioso simpático para dar paso a la restauración celular y el equilibrio emocional.",
            consejo: "La relajación es una habilidad que se entrena. No esperes resultados mágicos el primer día; la constancia de practicar 10 minutos diarios transformará tu respuesta ante el estrés.",
            donde: "Puedes unirte a grupos de meditación guiada, practicar Yoga en centros comunitarios o consultar con terapeutas físicos para relajación muscular progresiva.",
            tips: [
                "Relajación de Jacobson: Tensa y relaja cada grupo muscular desde los pies a la cabeza.",
                "Baños de bosque o naturaleza: Pasar tiempo entre árboles reduce el cortisol drásticamente.",
                "Musicoterapia: Escucha frecuencias de 432Hz o sonidos de agua a bajo volumen.",
                "Visualización creativa: Imagina un lugar seguro con todo lujo de detalles."
            ],
            aliento: "Descansar no es perder el tiempo, es preparar el alma para brillar con más fuerza. 🌿"
        },
        "motivacion": {
            titulo: "Psicología de la Motivación y Logro",
            definicion: "La motivación es el conjunto de factores internos o externos que determinan las acciones de una persona. Se divide en intrínseca (lo que haces por satisfacción personal) y extrínseca (recompensas externas). Mantenerla requiere un propósito claro y disciplina.",
            consejo: "No busques motivación para empezar; empieza para encontrar motivación. El cerebro libera dopamina cuando completas tareas pequeñas, lo que te da energía para las grandes.",
            donde: "Si sientes apatía total (falta de ganas), podría ser un signo de depresión. Consulta con un profesional de la salud mental si este estado dura más de dos semanas.",
            tips: [
                "Regla de los 2 minutos: Si algo toma menos de 2 minutos, hazlo ahora mismo.",
                "Método SMART: Define metas que sean Específicas, Medibles, Alcanzables, Relevantes y con Tiempo.",
                "Tablero de visión: Coloca imágenes de tus sueños donde puedas verlas a diario.",
                "Busca un compañero de responsabilidad para compartir tus avances."
            ],
            aliento: "¡El éxito es la suma de pequeños esfuerzos repetidos día tras día! Tu potencial es infinito. 🚀"
        },
        "sueno": {
            titulo: "Optimización de la Higiene del Sueño",
            definicion: "El sueño es un proceso biológico complejo que ayuda a las personas a recuperar sus funciones físicas y psicológicas esenciales. Durante el sueño, el cerebro elimina toxinas y consolida la memoria. La falta de este aumenta el riesgo de enfermedades crónicas.",
            consejo: "Tu habitación debe ser un santuario del descanso. El cerebro necesita una caída en la temperatura corporal y ausencia total de luz azul para segregar melatonina correctamente.",
            donde: "Para casos de apnea o insomnio crónico, solicita una prueba de polisomnografía con un neurólogo o especialista en medicina del sueño.",
            tips: [
                "Horario de anclaje: Despiértate siempre a la misma hora, incluso los fines de semana.",
                "Bloqueo de luz azul: Deja el celular fuera de la habitación 1 hora antes de dormir.",
                "Cenas triptófanas: Consume alimentos ligeros como plátano o pavo que ayudan a dormir.",
                "Ritual de desconexión: Lee un libro en papel o realiza estiramientos muy suaves."
            ],
            aliento: "Un sueño reparador es el mejor regalo que puedes darle a tu mente para un gran mañana. 🌙"
        }
    };

    // 2. Función con diseño crema y mucho más texto
    function mostrarContenido(palabra) {
        results.innerHTML = ""; 

        const clave = palabra.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const data = infoBienestar[clave];

        if (data) {
            results.innerHTML = `
                <div class="info-card-result" style="background: #FFF8F0; color: #333; padding: 35px; margin-top: 25px; border-radius: 20px; border: 1px solid #E9E4DE; border-left: 10px solid #00AEEF; box-shadow: 0 8px 25px rgba(0,0,0,0.08); text-align: left; animation: fadeIn 0.6s ease-out;">
                    
                    <h2 style="color: #1a1a1a; font-weight: 800; border-bottom: 2px solid #D1C7BD; padding-bottom: 15px; margin-top:0; font-size: 1.8rem;">${data.titulo}</h2>
                    
                    <div style="margin: 20px 0; line-height: 1.8;">
                        <h5 style="color: #0066CC; font-weight: bold; margin-bottom: 5px;">🧐 Definición Detallada:</h5>
                        <p style="text-align: justify;">${data.definicion}</p>
                    </div>
                    
                    <div style="margin-bottom: 20px; line-height: 1.8;">
                        <h5 style="color: #0066CC; font-weight: bold; margin-bottom: 5px;">💡 Guía de Manejo y Consejos:</h5>
                        <p style="text-align: justify;">${data.consejo}</p>
                    </div>
                    
                    <div style="background: rgba(255, 255, 255, 0.6); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px dashed #D1C7BD;">
                        <h5 style="color: #00AEEF; font-weight: bold; margin-bottom: 10px;">✅ Sugerencias y Pasos Prácticos:</h5>
                        <ul style="padding-left: 20px;">
                            ${data.tips.map(t => `<li style="margin-bottom: 8px;">${t}</li>`).join('')}
                        </ul>
                    </div>

                    <div style="font-size: 0.95rem; color: #721c24; background: #f8d7da; padding: 15px; border-radius: 10px; border: 1px solid #f5c6cb;">
                        <strong>🏥 Red de Apoyo y Ayuda Profesional:</strong><br>
                        ${data.donde}
                    </div>

                    <div style="margin-top: 30px; text-align: center; font-style: italic; font-size: 1.3rem; color: #00AEEF; font-weight: bold; border-top: 1px solid #D1C7BD; pt-15px;">
                        <br>"${data.aliento}"
                    </div>
                </div>
            `;
        } else if (palabra.length > 0) {
            results.innerHTML = `
                <div style="background: #FFF8F0; padding: 20px; border-radius: 15px; text-align: center; color: #666; border: 1px solid #E9E4DE;">
                    No encontramos una guía completa para "${palabra}". <br>Prueba con: <b>Ansiedad, Relajación, Motivación o Sueño</b>.
                </div>`;
        }
    }

    // 3. Eventos de interacción
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const texto = tag.textContent.trim();
            input.value = texto;
            mostrarContenido(texto); 
            input.focus();
        });
    });

    input.addEventListener("input", (e) => {
        mostrarContenido(e.target.value);
    });
});
