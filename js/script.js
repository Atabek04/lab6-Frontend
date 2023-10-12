function herons_forbula(a, b, c) {
  var summ = Number(a) + Number(b) + Number(c);
  var s = summ / 2;
  let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return A;
}

function reverseAndPrint() {
  // Get the input value
  var inputA = document.getElementById("input_num");
  var a = inputA.value;

  var inputB = document.getElementById("input_num2");
  var b = inputB.value;

  var inputC = document.getElementById("input_num3");
  var c = inputC.value;

  // Reverse the input value
  var heron = Math.round(herons_forbula(a, b, c));

  // Display the reversed value in the label
  var labelElement = document.getElementById("label_num");
  labelElement.textContent = "Area of triangle: " + heron;
}

function division(a, b) {
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

function multiplyAndPrint() {
  var inputA = document.getElementById("numA");
  var a = inputA.value;

  var inputB = document.getElementById("numB");
  var b = inputB.value;

  var rezult = multiplication(a, b);

  // Display the reversed value in the label
  var labelElement = document.getElementById("rez");
  labelElement.textContent = "The multiplicatoin: " + rezult;
}

function divideAndPrint() {
  var inputA = document.getElementById("numA");
  var a = inputA.value;

  var inputB = document.getElementById("numB");
  var b = inputB.value;

  var rezult = division(a, b);

  // Display the reversed value in the label
  var labelElement = document.getElementById("rez");
  labelElement.textContent = "The division: " + rezult;
}

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

function findAndPrint() {
  var inputA = document.getElementById("factNum");
  var a = inputA.value;

  var rezult = factorial(a);

  var labelElement = document.getElementById("factRez");
  labelElement.textContent = "The factorial : " + rezult;
}

function swapNum() {
  var inputA = document.getElementById("first_number");
  var a = inputA.value;

  var inputB = document.getElementById("second_number");
  var b = inputB.value;

  var temp;
  temp = a;
  a = b;
  b = temp;

  var labelElement = document.getElementById("label_rez");
  labelElement.textContent = "The first and second number : " + a + " " + b;
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertToCapital() {
  var inputA = document.getElementById("conStr");
  var text = inputA.value;

  var rezult = capitalizeFirstLetter(text);

  var labelElement = document.getElementById("conRez");
  labelElement.textContent = "The converted rezult: " + rezult;
}

function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

function countAndPrint() {
  var inputA = document.getElementById("cText");
  var text = inputA.value;

  var inputB = document.getElementById("cLetter");
  var letter = inputB.value;

  var rezult = char_count(text, letter);

  var labelElement = document.getElementById("cRez");
  labelElement.textContent = "The count of letters is: " + rezult;
}
