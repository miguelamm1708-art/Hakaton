// 1. Estructura de la Fase 1: 48 países en 12 grupos (2 partidos por grupo)
const gruposMundial = {
    "Grupo A": [
        { id: 1, local: "México", banderaL: "🇲🇽", pctL: 50, visitante: "Argentina", banderaV: "🇦🇷", pctV: 30, pctE: 20, completado: false, ganador: null, banderaG: "" },
        { id: 2, local: "Estados Unidos", banderaL: "🇺🇸", pctL: 45, visitante: "Canadá", banderaV: "🇨🇦", pctV: 35, pctE: 20, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo B": [
        { id: 3, local: "Francia", banderaL: "🇫🇷", pctL: 60, visitante: "Polonia", banderaV: "🇵🇱", pctV: 20, pctE: 20, completado: false, ganador: null, banderaG: "" },
        { id: 4, local: "Ecuador", banderaL: "🇪🇨", pctL: 40, visitante: "Austria", banderaV: "🇦🇹", pctV: 40, pctE: 20, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo C": [
        { id: 5, local: "España", banderaL: "🇪🇸", pctL: 55, visitante: "Túnez", banderaV: "🇹🇳", pctV: 20, pctE: 25, completado: false, ganador: null, banderaG: "" },
        { id: 6, local: "Colombia", banderaL: "🇨🇴", pctL: 50, visitante: "Corea del Sur", banderaV: "🇰🇷", pctV: 30, pctE: 20, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo D": [
        { id: 7, local: "Inglaterra", banderaL: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pctL: 65, visitante: "Irán", banderaV: "🇮🇷", pctV: 15, pctE: 20, completado: false, ganador: null, banderaG: "" },
        { id: 8, local: "Senegal", banderaL: "🇸🇳", pctL: 45, visitante: "Rumania", banderaV: "🇷🇴", pctV: 30, pctE: 25, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo E": [
        { id: 9, local: "Bélgica", banderaL: "🇧🇪", pctL: 50, visitante: "Egipto", banderaV: "🇪🇬", pctV: 25, pctE: 25, completado: false, ganador: null, banderaG: "" },
        { id: 10, local: "Perú", banderaL: "🇵🇪", pctL: 40, visitante: "Nigeria", banderaV: "🇳🇬", pctV: 40, pctE: 20, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo F": [
        { id: 11, local: "Alemania", banderaL: "🇩🇪", pctL: 55, visitante: "Japón", banderaV: "🇯🇵", pctV: 30, pctE: 15, completado: false, ganador: null, banderaG: "" },
        { id: 12, local: "Marruecos", banderaL: "🇲🇦", pctL: 45, visitante: "Escocia", banderaV: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", pctV: 30, pctE: 25, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo G": [
        { id: 13, local: "Croacia", banderaL: "🇭🇷", pctL: 50, visitante: "Brasil", banderaV: "🇧🇷", pctV: 35, pctE: 15, completado: false, ganador: null, banderaG: "" },
        { id: 14, local: "Uruguay", banderaL: "🇺🇾", pctL: 55, visitante: "Fiyi", banderaV: "🇫🇯", pctV: 15, pctE: 30, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo H": [
        { id: 15, local: "Portugal", banderaL: "🇵🇹", pctL: 60, visitante: "Ghana", banderaV: "🇬🇭", pctV: 20, pctE: 20, completado: false, ganador: null, banderaG: "" },
        { id: 16, local: "Chile", banderaL: "🇨🇱", pctL: 45, visitante: "Turquía", banderaV: "🇹🇷", pctV: 35, pctE: 20, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo I": [
        { id: 17, local: "Países Bajos", banderaL: "🇳🇱", pctL: 55, visitante: "Ucrania", banderaV: "🇺🇦", pctV: 25, pctE: 20, completado: false, ganador: null, banderaG: "" },
        { id: 18, local: "Argelia", banderaL: "🇩🇿", pctL: 35, visitante: "Panamá", banderaV: "🇵🇦", pctV: 40, pctE: 25, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo J": [
        { id: 19, local: "Italia", banderaL: "🇮🇹", pctL: 50, visitante: "Suiza", banderaV: "🇨🇭", pctV: 30, pctE: 20, completado: false, ganador: null, banderaG: "" },
        { id: 20, local: "Paraguay", banderaL: "🇵🇾", pctL: 45, visitante: "Catar", banderaV: "🇶🇦", pctV: 30, pctE: 25, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo K": [
        { id: 21, local: "Dinamarca", banderaL: "🇩🇰", pctL: 50, visitante: "Venezuela", banderaV: "🇻🇪", pctV: 35, pctE: 15, completado: false, ganador: null, banderaG: "" },
        { id: 22, local: "Camerún", banderaL: "🇨🇲", pctL: 40, visitante: "Australia", banderaV: "🇦🇺", pctV: 35, pctE: 25, completado: false, ganador: null, banderaG: "" }
    ],
    "Grupo L": [
        { id: 23, local: "Suecia", banderaL: "🇸🇪", pctL: 45, visitante: "Honduras", banderaV: "🇭🇳", pctV: 30, pctE: 25, completado: false, ganador: null, banderaG: "" },
        { id: 24, local: "Jamaica", banderaL: "🇯🇲", pctL: 40, visitante: "Costa Rica", banderaV: "🇨🇷", pctV: 40, pctE: 20, completado: false, ganador: null, banderaG: "" }
    ]
};

// 2. Estructura de la Fase 2 (Dieciseisavos). Se emparejarán los ganadores de los grupos correlativos
const partidosFase2 = [
    { id: "F2-1", local: "Ganador P1 (Gr. A)", banderaL: "❓", visitante: "Ganador P3 (Gr. B)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-2", local: "Ganador P2 (Gr. A)", banderaL: "❓", visitante: "Ganador P4 (Gr. B)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-3", local: "Ganador P5 (Gr. C)", banderaL: "❓", visitante: "Ganador P7 (Gr. D)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-4", local: "Ganador P6 (Gr. C)", banderaL: "❓", visitante: "Ganador P8 (Gr. D)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-5", local: "Ganador P9 (Gr. E)", banderaL: "❓", visitante: "Ganador P11 (Gr. F)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-6", local: "Ganador P10 (Gr. E)", banderaL: "❓", visitante: "Ganador P12 (Gr. F)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-7", local: "Ganador P13 (Gr. G)", banderaL: "❓", visitante: "Ganador P15 (Gr. H)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-8", local: "Ganador P14 (Gr. G)", banderaL: "❓", visitante: "Ganador P16 (Gr. H)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-9", local: "Ganador P17 (Gr. I)", banderaL: "❓", visitante: "Ganador P19 (Gr. J)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-10", local: "Ganador P18 (Gr. I)", banderaL: "❓", visitante: "Ganador P20 (Gr. J)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-11", local: "Ganador P21 (Gr. K)", banderaL: "❓", visitante: "Ganador P23 (Gr. L)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false },
    { id: "F2-12", local: "Ganador P22 (Gr. K)", banderaL: "❓", visitante: "Ganador P24 (Gr. L)", banderaV: "❓", pctL: 50, pctV: 50, pctE: 0, completado: false }
];

let vistaActual = "Fase 1"; // Puede ser "Fase 1" o "Fase 2"
let grupoActivo = "Grupo A";

// Genera la barra superior con las pestañas de Fase 1 (A-L) más el botón de la Fase 2
function crearMenuGrupos() {
    const menu = document.getElementById("menu-navegacion-grupos");
    if (!menu) return;

    let htmlMenu = "";
    
    // Pestañas de la Fase 1
    Object.keys(gruposMundial).forEach(grupo => {
        const claseActiva = (vistaActual === "Fase 1" && grupo === grupoActivo) ? "activo" : "";
        const letra = grupo.replace("Grupo ", "");
        htmlMenu += `<button class="btn-tab ${claseActiva}" onclick="irAFase1('${grupo}')">Bloque ${letra}</button>`;
    });

    // Nueva pestaña para la Siguiente Fase
    const claseFase2Activa = (vistaActual === "Fase 2") ? "activo" : "";
    htmlMenu += `<button class="btn-tab ${claseFase2Activa}" onclick="irAFase2()" style="background-color: var(--color-neon-morado); color: white;">Fase 2 ➡️</button>`;

    menu.innerHTML = htmlMenu;
}

// Renderiza los partidos dependiendo de qué pestaña esté activa
function cargarPartidos() {
    const contenedor = document.getElementById("contenedor-partidos");
    const titulo = document.getElementById("nombre-grupo-actual");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (vistaActual === "Fase 1") {
        titulo.innerText = `Fase 1 - ${grupoActivo}`;
        const partidos = gruposMundial[grupoActivo];

        partidos.forEach(partido => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "contenedor-prediccion";
            
            let centroHTML = `<span class="vs">VS</span>`;
            let alertaHTML = ``;
            
            if (partido.completado) {
                centroHTML = `<div class="marcador-final-display"><span class="goles-finales">${partido.golesL} - ${partido.golesV}</span></div>`;
                alertaHTML = `<div class="alerta-clasificacion">${partido.mensajeGuardado}</div>`;
            }

            tarjeta.innerHTML = `
                <div class="tarjeta-partido">
                    <button class="equipo-btn" onclick="simularResultadoFase1(${partido.id}, '${partido.local}')">
                        <span class="bandera">${partido.banderaL}</span>
                        <span class="nombre-equipo">${partido.local}</span>
                    </button>
                    <div class="marcador-input" id="marcador-p-${partido.id}">${centroHTML}</div>
                    <button class="equipo-btn" onclick="simularResultadoFase1(${partido.id}, '${partido.visitante}')">
                        <span class="nombre-equipo">${partido.visitante}</span>
                        <span class="bandera">${partido.banderaV}</span>
                    </button>
                </div>
                <div class="etiqueta-prediccion">Probabilidad de Victoria</div>
                <div class="barra-probabilidades">
                    <div class="progreso-local" style="width: ${partido.pctL}%"></div>
                    <div class="progreso-empate" style="width: ${partido.pctE}%"></div>
                    <div class="progreso-visitante" style="width: ${partido.pctV}%"></div>
                </div>
                <div class="numeros-porcentajes">
                    <span class="pct-l">${partido.local}: ${partido.pctL}%</span>
                    <span class="pct-e">Empate: ${partido.pctE}%</span>
                    <span class="pct-v">${partido.visitante}: ${partido.pctV}%</span>
                </div>
                <div id="clasificacion-p-${partido.id}">${alertaHTML}</div>
            `;
            contenedor.appendChild(tarjeta);
        });

    } else if (vistaActual === "Fase 2") {
        titulo.innerText = "Fase 2 - Dieciseisavos de Final";

        partidosFase2.forEach(partido => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "contenedor-prediccion";
            
            tarjeta.innerHTML = `
                <div class="tarjeta-partido">
                    <div class="equipo" style="justify-content: flex-start; font-weight: 900;">
                        <span class="bandera">${partido.banderaL}</span>
                        <span class="nombre-equipo">${partido.local}</span>
                    </div>
                    <div class="marcador-input">
                        <span class="vs">VS</span>
                    </div>
                    <div class="equipo" style="justify-content: flex-end; font-weight: 900;">
                        <span class="nombre-equipo">${partido.visitante}</span>
                        <span class="bandera">${partido.banderaV}</span>
                    </div>
                </div>
                <div class="etiqueta-prediccion" style="text-align: center; color: var(--color-amarillo);">Partido de Eliminación Directa</div>
            `;
            contenedor.appendChild(tarjeta);
        });
    }
}

// Ejecuta la lógica fija al primer clic de la Fase 1 y clasifica al ganador a la Fase 2
window.simularResultadoFase1 = function(partidoId, equipoSeleccionado) {
    const partidos = gruposMundial[grupoActivo];
    const partido = partidos.find(p => p.id === partidoId);
    if (!partido || partido.completado) return;

    let golesGanador = Math.floor(Math.random() * 3) + 2; 
    let golesPerdedor = Math.floor(Math.random() * golesGanador); 

    let golesLocal, golesVisitante, banderaGanador;
    let textoResultadoHTML = "";

    if (equipoSeleccionado === partido.local) {
        golesLocal = golesGanador;
        golesVisitante = golesPerdedor;
        banderaGanador = partido.banderaL;
        textoResultadoHTML = `
            <p><span class="texto-resaltado-clasificado">🏆 GANADOR ${partido.local.toUpperCase()}</span> 
            <span style="color: #ff3333; margin-left: 0.5rem;">❌ ELIMINADO ${partido.visitante.toUpperCase()}</span></p>
        `;
    } else {
        golesLocal = golesPerdedor;
        golesVisitante = golesGanador;
        banderaGanador = partido.banderaV;
        textoResultadoHTML = `
            <p><span style="color: #ff3333;">❌ ELIMINADO ${partido.local.toUpperCase()}</span> 
            <span class="texto-resaltado-clasificado" style="margin-left: 0.5rem;">🏆 GANADOR ${partido.visitante.toUpperCase()}</span></p>
        `;
    }

    // Bloqueamos el partido de Fase 1
    partido.completado = true;
    partido.ganador = equipoSeleccionado;
    partido.banderaG = banderaGanador;
    partido.golesL = golesLocal;
    partido.golesV = golesVisitante;
    partido.mensajeGuardado = textoResultadoHTML;

    // ACTUALIZACIÓN DE LA FASE 2: Enviamos los datos al casillero correspondiente de Fase 2
    actualizarCrucesFase2(partidoId, equipoSeleccionado, banderaGanador);

    // Pintamos en tiempo real el resultado en la Fase 1
    document.getElementById(`marcador-p-${partidoId}`).innerHTML = `
        <div class="marcador-final-display"><span class="goles-finales">${golesLocal} - ${golesVisitante}</span></div>
    `;
    document.getElementById(`clasificacion-p-${partidoId}`).innerHTML = `
        <div class="alerta-clasificacion">${textoResultadoHTML}</div>
    `;
}

// Función matemática/lógica para acomodar a los ganadores en los casilleros de la Fase 2
function actualizarCrucesFase2(partidoIdF1, nombreGanador, banderaGanador) {
    // Mapeo: Qué ID de partido de Fase 1 llena qué espacio en Fase 2
    // Impares van al lado Local, Pares van al lado Visitante
    const mapaCruces = {
        1:  { campo: "local",     index: 0 }, // P1 (Gr. A) -> Local del Partido 1 en F2
        3:  { campo: "visitante", index: 0 }, // P3 (Gr. B) -> Visitante del Partido 1 en F2
        2:  { campo: "local",     index: 1 }, // P2 (Gr. A) -> Local del Partido 2 en F2
        4:  { campo: "visitante", index: 1 }, // P4 (Gr. B) -> Visitante del Partido 2 en F2
        5:  { campo: "local",     index: 2 }, // P5 (Gr. C) -> Local del Partido 3 en F2
        7:  { campo: "visitante", index: 2 }, 
        6:  { campo: "local",     index: 3 }, // P6 (Gr. C) -> Local del Partido 4 en F2
        8:  { campo: "visitante", index: 3 },
        9:  { campo: "local",     index: 4 }, // P9 (Gr. E) -> Local del Partido 5 en F2
        11: { campo: "visitante", index: 4 },
        10: { campo: "local",     index: 5 }, 
        12: { campo: "visitante", index: 5 },
        13: { campo: "local",     index: 6 }, 
        15: { campo: "visitante", index: 6 },
        14: { campo: "local",     index: 7 }, 
        16: { campo: "visitante", index: 7 },
        17: { campo: "local",     index: 8 }, 
        19: { campo: "visitante", index: 8 },
        18: { campo: "local",     index: 9 }, 
        20: { campo: "visitante", index: 9 },
        21: { campo: "local",     index: 10 }, 
        23: { campo: "visitante", index: 10 },
        22: { campo: "local",     index: 11 }, 
        24: { campo: "visitante", index: 11 }
    };

    const cruce = mapaCruces[partidoIdF1];
    if (cruce) {
        const partidoF2 = partidosFase2[cruce.index];
        if (cruce.campo === "local") {
            partidoF2.local = nombreGanador;
            partidoF2.banderaL = banderaGanador;
        } else {
            partidoF2.visitante = nombreGanador;
            partidoF2.banderaV = banderaGanador;
        }
    }
}

// Navegadores de estados de interfaz
window.irAFase1 = function(grupo) {
    vistaActual = "Fase 1";
    grupoActivo = grupo;
    crearMenuGrupos();
    cargarPartidos();
}

window.irAFase2 = function() {
    vistaActual = "Fase 2";
    crearMenuGrupos();
    cargarPartidos();
}

// Arranque inicial
window.onload = function() {
    crearMenuGrupos();
    cargarPartidos();
};