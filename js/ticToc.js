//select classes from index.html 
let selectElm = document.querySelectorAll(".cells")
let whosNext = document.querySelector(".turn")
let theWinner = document.querySelector(".the-winner")
let restartButton = document.querySelector(".restart")
let scoreSelector = document.querySelector(".score")
let oScoreSelector = document.querySelector(".o-score")
let tieCounterSelector = document.querySelector(".tie-counter")

// counter for turn and also to switch between x and o
let counter = 0;
// xScore and oScore to count how many wins have 
let xScore = 0;
let oScore = 0;
let tieCounter = 0;

let xIndex = [];
let oIndex = [];

// reset everything turn to x, images to defualt image 
const restart = function () {
    for (let i = 0; i < selectElm.length; i++) {
        //set all the images to the defualt image
        selectElm[i].setAttribute('src', 'src/default.jpg')
    }
    LeaveEvent();
    whosNext.innerText = " X"
    theWinner.innerText = ""
    initCells();
}

//ticTocImg where we check who wins and where  we set images for x and o
const ticTocImg = function () {
    //display the turns on screen( turn : x )

    if (counter % 2 === 0) {
        whosNext.innerText = " O";
    } else {
        whosNext.innerText = " X";
    }

    if (counter % 2 === 0) {
        /* 
        how the check work 
        if my board of array like the numbers below.
                    0|1|2
                    3|4|5
                    6|7|8
         so to check for win I need to get 
         0, 1 and 2 elements to be an image x  
        */
        this.setAttribute('src', 'src/x.png');
        this.removeEventListener('click', ticTocImg);
        if (this.getAttribute('src') === 'src/x.png') {
            //checking id elements in selectElm array if its include "0","1","2" in the array xIndex x wins
            //checking rows 
            xIndex.push(this.getAttribute('id'))

            if (xIndex.includes("0") && xIndex.includes("1") && xIndex.includes("2")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } else if (xIndex.includes("3") && xIndex.includes("4") && xIndex.includes("5")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } else if (xIndex.includes("6") && xIndex.includes("7") && xIndex.includes("8")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } // checking columns same as the board above
            else if (xIndex.includes("0") && xIndex.includes("3") && xIndex.includes("6")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } else if (xIndex.includes("1") && xIndex.includes("4") && xIndex.includes("7")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } else if (xIndex.includes("2") && xIndex.includes("5") && xIndex.includes("8")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } //check for cross case from top left to the bottom right of the board  
            else if (xIndex.includes("0") && xIndex.includes("4") && xIndex.includes("8")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } else if (xIndex.includes("2") && xIndex.includes("4") && xIndex.includes("6")) {
                xScore++
                LeaveEvent();
                theWinner.innerText = "the winner is X";
            } else {
                counter++
                if (counter === 9) {
                    tieCounter++;
                    tieCounterSelector.innerText = tieCounter;
                }
            }
        }
    } else if (counter % 2 !== 0) {

        this.setAttribute('src', 'src/o.png')
        this.removeEventListener('click', ticTocImg);
        //checking for o image
        if (this.getAttribute('src') === 'src/o.png') {
            oIndex.push(this.getAttribute('id'))
            // checking for o in each rows
            if (oIndex.includes("0") && oIndex.includes("1") && oIndex.includes("2")) {
                oScore++;
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } else if (oIndex.includes("3") && oIndex.includes("4") && oIndex.includes("5")) {
                oScore++;
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } else if (oIndex.includes("6") && oIndex.includes("7") && oIndex.includes("8")) {
                oScore++;
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } // checking columns
            else if (oIndex.includes("0") && oIndex.includes("3") && oIndex.includes("6")) {
                oScore++;
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } else if (oIndex.includes("1") && oIndex.includes("4") && oIndex.includes("7")) {
                oScore++
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } else if (oIndex.includes("2") && oIndex.includes("5") && oIndex.includes("8")) {
                oScore++;
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } else if (oIndex.includes("0") && oIndex.includes("4") && oIndex.includes("8")) {
                oScore++;
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } //checking from top right to the bottom left 
            else if (oIndex.includes("2") && oIndex.includes("4") && oIndex.includes("6")) {
                oScore++;
                LeaveEvent();
                theWinner.innerText = "the winner is O";
            } else {
                counter++
            }
        }
    }
    scoreSelector.innerText = xScore;
    oScoreSelector.innerText = oScore;
}


//LeaveEvent will iterates on all the elements and stop the game 
const LeaveEvent = function () {
    xIndex = [];
    oIndex = [];
    counter = 0;
    for (let i = 0; i < selectElm.length; i++) {
        //will remove all the event listener so it wouldn't be clickable again 
        selectElm[i].removeEventListener('click', ticTocImg)
    }
}

//init function will start the game when we call it and iterates on them(cells)
const initCells = function () {
    for (let i = 0; i < selectElm.length; i++) {
        // iterates through cells elements and wait for event call
        selectElm[i].addEventListener('click', ticTocImg);
        // waiting for button click to go for the restart function and reset all images
        restartButton.addEventListener('click', restart);
    }
}
initCells();