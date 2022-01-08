player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name"); 

Player1_score = 0;
Player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("Player1_score").innerHTML = Player1_score;
document.getElementById("Player2_score").innerHTML = Player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;





