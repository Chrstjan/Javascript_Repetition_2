/****************************************************
 * LEKTION 1 - Variabler, events og conditionals    *
 ****************************************************/

// Opgave 1
// Du skal i denne opgave redegøre for forskellen mellem en let, var og const.
// Det vil sige at du skal illustrere hvad der sker når man forsøger at ændre en
// var, en let og en const. Du skal bruge console.log til at demonstrere dette.
//_______________________________________________________________________________

var oldVar = "Hello";
let newVar = "New Variable";
const constVar = "Don't change me!";

oldVar = "123 old variable";
console.log(oldVar);

newVar = "Epic variable";
console.log(newVar);

// constVar = "Change the text!";
console.log(constVar);

// Opgave 2
// I denne opgave skal du bruge aritmetik til at lave nogle regnestykker.
// Du skal løse følgende:
// 992 + 237 = ?
// 44 - 12 = ?
// 142 * 23 = ?
// 94 / 23  = ?
// Svarene skal ligesom opgaven ovenfor vises i hver sin console.log
//_______________________________________________________________________________
let plus = `992 + 237 = ${992 + 237}`
console.log(plus);

let subtract = `44 - 12 = ${44 - 12}`;
console.log(subtract);

let multiply = `142 * 23 = ${142 * 23}`;
console.log(multiply);

let divide = `94 / 23 = ${Math.floor(94 / 23)}`;
console.log(divide);

// Opgave 3
// Du skal nu lave en click counter med et onclick event. Din click counter skal have en knap
// der gennem Javascript får tildelt en eventlistener. Antal af clicks skal vises i DOM´en.
//_______________________________________________________________________________

let clickAmount = 0;

const btn = document.getElementById("click-btn");

btn.addEventListener("click", () => {
    const domClickAmount = document.getElementById("click-amount");
    clickAmount++;
    domClickAmount.innerHTML = clickAmount;
})

// Opgave 4
// I denne opgave skal du lave et input felt med validering. Du skal bruge en eventlistener til at måle på om brugeren
// har indtastet mere end 8 bogstaver. Hvis ikke brugeren har indtastet mere en 8 bogstaver skal der vises en fejl besked
// under input feltet, der beder brugeren om at indtaste mindst 8 bogstaver.
//_________________________________________________________________________________

const submitBtn = document.getElementById("submit-btn");
const inputField = document.getElementById("user-input");
const inputContainer = document.querySelector(".input-container");

const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{1,20}$).*/;
let isValid = false;

submitBtn.addEventListener("click", () => {
    let userInput = inputField.value;
    console.log(userInput);

    const testInput = () => {
        return regex.test(userInput);
    }

    if (testInput()) {
        console.log("Passed!");
    }
    else {
        console.log("Failed");
    }

    // if (userInput > 8) {
    //     const stopMessage = `<p>Stop criminal scum</p>`;
    //     inputContainer.innerHTML += stopMessage;
    // }
})

// Opgave 5
// I denne opgave skal du indele en side i fire lige store firkanter. Du skal herefter bruge en eventlistener til at
// måle om brugeren fører musen ind over hver af de fire firkanter. Når musen rammer en firkant skal den skifte farve til en
// tilfældigt genereret farve.
//_________________________________________________________________________________

const randRgbColorNum = () => {
    return Math.floor(Math.random() * 256);
  };

const colorBoxes = document.querySelectorAll(".color-box");
colorBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.background = `rgb(${randRgbColorNum()}, ${randRgbColorNum()}, ${randRgbColorNum()})`;
    })

    box.addEventListener("mouseleave", () => {
        box.style.background = "blue";
    })
})

// Opgave 6
// I denne opgave skal du arbejde videre på input feltet fra opgave 5. Du skal nu tilføje følgende betingelser til valideringen.
//  - Brugeren skal indtaste et stort bogstav.
//  - Brugeren skal indtaste et tegn som ikke er et bogstav.
//  - Brugeren må ikke indtaste en string som er længere end 20 karakterer.
//_________________________________________________________________________________

//ved opgave 4