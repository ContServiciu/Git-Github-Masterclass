// alert("This is an alert!");

const inputEl = document.getElementById("celsiusInput");
const rezultatEl = document.getElementById("rezultat");

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let userInput = inputEl.value;
    if (userInput === "" || isNaN(userInput)) {
      alert("Please input a valid integer!");
      inputEl.value = "";
      return;
    }
    rezultatEl.innerText = `Temperature is ${convertCelsiusToFahrenheit(userInput)} °F`;
  }
});
