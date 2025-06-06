let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

const arr = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 4 , 6],
    [2 , 5 , 8],
    [3 , 4 , 5],
    [6 , 7 , 8],
];

let turn = true;
let count = 0;

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};

const checkWinner = () => {
    for(let pattern of arr){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                showWinner(val1);
            }
        }
    }
};

const checkDraw = () => {
    msg.innertext = `The match was a draw!`;
    msgContainer.classList.remove("hide");
    disable();
};

const reset = () => {
    turn = true;
    enable();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn){
            box.innerText = "O";
            turn = false;
            box.style.color = "#b0413e"
        }
        else{
            box.innerText = "X";
            turn = true;
            box.style.color = "blue";
        }
        box.disabled = true;
        count++;

        let winner = checkWinner();
        if(count == 9){
            checkDraw();
        }
    });
});

newBtn.addEventListener("click" , reset);
resetBtn.addEventListener("click" , reset);