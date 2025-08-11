const display = document.querySelector("#display");

// let display: HTMLElement || null

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === "") return;

  const lastChar = display.value.slice(-1);

  if ("+-*/%".includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }

  display.value += operator;
}

function appendDot() {
  const parts = display.value.split(/[\+\-\*\/\%]/);

  const lastParts = parts[parts.length - 1];

  if (!lastParts.includes(".")) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erreur";
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Erreur";
  }
}

function deleteLast() {
  if (display) {
    display.value = display.value.slice(0, -1);
  }
}
