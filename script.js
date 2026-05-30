// Base de datos de los 48 países ficticios/reales para el ejemplo estructurados en 12 grupos (A-L)
const alphabet = "ABCDEFGHIJKL".split("");
const baseCountries = [
    "Argentina", "Arabia Saudita", "Argelia", "Australia",
    "Brasil", "Bélgica", "Bolivia", "Baréin",
    "Colombia", "Costa Rica", "Croacia", "Camerún",
    "Dinamarca", "Chile", "Canadá", "Corea del Sur",
    "Ecuador", "España", "Egipto", "EE. UU.",
    "Francia", "Fiyi", "Finlandia", "Filipinas",
    "Alemania", "Ghana", "Grecia", "Guatemala",
    "Países Bajos", "Honduras", "Hungría", "Haití",
    "Italia", "Irán", "Irlanda", "Irak",
    "Japón", "Jamaica", "Jordania", "china",
    "Marruecos", "México", "Mali", "Montenegro",
    "Uruguay", "Portugal", "Perú", "Panamá"
];

// Organizar países en 12 grupos de 4 de manera alfabética
let groups = {};
alphabet.forEach((letter, index) => {
    groups[letter] = baseCountries.slice(index * 4, (index * 4) + 4);
});

// Estado de la aplicación para guardar las selecciones del usuario
let userSelections = {
    groups: {},           // Guardará { 'A': ['País1', 'País2'], 'B': [...] }
    octavosWinners: [],   // Ganadores de Octavos
    cuartosWinners: [],   // Ganadores de Cuartos
    semisWinners: [],     // Ganadores de Semifinales (Finalistas)
    champion: ""          // Campeón definitivo
};

// Al cargar el documento se arranca la primera fase
document.addEventListener("DOMContentLoaded", () => {
    renderGroups();
    setupEventListeners();
});

// --- RENDERIZADO FASE DE GRUPOS ---
function renderGroups() {
    const container = document.getElementById("groups-container");
    container.innerHTML = "";

    for (const [letter, teams] of Object.entries(groups)) {
        userSelections.groups[letter] = []; // Inicializar array de seleccionados

        const groupCard = document.createElement("div");
        groupCard.className = "group-card";
        groupCard.innerHTML = `<h3>Grupo ${letter}</h3>`;

        teams.forEach(team => {
            const teamItem = document.createElement("div");
            teamItem.className = "team-item";
            teamItem.innerHTML = `<span>${team}</span> <span class="badge">⭕</span>`;
            
            teamItem.addEventListener("click", () => {
                toggleGroupSelection(letter, team, teamItem);
            });

            groupCard.appendChild(teamItem);
        });

        container.appendChild(groupCard);
    }
}

function toggleGroupSelection(groupLetter, teamName, element) {
    let selected = userSelections.groups[groupLetter];

    if (selected.includes(teamName)) {
        // Deseleccionar
        userSelections.groups[groupLetter] = selected.filter(t => t !== teamName);
        element.classList.remove("selected");
        element.querySelector(".badge").innerText = "⭕";
    } else {
        // Validar límite de máximo 2 clasificados por grupo
        if (selected.length < 2) {
            userSelections.groups[groupLetter].push(teamName);
            element.classList.add("selected");
            element.querySelector(".badge").innerText = "✅";
        } else {
            alert(`Ya has seleccionado los 2 clasificados del Grupo ${groupLetter}. Deselecciona uno primero.`);
        }
    }
}

// --- CONFIGURACIÓN DE NAVEGACIÓN Y LOGICA FASES ---
function changePhase(currentId, nextId) {
    document.getElementById(currentId).classList.remove("active-phase");
    document.getElementById(nextId).classList.add("active-phase");
    window.scrollTo(0, 0);
}

function setupEventListeners() {
    // Pasar a Octavos
    document.getElementById("btn-to-octavos").addEventListener("click", () => {
        for (const [letter, teams] of Object.entries(userSelections.groups)) {
            if (teams.length !== 2) {
                alert(`Por favor, selecciona exactamente 2 ganadores para el Grupo ${letter}`);
                return;
            }
        }
        generateOctavosMatchups();
        changePhase("phase-groups", "phase-octavos");
    });

    // Pasar a Cuartos
    document.getElementById("btn-to-cuartos").addEventListener("click", () => {
        const totalMatchups = document.querySelectorAll("#octavos-container .matchup").length;
        if (userSelections.octavosWinners.length < totalMatchups) {
            alert("Por favor, selecciona al ganador de todos los encuentros de Octavos.");
            return;
        }
        generateCuartosMatchups();
        changePhase("phase-octavos", "phase-cuartos");
    });

    // NUEVO: Pasar a Semifinales
    document.getElementById("btn-to-semis").addEventListener("click", () => {
        const totalMatchups = document.querySelectorAll("#cuartos-container .matchup").length;
        if (userSelections.cuartosWinners.length < totalMatchups) {
            alert("Por favor, selecciona al ganador de todos los encuentros de Cuartos.");
            return;
        }
        generateSemisMatchups();
        changePhase("phase-cuartos", "phase-semis");
    });

    // NUEVO: Pasar a la Final
    document.getElementById("btn-to-final").addEventListener("click", () => {
        const totalMatchups = document.querySelectorAll("#semis-container .matchup").length;
        if (userSelections.semisWinners.length < totalMatchups) {
            alert("Por favor, selecciona al ganador de las Semifinales.");
            return;
        }
        generateFinalMatchup();
        changePhase("phase-semis", "phase-final");
    });

    // Finalizar Quiniela (Modificado para validar el campeón)
    document.getElementById("btn-finish").addEventListener("click", () => {
        if (!userSelections.champion) {
            alert("Por favor, selecciona al Campeón del Mundo.");
            return;
        }
        showSummary();
        changePhase("phase-final", "phase-summary");
    });
}

