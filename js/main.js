var canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d');

var chosenSide = null;

var tY = 0,
    rY = 0;

var chosenLeft, chosenRight;

var score = 0;

function gameEngine() {

  // New Frame
  c.fillStyle = '#FFFFFF';
  c.fillRect(0, 0, 800, 600);

  // Center Line
  c.beginPath();
  c.moveTo(400, 0);
  c.lineTo(400, 600);
  c.lineWidth = 10;
  c.stroke();

  // Left Landing Pad (BLUE)
  c.fillStyle = '#0000FF';
  c.fillRect(0, 550, 395, 50);

  // Right Landing Pad (RED)
  c.fillStyle = '#CC0000';
  c.fillRect(405, 550, 395, 50);

  if(chosenSide === 'left') {
    c.fillStyle = '#0033FF';
    c.fillRect(0, 550, 395, 50);
  }
  if(chosenSide === 'right') {
    c.fillStyle = '#CC3300';
    c.fillRect(405, 550, 395, 50);
  }

  if(score < 10) {
    tY += 5;
    rY += 6;
  }
  if(score >= 10 && score < 30) {
    tY += 8;
    rY += 7;
  }
  if(score >= 30 && score < 50) {
    tY += 10;
    rY += 11;
  }
  if(score >= 50 && score < 60) {
    tY += 13;
    rY += 8;
  }
  if(score >= 60 && score < 65) {
    tY += Math.floor(Math.random() * 20);
    rY += Math.floor(Math.random() * 25);
  }

  c.fillStyle = '#000066';
  c.fillRect(0, tY, 395, 30);

  c.fillStyle = '#380000';
  c.fillRect(405, rY, 395, 30);

  if(chosenSide === 'left' && (tY) > 550) {
    score += 1;
    tY = 0;
    document.getElementById('score').innerHTML = score;
  }
  if(chosenSide === 'right' && (rY) > 550) {
    score += 1;
    rY = 0;
    document.getElementById('score').innerHTML = score;
  }
  if(chosenSide !== 'left' && (tY) > 600) {
    score = 'YOU LOSE :(';
    document.getElementById('score').innerHTML = score;
    clearInterval(game);
  }
  if(chosenSide !== 'right' && (rY) > 600) {
    score = 'YOU LOSE :(';
    document.getElementById('score').innerHTML = score;
    clearInterval(game);
  }

}

var game = setInterval(gameEngine, 16);

document.onkeydown = function(e) {
  if(e.keyCode === 37) {
    chosenSide = 'left';
  }
  if(e.keyCode === 39) {
    chosenSide = 'right';
  }
  setTimeout(function() {
    chosenSide = null;
  }, 500);
}