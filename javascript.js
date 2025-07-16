function getComputerChoice()
{
  let randomVal = Math.floor(Math.random()*3);
  if(randomVal==0)
  {
    return "rock";
  }
  else if(randomVal==1)
  {
    return "paper";
  }
  else
  {
    return "scissors";
  }
}



function playRound(humanChoice, computerChoice)
{
  let resultsDiv = document.querySelector(".resultsDisplay");
  if(humanChoice=="rock" && computerChoice=="paper")
  {
    computerScore++;
    resultsDiv.textContent = "computer rolled paper, you LOSE!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;

  }
  else if(humanChoice=="paper" && computerChoice=="rock")
  {
    humanScore++;
    resultsDiv.textContent = "computer rolled rock, you WIN!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
  else if(humanChoice=="paper" && computerChoice=="scissors")
  {
    computerScore++;
    resultsDiv.textContent = "computer rolled scissors, you LOSE!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
  else if(humanChoice=="scissors" && computerChoice=="paper")
  {
    humanScore++;
    resultsDiv.textContent = "computer rolled paper, you WIN!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
  else if(humanChoice=="scissors" && computerChoice=="rock")
  {
    computerScore++;
    resultsDiv.textContent = "computer rolled rock, you LOSE!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
  else if(humanChoice=="rock" && computerChoice=="scissors")
  {
    humanScore++;
    resultsDiv.textContent = "computer rolled scissors, you WIN!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
  else if(humanChoice=="rock" && computerChoice=="rock")
  {
    resultsDiv.textContent = "computer rolled rock, TIE!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
  else if(humanChoice=="paper" && computerChoice=="paper")
  {
    resultsDiv.textContent = "computer rolled paper, TIE!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
  else if(humanChoice=="scissors" && computerChoice=="scissors")
  {
    resultsDiv.textContent = "computer rolled scissors, TIE!\nhuman score: "+humanScore+"\ncomputer score: "+computerScore;
  }
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let roundsPlayed=0;
const finalResult = document.querySelector(".finalResult");


let buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener('click', (e) => {
  if(e.target.textContent == "rock")
  {
    humanChoice = "rock";
  }
  else if(e.target.textContent == "paper")
  {
    humanChoice = "paper";
  }
  else{
    humanChoice = "scissors";
  }
  roundsPlayed++;
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
if(roundsPlayed==5)
{
  if(humanScore>computerScore)
  {
    finalResult.textContent = "5 ROUNDS PLAYED! YOU WIN!";
  }
  else if(computerScore>humanScore)
  {
    finalResult.textContent = "5 ROUNDS PLAYED! COMPUTER WINS!";
  }
  else{
    finalResult.textContent = "5 ROUNDS PLAYED! TIE!";
  }
  buttons.forEach(btn => btn.disabled = true);
}

}))


