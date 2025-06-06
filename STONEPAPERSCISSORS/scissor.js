let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!"
    msg.style.backgroundColor = "black";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const PlayGame=(userChoice)=> {
console.log("user choice= ",userChoice);
const compChoice = genCompChoice();
if(userChoice===compChoice){
    drawGame();
}
else{
    let userWin = true;
    if(userChoice=="rock"){
        userWin = compChoice==="paper" ? false : true;
    }
    else if(userChoice==="paper"){
       userWin =  compChoice === "scissor" ? false : true;
    }
    else{
        compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice) =>{
    // console.log(choice);
    const userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        console.log("choice was clicked!",userChoice);
        PlayGame(userChoice);
    });
});
