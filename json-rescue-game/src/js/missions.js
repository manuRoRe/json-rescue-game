const MISSIONS = [
  {
    id: 1,
    title: "Parsear JSON",
    description: "Convierte el string JSON en un array de objetos JavaScript.",
    hint: "Usa JSON.parse(studentsJSON)."
  },
  {
    id: 2,
    title: "Mostrar estudiantes",
    description: "Recorre el array y pinta una tarjeta por cada estudiante.",
    hint: "Usa un for, students.length y createStudentCard()."
  },
  {
    id: 3,
    title: "Filtrar activos",
    description: "Muestra solo los estudiantes cuya propiedad active sea true.",
    hint: "Dentro del for, usa if (students[i].active === true)."
  },
  {
    id: 4,
    title: "Filtrar aprobados",
    description: "Muestra solo estudiantes con score mayor o igual que 5.",
    hint: "La condición es students[i].score >= 5."
  },
  {
    id: 5,
    title: "Calcular media",
    description: "Suma todas las notas y calcula la media del grupo.",
    hint: "Necesitas un acumulador: let total = 0."
  },
  {
    id: 6,
    title: "Crear resumen",
    description: "Crea un objeto con totalStudents, activeStudents, passedStudents y averageScore.",
    hint: "Un objeto usa claves y valores: { clave: valor }."
  },
  {
    id: 7,
    title: "Exportar JSON",
    description: "Convierte el objeto resumen en un string JSON.",
    hint: "Usa JSON.stringify(summary, null, 2)."
  }
];
