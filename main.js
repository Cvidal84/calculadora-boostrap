document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button[data-value]");
  const clearButton = document.getElementById("clear");
  const equalButton = document.getElementById("equal");

  // Añadir número u operador al display
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.value += btn.getAttribute("data-value");
    });
  });

  // Borrar todo
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
