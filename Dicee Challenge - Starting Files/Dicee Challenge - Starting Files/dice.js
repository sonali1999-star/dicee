

var player1=Math.floor((Math.random()*6)+1);
 var player2=Math.floor((Math.random()*6)+1);
  console.log(player1);
  console.log(player2);
  a=player1;
  b=player2;
document.querySelector(".img1").setAttribute("src","images/dice"+a+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+b+".png");
 if(player1 > player2){
 	document.querySelector("h1").innerHTML="⛳Player1 wins!";
 }
 else if(player1===player2){
 	document.querySelector("h1").innerHTML="Draw!";

 }
 else{
 	document.querySelector("h1").innerHTML="player2 wins!⛳";
 }
