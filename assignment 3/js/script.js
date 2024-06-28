/*Name: Harkeerat kaur (kaharkee)
it is contains the javascript and it is Linked with index.html for further coding. 
*/
var que = {
  // Declare a variable for question.
  "Q1. Inside which HTML element do we put the  < >JavaScript?": {
    A: "js",
    B: "javascript",
    C: "script",
    D: "scripting",
    ans: "C",
  },
  "Q2.what is the full form of HTML? ": {
    A: "Home Tool Markup Language",
    B: "Hyper Text Markup Language",
    C: "Hyperlinks and Text Markup Language",
    D: "Hyperlink and Tool Markup Language",
    ans: "B",
  },
  "Q3. Choose the correct HTML element for the < > largest heading:": {
    A: "heading",
    B: "h1",
    C: "h6",
    D: "head",
    ans: "B",
  },
  "Q4. Choose the correct HTML element to define < > important text": {
    A: "strong",
    B: "important",
    C: "i",
    D: "b",
    ans: "A",
  },
  "Q5. Where is the correct place to insert a JavaScript?": {
    A: "The body section",
    B: "The head section",
    C: "Both the head section and the body section are correct",
    D: "The style section",
    ans: "C",
  },
  "Q6. How do you find the number with the highest value of x and y?": {
    A: "top(x,y)",
    B: "ceil(x,y)",
    C: "Math.max(x,y)",
    D: "Math.ceil(x,y)",
    ans: "C",
  },
  "Q7.Which event occurs when the user clicks on an HTML element? ": {
    A: "onmouseover",
    B: "onmouseclick",
    C: "onchange",
    D: "onclick",
    ans: "D",
  },
  "Q8. How do you create a function in Javascript?": {
    A: "function = myFunction()",
    B: "function:myFunction()",
    C: "function myFunction()",
    D: "function()",
    ans: "C",
  },
  "Q9.What does CSS stand for??": {
    A: "Cascading Style Sheets",
    B: "Creative style Sheets",
    C: "Colourful Style Sheets",
    D: "Computer Style Sheets",
    ans: "A",
  },
  "Q10. What is the correct HTML element for inserting a  < >line break?": {
    A: "break",
    B: "lb",
    C: "br",
    D: "bk",
    ans: "C",
  },
};
var currentQ = 0; // Declare a variable that contains question
var score = 0; // Declare a variable that contains score
var answers = []; // Declare a variable that contains answers
var currentA = ""; //Declare a variable.

// next () method returns an object.
function next() {
  if (currentA != "") {
    // if-else statement.
    answerToCurQ = Object.keys(que)
      .filter((x, i) => i == currentQ)
      .map((x) => que[x])[0].ans;
    document.getElementById("main").innerHTML =
      document.getElementById("main").innerHTML +
      "<div id=" +
      (currentA === answerToCurQ ? "correct" : "wrong") +
      "></div>";

    if (currentA === answerToCurQ) {
      score++;
    }
    currentQ++;

    if (currentQ < Object.keys(que).length) {
      render();

      if (currentQ == Object.keys(que).length - 1) {
        document.getElementById("button").innerHTML = "Finish Quiz";
      }
    } else {
      document.getElementById("Question").innerText = "";
      document.getElementById("options").innerHTML = "";
      document.getElementById("main").hidden = true;
      document.getElementById("button").hidden = true;
      calculateScore();
    }
    currentA = "";
  } else {
    alert("Please select a value"); // alert message
  }
}

// render() takes care of the DOM elements and is invoked every time the component is mounted or updated.

function render() {
  document.getElementById("Question").innerText = Object.keys(que)
    .filter((x, i) => i == currentQ)
    .map((x) => x);
  currentQNA = Object.keys(que)
    .filter((x, i) => i == currentQ)
    .map((x) => que[x]);
  console.log(currentQNA); //calling function by Id.

  str =
    "<input type='radio' id='opt1' name='answer' value='A' onchange='setCurrentAnswer()'><label for='opt1'>" +
    currentQNA[0].A +
    "</label><br><br>";
  str +=
    "<input type='radio' id='opt2' name='answer' value='B' onchange='setCurrentAnswer()'><label for='opt2'>" +
    currentQNA[0].B +
    "</label><br><br>";
  str +=
    "<input type='radio' id='opt3' name='answer' value='C' onchange='setCurrentAnswer()'><label for='opt3'>" +
    currentQNA[0].C +
    "</label><br><br>";
  str +=
    "<input type='radio' id='opt4' name='answer' value='D' onchange='setCurrentAnswer()'><label for='opt4'>" +
    currentQNA[0].D +
    "</label><br><br>";
  document.getElementById("options").innerHTML = str; //calling function by Id.
}

//function for current answer.

function setCurrentAnswer() {
  // if -else statement
  if (document.getElementById("opt1").checked) {
    // calling function by Id.
    currentA = document.getElementById("opt1").value;
  }

  if (document.getElementById("opt2").checked) {
    //calling function by Id.
    currentA = document.getElementById("opt2").value;
  }

  if (document.getElementById("opt3").checked) {
    //calling function by Id.
    currentA = document.getElementById("opt3").value;
  }

  if (document.getElementById("opt4").checked) {
    //calling function by Id.
    currentA = document.getElementById("opt4").value;
  }
}

// function to calculate score
function calculateScore() {
  document.getElementById("Question").style = "text-align: center;"; //calling function by Id.
  document.getElementById("Question").innerHTML =
    "Hurray!!!<br><br>You finished the Quiz successfully...<br>Your Score is";

  if (score > 5) {
    document.getElementById("options").style =
      "text-align: center;color: navy;font-weight: bold;font-size: 100px;";
    document.getElementById("options").innerHTML = score + "/10"; //calling function by Id.
  } else {
    document.getElementById("options").style =
      "text-align: center;color: #d10c0c;font-weight: bold;font-size: 100px;";
    document.getElementById("options").innerHTML = score + "/10"; //calling function by Id.
  }
}
