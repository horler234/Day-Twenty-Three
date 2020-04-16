let compScore = 0;
let userScore = 0;
var play = 0;
var game = ["Rock", "Paper", "Scissors"];
var user = document.getElementById('userName');

var score = document.getElementById('scores');
var scoreline = document.getElementById('score-line');

document.getElementById('start').addEventListener("click", function want(event) {
  event.preventDefault();
  play = 0;
  compScore = 0;
  userScore = 0;
  var user_name = user.value;
  if (user_name === '') {
    alert('Enter Username!');
  }

  else {
    document.getElementById('rock-btn').style.display = 'block';
    document.getElementById('paper-btn').style.display = 'block';
    document.getElementById('scissors-btn').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    user.setAttribute('disabled', '');
    document.getElementById('rock-btn').addEventListener("click", function() {
      var userChoice = document.getElementById('rock-btn').value;
      var compChoice = game[Math.floor(Math.random() * game.length)];
      alertWinner(userChoice, compChoice);
      play++;

      let winner = alertWinner(userChoice, compChoice);
      if (winner === 'Draw') {
        winner += ". It\'s a tie";
      } else if (winner === 'Computer') {
        winner += " wins!";
        compScore++;
      } else if (winner === user_name) {
        winner += " wins!";
        userScore++;
      }
      displayScores('Computer: ' + compChoice + ' ' + user_name + ': ' + userChoice + '. ' + winner);
      scoreline.innerHTML = 'Computer {' + compScore + '} ' + ' {' + userScore + '} ' + user_name  ;

      if (play === 5) {
        gameOver();
        begin();
      } else if (play > 5) {
        alert('Restart Page');
      }
    });

    document.getElementById('paper-btn').addEventListener("click", function() {
      var userChoice = document.getElementById('paper-btn').value;
      var compChoice = game[Math.floor(Math.random() * game.length)];
      alertWinner(userChoice, compChoice);
      play++

      let winner = alertWinner(userChoice, compChoice);
      if (winner === 'Draw') {
        winner += ". It\'s a tie";
      } else if (winner === 'Computer') {
        winner += " wins!";
        compScore++;
      } else if (winner === user_name) {
        winner += " wins!";
        userScore++;
      }
      displayScores('Computer: ' + compChoice + ' ' + user_name + ': ' + userChoice + '. ' + winner);
      scoreline.innerHTML = 'Computer {' + compScore + '} ' + ' {' + userScore + '} ' + user_name  ;

      if (play === 5) {
        gameOver();
        begin();
      } else if (play > 5) {
        alert('Restart Page');
      }





    });

    document.getElementById('scissors-btn').addEventListener("click", function() {
      var userChoice = document.getElementById('scissors-btn').value;
      var compChoice = game[Math.floor(Math.random() * game.length)];
      alertWinner(userChoice, compChoice);
      play++;

      let winner = alertWinner(userChoice, compChoice);
      if (winner === 'Draw') {
        winner += ". It\'s a tie";
      } else if (winner === 'Computer') {
        winner += " wins!";
        compScore++;
      } else if (winner === user_name) {
        winner += " wins!";
        userScore++;
      }
      displayScores('Computer: ' + compChoice + ' ' + user_name + ': ' + userChoice + '. ' + winner);
      scoreline.innerHTML = 'Computer {' + compScore + '} ' + ' {' + userScore + '} ' + user_name  ;

      if (play === 5) {
        gameOver();
        begin();
      }

      else if (play > 5) {
        alert('Restart Page');
      }
    });

    function gameOver() {
      play = 0;
      let real = chooseWinner (compScore, userScore);
      displayScores(real);
      document.getElementById('final').innerHTML = 'Thanks for playing';
    }

    function chooseWinner (compScore, userScore) {
      if (compScore > userScore) {
        return 'Computer wins';
      } else if (compScore < userScore) {
        return 'You win';
      } else {
        return 'It\'s a draw';
      }
    }

    function displayScores(message) {
      score.innerHTML = message
    }




    function alertWinner(userChoice, compChoice) {
      if (userChoice === compChoice) {
        return 'Draw';
      } else if (userChoice === 'Rock' && compChoice === 'Paper') {
        return 'Computer';
      } else if (userChoice === 'Rock' && compChoice === 'Scissors') {
        return user_name;
      } else if (userChoice === 'Paper' && compChoice === 'Scissors') {
        return 'Computer';
      } else if (userChoice === 'Paper' && compChoice === 'Rock') {
        return user_name;
      } else if (userChoice === 'Scissors' && compChoice === 'Rock') {
        return 'Computer';
      } else if (userChoice === 'Scissors' && compChoice === 'Paper') {
        return user_name;
      }
    }

  }
});

function begin() {
  user.style.display = 'none';
  document.getElementById('rock-btn').style.display = 'none';
  document.getElementById('paper-btn').style.display = 'none';
  document.getElementById('scissors-btn').style.display = 'none';
  document.getElementById('start').style.display = 'none';

}

begin ();

document.getElementById('start-game').addEventListener("click", function() {
  play = 0;
  compScore = 0;
  userScore = 0;
  user.form.reset();
  begin();
  document.getElementById('start-game').value = 'RESTART GAME';
  user.style.display = 'block';
  user.removeAttribute('disabled', '');
  document.getElementById('start').style.display = 'block';
  score.innerHTML = '';
  scoreline.innerHTML = '';
  document.getElementById('start-game').style.display = 'none';

})

console.log(play);
