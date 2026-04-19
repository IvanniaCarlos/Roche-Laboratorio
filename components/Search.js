document.addEventListener("DOMContentLoaded", () => {

   /* ================= RECURSOS ================= */

const recursos = [
"Control del estrés",
"Manejo de ansiedad",
"Técnicas de respiración",
"Meditación guiada",
"Motivación diaria",
"Mejorar el sueño",
"Autocuidado emocional",
"Mindfulness básico"
];

const input = document.getElementById("searchInput");
const results = document.getElementById("results");


/* ================= BUSCADOR ================= */

input.addEventListener("input", buscar);

function buscar(){

    results.innerHTML="";

    const filtro = input.value.trim().toLowerCase();

    if(!filtro) return;

    const coincidencias = recursos.filter(r =>
        r.toLowerCase().includes(filtro)
    );

    /* sin resultados */
    if(coincidencias.length === 0){
        results.innerHTML =
        `<li class="list-group-item text-muted">
            No se encontraron resultados 😕
        </li>`;
        return;
    }

    coincidencias.forEach((r,i)=>{

        const li = document.createElement("li");

        li.className="list-group-item search-item";
        li.textContent="- " + r;

        li.style.animationDelay = `${i * 0.07}s`;

        results.appendChild(li);
    });
}


/* ================= TAGS RÁPIDAS ================= */

document.querySelectorAll(".tag").forEach(tag=>{

    tag.addEventListener("click",()=>{
        input.value = tag.textContent.trim();
        buscar();
        input.focus();
    });

});

});

