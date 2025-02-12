window.onload = function () {
  setTimeout(function () {
    document.getElementById("alert_box").style.display = "block";
  }, 1000);
};
class player {
  constructor(Name, content) {
    if (true) {
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    }
    localStorage.setItem("Name", Name);
    document.getElementById("player").textContent = Name;
    var speech = new SpeechSynthesisUtterance();
    speech.text = content;
    speech.rate = 1.1;
    speech.volume = 1;
    speech.pitch = 10;
    window.speechSynthesis.speak(speech);
  }
}

function promptbox() {
  document.getElementById("alert_box").style.display = "none";
  let Name = document.getElementById("Name").value;
  if (Name == "") {
    location.reload();
  } else {
    let content = document.getElementById("message").textContent;
    user = new player(Name, content);
  }
}

class computer {
  display(random_number) {
    if (
      random_number == 1 ||
      random_number == 4 ||
      random_number == 7 ||
      random_number == 10 ||
      random_number == 13
    ) {
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("computer-rock").style.display = "block";
    }
    if (
      random_number == 2 ||
      random_number == 5 ||
      random_number == 8 ||
      random_number == 11 ||
      random_number == 14
    ) {
      document.getElementById("computer-paper").style.display = "block";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("computer-rock").style.display = "none";
    }
    if (
      random_number == 3 ||
      random_number == 6 ||
      random_number == 9 ||
      random_number == 12 ||
      random_number == 15
    ) {
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "block";
      document.getElementById("computer-rock").style.display = "none";
    }
  }
}
var user_points = 5;
var computer_points = 5;
function Rock() {
  if (user_points == 0) {
    const failSound = new Audio("fail.mp3");
    failSound.play();
  } else if (computer_points == 0) {
    const failSound = new Audio("win.mp3");
    failSound.play();
  } else {
    var random_number = Math.ceil(Math.random() * 15);
    Computer = new computer();
    Computer.display(random_number);
    if (
      random_number == 1 ||
      random_number == 4 ||
      random_number == 7 ||
      random_number == 10 ||
      random_number == 13
    ) {
      document.getElementById("message").textContent = "Tie!";
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2000);
      }
    } else if (
      random_number == 2 ||
      random_number == 5 ||
      random_number == 8 ||
      random_number == 11 ||
      random_number == 14
    ) {
      user_points -= 1;
      document.getElementById("player-chances").textContent = user_points;
      const failSound = new Audio("wrong.mp3");
      failSound.play();
      document.getElementById("message").textContent = "Paper Wraps the Rock";
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2000);
      }
    } else if (
      random_number == 3 ||
      random_number == 6 ||
      random_number == 9 ||
      random_number == 12 ||
      random_number == 15
    ) {
      computer_points -= 1;
      document.getElementById("computer-chances").textContent = computer_points;
      const failSound = new Audio("right.mp3");
      failSound.play();
      document.getElementById("message").textContent =
        "Rock Crushes the Scissor";
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 3000);
      }
    } else {
      var speech = new SpeechSynthesisUtterance();
      speech.text = "Rock";
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }
    document.getElementById("player-paper").style.display = "none";
    document.getElementById("player-scissor").style.display = "none";
    document.getElementById("player-rock").style.display = "block";
  }
}

function Paper() {
  var random_number = Math.ceil(Math.random() * 15);
  Computer = new computer();
  Computer.display(random_number);
  if (
    random_number == 1 ||
    random_number == 4 ||
    random_number == 7 ||
    random_number == 10 ||
    random_number == 13
  ) {
    computer_points -= 1;
    document.getElementById("computer-chances").textContent = computer_points;
    const failSound = new Audio("right.mp3");
    failSound.play();
    document.getElementById("message").textContent = "Paper Wraps the Rock";
    if (true) {
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    }
  } else if (
    random_number == 2 ||
    random_number == 5 ||
    random_number == 8 ||
    random_number == 11 ||
    random_number == 14
  ) {
    document.getElementById("message").textContent = "Tie!";
    if (true) {
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    }
  } else if (
    random_number == 3 ||
    random_number == 6 ||
    random_number == 9 ||
    random_number == 12 ||
    random_number == 15
  ) {
    user_points -= 1;
    document.getElementById("player-chances").textContent = user_points;
    const failSound = new Audio("wrong.mp3");
    failSound.play();
    document.getElementById("message").textContent = "Scissor Slice the Paper";
    if (true) {
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    }
  } else {
    var speech = new SpeechSynthesisUtterance();
    speech.text = "Paper";
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
  document.getElementById("player-paper").style.display = "block";
  document.getElementById("player-scissor").style.display = "none";
  document.getElementById("player-rock").style.display = "none";
}
function Scissor() {
  var random_number = Math.ceil(Math.random() * 15);
  Computer = new computer();
  Computer.display(random_number);
  if (
    random_number == 1 ||
    random_number == 4 ||
    random_number == 7 ||
    random_number == 10 ||
    random_number == 13
  ) {
    user_points -= 1;
    document.getElementById("player-chances").textContent = user_points;
    const failSound = new Audio("wrong.mp3");
    failSound.play();
    document.getElementById("message").textContent = "Rock Crushes the Scissor";
    if (true) {
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    }
  } else if (
    random_number == 2 ||
    random_number == 5 ||
    random_number == 8 ||
    random_number == 11 ||
    random_number == 14
  ) {
    computer_points -= 1;
    document.getElementById("computer-chances").textContent = computer_points;
    const failSound = new Audio("right.mp3");
    failSound.play();
    document.getElementById("message").textContent = "Scissor Slice the Paper";
    if (true) {
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    }
  } else if (
    random_number == 3 ||
    random_number == 6 ||
    random_number == 9 ||
    random_number == 12 ||
    random_number == 15
  ) {
    document.getElementById("message").textContent = "Tie!";
    if (true) {
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    }
  } else {
    var speech = new SpeechSynthesisUtterance();
    speech.text = "Scissor";
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }

  document.getElementById("player-paper").style.display = "none";
  document.getElementById("player-scissor").style.display = "block";
  document.getElementById("player-rock").style.display = "none";
}
