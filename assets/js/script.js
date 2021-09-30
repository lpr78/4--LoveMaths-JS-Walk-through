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
                alert(`you clicked ${gameType}`); //Tests whether events are being listened too with alerts
            }
        })
    }
})
function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}