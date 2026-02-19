// alert("This is an alert!");

const inputEl = document.getElementById("celsiusInput");
const rezultatEl = document.getElementById("rezultat");

function convertCelsiusToKelvin(celsius) {
  return parseFloat(celsius) + 273.15;
}

function getEmoji(celsius) {
  if (celsius <= 0) return "🧊";     
  if (celsius <= 20) return "☁️";    
  if (celsius <= 35) return "😎";    
  return "🔥";                       
}

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let userInput = inputEl.value;
    if (userInput === "" || isNaN(userInput)) {
      alert("Please input a valid integer!");
      inputEl.value = "";
      return;
    }
    rezultatEl.innerText = `Temperature is ${convertCelsiusToKelvin(userInput)}K ${getEmoji(userInput)}`;
  }
});
