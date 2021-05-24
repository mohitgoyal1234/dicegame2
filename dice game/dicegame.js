
var randomnumber1= Math.floor(Math.random()*6 + 1);

var randomimage1 =  randomnumber1 + "point.png";

var final1 = document.getElementsByTagName("img")[0].setAttribute("src", randomimage1);

var randomnumber2= Math.floor(Math.random()*6 + 1);

var randomimage2 =  randomnumber2 + "point.png";

var final2 = document.getElementsByTagName("img")[1].setAttribute("src", randomimage2);
var content = document.getElementsByClassName("result")[0];
 
if(randomnumber1 === randomnumber2){
    content.innerHTML = "MATCH TIES";
}
else if(randomnumber1 > randomnumber2){
    content.innerHTML = "PLAYER 1 WINS";
}
else{
    content.innerHTML = "PLAYER 2 WINS";
}
