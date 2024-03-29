//let's get a container element
const container = document.getElementById("container");

//define newElement
let newElement;


//function to add 100 elements to the container
function add100Elements() {
    const parentElement = document.getElementById("container");
    removeAllElements()
    for (let i = 1; i <= 100; i++) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", `element${i}`);
        if (i % 3 === 0 && i % 5 === 0) {
            newElement.classList.add("FizzBuzz", "new-element");
            newElement.innerText = i + ' = FIZZ BUZZ';
        } else if (i % 3 === 0) {
            newElement.classList.add("Fizz", "new-element");
            newElement.innerText = i + ' = FIZZ';
        } else if (i % 5 === 0) {
            newElement.classList.add("Buzz", "new-element");
            newElement.innerText = i + ' = BUZZ';
        } else {
            newElement.classList.add("number", "new-element");
            newElement.innerText = `${i}`;
        }
        parentElement.appendChild(newElement);
    }
}

//display the default values of min number = 1 and max number = 100
function displayValues() {
    document.getElementById("minInput").value = "1";
    document.getElementById("maxInput").value = "100";
}


//function to remove all elements from the container
function removeAllElements() {
    const parentElement = document.getElementById("container");
    while (parentElement.lastElementChild !== null) {
        parentElement.removeChild(parentElement.lastElementChild);
    }
}

//function to only list FIZZ elements in the container
function fizzElements() {
    const parentElement = document.getElementById("container");
    removeAllElements()
    for (let i = 1; i <= 100; i++) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", `element${i}`);
        if (i % 3 === 0 && i % 5 !== 0) {
            newElement.classList.add("Fizz", "new-element");
            newElement.innerText = i + ' = FIZZ';
        }
        parentElement.appendChild(newElement);
    }
}

//function to only list BUZZ elements in the container
function buzzElements() {
    const parentElement = document.getElementById("container");
    removeAllElements()
    for (let i = 1; i <= 100; i++) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", `element${i}`);
        if (i % 3 !== 0 && i % 5 === 0) {
            newElement.classList.add("Buzz", "new-element");
            newElement.innerText = i + ' = BUZZ';
        }
        parentElement.appendChild(newElement);
    }
}

//function to only list fizzbuzz elements to the container
function fizzBuzzElements() {
    const parentElement = document.getElementById("container");
    removeAllElements()
    for (let i = 1; i <= 100; i++) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", `element${i}`);
        if (i % 3 === 0 && i % 5 === 0) {
            newElement.classList.add("FizzBuzz", "new-element");
            newElement.innerText = i + ' = FIZZ BUZZ';
        }
        parentElement.appendChild(newElement);
    }
}


//create a function to add elements to the container from min to max number
function generateElements(min, max) {
    const parentElement = document.getElementById("container");
    removeAllElements()
    for (let i=min; i<=max; i++) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", `element${i}`);
        if (i % 3 === 0 && i % 5 === 0) {
            newElement.classList.add("FizzBuzz", "new-element");
            newElement.innerText = i + ' = FIZZ BUZZ';
        } else if (i % 3 === 0) {
            newElement.classList.add("Fizz", "new-element");
            newElement.innerText = i + ' = FIZZ';
        } else if (i % 5 === 0) {
            newElement.classList.add("Buzz", "new-element");
            newElement.innerText = i + ' = BUZZ';
        } else {
            newElement.classList.add("number", "new-element");
            newElement.innerText = `${i}`;
        }
        parentElement.appendChild(newElement);
    }
}



//create a function to add elements to the container from min to max number
function addElements() {
    const min = document.getElementById("minInput").value;
    const max = document.getElementById("maxInput").value;
    generateElements(min, max);
}


//let's add a function to add listeners to our buttons
function addListeners() {
    //add a listener to the "add100Button" button
    const add100Button = document.getElementById("add100Button");
    add100Button.addEventListener("click", add100Elements);
    //add a listener to the remove button
    const removeAllButton = document.getElementById("removeAllButton");
    removeAllButton.addEventListener("click", removeAllElements);
    //add a listener to the fizzbuzz button
    const fizzBuzzButton = document.getElementById("fizzBuzzButton");
    fizzBuzzButton.addEventListener("click", fizzBuzzElements);
    //add a listener to the fizz button
    const fizzButton = document.getElementById("fizzButton");
    fizzButton.addEventListener("click", fizzElements);
    //add a listener to the buzz button
    const buzzButton = document.getElementById("buzzButton");
    buzzButton.addEventListener("click", buzzElements);
    //add a listener min for user input
    const minInput = document.getElementById("minInput");
    minInput.addEventListener("input", function () {
        const min = document.getElementById("minInput").value;
        const max = document.getElementById("maxInput").value;
        generateElements(min, max);
    });
    //add a listener max for user input
    const maxInput = document.getElementById("maxInput");
    maxInput.addEventListener("input", function () {
        const max = document.getElementById("maxInput").value;
        const min = document.getElementById("minInput").value;
        generateElements(min, max);
    });
    //add a listener to the generate elements button
    const generateElementsButton = document.getElementById("generateElementsButton");
    generateElementsButton.addEventListener("click", addElements);
}



//a main function to run our code
function main() {
    //add listeners to the buttons
    addListeners();
    //add 100 elements to the container
    add100Elements();
    //display values in the input fields
    displayValues();
    
}

//attach main to the window load event
document.addEventListener("DOMContentLoaded", main);