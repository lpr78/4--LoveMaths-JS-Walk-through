console.log("Connected!")

//Wait for DOM to complete before loading the actual game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded",function() {
    let buttons = document.getElementsByTagName("button"); //returns all the button HTML elements

    for (let button of buttons) // goes through all elements in the array
    {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")==="submit") {
                alert("You clicked submit");
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



function checkAnswer() {

}

function calculateCorrectAnswer() {

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