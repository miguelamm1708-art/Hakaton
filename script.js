// 1. Estructura de los 48 países divididos en 12 bloques (A-L) con sus partidos simulados
const partidosMundial = [
    {
        grupo: "GRUPO A",
        clasificacion: [
            { pos: 1, equipo: "México", bandera: "🇲🇽", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
            { pos: 2, equipo: "Estados Unidos", bandera: "🇺🇸", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
            { pos: 3, equipo: "Canadá", bandera: "🇨🇦", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
            { pos: 4, equipo: "Argentina", bandera: "🇦🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }
        ],
        partidos: [
            { id: 1, local: "México", banderaL: "🇲🇽", visitante: "Argentina", banderaV: "🇦🇷", golesLocalReal: 1, golesVisitanteReal: 2, prediccionComunidad: { local: 30, empate: 20, visitante: 50 } }
        ]
    },
    {
        grupo: "GRUPO B",
        clasificacion: [
            { pos: 1, equipo: "Francia", bandera: "🇫🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
            { pos: 2, equipo: "España", bandera: "🇪🇸", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
            { pos: 3, equipo: "Inglaterra", bandera: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
            { pos: 4, equipo: "Brasil", bandera: "🇧🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }
        ],
        partidos: [
            { id: 2, local: "España", banderaL: "🇪🇸", visitante: "Brasil", banderaV: "🇧🇷", golesLocalReal: 2, golesVisitanteReal: 1, prediccionComunidad: { local: 45, empate: 25, visitante: 30 } }
        ]
    },
    { grupo: "GRUPO C", clasificacion: [{ pos: 1, equipo: "Alemania", bandera: "🇩🇪", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Bélgica", bandera: "🇧🇪", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Portugal", bandera: "🇵🇹", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Países Bajos", bandera: "🇳🇱", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 3, local: "Alemania", banderaL: "🇩🇪", visitante: "Portugal", banderaV: "🇵🇹", golesLocalReal: 1, golesVisitanteReal: 1, prediccionComunidad: { local: 35, empate: 35, visitante: 30 } }] },
    { grupo: "GRUPO D", clasificacion: [{ pos: 1, equipo: "Italia", bandera: "🇮🇹", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Croacia", bandera: "🇭🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Uruguay", bandera: "🇺🇾", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Colombia", bandera: "🇨🇴", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 4, local: "Uruguay", banderaL: "🇺🇾", visitante: "Colombia", banderaV: "🇨🇴", golesLocalReal: 0, golesVisitanteReal: 0, prediccionComunidad: { local: 40, empate: 30, visitante: 30 } }] },
    { grupo: "GRUPO E", clasificacion: [{ pos: 1, equipo: "Marruecos", bandera: "🇲🇦", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Japón", bandera: "🇯🇵", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Senegal", bandera: "🇸🇳", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Ecuador", bandera: "🇪🇨", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 5, local: "Japón", banderaL: "🇯🇵", visitante: "Marruecos", banderaV: "🇲🇦", golesLocalReal: 1, golesVisitanteReal: 0, prediccionComunidad: { local: 50, empate: 30, visitante: 20 } }] },
    { grupo: "GRUPO F", clasificacion: [{ pos: 1, equipo: "Suiza", bandera: "🇨🇭", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Dinamarca", bandera: "🇩🇰", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Irán", bandera: "🇮🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Corea del Sur", bandera: "🇰🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 6, local: "Dinamarca", banderaL: "🇩🇰", visitante: "Corea del Sur", banderaV: "🇰🇷", golesLocalReal: 2, golesVisitanteReal: 2, prediccionComunidad: { local: 40, empate: 40, visitante: 20 } }] },
    { grupo: "GRUPO G", clasificacion: [{ pos: 1, equipo: "Ucrania", bandera: "🇺🇦", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Australia", bandera: "🇦🇺", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Túnez", bandera: "🇹🇳", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Chile", bandera: "🇨🇱", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 7, local: "Chile", banderaL: "🇨🇱", visitante: "Australia", banderaV: "🇦🇺", golesLocalReal: 1, golesVisitanteReal: 0, prediccionComunidad: { local: 45, empate: 35, visitante: 20 } }] },
    { grupo: "GRUPO H", clasificacion: [{ pos: 1, equipo: "Perú", bandera: "🇵🇪", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Polonia", bandera: "🇵🇱", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Arabia Saudita", bandera: "🇸🇦", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Austria", bandera: "🇦🇹", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 8, local: "Perú", banderaL: "🇵🇪", visitante: "Polonia", banderaV: "🇵🇱", golesLocalReal: 1, golesVisitanteReal: 1, prediccionComunidad: { local: 30, empate: 40, visitante: 30 } }] },
    { grupo: "GRUPO I", clasificacion: [{ pos: 1, equipo: "Suecia", bandera: "🇸🇪", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Nigeria", bandera: "🇳🇬", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Costa Rica", bandera: "🇨🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Rumania", bandera: "🇷🇴", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 9, local: "Costa Rica", banderaL: "🇨🇷", visitante: "Nigeria", banderaV: "🇳🇬", golesLocalReal: 2, golesVisitanteReal: 1, prediccionComunidad: { local: 35, empate: 25, visitante: 40 } }] },
    { grupo: "GRUPO J", clasificacion: [{ pos: 1, equipo: "Panamá", bandera: "🇵🇦", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Argelia", bandera: "🇩🇿", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Gales", bandera: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Paraguay", bandera: "🇵🇾", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 10, local: "Panamá", banderaL: "🇵🇦", visitante: "Paraguay", banderaV: "🇵🇾", golesLocalReal: 0, golesVisitanteReal: 1, prediccionComunidad: { local: 25, empate: 35, visitante: 40 } }] },
    { grupo: "GRUPO K", clasificacion: [{ pos: 1, equipo: "Ghana", bandera: "🇬🇭", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Camerún", bandera: "🇨🇲", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Turquía", bandera: "🇹🇷", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Venezuela", bandera: "🇻🇪", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 11, local: "Venezuela", banderaL: "🇻🇪", visitante: "Turquía", banderaV: "🇹🇷", golesLocalReal: 2, golesVisitanteReal: 0, prediccionComunidad: { local: 60, empate: 25, visitante: 15 } }] },
    { grupo: "GRUPO L", clasificacion: [{ pos: 1, equipo: "Nueva Zelanda", bandera: "🇳🇿", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 2, equipo: "Honduras", bandera: "🇭🇳", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 3, equipo: "Jamaica", bandera: "🇯🇲", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, { pos: 4, equipo: "Sudáfrica", bandera: "🇿🇦", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }], partidos: [{ id: 12, local: "Honduras", banderaL: "🇭🇳", visitante: "Jamaica", banderaV: "🇯🇲", golesLocalReal: 1, golesVisitanteReal: 2, prediccionComunidad: { local: 40, empate: 20, visitante: 40 } }] }
];

// Para recordar qué goles ha escrito el usuario y que no se borren al cambiar de pestaña
const memoriaPronosticos = {};

let grupoActivoIndex = 0; // Por defecto empezamos mostrando el Grupo A

const menuGrupos = document.getElementById('menu-grupos');
const contenedorGrupoActivo = document.getElementById('contenedor-grupo-activos');
const btnCalcular = document.getElementById('btn-calcular');
const txtPuntos = document.getElementById('puntos-totales');
const txtMensaje = document.getElementById('mensaje-resultado');

// 2. Crear los botones de navegación del Menú (Grupo A hasta L)
function crearMenuNavegacion() {
    let htmlMenu = "";
    partidosMundial.forEach((bloque, index) => {
        // Sacamos solo la letra del grupo (ej: de "GRUPO A" obtenemos "A")
        const letra = bloque.grupo.replace("GRUPO ", "");
        const claseActiva = index === grupoActivoIndex ? "activo" : "";
        htmlMenu += `<button class="btn-tab ${claseActiva}" onclick="cambiarDeGrupo(${index})">Grupo ${letra}</button>`;
    });
    menuGrupos.innerHTML = htmlMenu;
}

// 3. Guardar en memoria lo que el usuario escribió antes de cambiar de grupo
function salvarProgresoActual() {
    const bloqueActual = partidosMundial[grupoActivoIndex];
    bloqueActual.partidos.forEach(partido => {
        const inputL = document.getElementById(`local-${partido.id}`);
        const inputV = document.getElementById(`visitante-${partido.id}`);
        if(inputL && inputV) {
            memoriaPronosticos[`local-${partido.id}`] = inputL.value;
            memoriaPronosticos[`visitante-${partido.id}`] = inputV.value;
        }
    });
}

// 4. Cambiar el grupo visible en pantalla
window.cambiarDeGrupo = function(index) {
    salvarProgresoActual(); // Guardamos lo que haya escrito en el grupo viejo
    grupoActivoIndex = index; // Actualizamos el índice activo
    crearMenuNavegacion(); // Pintamos de nuevo el menú para actualizar el botón activo
    renderizarGrupoActivo(); // Pintamos el nuevo grupo solitario
}

// 5. Dibujar SOLO el grupo seleccionado
function renderizarGrupoActivo() {
    const bloque = partidosMundial[grupoActivoIndex];
    let html = `
        <div class="bloque-grupo">
            <div class="titulo-grupo">${bloque.grupo}</div>
            
            <div class="contenedor-tabla">
                <table class="tabla-posiciones">
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th class="text-izq">Equipo</th>
                            <th>PJ</th>
                            <th>PG</th>
                            <th>PE</th>
                            <th>PP</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>`;
    
    bloque.clasificacion.forEach(fila => {
        html += `
            <tr>
                <td>${fila.pos}</td>
                <td class="text-izq">${fila.bandera} ${fila.equipo}</td>
                <td>${fila.pj}</td>
                <td>${fila.pg}</td>
                <td>${fila.pe}</td>
                <td>${fila.pp}</td>
                <td><strong>${fila.pts}</strong></td>
            </tr>`;
    });

    html += `
                    </tbody>
                </table>
            </div>
            
            <div class="subtitulo-partidos">Tu Pronóstico</div>`;
    
    bloque.partidos.forEach(partido => {
        const pred = partido.prediccionComunidad;
        // Revisamos si ya había escrito algo antes en este partido para dejarlo puesto
        const valorL = memoriaPronosticos[`local-${partido.id}`] || "";
        const valorV = memoriaPronosticos[`visitante-${partido.id}`] || "";

        html += `
            <div class="contenedor-prediccion">
                <div class="tarjeta-partido">
                    <div class="equipo">
                        <span class="bandera">${partido.banderaL}</span>
                        <span class="nombre-equipo">${partido.local}</span>
                    </div>
                    
                    <div class="marcador-input">
                        <input type="number" id="local-${partido.id}" min="0" placeholder="0" value="${valorL}">
                        <span class="vs">VS</span>
                        <input type="number" id="visitante-${partido.id}" min="0" placeholder="0" value="${valorV}">
                    </div>

                    <div class="equipo">
                        <span class="nombre-equipo">${partido.visitante}</span>
                        <span class="bandera">${partido.banderaV}</span>
                    </div>
                </div>

                <div class="seccion-porcentajes">
                    <div class="etiqueta-prediccion">Predicción de la comunidad</div>
                    <div class="barra-probabilidades">
                        <div class="progreso-local" style="width: ${pred.local}%"></div>
                        <div class="progreso-empate" style="width: ${pred.empate}%"></div>
                        <div class="progreso-visitante" style="width: ${pred.visitante}%"></div>
                    </div>
                    <div class="numeros-porcentajes">
                        <span class="pct-l">Gana ${partido.local}: ${pred.local}%</span>
                        <span class="pct-e">Empate: ${pred.empate}%</span>
                        <span class="pct-v">Gana ${partido.visitante}: ${pred.visitante}%</span>
                    </div>
                </div>
            </div>`;
    });

    html += `</div>`;
    // Forzamos la inyección al contenedor correcto
    document.getElementById('contenedor-grupo-activo').innerHTML = html;
}

// Inicialización de la App
crearMenuNavegacion();
renderizarGrupoActivo();

// 6. Botón de Cálculo de Puntos de TODOS los grupos guardados en memoria
btnCalcular.addEventListener('click', () => {
    salvarProgresoActual(); // Guardamos el grupo que está viendo actualmente

    let totalPuntos = 0;
    let partidosContados = 0;

    partidosMundial.forEach(bloque => {
        bloque.partidos.forEach(partido => {
            // Buscamos los datos almacenados en nuestra memoria
            const valL = memoriaPronosticos[`local-${partido.id}`];
            const valV = memoriaPronosticos[`visitante-${partido.id}`];

            // Si el usuario no ha respondido este partido todavía, lo saltamos
            if (valL === undefined || valV === undefined || valL === "" || valV === "") {
                return; 
            }

            const pronosticoLocal = parseInt(valL);
            const pronosticoVisitante = parseInt(valV);
            partidosContados++;

            const gRealL = partido.golesLocalReal;
            const gRealV = partido.golesVisitanteReal;

            if (pronosticoLocal === gRealL && pronosticoVisitante === gRealV) {
                totalPuntos += 3;
            } 
            else if (
                (pronosticoLocal > pronosticoVisitante && gRealL > gRealV) ||
                (pronosticoLocal < pronosticoVisitante && gRealL < gRealV) ||
                (pronosticoLocal === pronosticoVisitante && gRealL === gRealV)
            ) {
                totalPuntos += 1;
            }
        });
    });

    txtPuntos.textContent = totalPuntos;
    txtMensaje.textContent = `Puntaje calculado en base a ${partidosContados} partidos completados a través de los grupos.`;
});