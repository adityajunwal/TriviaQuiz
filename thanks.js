const yourScore = document.getElementById("your-score");

const score = localStorage.getItem("score")

yourScore.innerText = `Your Scored ${score} out of 10!`