// --- LOGICA DE OCTAVOS DE FINAL ---
function generateOctavosMatchups() {
    const container = document.getElementById("octavos-container");
    container.innerHTML = "";
    userSelections.octavosWinners = [];

    let qualifiedTeams = [];
    alphabet.forEach(letter => {
        qualifiedTeams.push(...userSelections.groups[letter]);
    });

    let octavosTeams = qualifiedTeams.slice(0, 16); 

    for (let i = 0; i < octavosTeams.length; i += 2) {
        const team1 = octavosTeams[i];
        const team2 = octavosTeams[i+1];
        const matchId = `octavos-m-${i}`;

        createMatchupElement(container, team1, team2, matchId, userSelections.octavosWinners);
    }
}

// --- LOGICA DE CUARTOS DE FINAL ---
function generateCuartosMatchups() {
    const container = document.getElementById("cuartos-container");
    container.innerHTML = "";
    userSelections.cuartosWinners = [];

    const teams = userSelections.octavosWinners;

    for (let i = 0; i < teams.length; i += 2) {
        const team1 = teams[i];
        const team2 = teams[i+1];
        const matchId = `cuartos-m-${i}`;

        createMatchupElement(container, team1, team2, matchId, userSelections.cuartosWinners);
    }
}

// --- NUEVO: LOGICA DE SEMIFINALES ---
function generateSemisMatchups() {
    const container = document.getElementById("semis-container");
    container.innerHTML = "";
    userSelections.semisWinners = [];

    const teams = userSelections.cuartosWinners;

    for (let i = 0; i < teams.length; i += 2) {
        const team1 = teams[i];
        const team2 = teams[i+1];
        const matchId = `semis-m-${i}`;

        createMatchupElement(container, team1, team2, matchId, userSelections.semisWinners);
    }
}

// --- NUEVO: LOGICA DE LA GRAN FINAL ---
function generateFinalMatchup() {
    const container = document.getElementById("final-container");
    container.innerHTML = "";
    userSelections.champion = ""; // Resetear campeón

    const teams = userSelections.semisWinners;

    // Solo hay un encuentro (2 equipos)
    const team1 = teams[0];
    const team2 = teams[1];
    
    const matchupDiv = document.createElement("div");
    matchupDiv.className = "matchup";
    matchupDiv.innerHTML = `<h4>👑 Encuentro Final 👑</h4>`;

    const item1 = document.createElement("div");
    item1.className = "team-item";
    item1.innerHTML = `<span>${team1}</span>`;

    const item2 = document.createElement("div");
    item2.className = "team-item";
    item2.innerHTML = `<span>${team2}</span>`;

    item1.addEventListener("click", () => {
        item1.classList.add("selected");
        item2.classList.remove("selected");
        userSelections.champion = team1;
    });

    item2.addEventListener("click", () => {
        item2.classList.add("selected");
        item1.classList.remove("selected");
        userSelections.champion = team2;
    });

    matchupDiv.appendChild(item1);
    matchupDiv.appendChild(item2);
    container.appendChild(matchupDiv);
}

// --- UTILERÍA PARA CREAR LLAVES / ENFRENTAMIENTOS EN PLAYOFFS ---
function createMatchupElement(container, team1, team2, matchId, targetArray) {
    const matchupDiv = document.createElement("div");
    matchupDiv.className = "matchup";
    matchupDiv.innerHTML = `<h4>Encuentro</h4>`;

    const item1 = document.createElement("div");
    item1.className = "team-item";
    item1.innerHTML = `<span>${team1}</span>`;

    const item2 = document.createElement("div");
    item2.className = "team-item";
    item2.innerHTML = `<span>${team2}</span>`;

    item1.addEventListener("click", () => {
        selectMatchupWinner(item1, item2, team1, team2, targetArray);
    });

    item2.addEventListener("click", () => {
        selectMatchupWinner(item2, item1, team2, team1, targetArray);
    });

    matchupDiv.appendChild(item1);
    matchupDiv.appendChild(item2);
    container.appendChild(matchupDiv);
}

