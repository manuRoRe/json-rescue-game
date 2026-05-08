// JSON Rescue
// Completa las zonas marcadas con TODO.
// No mires la carpeta solutions hasta que tu profesor lo indique.

const studentsJSON = `[
  { "name": "Ana", "score": 8, "active": true, "track": "Frontend" },
  { "name": "Luis", "score": 4, "active": false, "track": "Backend" },
  { "name": "Marta", "score": 9, "active": true, "track": "Full Stack" },
  { "name": "Iker", "score": 6, "active": true, "track": "Frontend" },
  { "name": "Nora", "score": 3, "active": false, "track": "Backend" },
  { "name": "Leo", "score": 7, "active": true, "track": "Full Stack" }
]`;

let students = [];
let summary = null;
let completedMissions = [];

const statusElement = document.getElementById("status");
const consoleElement = document.getElementById("game-console");
const studentsContainer = document.getElementById("students-container");
const missionCounter = document.getElementById("mission-counter");
const missionsList = document.getElementById("missions-list");

const btnLoad = document.getElementById("btn-load");
const btnShowAll = document.getElementById("btn-show-all");
const btnActive = document.getElementById("btn-active");
const btnPassed = document.getElementById("btn-passed");
const btnAverage = document.getElementById("btn-average");
const btnSummary = document.getElementById("btn-summary");
const btnJson = document.getElementById("btn-json");
const btnReset = document.getElementById("btn-reset");

function print(message) {
  consoleElement.textContent = message;
}

function setStatus(message) {
  statusElement.textContent = message;
}

function completeMission(id) {
  if (!completedMissions.includes(id)) {
    completedMissions.push(id);
  }

  missionCounter.textContent = `${completedMissions.length} / ${MISSIONS.length}`;
  renderMissions();
}

function renderMissions() {
  missionsList.innerHTML = "";

  for (let i = 0; i < MISSIONS.length; i++) {
    const mission = MISSIONS[i];
    const article = document.createElement("article");
    article.className = completedMissions.includes(mission.id) ? "mission done" : "mission";

    article.innerHTML = `
      <h3>${mission.id}. ${mission.title}</h3>
      <p>${mission.description}</p>
      <p class="hint">Pista: ${mission.hint}</p>
    `;

    missionsList.appendChild(article);
  }
}

function clearStudents() {
  studentsContainer.innerHTML = "";
}

function createStudentCard(student) {
  const article = document.createElement("article");
  article.className = "student-card";

  const statusClass = student.active ? "ok" : "ko";
  const statusText = student.active ? "Activo" : "Inactivo";
  const resultText = student.score >= 5 ? "Aprobado" : "Suspendido";

  article.innerHTML = `
    <h3>${student.name}</h3>
    <p>Nota: ${student.score}</p>
    <p>Ruta: ${student.track}</p>
    <p>Resultado: ${resultText}</p>
    <span class="badge ${statusClass}">${statusText}</span>
  `;

  return article;
}

// MISIÓN 1
function loadStudents() {
  // TODO: convierte studentsJSON en un array de objetos y guárdalo en students.

  setStatus("Misión 1 pendiente: todavía no has parseado el JSON.");
  print("Completa loadStudents() usando JSON.parse().");
}

// MISIÓN 2
function showAllStudents() {
  clearStudents();

  // TODO: recorre students con un bucle for.
  // Por cada estudiante, crea una tarjeta con createStudentCard(estudiante)
  // y añádela a studentsContainer con appendChild().

  setStatus("Misión 2 pendiente: muestra todos los estudiantes.");
  print("Completa showAllStudents() usando for y appendChild().");
}

// MISIÓN 3
function showActiveStudents() {
  clearStudents();

  // TODO: recorre students.
  // Si student.active es true, pinta su tarjeta.

  setStatus("Misión 3 pendiente: filtra solo estudiantes activos.");
  print("Completa showActiveStudents() usando if y active === true.");
}

// MISIÓN 4
function showPassedStudents() {
  clearStudents();

  // TODO: recorre students.
  // Si student.score es mayor o igual que 5, pinta su tarjeta.

  setStatus("Misión 4 pendiente: filtra solo estudiantes aprobados.");
  print("Completa showPassedStudents() usando score >= 5.");
}

// MISIÓN 5
function calculateAverageScore() {
  // TODO: crea un acumulador total.
  // Guarda el resultado en una variable average.

  setStatus("Misión 5 pendiente: calcula la media de notas.");
  print("Completa calculateAverageScore() usando un acumulador.");
}

// MISIÓN 6
function createSummary() {
  // TODO: calcula:
  // - número total de estudiantes
  // - número de estudiantes activos
  // - número de estudiantes aprobados
  // - media de notas

  setStatus("Misión 6 pendiente: crea el objeto summary.");
  print("Completa createSummary() creando un objeto con los resultados.");
}

// MISIÓN 7
function exportSummaryToJSON() {
  // TODO: convierte summary a JSON con JSON.stringify().
  // Muestra el resultado con print().

  setStatus("Misión 7 pendiente: exporta el resumen a JSON.");
  print("Completa exportSummaryToJSON() usando JSON.stringify().");
}

function resetGame() {
  students = [];
  summary = null;
  completedMissions = [];
  clearStudents();
  setStatus("Juego reiniciado. Empieza por cargar el JSON.");
  print("Aquí aparecerán resultados, errores y el JSON final.");
  missionCounter.textContent = `0 / ${MISSIONS.length}`;
  renderMissions();
}

btnLoad.addEventListener("click", loadStudents);
btnShowAll.addEventListener("click", showAllStudents);
btnActive.addEventListener("click", showActiveStudents);
btnPassed.addEventListener("click", showPassedStudents);
btnAverage.addEventListener("click", calculateAverageScore);
btnSummary.addEventListener("click", createSummary);
btnJson.addEventListener("click", exportSummaryToJSON);
btnReset.addEventListener("click", resetGame);

renderMissions();
