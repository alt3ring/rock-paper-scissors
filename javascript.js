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

function getHumanChoice()
{
  let choice = prompt("Please enter your choice: ");
  choice = choice.toLowerCase();
  if(choice!="rock" && choice!="paper" && choice!="scissors")
  {
    return "error";
  }
  else{
    return choice;
  }
}

function playRound(humanChoice, computerChoice)
{
  if(humanChoice=="rock" && computerChoice=="paper")
  {
    alert("computer rolled paper, you LOSE!");
    return 0;
  }
  else if(humanChoice=="paper" && computerChoice=="rock")
  {
    alert("computer rolled rock, you WIN!");
    return 1;
  }
  else if(humanChoice=="paper" && computerChoice=="scissors")
  {
    alert("computer rolled scissors, you LOSE!");
    return 0;
  }
  else if(humanChoice=="scissors" && computerChoice=="paper")
  {
    alert("computer rolled paper, you WIN!");
    return 1;
  }
  else if(humanChoice=="scissors" && computerChoice=="rock")
  {
    alert("computer rolled rock, you LOSE!");
    return 0;
  }
  else if(humanChoice=="rock" && computerChoice=="scissors")
  {
    alert("computer rolled scissors, you WIN!");
    return 1;
  }
  else if(humanChoice=="rock" && computerChoice=="rock")
  {
    alert("computer rolled rock, TIE!");
    return 2;
  }
  else if(humanChoice=="paper" && computerChoice=="paper")
  {
    alert("computer rolled paper, TIE!");
    return 2;
  }
  else if(humanChoice=="scissors" && computerChoice=="scissors")
  {
    alert("computer rolled scissors, TIE!");
    return 2;
  }
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let result = 0;

for(let i=0; i<4; i++)
{
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  if(humanChoice=="error")
  {
    alert("that is not a valid choice, program terminating.....");
    i--;
    continue;
  }
  result = playRound(humanChoice, computerChoice);
  if(result == 0)
  {
    computerScore++;
  }
  else if(result == 1)
  {
    humanScore++;
  }
  else
  {
    continue;
  }
}
if(humanScore>computerScore)
{
  alert("human score: "+humanScore+"\ncomputer Score: "+computerScore+"\nYOU WIN!");
}
else if(computerScore>humanScore)
{
  alert("human score: "+humanScore+"\ncomputer Score: "+computerScore+"\nYOU LOSE!");
}
else{
  alert("human score: "+humanScore+"\ncomputer Score: "+computerScore+"\nTIE!");
}