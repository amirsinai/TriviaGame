const TechQ = [
  {
    Question: "1- What year was the very first model of the iPhone released?",
    Choices: ["2006", "2007", "2008", "2009"],
    Answer: "2007",
  },
  {
    Question:
      "2- What's the shortcut for the “copy” function on most computers?",
    Choices: ["ctrl a", "ctrl c", "ctrl d", "ctrl x"],
    Answer: "ctrl c",
  },
  {
    Question: "3- What is often seen as the smallest unit of memory?",
    Choices: ["nanobyte", "minibyte", "kilobyte", "megabyte"],
    Answer: "kilobyte",
  },
  {
    Question: "4- Is Java a type of OS?",
    Choices: ["yes", "No"],
    Answer: "No",
  },
  {
    Question: "5- Who is often called the father of the computer?",
    Choices: ["ssomeone1", "Charles Babbage", 'someone2,"someone3'],
    Answer: "Charles Babbage",
  },
  {
    Question: "6- What does “HTTP” stand for?",
    Choices: [
      "HyperText Transfer Protocol",
      "High Transfer Part",
      "Hyper Transfer Protocol",
    ],
    Answer: "HyperText Transfer Protocol",
  },
  {
    Question: "7- What is the name of the man who launched eBay back in 1995?",
    Choices: ["Pierre Omidyar", "Pierre Cardin", "Elon Musk", "Bill Gates"],
    Answer: "Pierre Omidyar",
  },
  {
    Question: "8- Which email service is owned by Microsoft?",
    Choices: ["yahoo", "Gmail", "Hotmail", "AOL"],
    Answer: "Hotmail",
  },
  {
    Question:
      "9- Google Chrome, Safari, Firefox, and Explorer are different types of what?",
    Choices: ["Portals", "Local Servers", "Web browsers", "Web servicers"],
    Answer: "Web browsers",
  },
  {
    Question: "10- What was Twitter’s original name?",
    Choices: ["Twitter", "twittr", "twttr", "twtr"],
    Answer: "twttr",
  },
];
// for (let i = 0; i < TechQ.length; i++) {
//   let currentQuestion = TechQ[i].Question;
//   console.log(currentQuestion);
// }

// initial Trial
let i = 0;
let score = 0;
let correctAnswer = false;

function gameStart(game) {
  {
    let displayedQuestion = document.getElementById("questionDiv");
    let currentQuestion = game[i].Question;
    console.log(game.indexOf(i));
    console.log("test");
    displayedQuestion.textContent = currentQuestion;
    let dispayedChoices = document.querySelectorAll(".choiceBtnDiv");
    // console.log(answer);
    dispayedChoices.forEach(function (element, index) {
      element.textContent = game[i].Choices[index];
      element.addEventListener("click", function () {
        console.log(index);
        console.log(game[i].Choices[index]);
        if (game[i].Answer == element.textContent) {
          console.log("correct answer");
          alert("your answer was corerct");
          correctAnswer = true;
        }
      });
    });

    let submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
      console.log("submit button clicked");
      i++;
      gameStart(game);
      if (correctAnswer == true) {
        score++;
        correctAnswer = false;
        console.log("Score =" + score);
      }
    });
  }
  let finalSocre = document.getElementById("scoreBoard");
  scoreBoard.textContent = finalSocre;
  finalSocre = score;
  scoreBoard.textContent = finalSocre;

  // } ;
  // while (j <= game.length);

  //when i= length+ then stop and show the score
}

let selectedGame = document.getElementById("techQ");
submit.addEventListener("click", gameStart(TechQ));
// gameStart(TechQ);
// document.getElementById("testBtn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("test").innerHTML = Date();
// }

// function showtechQ(TechQ, techQContainer){
// 	let output = [];
// 	let answers =[];
