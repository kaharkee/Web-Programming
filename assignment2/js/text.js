// To display the name of the first player
let player1 = prompt("What is your first name?");
if (player1 !== null && player1 !== "") {
  alert(`Welcome, ${player1}`);
} else {
  alert("Too bad for you");
}
let player1Element = (document.getElementById("player-name01").innerText =
  player1 + " as Player X");

// To display the name of the second player
let player2 = prompt("What is your first name?");
if (player2 !== null && player2 !== "") {
  alert(`Welcome, ${player2}`);
} else {
  alert("Too bad for you");
}
let player2Element = (document.getElementById("player-name02").innerText =
  player2 + " as Player 0");

function myfunc() {
  var p1, p2, p3, p4, p5, p6, p7, p8, p9;
  p1 = document.getElementById("p1").value;
  p2 = document.getElementById("p2").value;
  p3 = document.getElementById("p3").value;
  p4 = document.getElementById("p4").value;
  p5 = document.getElementById("p5").value;
  p6 = document.getElementById("p6").value;
  p7 = document.getElementById("p7").value;
  p8 = document.getElementById("p8").value;
  p9 = document.getElementById("p9").value;

  if (
    (p1 == "x" || p1 == "X") &&
    (p2 == "x" || p2 == "X") &&
    (p3 == "x" || p3 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p4").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player X won");
  } else if (
    (p1 == "x" || p1 == "X") &&
    (p4 == "x" || p4 == "X") &&
    (p7 == "x" || p7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;

    window.alert("Player X won");
  } else if (
    (p7 == "x" || p7 == "X") &&
    (p8 == "x" || p8 == "X") &&
    (p9 == "x" || p9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p6").disabled = true;
    window.alert("Player X won");
  } else if (
    (p3 == "x" || p3 == "X") &&
    (p6 == "x" || p6 == "X") &&
    (p9 == "x" || p9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    window.alert("Player X won");
  } else if (
    (p1 == "x" || p1 == "X") &&
    (p5 == "x" || p5 == "X") &&
    (p9 == "x" || p9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    window.alert("Player X won");
  } else if (
    (p3 == "x" || p3 == "X") &&
    (p5 == "x" || p5 == "X") &&
    (p7 == "x" || p7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player X won");
  } else if (
    (p2 == "x" || p2 == "X") &&
    (p5 == "x" || p5 == "X") &&
    (p8 == "x" || p8 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player X won");
  } else if (
    (p4 == "x" || p4 == "X") &&
    (p5 == "x" || p5 == "X") &&
    (p6 == "x" || p6 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player X won");
  } else if (
    (p1 == "0" || p1 == "0") &&
    (p2 == "0" || p2 == "0") &&
    (p3 == "0" || p3 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p4").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p1 == "0" || p1 == "0") &&
    (p4 == "0" || p4 == "0") &&
    (p7 == "0" || p7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p7 == "0" || p7 == "0") &&
    (p8 == "0" || p8 == "0") &&
    (p9 == "0" || p9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p6").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p3 == "0" || p3 == "0") &&
    (p6 == "0" || p6 == "0") &&
    (p9 == "0" || p9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p1 == "0" || p1 == "0") &&
    (p5 == "0" || p5 == "0") &&
    (p9 == "0" || p9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p3 == "0" || p3 == "0") &&
    (p5 == "0" || p5 == "0") &&
    (p7 == "0" || p7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p2 == "0" || p2 == "0") &&
    (p5 == "0" || p5 == "0") &&
    (p8 == "0" || p8 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p4 == "0" || p4 == "0") &&
    (p5 == "0" || p5 == "0") &&
    (p6 == "0" || p6 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
    document.getElementById("p9").disabled = true;
    window.alert("Player 0 won");
  } else if (
    (p1 == "X" || p1 == "0") &&
    (p2 == "X" || p2 == "0") &&
    (p3 == "X" || p3 == "0") &&
    (p4 == "X" || p4 == "0") &&
    (p5 == "X" || p5 == "0") &&
    (p6 == "X" || p6 == "0") &&
    (p7 == "X" || p7 == "0") &&
    (p8 == "X" || p8 == "0") &&
    (p9 == "X" || p9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Match Tie";
    window.alert("Match Tie");
  } else {
    //Result
    if (flag == 1) {
      document.getElementById("print").innerHTML = "Player X Turn";
    } else {
      document.getElementById("print").innerHTML = "Player 0 Turn";
    }
  }
}

function myfunc_2() {
  location.reload();
  document.getElementById("p1").value = "";
  document.getElementById("p2").value = "";
  document.getElementById("p3").value = "";
  document.getElementById("p4").value = "";
  document.getElementById("p5").value = "";
  document.getElementById("p6").value = "";
  document.getElementById("p7").value = "";
  document.getElementById("p8").value = "";
  document.getElementById("p9").value = "";
}

flag = 1;
function myfunc_3() {
  if (flag == 1) {
    document.getElementById("p1").value = "X";
    document.getElementById("p1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p1").value = "0";
    document.getElementById("p1").disabled = true;
    flag = 1;
  }
}

function myfunc_4() {
  if (flag == 1) {
    document.getElementById("p2").value = "X";
    document.getElementById("p2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p2").value = "0";
    document.getElementById("p2").disabled = true;
    flag = 1;
  }
}

function myfunc_5() {
  if (flag == 1) {
    document.getElementById("p3").value = "X";
    document.getElementById("p3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p3").value = "0";
    document.getElementById("p3").disabled = true;
    flag = 1;
  }
}

function myfunc_6() {
  if (flag == 1) {
    document.getElementById("p4").value = "X";
    document.getElementById("p4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p4").value = "0";
    document.getElementById("p4").disabled = true;
    flag = 1;
  }
}

function myfunc_7() {
  if (flag == 1) {
    document.getElementById("p5").value = "X";
    document.getElementById("p5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p5").value = "0";
    document.getElementById("p5").disabled = true;
    flag = 1;
  }
}

function myfunc_8() {
  if (flag == 1) {
    document.getElementById("p6").value = "X";
    document.getElementById("p6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p6").value = "0";
    document.getElementById("p6").disabled = true;
    flag = 1;
  }
}

function myfunc_9() {
  if (flag == 1) {
    document.getElementById("p7").value = "X";
    document.getElementById("p7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p7").value = "0";
    document.getElementById("p7").disabled = true;
    flag = 1;
  }
}

function myfunc_10() {
  if (flag == 1) {
    document.getElementById("p8").value = "X";
    document.getElementById("p8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p8").value = "0";
    document.getElementById("p8").disabled = true;
    flag = 1;
  }
}

function myfunc_11() {
  if (flag == 1) {
    document.getElementById("p9").value = "X";
    document.getElementById("p9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("p9").value = "0";
    document.getElementById("p9").disabled = true;
    flag = 1;
  }
}
