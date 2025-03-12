//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById("calculateButt");

calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
  gatherInputData();
});

// indsamling af data fra dom (model code fra MVC)
function gatherInputData() {
  const myEuroRate = document.getElementById("euroRate").value;
  const myDollarRate = document.getElementById("dollarRate").value;

  const myDanishAmount = document.getElementById("danishAmount").value;

  makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}

// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML =
    myDanishAmount + " danske kroner bliver til: " + myEuroResult + " euro og " + myDollarResult + " dollars";
}

/* skriv din kode herunder.

1. lav en funktion der kan regne valutaen ud
2. lav en funktion der kan vise resultatet  */

function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
  let myDollars = calculateExchange(myDanishAmount, myDollarRate);
  let myEuros = calculateExchange(myDanishAmount, myEuroRate);
  showResult(myEuros, myDollars, myDanishAmount);
}

function calculateExchange(ammountDK, exchangeRate) {
  let result = ammountDK * exchangeRate;
  return result;
}
