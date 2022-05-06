const TechQ = [
  {
    Question: "What year was the very first model of the iPhone released?",
    Choices: ["2006", "2007", "2008", "2009"],
    Answer: "2007",
  },
  {
    Question: "What's the shortcut for the “copy” function on most computers?",
    Choices: ["ctrl a", "ctrl c", "ctrl d", "ctrl x"],
    Answer: "ctrl c",
  },
  {
    Question: "What is often seen as the smallest unit of memory?",
    Choices: ["nanobyte", "minibyte", "kilobyte", "megabyte"],
    Answer: "kilobyte",
  },
  {
    Question: "Is Java a type of OS?",
    Choices: ["yes", "No"],
    Answer: "No",
  },
  {
    Question: "Who is often called the father of the computer?",
    Choices: ["ssomeone1", "Charles Babbage", 'someone2,"someone3'],
    Answer: "Charles Babbage",
  },
  {
    Question: "What does “HTTP” stand for?",
    Choices: [
      "HyperText Transfer Protocol",
      "High Transfer Part",
      "Hyper Transfer Protocol",
    ],
    Answer: "HyperText Transfer Protocol",
  },
  {
    Question: "What is the name of the man who launched eBay back in 1995?",
    Choices: ["Pierre Omidyar", "Pierre Cardin", "Elon Musk", "Bill Gates"],
    Answer: "Pierre Omidyar",
  },
  {
    Question: "Which email service is owned by Microsoft?",
    Choices: ["yahoo", "Gmail", "Hotmail", "AOL"],
    Answer: "Hotmail",
  },
  {
    Question:
      "Google Chrome, Safari, Firefox, and Explorer are different types of what?",
    Choices: ["Portals", "Local Servers", "Web browsers", "Web servicers"],
    Answer: "Web browsers",
  },
  {
    Question: "What was Twitter’s original name?",
    Choices: ["Twitter", "twittr", "twttr", "twtr"],
    Answer: "twttr",
  },
];
// for (let i = 0; i < TechQ.length; i++) {
//   let currentQuestion = TechQ[i].Question;
//   console.log(currentQuestion);
// }

function gameStart(game) {
  let questionDiv = document.getElementById("question");
  // .addEventListener("click", gameStart);
  let i = 0;
  let currentQuestion = game[i].Question;
  questionDiv.textContent = currentQuestion;
  let answer = document.querySelectorAll(".choice");
  // console.log(answer);
  answer.forEach(function (element, index) {
    element.textContent = game[i].Choices[index];
    element.addEventListener("click", function () {
      console.log(index);
      console.log(game[i].Answer);
      if (game[i].Answer == element.textContent) {
        console.log("correct answer");
      }
    });
  });

  let submit = document.getElementById("submit");
  submit.addEventListener("click", function () {
    console.log("submit button clicked");
  });
}

gameStart(TechQ);

// document.getElementById("testBtn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("test").innerHTML = Date();
// }

// function showtechQ(TechQ, techQContainer){
// 	let output = [];
// 	let answers =[];
