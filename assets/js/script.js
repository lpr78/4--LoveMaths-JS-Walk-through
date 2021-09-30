console.log("Connected!")

//Wait for DOM to complete before loading the actual game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded",function() {
    let buttons = document.getElementsByTagName("button"); //returns all the button HTML elements

    for (let button of buttons) // goes through all elements in the array
    {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")==="submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                //alert(`you clicked ${gameType}`); //Tests whether events are being listened too with alerts
                runGame(gameType);

            }
        })
    }

    //To automatically run the addition game on load
    runGame("addition");
})


function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1 //without +1 it would be 0 to 24
    let num2 = Math.floor(Math.random() * 25) + 1

    if(gameType === "addition"){
        displayAdditionQuestion(num1,num2)
    } else {
        alert(`Unknown Game Type ${gameType}`);
        throw `Unknown Game Type ${gameType}.Aborting!`;
    }
}


/**
 * Checking if the answer is correct when the function runs
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert('Well done, correct!!!! :-)')
    } else {
        alert(`You answered ${userAnswer} which is not correct, it was ${calculatedAnswer[0]}.`)
    }

    runGame(calculatedAnswer[1]);


}

/**
 * Gets the operand and the operator from the DOM
 * To return the correct answers
 */
function calculateCorrectAnswer() {
    //ParseInt makes sure it is a number, not a string
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+"){
        return[operand1 + operand2, "addition"];
    } else {
        alert(`The operator ${operator} does not exist`);
        throw `The operator ${operator} does not exist.Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1,operand2) {
    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}