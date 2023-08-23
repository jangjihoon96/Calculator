// 계산 기호
const calcs = document.querySelectorAll(".calc");
const resultDom = document.querySelector(".result");
const buttonReset = document.getElementById("button-reset");
const buttonPercentage = document.getElementById("button-percentage");
const buttonDivide = document.getElementById("button-divide");
const buttonTimes = document.getElementById("button-times");
const buttonMinus = document.getElementById("button-minus");
const buttonPlus = document.getElementById("button-plus");
const buttonEqual = document.getElementById("button-equal");

// 숫자
const numbers = document.querySelectorAll(".number");
const one = document.getElementById("button-one");
const two = document.getElementById("button-two");
const three = document.getElementById("button-three");
const four = document.getElementById("button-four");
const five = document.getElementById("button-five");
const six = document.getElementById("button-six");
const seven = document.getElementById("button-seven");
const eight = document.getElementById("button-eight");
const nine = document.getElementById("button-nine");
const zero = document.getElementById("button-zero");
const dot = document.getElementById("button-dot");

// 숫자와 기호를 담을 변수
let result = 0;
let num1 = "";
let num2 = "";
let sign = "";

// 함수
function handleCalc(num1, num2, sign) {
  if (num1 !== "") {
    if (sign === "/") result = parseInt(num1) / parseInt(num2);
    if (sign === "*") result = parseInt(num1) * parseInt(num2);
    if (sign === "+") result = parseInt(num1) + parseInt(num2);
    if (sign === "-") result = parseInt(num1) - parseInt(num2);
  } else {
    if (sign === "/") result = 0 / parseInt(num2);
    if (sign === "*") result = 0 * parseInt(num2);
    if (sign === "+") result = 0 + parseInt(num2);
    if (sign === "-") result = 0 - parseInt(num2);
  }
  console.log(num1, sign, num2, result);
}

// 이벤트 리스너
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (sign === "") {
      if (number === one) num1 += "1";
      if (number === two) num1 += "2";
      if (number === three) num1 += "3";
      if (number === four) num1 += "4";
      if (number === five) num1 += "5";
      if (number === six) num1 += "6";
      if (number === seven) num1 += "7";
      if (number === eight) num1 += "8";
      if (number === nine) num1 += "9";
      if (number === zero && num1.length !== 0) num1 += "0";
    } else {
      if (number === one) num2 += "1";
      if (number === two) num2 += "2";
      if (number === three) num2 += "3";
      if (number === four) num2 += "4";
      if (number === five) num2 += "5";
      if (number === six) num2 += "6";
      if (number === seven) num2 += "7";
      if (number === eight) num2 += "8";
      if (number === nine) num2 += "9";
      if (number === zero) num2 += "0";
    }
    console.log(num1, sign, num2, result);
    resultDom.innerHTML = num1;
  });
});

calcs.forEach((calc) => {
  calc.addEventListener("click", () => {
    if (calc === buttonDivide) sign = `/`;
    if (calc === buttonTimes) sign = "*";
    if (calc === buttonMinus) sign = "-";
    if (calc === buttonPlus) sign = "+";
    console.log(num1, sign, num2, result);
  });
});

buttonReset.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  sign = "";
  result = 0;
  resultDom.innerHTML = 0;
  console.log(num1, sign, num2, result);
});

buttonEqual.addEventListener("click", () => {
  if (num2 !== "") {
    handleCalc(num1, num2, sign);
  }
  resultDom.innerHTML = result;
  num1 = String(result);
  num2 = "";
  sign = "";
});

let key = "1";
document.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
});
