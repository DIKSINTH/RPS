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
      }, 3000);
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
    document.getElementById("player").style.display = "none";
    document.getElementById("computer-rock").style.display = "none";
    document.getElementById("computer-paper").style.display = "none";
    document.getElementById("computer-scissor").style.display = "none";
    document.getElementById("player-rock").style.display = "none";
    document.getElementById("player-paper").style.display = "none";
    document.getElementById("player-scissor").style.display = "none";
    document.getElementById("vs").style.display = "none";
    document.getElementById("player-chances").style.display = "none";
    document.getElementById("computer-chances").style.display = "none";
    document.getElementById("lose").style.display = "block";
    if (true) {
      setTimeout(() => {
        location.reload();
      }, 8000);
    }
  } else if (computer_points == 0) {
    if (
      localStorage.getItem("Name").includes("Shiny") ||
      localStorage.getItem("Name").includes("shiny") ||
      localStorage.getItem("Name").includes("Adaikala") ||
      localStorage.getItem("Name").includes("adaikala")
    ) {
      const failSound = new Audio("minnale.mp3");
      failSound.play();
      document.getElementById("computer").style.display = "none";
      document.getElementById("computer-rock").style.display = "none";
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("player-rock").style.display = "none";
      document.getElementById("player-paper").style.display = "none";
      document.getElementById("player-scissor").style.display = "none";
      document.getElementById("vs").style.display = "none";
      document.getElementById("player-chances").style.display = "none";
      document.getElementById("computer-chances").style.display = "none";
      document.getElementById("winner-badge").style.display = "none";
      document.getElementById("diksinth").style.display = "none";
      document.getElementById("player").style.display = "none";
      document.getElementById("heart1").style.display = "block";
      document.getElementById("heart2").style.display = "block";
      document.getElementById("top_heart").style.display = "block";
      document.getElementById("bottom_heart").style.display = "block";
      document.getElementById("left_heart").style.display = "block";
      document.getElementById("right_heart").style.display = "block";
      document.getElementById("butterfly").style.display = "block";
      document.getElementById("cat").style.display = "block";
      if (true) {
        setTimeout(() => {
          location.reload();
        }, 13000);
      }
    } else {
      const failSound = new Audio("win.mp3");
      failSound.play();
      document.getElementById("computer").style.display = "none";
      document.getElementById("computer-rock").style.display = "none";
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("player-rock").style.display = "none";
      document.getElementById("player-paper").style.display = "none";
      document.getElementById("player-scissor").style.display = "none";
      document.getElementById("vs").style.display = "none";
      document.getElementById("player-chances").style.display = "none";
      document.getElementById("computer-chances").style.display = "none";
      document.getElementById("winner-badge").style.display = "block";
      document.getElementById("diksinth").style.display = "block";
      if (true) {
        setTimeout(() => {
          location.reload();
        }, 13000);
      }
    }
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
      document.getElementById("message1").textContent = "Tie!";
      if (true) {
        const message = document.getElementById("message1");
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
      document.getElementById("message").style.color = "#FF2800";
      document.getElementById("message").style.textShadow = `-1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white`;
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2500);
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
      document.getElementById("message").style.color = "#98FB98";
      document.getElementById("message").style.textShadow = `-1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white`;
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2500);
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
  if (user_points == 0) {
    const failSound = new Audio("fail.mp3");
    failSound.play();
    document.getElementById("player").style.display = "none";
    document.getElementById("computer-rock").style.display = "none";
    document.getElementById("computer-paper").style.display = "none";
    document.getElementById("computer-scissor").style.display = "none";
    document.getElementById("player-rock").style.display = "none";
    document.getElementById("player-paper").style.display = "none";
    document.getElementById("player-scissor").style.display = "none";
    document.getElementById("vs").style.display = "none";
    document.getElementById("player-chances").style.display = "none";
    document.getElementById("computer-chances").style.display = "none";
    document.getElementById("lose").style.display = "block";
    if (true) {
      setTimeout(() => {
        location.reload();
      }, 8000);
    }
  } else if (computer_points == 0) {
    if (
      localStorage.getItem("Name").includes("Shiny") ||
      localStorage.getItem("Name").includes("shiny") ||
      localStorage.getItem("Name").includes("Adaikala") ||
      localStorage.getItem("Name").includes("adaikala")
    ) {
      const failSound = new Audio("minnale.mp3");
      failSound.play();
      document.getElementById("computer").style.display = "none";
      document.getElementById("computer-rock").style.display = "none";
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("player-rock").style.display = "none";
      document.getElementById("player-paper").style.display = "none";
      document.getElementById("player-scissor").style.display = "none";
      document.getElementById("vs").style.display = "none";
      document.getElementById("player-chances").style.display = "none";
      document.getElementById("computer-chances").style.display = "none";
      document.getElementById("winner-badge").style.display = "none";
      document.getElementById("diksinth").style.display = "none";
      document.getElementById("player").style.display = "none";
      document.getElementById("heart1").style.display = "block";
      document.getElementById("heart2").style.display = "block";
      document.getElementById("top_heart").style.display = "block";
      document.getElementById("bottom_heart").style.display = "block";
      document.getElementById("left_heart").style.display = "block";
      document.getElementById("right_heart").style.display = "block";
      document.getElementById("butterfly").style.display = "block";
      document.getElementById("cat").style.display = "block";
      if (true) {
        setTimeout(() => {
          location.reload();
        }, 13000);
      }
    } else {
      const failSound = new Audio("win.mp3");
      failSound.play();
      document.getElementById("computer").style.display = "none";
      document.getElementById("computer-rock").style.display = "none";
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("player-rock").style.display = "none";
      document.getElementById("player-paper").style.display = "none";
      document.getElementById("player-scissor").style.display = "none";
      document.getElementById("vs").style.display = "none";
      document.getElementById("player-chances").style.display = "none";
      document.getElementById("computer-chances").style.display = "none";
      document.getElementById("winner-badge").style.display = "block";
      document.getElementById("diksinth").style.display = "block";
      if (true) {
        setTimeout(() => {
          location.reload();
        }, 13000);
      }
    }
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
      computer_points -= 1;
      document.getElementById("computer-chances").textContent = computer_points;
      const failSound = new Audio("right.mp3");
      failSound.play();
      document.getElementById("message").textContent = "Paper Wraps the Rock";
      document.getElementById("message").style.color = "#98FB98";
      document.getElementById("message").style.textShadow = `-1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white`;
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2500);
      }
    } else if (
      random_number == 2 ||
      random_number == 5 ||
      random_number == 8 ||
      random_number == 11 ||
      random_number == 14
    ) {
      document.getElementById("message1").textContent = "Tie!";
      if (true) {
        const message = document.getElementById("message1");
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
      user_points -= 1;
      document.getElementById("player-chances").textContent = user_points;
      const failSound = new Audio("wrong.mp3");
      failSound.play();
      document.getElementById("message").textContent =
        "Scissor Slice the Paper";
      document.getElementById("message").style.color = "#FF2800";
      document.getElementById("message").style.textShadow = `-1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white`;
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2500);
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
}
function Scissor() {
  if (user_points == 0) {
    const failSound = new Audio("fail.mp3");
    failSound.play();
    document.getElementById("player").style.display = "none";
    document.getElementById("computer-rock").style.display = "none";
    document.getElementById("computer-paper").style.display = "none";
    document.getElementById("computer-scissor").style.display = "none";
    document.getElementById("player-rock").style.display = "none";
    document.getElementById("player-paper").style.display = "none";
    document.getElementById("player-scissor").style.display = "none";
    document.getElementById("vs").style.display = "none";
    document.getElementById("player-chances").style.display = "none";
    document.getElementById("computer-chances").style.display = "none";
    document.getElementById("lose").style.display = "block";
    if (true) {
      setTimeout(() => {
        location.reload();
      }, 8000);
    }
  } else if (computer_points == 0) {
    if (
      localStorage.getItem("Name").includes("Shiny") ||
      localStorage.getItem("Name").includes("shiny") ||
      localStorage.getItem("Name").includes("Adaikala") ||
      localStorage.getItem("Name").includes("adaikala")
    ) {
      const failSound = new Audio("minnale.mp3");
      failSound.play();
      document.getElementById("computer").style.display = "none";
      document.getElementById("computer-rock").style.display = "none";
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("player-rock").style.display = "none";
      document.getElementById("player-paper").style.display = "none";
      document.getElementById("player-scissor").style.display = "none";
      document.getElementById("vs").style.display = "none";
      document.getElementById("player-chances").style.display = "none";
      document.getElementById("computer-chances").style.display = "none";
      document.getElementById("winner-badge").style.display = "none";
      document.getElementById("diksinth").style.display = "none";
      document.getElementById("player").style.display = "none";
      document.getElementById("heart1").style.display = "block";
      document.getElementById("heart2").style.display = "block";
      document.getElementById("top_heart").style.display = "block";
      document.getElementById("bottom_heart").style.display = "block";
      document.getElementById("left_heart").style.display = "block";
      document.getElementById("right_heart").style.display = "block";
      document.getElementById("butterfly").style.display = "block";
      document.getElementById("cat").style.display = "block";
      if (true) {
        setTimeout(() => {
          location.reload();
        }, 13000);
      }
    } else {
      const failSound = new Audio("win.mp3");
      failSound.play();
      document.getElementById("computer").style.display = "none";
      document.getElementById("computer-rock").style.display = "none";
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "none";
      document.getElementById("player-rock").style.display = "none";
      document.getElementById("player-paper").style.display = "none";
      document.getElementById("player-scissor").style.display = "none";
      document.getElementById("vs").style.display = "none";
      document.getElementById("player-chances").style.display = "none";
      document.getElementById("computer-chances").style.display = "none";
      document.getElementById("winner-badge").style.display = "block";
      document.getElementById("diksinth").style.display = "block";
      if (true) {
        setTimeout(() => {
          location.reload();
        }, 13000);
      }
    }
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
      user_points -= 1;
      document.getElementById("player-chances").textContent = user_points;
      const failSound = new Audio("wrong.mp3");
      failSound.play();
      document.getElementById("message").textContent =
        "Rock Crushes the Scissor";
      document.getElementById("message").style.color = "#FF2800";
      document.getElementById("message").style.textShadow = `-1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white`;
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2500);
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
      document.getElementById("message").textContent =
        "Scissor Slice the Paper";
      document.getElementById("message").style.color = "#98FB98";
      document.getElementById("message").style.textShadow = `-1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white`;
      if (true) {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2500);
      }
    } else if (
      random_number == 3 ||
      random_number == 6 ||
      random_number == 9 ||
      random_number == 12 ||
      random_number == 15
    ) {
      document.getElementById("message1").textContent = "Tie!";
      if (true) {
        const message = document.getElementById("message1");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2000);
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
}
