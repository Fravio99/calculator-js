const display = document.querySelector("#display");

function appendNumber(number) {
  // @ts-ignore
  display.value += number;
}

function appendOperator(operator) {
  // @ts-ignore
  if (display.value === "") return;

  // @ts-ignore
  const lastChar = display.value.slice(-1);

  if ("+-*/%".includes(lastChar)) {
    // @ts-ignore
    display.value = display.value.slice(0, -1);
  }

  // @ts-ignore
  display.value += operator;
}

function appendDot() {
  // @ts-ignore
  const parts = display.value.split(/[\+\-\*\/\%]/);

  const lastParts = parts[parts.length - 1];

  if (!lastParts.includes(".")) {
    // @ts-ignore
    display.value += ".";
  }
}

function clearDisplay() {
  // @ts-ignore
  display.value = "";
}

function calculate() {
  try {
    // @ts-ignore
    display.value = eval(display.value);
  } catch {
    // @ts-ignore
    display.value = "Erreur";
  }
}

function squareRoot() {
  try {
    // @ts-ignore
    display.value = Math.sqrt(eval(display.value));
  } catch {
    // @ts-ignore
    display.value = "Erreur";
  }
}

function deleteLast() {
  if (display) {
    // @ts-ignore
    display.value = display.value.slice(0, -1);
  }
}
