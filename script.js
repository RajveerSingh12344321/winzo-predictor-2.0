function predict() {
  const players = parseInt(document.getElementById('players').value);
  const avgScore = parseFloat(document.getElementById('avgScore').value);

  if (isNaN(players) || isNaN(avgScore)) {
    document.getElementById('result').textContent = 'Please enter valid numbers';
    return;
  }

  const score = players * avgScore;
  let prediction = '';

  if (score > 500) {
    prediction = 'Dhoni Wins';
  } else {
    prediction = 'Kohli Wins';
  }

  document.getElementById('result').textContent = prediction;
}
