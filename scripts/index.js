let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const mesur = document.querySelector("#mesur");
function registerUserValue(e) {
  console.dir(e.target);
  userNumber = e.target.value;
}

function convert() {
  let currentCurrencyValue;
  console.log(mesur.value);
  switch (mesur.value) {
    case "millimeter":
      currentCurrencyValue = 1 / 1000;
      break;
    case "centimeter":
      currentCurrencyValue = 1 / 100;
      break;
    case "decimeter":
      currentCurrencyValue = 1 / 10;
      break;
    case "meter":
      currentCurrencyValue = 1;
      break;
    case "dekameter":
      currentCurrencyValue = 1 * 10;
      break;
    case "hectometer":
      currentCurrencyValue = 1 * 100;
      break;
    case "kilometer":
      currentCurrencyValue = 1 * 1000;
      break;
    default:
      currentCurrencyValue = 1;
  }
  result.innerHTML = `${currentCurrencyValue * userNumber} (m)`;
}

mesur.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