function selectMatchupWinner(winnerElement, loserElement, winnerName, loserName, targetArray) {
    winnerElement.classList.add("selected");
    loserElement.classList.remove("selected");

    const indexLoser = targetArray.indexOf(loserName);
    if (indexLoser > -1) targetArray.splice(indexLoser, 1);

    if (!targetArray.includes(winnerName)) {
        targetArray.push(winnerName);
    }
}

// --- MOSTRAR RESUMEN FINAL GRÁFICO MEJORADO (BRACKET MUNDIAL) ---
// --- MOSTRAR RESUMEN FINAL GRÁFICO CON ACCIÓN DE PDF ---
function showSummary() {
    const content = document.getElementById("summary-content");
    
    // Obtener los arreglos de ganadores guardados por el usuario
    const oct = userSelections.octavosWinners;
    const cua = userSelections.cuartosWinners;
    const sem = userSelections.semisWinners;
    const champ = userSelections.champion;

    content.innerHTML = `
        <div class="summary-header-zone" style="text-align: center; margin-bottom: 2.5rem;">
            <h2 style="font-size: 2.8rem; color: #b7791f; margin-bottom: 0.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">🏆 ¡${champ.toUpperCase()} CAMPEÓN! 🏆</h2>
            <p style="color: var(--secondary-color); font-size: 1.1rem;">Tu árbol definitivo del torneo de eliminación directa</p>
        </div>

        <div class="summary-actions-top" style="text-align: center; margin-bottom: 2rem;">
            <button onclick="window.print()" class="btn success" style="background-color: #e53e3e; display: inline-flex; align-items: center; gap: 8px;">
                📄 Guardar Resultado en PDF
            </button>
        </div>

        <div class="world-cup-bracket" id="pdf-bracket-capture">
            
            <div class="bracket-side">
                <div class="bracket-column">
                    <div class="column-title">Octavos (Izq)</div>
                    <div class="bracket-match"><div class="bracket-team selected-final">${oct[0] || '---'}</div><div class="bracket-team selected-final">${oct[1] || '---'}</div></div>
                    <div class="bracket-match"><div class="bracket-team selected-final">${oct[2] || '---'}</div><div class="bracket-team selected-final">${oct[3] || '---'}</div></div>
                </div>
                
                <div class="bracket-column justify-center-gap">
                    <div class="column-title">Cuartos (Izq)</div>
                    <div class="bracket-match">
                        <div class="bracket-team ${cua.includes(oct[0]) || cua.includes(oct[1]) ? 'winner-branch' : ''}">${cua[0] || '---'}</div>
                        <div class="bracket-team ${cua.includes(oct[2]) || cua.includes(oct[3]) ? 'winner-branch' : ''}">${cua[1] || '---'}</div>
                    </div>
                </div>
            </div>

            <div class="bracket-center-zone">
                <div class="semis-row">
                    <div class="semi-box">
                        <small>Semifinal 1</small>
                        <div class="bracket-team ${sem.includes(cua[0]) || sem.includes(cua[1]) ? 'winner-branch' : ''}">${sem[0] || '---'}</div>
                    </div>
                    <div class="semi-box">
                        <small>Semifinal 2</small>
                        <div class="bracket-team ${sem.includes(cua[2]) || sem.includes(cua[3]) ? 'winner-branch' : ''}">${sem[1] || '---'}</div>
                    </div>
                </div>

                <div class="final-match-box">
                    <h3>FINAL</h3>
                    <div class="final-teams">
                        <div class="final-team-card">${sem[0] || '---'}</div>
                        <span class="vs-circle">VS</span>
                        <div class="final-team-card">${sem[1] || '---'}</div>
                    </div>
                </div>

                <div class="champion-podium">
                    <div class="crown-animation">👑</div>
                    <div class="podium-banner">
                        <span class="champion-title">CAMPEÓN DEL MUNDO</span>
                        <h2 class="champion-name-display">${champ || '---'}</h2>
                    </div>
                </div>
            </div>

            <div class="bracket-side reverse-side">
                <div class="bracket-column justify-center-gap">
                    <div class="column-title">Cuartos (Der)</div>
                    <div class="bracket-match">
                        <div class="bracket-team ${cua.includes(oct[4]) || cua.includes(oct[5]) ? 'winner-branch' : ''}">${cua[2] || '---'}</div>
                        <div class="bracket-team ${cua.includes(oct[6]) || cua.includes(oct[7]) ? 'winner-branch' : ''}">${cua[3] || '---'}</div>
                    </div>
                </div>

                <div class="bracket-column">
                    <div class="column-title">Octavos (Der)</div>
                    <div class="bracket-match"><div class="bracket-team selected-final">${oct[4] || '---'}</div><div class="bracket-team selected-final">${oct[5] || '---'}</div></div>
                    <div class="bracket-match"><div class="bracket-team selected-final">${oct[6] || '---'}</div><div class="bracket-team selected-final">${oct[7] || '---'}</div></div>
                </div>
            </div>

        </div>
    `;
}