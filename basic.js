// script.js

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

// @ts-ignore
const display = document.getElementById("display");

// Met à jour l'affichage
function updateDisplay() {
  // @ts-ignore
  display.value =
    firstNumber + (operator ? " " + operator + " " : "") + secondNumber;
}

// Ajouter un chiffre ou un point
function appendNumber(number) {
  if (!isSecondNumber) {
    firstNumber += number;
  } else {
    secondNumber += number;
  }
  updateDisplay();
}

// Ajouter un opérateur
function appendOperator(op) {
  if (firstNumber === "") return;

  // Ne permet pas d'entrer un nouvel opérateur s'il y en a déjà un
  if (operator !== "") return;

  operator = op;
  isSecondNumber = true;
  updateDisplay();
}

// Supprimer le dernier caractère
function deleteLast() {
  if (isSecondNumber && secondNumber !== "") {
    secondNumber = secondNumber.slice(0, -1);
  } else if (!isSecondNumber && operator !== "") {
    operator = "";
    isSecondNumber = false;
  } else {
    firstNumber = firstNumber.slice(0, -1);
  }
  updateDisplay();
}

// Réinitialiser tout
function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecondNumber = false;
  updateDisplay();
}

// Racine carrée du nombre actuel (selon l'état)
function squareRoot() {
  if (!isSecondNumber) {
    const num = parseFloat(firstNumber);
    if (isNaN(num) || num < 0) {
      // @ts-ignore
      display.value = "Erreur";
      return;
    }
    firstNumber = Math.sqrt(num).toString();
  } else {
    const num = parseFloat(secondNumber);
    if (isNaN(num) || num < 0) {
      // @ts-ignore
      display.value = "Erreur";
      return;
    }
    secondNumber = Math.sqrt(num).toString();
  }
  updateDisplay();
}

// Pourcentage du second nombre
function appendPercent() {
  if (!isSecondNumber) {
    const num = parseFloat(firstNumber);
    if (isNaN(num)) return;
    firstNumber = (num / 100).toString();
  } else {
    const num = parseFloat(secondNumber);
    if (isNaN(num)) return;
    secondNumber = (num / 100).toString();
  }
  updateDisplay();
}

// Calculer le résultat
function calculate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result;

  if (isNaN(num1) || (isSecondNumber && isNaN(num2))) {
    // @ts-ignore
    display.value = "Erreur";
    return;
  }

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      // @ts-ignore
      display.value = "Erreur : Division par 0";
      return;
    }
    result = num1 / num2;
  } else if (operator === "%") {
    result = num1 % num2;
  } else {
    // @ts-ignore
    display.value = "Erreur";
    return;
  }

  // Réinitialise les états pour permettre un nouveau calcul
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isSecondNumber = false;

  updateDisplay();
}
