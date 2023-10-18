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

function isInRange(start, end, num) {
  if (start <= num && end >= num) {
    return true;
  } else {
    return false;
  }
}

function findRangeAndPrint() {
  var inputA = document.getElementById("range1");
  var start = inputA.value;

  var inputB = document.getElementById("range2");
  var end = inputB.value;

  var inputC = document.getElementById("rangeNum");
  var num = inputC.value;

  var rezult = isInRange(start, end, num);

  var labelElement = document.getElementById("rangeRez");
  if (rezult) {
    labelElement.textContent = rezult + ": Tp;he number is in a range";
  } else {
    labelElement.textContent = rezult + ": The number isn't in a range";
  }
}

function isLetterInString(start, end, string, letter) {
  for (let i = start; i < end; i++) {
    if (string[i] == letter) {
      return true;
      break;
    }
  }
  return false;
}

function findLetterInString() {
  var inputA = document.getElementById("startIndex");
  var start = inputA.value;
  start -= 1;

  var inputB = document.getElementById("endIndex");
  var end = inputB.value;
  end -= 1;

  var inputC = document.getElementById("inString");
  var string = inputC.value;
  string = string.toLowerCase();

  var inputD = document.getElementById("inLetter");
  var letter = inputD.value;
  letter = letter.toLowerCase();

  var rezult = isLetterInString(start, end, string, letter);

  var labelElement = document.getElementById("inRez");
  if (rezult) {
    labelElement.textContent = rezult + ": The letter is in a string";
  } else {
    labelElement.textContent = rezult + ": The letter isn't in a string";
  }
}

function findBiigestNum(arr) {
  let largestNum = arr.reduce(function (accumulatedValue, currentValue) {
    return Math.max(accumulatedValue, currentValue);
  });

  for (let i = 0; i < arr.length; i++) {
    arr[i] = largestNum;
  }

  return arr;
}

function findBiggest() {
  var inputA = document.getElementById("numArray");
  var array = inputA.value;
  array = array.split(" ");

  rez = findBiigestNum(array);

  var labelElement = document.getElementById("arrayRez");
  labelElement.textContent = rez;
}

function replaceWithNextCharacter(inputString) {
  // Define the alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Convert the input string to lowercase for simplicity
  inputString = inputString.toLowerCase();

  // Replace each character with the next one in the alphabet
  const result = inputString.replace(/[a-z]/g, function (char) {
    const currentIndex = alphabet.indexOf(char);
    const nextIndex = (currentIndex + 1) % 26; // Wrap around if it's 'z'
    return alphabet[nextIndex];
  });

  return result;
}

function replaceString() {
  var inputA = document.getElementById("strReplace");
  var string = inputA.value;

  rez = replaceWithNextCharacter(string);

  var labelElement = document.getElementById("replacedString");
  labelElement.textContent = rez;
}

function sort_by_string_length(arra) {
  for (var i = 0; i < arra.length; i++) {
    for (var j = i + 1; j < arra.length; j++) {
      if (arra[i].length > arra[j].length) {
        var m = arra[i];
        arra[i] = arra[j];
        arra[j] = m;
      }
    }
  }
  return arra;
}

function sortByLengthAndPrint() {
  var input = document.getElementById("strSort");
  var a = input.value;
  array = a.split(" ");

  rez = sort_by_string_length(string);

  var labelElement = document.getElementById("sortedString");
  labelElement.textContent = rez;
}
