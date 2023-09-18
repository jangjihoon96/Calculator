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
// 사칙연산 함수
function handleCalc(num1, num2, sign) {
  if (num1 !== "") {
    if (sign === "/") result = Number(num1) / Number(num2);
    if (sign === "*") result = Number(num1) * Number(num2);
    if (sign === "+") result = Number(num1) + Number(num2);
    if (sign === "-") result = Number(num1) - Number(num2);
  } else {
    if (sign === "/") result = 0 / Number(num2);
    if (sign === "*") result = 0 * Number(num2);
    if (sign === "+") result = 0 + Number(num2);
    if (sign === "-") result = 0 - Number(num2);
  }
  // console.log(num1, sign, num2, result);
}

// 천단위 절삭 함수
function cutOffThousands(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 리셋 함수
function resetResult() {
  num1 = "";
  num2 = "";
  sign = "";
  result = 0;
  resultDom.innerHTML = 0;
  // console.log(num1, sign, num2, result);
}

// 퍼센트 계산 함수
function percentNumber(num) {
  return num * 0.01;
}

// 이벤트 리스너
// 숫자 버튼 클릭시 숫자 추가 이벤트 리스너
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
      if (number === dot) num1 += ".";
      if (number === zero && num1.length === 0) {
        num1 = "";
        resultDom.innerHTML = "0";
      }
      if (number === zero && num1.length !== 0 && num1[0] !== "0") num1 += "0";
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
      if (number === dot) num2 += ".";
    }
    // console.log(num1, sign, num2, result);
    if (num1) resultDom.innerHTML = cutOffThousands(num1);
    if (num1 && sign) resultDom.innerHTML = cutOffThousands(num2);
  });
});

// 기호 버튼 클릭시 기호 추가 이벤트 리스너
calcs.forEach((calc) => {
  calc.addEventListener("click", () => {
    if (calc === buttonDivide) sign = `/`;
    if (calc === buttonTimes) sign = "*";
    if (calc === buttonMinus) sign = "-";
    if (calc === buttonPlus) sign = "+";
    // console.log(num1, sign, num2, result);
  });
});

buttonPercentage.addEventListener("click", () => {
  resultDom.innerHTML = percentNumber(num1);
  num1 = percentNumber(num1);
});

// 리셋 버튼 클릭시 리셋 이벤트 리스너
buttonReset.addEventListener("click", () => {
  resetResult();
});

// 계산결과 버튼 클릭시 결과 추출 이벤트 리스너
buttonEqual.addEventListener("click", () => {
  if (num2 !== "") {
    handleCalc(num1, num2, sign);
  }
  if (result) {
    resultDom.innerHTML = cutOffThousands(result);
  } else {
    resultDom.innerHTML = "0";
  }

  num1 = String(result);
  num2 = "";
  sign = "";
});

// 키보드 이벤트 리스너
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const code = e.code;

  if (sign === "") {
    if (code === "Digit1") num1 += "1";
    if (code === "Digit2") num1 += "2";
    if (code === "Digit3") num1 += "3";
    if (code === "Digit4") num1 += "4";
    if (code === "Digit5") num1 += "5";
    if (code === "Digit6") num1 += "6";
    if (code === "Digit7") num1 += "7";
    if (code === "Digit8") num1 += "8";
    if (code === "Digit9") num1 += "9";
    if (code === "Digit0") num1 += "0";
    if (code === "Period") num1 += ".";
  } else {
    if (code === "Digit1") num2 += "1";
    if (code === "Digit2") num2 += "2";
    if (code === "Digit3") num2 += "3";
    if (code === "Digit4") num2 += "4";
    if (code === "Digit5") num2 += "5";
    if (code === "Digit6") num2 += "6";
    if (code === "Digit7") num2 += "7";
    if (code === "Digit8") num2 += "8";
    if (code === "Digit9") num2 += "9";
    if (code === "Digit0") num2 += "0";
    if (code === "Period") num2 += ".";
  }

  if (sign === "") resultDom.innerHTML = cutOffThousands(num1);
  if (sign) resultDom.innerHTML = cutOffThousands(num2);

  // console.log(num1, sign, num2, result);
  // console.log("Key:", key);
  // console.log("Code:", code);
});
