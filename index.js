let userScore = 0;
let compScore = 0;

const  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//alway use modular prog for reuse that's why we create own funcs for every task

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    //for gen random num
    const randIdx = Math.floor (Math.random() * 3);
    return options[randIdx];
} ;

const drawGame = () => {
    msg.innerText = "Game was draw!. Play Again...";
    msg.style.backgroundColor = "blue";
};


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win !Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
//using gen  func create comp choice
const compChoice = genCompChoice();


if(userChoice === compChoice){
    //drawGame
   drawGame();
} else {
    let userWin = true ;
    if(userChoice ==="rock"){
        //scissor,rock
        userWin = compChoice ==="paper" ? false : true;
    } else if(userChoice === "paper"){
        //rock, scissor
        userWin = compChoice === "scissor" ? false : true;
    } else{
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

//create event listener for click events.
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        //To access the individual div id's
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); //Call playGame func.
    });
});
