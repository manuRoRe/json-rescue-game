# JSON Rescue: mini-juego de JavaScript

**JSON Rescue** es un mini-juego educativo para practicar JavaScript básico en un contexto parecido a una web real.

Los alumnos reciben datos en formato JSON, tienen que convertirlos a objetos JavaScript, recorrer arrays, filtrar información, modificar el DOM y usar eventos.

Está pensado para alumnos que ya han visto:

- Variables
- Condicionales
- Bucles `for`
- Arrays
- Objetos
- Métodos básicos
- JSON
- DOM
- Eventos

---

## Objetivo del juego

La web de la academia se ha roto. Los datos de estudiantes llegan como JSON, pero no se muestran correctamente.

El equipo debe completar varias misiones para restaurar el panel:

1. Convertir un JSON en datos utilizables.
2. Mostrar todos los estudiantes.
3. Mostrar solo estudiantes activos.
4. Mostrar solo estudiantes aprobados.
5. Calcular la media de notas.
6. Crear una tarjeta de resumen final.
7. Convertir el resultado final otra vez a JSON.

---

## Cómo usarlo en clase

### Opción 1: abrir directamente

Abre el archivo:

```bash
index.html
```

en el navegador.

### Opción 2: usar Live Server

Recomendado si usas VS Code.

1. Instala la extensión **Live Server**.
2. Haz clic derecho sobre `index.html`.
3. Pulsa **Open with Live Server**.

---

## Estructura del proyecto

```bash
json-rescue-game/
│
├── index.html
├── README.md
│
├── data/
│   └── students.json
│
├── src/
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       ├── app.js
│       └── missions.js
│
└── solutions/
    ├── README-SOLUCIONES.md
    └── app.solution.js
```

---

## Cómo jugar

Los alumnos deben abrir `src/js/app.js` y completar las zonas marcadas con:

```js
// TODO
```

Cada misión tiene una explicación en pantalla y una pista.

Cuando completen una misión, pueden pulsar los botones de la interfaz para comprobar si el comportamiento es correcto.

---

## Dinámica recomendada

### Modalidad individual

Cada alumno completa las misiones en su ordenador.


### Modalidad por equipos

Equipos de 2 o 3 personas.

Cada equipo debe completar las misiones y avisar al profesor cuando tenga una funcionando.


---

## Reglas sugeridas

- Cada misión completada vale 1 punto.
- Si explican por qué funciona, ganan 1 punto extra.
- Si encuentran y corrigen un error sin ayuda, ganan 1 punto extra.

---

## Misiones

### Misión 1: Parsear JSON

Convertir el texto JSON en un array de objetos JavaScript usando:

```js
JSON.parse()
```

---

### Misión 2: Mostrar estudiantes

Recorrer el array de estudiantes y crear elementos en el DOM.

Conceptos:

- `for`
- `.length`
- `document.createElement()`
- `appendChild()`

---

### Misión 3: Filtrar activos

Mostrar solo estudiantes con:

```js
active === true
```

Conceptos:

- Condicionales
- Booleanos
- Bucles

---

### Misión 4: Filtrar aprobados

Mostrar solo estudiantes con nota igual o superior a 5.

Conceptos:

- Comparadores
- Objetos
- Arrays

---

### Misión 5: Calcular media

Sumar todas las notas y dividir entre el número de estudiantes.

Conceptos:

- Acumuladores
- Operadores
- `.toFixed()`

---

### Misión 6: Crear resumen

Crear un objeto con información final:

```js
{
  totalStudents: 6,
  activeStudents: 4,
  passedStudents: 5,
  averageScore: 7.2
}
```

---

### Misión 7: Convertir objeto a JSON

Usar:

```js
JSON.stringify()
```

para convertir el resumen final a texto JSON.

---

## Ideas para ampliar

- Añadir estudiantes nuevos desde un formulario.
- Crear un botón para mostrar suspendidos.
- Cambiar colores según la nota.
- Ordenar estudiantes por nota.
- Guardar datos en `localStorage`.
- Convertir el juego en una competición por tiempo.

---

