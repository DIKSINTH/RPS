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
      random_number == 13 ||
      random_number == 16 ||
      random_number == 19 ||
      random_number == 22 ||
      random_number == 25 ||
      random_number == 28
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
      random_number == 14 ||
      random_number == 17 ||
      random_number == 20 ||
      random_number == 23 ||
      random_number == 26 ||
      random_number == 29
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
      random_number == 15 ||
      random_number == 18 ||
      random_number == 21 ||
      random_number == 24 ||
      random_number == 27 ||
      random_number == 30
    ) {
      document.getElementById("computer-paper").style.display = "none";
      document.getElementById("computer-scissor").style.display = "block";
      document.getElementById("computer-rock").style.display = "none";
    }
  }
}
function Rock() {
  var speech = new SpeechSynthesisUtterance();
  speech.text = "Rock";
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  var random_number = Math.ceil(Math.random() * 30);
  Computer = new computer();
  Computer.display(random_number);
  document.getElementById("player-paper").style.display = "none";
  document.getElementById("player-scissor").style.display = "none";
  document.getElementById("player-rock").style.display = "block";
}

function Paper() {
  var speech = new SpeechSynthesisUtterance();
  speech.text = "Paper";
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  var random_number = Math.ceil(Math.random() * 30);
  Computer = new computer();
  Computer.display(random_number);
  document.getElementById("player-paper").style.display = "block";
  document.getElementById("player-scissor").style.display = "none";
  document.getElementById("player-rock").style.display = "none";
}
function Scissor() {
  var speech = new SpeechSynthesisUtterance();
  speech.text = "Scissor";
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  var random_number = Math.ceil(Math.random() * 30);
  Computer = new computer();
  Computer.display(random_number);
  document.getElementById("player-paper").style.display = "none";
  document.getElementById("player-scissor").style.display = "block";
  document.getElementById("player-rock").style.display = "none";
}
