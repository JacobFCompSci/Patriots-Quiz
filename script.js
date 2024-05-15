// Patriots quiz

// HTML Variables

let q1Style = document.getElementById("q1");
let q1Mark = document.getElementById("trueOrFalse");
let q2Style = document.getElementById("q2");
let q2Mark = document.getElementById("trueOrFalse2");
let q3Style = document.getElementById("q3");
let q3Mark = document.getElementById("trueOrFalse3");
let q4Style = document.getElementById("q4");
let q4Mark = document.getElementById("trueOrFalse4");
let q5Style = document.getElementById("q5");
let q5Mark = document.getElementById("trueOrFalse5");
let correct1 = document.getElementById("correct1");
let correct2 = document.getElementById("correct2");
let correct3 = document.getElementById("correct3");
let correct4 = document.getElementById("correct4");
let correct5 = document.getElementById("correct5");
// Variables

let perfScore = "True Patriot!";
let goodScore = "Well Versed American.";
let okayScore = "Study a little more.";
let poorScore = "New arrival.";
let badScore = "Not a real patriot.";
let failScore = "Foreigner";
let remark = document.getElementById("remark");
let score = document.getElementById("score");
let numCorrect = 0;

// Listener

document.getElementById("mark").addEventListener("click", markQuiz);

// Function

function markQuiz() {
  // Get Answers
  let answer1 = document.getElementById("q1").value;
  let answer2 = document.getElementById("q2").value;
  let answer3 = document.getElementById("q3").value;
  let answer4 = document.getElementById("q4").value;
  let answer5 = document.getElementById("q5").value;
  answer1 = answer1.toLowerCase();
  answer2 = answer2.toLowerCase();
  answer3 = answer3.toLowerCase();
  answer4 = answer4.toLowerCase();
  answer5 = answer5.toLowerCase();
  if (answer1 == "george washington") {
    q1Style.style.border = "solid 2px green";
    q1Mark.innerHTML = " CORRECT!";
    q1Mark.style.color = "green";
    q1Style.style.color = "green";
    numCorrect++;
  } else {
    q1Style.style.border = "solid 2px maroon";
    q1Mark.innerHTML = " INCORRECT";
    q1Mark.style.color = "maroon";
    q1Style.style.color = "maroon";
    correct1.innerHTML = "Correct : George Washington";
  }
  if (answer2 == "abraham lincoln") {
    q2Style.style.border = "2px solid green";
    q2Mark.innerHTML = " CORRECT!";
    q2Mark.style.color = "green";
    q2Style.style.color = "green";
    numCorrect++;
  } else {
    q2Style.style.border = "solid 2px maroon";
    q2Mark.innerHTML = " INCORRECT";
    q2Mark.style.color = "maroon";
    q2Style.style.color = "maroon";
    correct2.innerHTML = "Correct : Abraham Lincoln";
  }
  if (answer3 == "hawaii" || answer3 == "alaska") {
    q3Style.style.border = "2px solid green";
    q3Mark.innerHTML = " CORRECT!";
    q3Mark.style.color = "green";
    q3Style.style.color = "green";
    numCorrect++;
  } else {
    q3Style.style.border = "solid 2px maroon";
    q3Mark.innerHTML = " INCORRECT";
    q3Mark.style.color = "maroon";
    q3Style.style.color = "maroon";
    correct3.innerHTML = "Correct : Hawaii / Alaska";
  }
  if (answer4 == "benjamin franklin") {
    q4Style.style.border = "2px solid green";
    q4Mark.innerHTML = " CORRECT!";
    q4Mark.style.color = "green";
    q4Style.style.color = "green";
    numCorrect++;
  } else {
    q4Style.style.border = "solid 2px maroon";
    q4Mark.innerHTML = " INCORRECT";
    q4Mark.style.color = "maroon";
    q4Style.style.color = "maroon";
    correct4.innerHTML = "Correct : Benjamin Franklin";
  }
  if (
    answer5 == "usa" ||
    answer5 == "america" ||
    answer5 == "united states" ||
    answer5 == "united states of america"
  ) {
    q5Style.style.border = "2px solid green";
    q5Mark.innerHTML = " CORRECT!";
    q5Mark.style.color = "green";
    q5Style.style.color = "green";
    numCorrect++;
  } else {
    q5Style.style.border = "solid 2px maroon";
    q5Mark.innerHTML = " INCORRECT";
    q5Mark.style.color = "maroon";
    q5Style.style.color = "maroon";
    correct5.innerHTML = "Correct : USA";
  }
  if (numCorrect == 0) {
    remark.innerHTML = failScore;
    score.innerHTML = `${numCorrect} / 5 (0%)`;
    remark.style.color = "maroon";
  } else if (numCorrect == 1) {
    remark.innerHTML = badScore;
    score.innerHTML = `${numCorrect} / 5 (20%)`;
    remark.style.color = "orangered";
  } else if (numCorrect == 2) {
    remark.innerHTML = poorScore;
    score.innerHTML = `${numCorrect} / 5 (40%)`;
    remark.style.color = "orange";
  } else if (numCorrect == 3) {
    remark.innerHTML = okayScore;
    score.innerHTML = `${numCorrect} / 5 (60%)`;
    remark.style.color = "goldenrod";
  } else if (numCorrect == 4) {
    remark.innerHTML = goodScore;
    score.innerHTML = `${numCorrect} / 5 (80%)`;
    remark.style.color = "green";
  } else if (numCorrect == 5) {
    remark.innerHTML = perfScore;
    score.innerHTML = `${numCorrect} / 5 (100%)`;
    remark.style.color = "green";
  }
}
