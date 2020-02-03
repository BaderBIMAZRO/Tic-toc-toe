//select class from the index.html 
let selectElm = document.querySelectorAll(" .position")
let whosNext = document.querySelector(" .turn")
let restartButton = document.querySelector(" .restart")
let turn = false;


// empty all elements and set the default image 
const restart = function () {
    for (let i = 0; i < selectElm.length; i++) {
        selectElm[i].setAttribute('src', 'src/default.jpg')
    }
    LeaveEvent();
    initCells();
}




//let turn = false;
//ticTocImg where we check who wins and where  we set images for x and o
const ticTocImg = function () {
    //display the turn on screen turn : x
    turn = !turn;
    if (turn) {
        whosNext.innerText = " O";
    } else {
        whosNext.innerText = " X";
    }

    if (turn === true) {
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
        //checking index of elements in selectElm array equal to x image
        if (selectElm[0].getAttribute('src') === 'src/x.png' &&
            selectElm[1].getAttribute('src') === 'src/x.png' &&
            selectElm[2].getAttribute('src') === 'src/x.png') {

            //leaveEvent stop the game when x or o wins
            LeaveEvent();
            console.log("X wins")
            alert("X wins");

        } else if (selectElm[3].getAttribute('src') === 'src/x.png' &&
            selectElm[4].getAttribute('src') === 'src/x.png' &&
            selectElm[5].getAttribute('src') === 'src/x.png') {

            LeaveEvent();
            console.log("X wins")
            alert("X wins");

        } else if (selectElm[6].getAttribute('src') === 'src/x.png' &&
            selectElm[7].getAttribute('src') === 'src/x.png' &&
            selectElm[8].getAttribute('src') === 'src/x.png') {

            LeaveEvent();
            console.log("X wins")
            alert("X wins");

        } //checking columns in array of elements by its index
        else if (selectElm[0].getAttribute('src') === 'src/x.png' &&
            selectElm[3].getAttribute('src') === 'src/x.png' &&
            selectElm[6].getAttribute('src') === 'src/x.png') {

            LeaveEvent();
            console.log("X wins")
            alert("X wins");

        } else if (selectElm[1].getAttribute('src') === 'src/x.png' &&
            selectElm[4].getAttribute('src') === 'src/x.png' &&
            selectElm[7].getAttribute('src') === 'src/x.png') {

            LeaveEvent();
            console.log("X wins")
            alert("X wins");

        } else if (selectElm[2].getAttribute('src') === 'src/x.png' &&
            selectElm[5].getAttribute('src') === 'src/x.png' &&
            selectElm[8].getAttribute('src') === 'src/x.png') {

            LeaveEvent();
            console.log("X wins")
            alert("X wins");

        } else if (selectElm[0].getAttribute('src') === 'src/x.png' &&
            selectElm[4].getAttribute('src') === 'src/x.png' &&
            selectElm[8].getAttribute('src') === 'src/x.png') {

            LeaveEvent();
            console.log("X wins")
            alert("X wins");

        } else if (selectElm[2].getAttribute('src') === 'src/x.png' &&
            selectElm[4].getAttribute('src') === 'src/x.png' &&
            selectElm[6].getAttribute('src') === 'src/x.png') {

            LeaveEvent();
            console.log("X wins")
            alert("X wins");
        }

    } else if (turn === false) {

        if (this.getAttribute('src') === 'src/default.jpg') {

            this.setAttribute('src', 'src/o.png')
            //checking for o image
            if (selectElm[0].getAttribute('src') === 'src/o.png' &&
                selectElm[1].getAttribute('src') === 'src/o.png' &&
                selectElm[2].getAttribute('src') === 'src/o.png') {

                LeaveEvent();
                console.log("o wins")
                alert("O wins");

            } else if (selectElm[3].getAttribute('src') === 'src/o.png' &&
                selectElm[4].getAttribute('src') === 'src/o.png' &&
                selectElm[5].getAttribute('src') === 'src/o.png') {

                LeaveEvent();
                console.log("o wins")
                alert("O wins");

            } else if (selectElm[6].getAttribute('src') === 'src/o.png' &&
                selectElm[7].getAttribute('src') === 'src/o.png' &&
                selectElm[8].getAttribute('src') === 'src/o.png') {

                LeaveEvent();
                console.log("o wins")
                alert("O wins");

            } else if (selectElm[0].getAttribute('src') === 'src/o.png' &&
                selectElm[4].getAttribute('src') === 'src/o.png' &&
                selectElm[8].getAttribute('src') === 'src/o.png') {

                LeaveEvent();
                console.log("o wins")
                alert("O wins");

            } else if (selectElm[2].getAttribute('src') === 'src/o.png' &&
                selectElm[4].getAttribute('src') === 'src/o.png' &&
                selectElm[6].getAttribute('src') === 'src/o.png') {

                LeaveEvent();
                console.log("o wins")
                alert("O wins");

            } else if (selectElm[0].getAttribute('src') === 'src/o.png' &&
                selectElm[3].getAttribute('src') === 'src/o.png' &&
                selectElm[6].getAttribute('src') === 'src/o.png') {

                LeaveEvent();
                console.log("o wins")
                alert("O wins");

            } else if (selectElm[1].getAttribute('src') === 'src/o.png' &&
                selectElm[4].getAttribute('src') === 'src/o.png' &&
                selectElm[7].getAttribute('src') === 'src/o.png') {
                LeaveEvent();
                console.log("o wins")
                alert("O wins");

            } else if (selectElm[2].getAttribute('src') === 'src/o.png' &&
                selectElm[5].getAttribute('src') === 'src/o.png' &&
                selectElm[8].getAttribute('src') === 'src/o.png') {

                LeaveEvent();
                console.log("o wins")
                alert("O wins");
            }
        }
    }

}



//LeaveEvent stop the game
const LeaveEvent = function () {
    for (let i = 0; i < selectElm.length; i++) {
        selectElm[i].removeEventListener('click', ticTocImg)
    }
}


//init function will start the game when we call it 
const initCells = function () {
    for (let i = 0; i < selectElm.length; i++) {
        selectElm[i].addEventListener('click', ticTocImg);
        restartButton.addEventListener('click', restart);


    }
}
initCells();