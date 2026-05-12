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
let average = null;
let exportedSummaryJSON = "";
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

const EXPECTED = {
  totalStudents: 6,
  activeStudents: 4,
  passedStudents: 4,
  averageScore: 37 / 6,
  firstStudentName: "Ana",
  lastStudentName: "Leo"
};

function print(message) {
  consoleElement.textContent = message;
}

function setStatus(message) {
  statusElement.textContent = message;
}

function markMissionAsComplete(id) {
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

function getRenderedCards() {
  return studentsContainer.querySelectorAll(".student-card");
}

function getRenderedText() {
  return studentsContainer.textContent;
}

function isCloseToExpectedAverage(value) {
  return typeof value === "number" && Math.abs(value - EXPECTED.averageScore) < 0.01;
}

function safeRun(action, checker) {
  try {
    action();
    checker();
  } catch (error) {
    setStatus("Hay un error en tu código. Revisa la consola del navegador.");
    print(error.message);
    console.error(error);
  }
}

// MISIÓN 1
function loadStudents() {
  // TODO: convierte studentsJSON en un array de objetos y guárdalo en students.
  // Ejemplo de objetivo:
  // students debe acabar siendo un array de objetos JavaScript.
  // La variable students ya existe, simplemente hay que asignarle un valor// students = array

}

// MISIÓN 2
function showAllStudents() {
  clearStudents();

  // TODO: recorre students con un bucle for.
  // Por cada estudiante, crea una tarjeta con createStudentCard(estudiante)
  // y añádela a studentsContainer con appendChild().
}

// MISIÓN 3
function showActiveStudents() {
  clearStudents();

  // TODO: recorre students.
  // Si student.active es true, pinta su tarjeta.
}

// MISIÓN 4
function showPassedStudents() {
  clearStudents();

  // TODO: recorre students.
  // Si student.score es mayor o igual que 5, pinta su tarjeta.
}

// MISIÓN 5
function calculateAverageScore() {
  // TODO: crea un acumulador total.
  // Después calcula la media y guárdala en la variable global average.
  // Importante: debe quedar guardado así:
  // average = resultadoDeLaMedia;
  // average ya está creadp solo hay que asignarle un valor
}

// MISIÓN 6
function createSummary() {
  // TODO: crea un objeto summary con estos datos:
  // - totalStudents
  // - activeStudents
  // - passedStudents
  // - averageScore
  //
  // Importante: guarda el objeto en la variable global summary.
}

// MISIÓN 7
function exportSummaryToJSON() {
  // TODO: convierte summary a JSON con JSON.stringify().
  // Guarda el resultado en exportedSummaryJSON.
  // Después muestra el resultado usando print().
}

// COMPROBACIONES AUTOMÁTICAS

function checkMission1() {
  const isCorrect =
    Array.isArray(students) &&
    students.length === EXPECTED.totalStudents &&
    students[0].name === EXPECTED.firstStudentName &&
    students[5].name === EXPECTED.lastStudentName &&
    students[0].score === 8 &&
    students[1].active === false;

  if (isCorrect) {
    markMissionAsComplete(1);
    setStatus("Misión 1 completada: JSON convertido correctamente.");
    print("students ya es un array de objetos JavaScript.");
  } else {
    setStatus("Misión 1 pendiente: todavía no has convertido bien el JSON.");
    print("Usa JSON.parse(studentsJSON) y guarda el resultado en students.");
  }
}

function checkMission2() {
  const cards = getRenderedCards();
  const text = getRenderedText();

  const isCorrect =
    cards.length === EXPECTED.totalStudents &&
    text.includes("Ana") &&
    text.includes("Luis") &&
    text.includes("Marta") &&
    text.includes("Iker") &&
    text.includes("Nora") &&
    text.includes("Leo");

  if (isCorrect) {
    markMissionAsComplete(2);
    setStatus("Misión 2 completada: has mostrado todos los estudiantes.");
    print("Has recorrido el array y pintado todas las tarjetas.");
  } else {
    setStatus("Misión 2 pendiente: no se están mostrando todos los estudiantes.");
    print("Recorre students con for, crea una tarjeta por estudiante y usa appendChild().");
  }
}

function checkMission3() {
  const cards = getRenderedCards();
  const text = getRenderedText();

  const isCorrect =
    cards.length === EXPECTED.activeStudents &&
    text.includes("Ana") &&
    text.includes("Marta") &&
    text.includes("Iker") &&
    text.includes("Leo") &&
    !text.includes("Luis") &&
    !text.includes("Nora");

  if (isCorrect) {
    markMissionAsComplete(3);
    setStatus("Misión 3 completada: has filtrado los estudiantes activos.");
    print("Solo aparecen estudiantes con active === true.");
  } else {
    setStatus("Misión 3 pendiente: el filtro de activos no es correcto.");
    print("Usa un if para pintar solo estudiantes con active === true.");
  }
}

function checkMission4() {
  const cards = getRenderedCards();
  const text = getRenderedText();

  const isCorrect =
    cards.length === EXPECTED.passedStudents &&
    text.includes("Ana") &&
    text.includes("Marta") &&
    text.includes("Iker") &&
    text.includes("Leo") &&
    !text.includes("Luis") &&
    !text.includes("Nora");

  if (isCorrect) {
    markMissionAsComplete(4);
    setStatus("Misión 4 completada: has filtrado los estudiantes aprobados.");
    print("Solo aparecen estudiantes con score >= 5.");
  } else {
    setStatus("Misión 4 pendiente: el filtro de aprobados no es correcto.");
    print("Usa un if para pintar solo estudiantes con score >= 5.");
  }
}

function checkMission5() {
  if (isCloseToExpectedAverage(average)) {
    markMissionAsComplete(5);
    setStatus("Misión 5 completada: has calculado la media.");
    print(`La media de notas es ${average.toFixed(2)}.`);
  } else {
    setStatus("Misión 5 pendiente: la media no está bien calculada.");
    print("Suma todas las notas con un acumulador y divide entre students.length. Guarda el resultado en average.");
  }
}

function checkMission6() {
  const isCorrect =
    summary !== null &&
    typeof summary === "object" &&
    summary.totalStudents === EXPECTED.totalStudents &&
    summary.activeStudents === EXPECTED.activeStudents &&
    summary.passedStudents === EXPECTED.passedStudents &&
    isCloseToExpectedAverage(summary.averageScore);

  if (isCorrect) {
    markMissionAsComplete(6);
    setStatus("Misión 6 completada: has creado el objeto resumen.");
    print("summary contiene totalStudents, activeStudents, passedStudents y averageScore.");
  } else {
    setStatus("Misión 6 pendiente: el objeto summary no tiene los datos esperados.");
    print("Crea summary con totalStudents, activeStudents, passedStudents y averageScore.");
  }
}

function checkMission7() {
  let parsedJSON = null;

  try {
    parsedJSON = JSON.parse(exportedSummaryJSON);
  } catch (error) {
    parsedJSON = null;
  }

  const isCorrect =
    typeof exportedSummaryJSON === "string" &&
    parsedJSON !== null &&
    parsedJSON.totalStudents === EXPECTED.totalStudents &&
    parsedJSON.activeStudents === EXPECTED.activeStudents &&
    parsedJSON.passedStudents === EXPECTED.passedStudents &&
    isCloseToExpectedAverage(parsedJSON.averageScore);

  if (isCorrect) {
    markMissionAsComplete(7);
    setStatus("Misión 7 completada: has exportado el resumen a JSON.");
    print(exportedSummaryJSON);
  } else {
    setStatus("Misión 7 pendiente: el resumen no está bien convertido a JSON.");
    print("Usa JSON.stringify(summary), guarda el resultado en exportedSummaryJSON y muéstralo con print().");
  }
}

function resetGame() {
  students = [];
  summary = null;
  average = null;
  exportedSummaryJSON = "";
  completedMissions = [];

  clearStudents();
  setStatus("Juego reiniciado. Empieza por cargar el JSON.");
  print("Aquí aparecerán resultados, errores y el JSON final.");
  missionCounter.textContent = `0 / ${MISSIONS.length}`;
  renderMissions();
}

// EVENTOS

btnLoad.addEventListener("click", function () {
  safeRun(loadStudents, checkMission1);
});

btnShowAll.addEventListener("click", function () {
  safeRun(showAllStudents, checkMission2);
});

btnActive.addEventListener("click", function () {
  safeRun(showActiveStudents, checkMission3);
});

btnPassed.addEventListener("click", function () {
  safeRun(showPassedStudents, checkMission4);
});

btnAverage.addEventListener("click", function () {
  safeRun(calculateAverageScore, checkMission5);
});

btnSummary.addEventListener("click", function () {
  safeRun(createSummary, checkMission6);
});

btnJson.addEventListener("click", function () {
  safeRun(exportSummaryToJSON, checkMission7);
});

btnReset.addEventListener("click", resetGame);

renderMissions();