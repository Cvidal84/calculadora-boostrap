document.addEventListener("DOMContentLoaded", () => {
  //obtenemos los elementos del DOM
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button[data-value]");
  const clearButton = document.getElementById("clear");
  const equalButton = document.getElementById("equal");

  // Añadir el data-value del número u operador al final del display
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.value += btn.getAttribute("data-value");
    });
  });

  // Borrar todo, deja el display value sin valor, en blanco
  clearButton.addEventListener("click", () => {
    display.value = "";
  });

  // Calcular resultado
  equalButton.addEventListener("click", () => {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  });
});
