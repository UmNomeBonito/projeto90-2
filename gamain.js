player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

points1 = 0;
points2 = 0;
 
document.getElementById("player1_name").innerHTML = player1_name + ":" ;
document.getElementById("player2_name").innerHTML = player2_name + ":" ;

document.getElementById("player1_score").innerHTML = points1;
document.getElementById("player2_score").innerHTML = points2;








function send() 
{
     number1 = document.getElementById("numero1").value;
     number2 = document.getElementById("numero2").value;
     atual_answer = parseInt(number1) * parseInt(number2);
}