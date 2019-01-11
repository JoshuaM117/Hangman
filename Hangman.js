//Intialize Variables
var gl;
var pick = [];
var Space = [];
var counter = 6;
var wrong = [];
//var x;
//var generate;
var y = "";
var mu = 1;
//Make Array of Words
var hard = ["dinosaur","pineapple","coconut","telegram","beaver","tarantula","motorcycle","mountain","gorilla","unicycle","desert","giraffe","apartment","trampoliine","extraordinary","trillion","billionaire","lizard","detective","automobile"]
var medium = ["laptop","sunset","raven","sleep","wolf","person","hero","mother","flower","house","fantastic","respect","scooter","watermelon","vegetable","carpet","telephone","father","bumblebee","injustice"]; 
var easy = ["hey","dog","dad","fox","lion","bird","bye","one","two","four","ball","cup","food","candy","bark","car","bike","walk","bus","mom"];
//Choose a difficulty
function Music1(){
		document.getElementById('1Song').play();
		document.getElementById('Song1').style.color = "blue";
		document.getElementById('3Song').pause();
		document.getElementById('Song3').style.color = "purple";
		document.getElementById('2Song').pause();
		document.getElementById('Song2').style.color = "purple";
		document.getElementById('stop').style.color = "brown"
}
function Music2(){
		document.getElementById('2Song').play();
		document.getElementById('Song2').style.color = "blue";
		document.getElementById('3Song').pause();
		document.getElementById('Song3').style.color = "purple";
		document.getElementById('1Song').pause();
		document.getElementById('Song1').style.color = "purple";
		document.getElementById('stop').style.color = "brown"
	
}
function Music3(){
		document.getElementById('3Song').play();
		document.getElementById('Song3').style.color = "blue";
		document.getElementById('1Song').pause();
		document.getElementById('Song1').style.color = "purple";
		document.getElementById('2Song').pause();
		document.getElementById('Song2').style.color = "purple";
		document.getElementById('stop').style.color = "brown"
		
	}function Nomusic(){
		document.getElementById('1Song').pause();
		document.getElementById('Song1').style.color = "brown";
		document.getElementById('2Song').pause();
		document.getElementById('Song2').style.color = "brown";
		document.getElementById('3Song').pause();
		document.getElementById('Song3').style.color = "brown";
		document.getElementById('stop').style.color = "blue"
	}

function Easy(){
	pick = easy;
	//generate();
	document.getElementById('dd').innerHTML = "";
	document.getElementById('easy').style.color = "blue";
	document.getElementById('medium').style.color = "brown";
	document.getElementById('hard').style.color = "brown";
}
function Medium(){
	pick = medium;
	//generate();
	document.getElementById('dd').innerHTML = "";
		document.getElementById('medium').style.color = "blue";
		document.getElementById('easy').style.color = "brown";
	document.getElementById('hard').style.color = "brown";
}
function Hard(){
	pick = hard;
	//generate();
	document.getElementById('dd').innerHTML = "";
		document.getElementById('hard').style.color = "blue";
		document.getElementById('easy').style.color = "brown";
	document.getElementById('medium').style.color = "brown";
}
//Pick a randm word
function generate1(){
	 document.getElementById('w').innerHTML = "";
	document.getElementById('circle').style.backgroundColor = "transparent";
	document.getElementById('square').style.backgroundColor = "transparent";
	document.getElementById('leg2').style.backgroundColor = "transparent";
	document.getElementById('leg').style.backgroundColor = "transparent";
	document.getElementById('arm2').style.backgroundColor = "transparent";
	document.getElementById('arm').style.backgroundColor = "transparent";
	counter = 6;
	y="";
	wrong = [];
Space = [];
document.getElementById('counter').innerHTML = "";
 var generate="";
document.getElementById('spaces').innerHTML = "";
var x  = Math.floor(Math.random() * 20);
  generate = pick[x];
//alert(pick);
//Make an array the size of the length of the word
for(var i = 0; i < generate.length; i++){
	Space.push(i);
}
//Change the array to a string, and changed the numbers to _ lines
var j = Space.toString();
var p = j.replace(/\w+/g,'_');
var c = p.replace(/,/g, ' ');
document.getElementById('spaces').innerHTML = c;
gl = generate;
document.getElementById('again').innerHTML = "Play Again";
document.getElementById('letter').value = "";
//alert(generate);
}
//When the player presses enter,the inbox gets the value.
window.addEventListener('keydown',chec,false);
function chec(e){
	if(e.keyCode == "13"){
		//alert(generate1());
		if(document.getElementById('letter').value.length == 2){
			return false;
		}
		    else{
			y = document.getElementById('letter').value;
		}
		document.getElementById('letter').value = "";
		//if(1=1){
	//function check(generate){
		//Checks to see if inbox matches word and if it doesnt it doesnt let u press enter
		//if y inbox length is more than 1

		}
		//Checks to see if the letter typed is in the word

if(gl.includes(y)){
	//alert(gl);
	for(var ii = 0; ii < gl.length; ii++){
		if(y == gl){
	c = gl;
	document.getElementById('spaces').innerHTML = c;
document.getElementById('counter').innerHTML= "You Won!"
if(counter == 6){
	document.getElementById('spaces').innerHTML = "Perfect!!!"
}
else if(counter == 5){
	document.getElementById('spaces').innerHTML = "You`re A Genius!!"
}
else if(counter == 4){
	document.getElementById('spaces').innerHTML = "Dang You Smart!";
}
else if(counter == 2 || counter == 3) {
	document.getElementById('spaces').innerHTML = "Awesome.";
}
else{
	document.getElementById('spaces').innerHTML = "Good Job."
}
}
        //Fills in the letter
		if(gl[ii] == y){
			Space[ii] = y;
var j = Space.toString();
var pp = j.replace(/\d/g,'_');
var c = pp.replace(/,/g, ' ');
document.getElementById('spaces').innerHTML = c;
var rr = c.replace(/\W+/g,"");
//Lets u know if u filled in the whole word
if(rr == gl){
	document.getElementById('spaces').innerHTML = c;
document.getElementById('counter').innerHTML= "You Won!"
	if(counter == 6){
	document.getElementById('spaces').innerHTML = "Perfect!!!"
}
else if(counter == 5){
	document.getElementById('spaces').innerHTML = "You`re A Genius!!"
}
else if(counter == 4){
	document.getElementById('spaces').innerHTML = "Dang You Smart!";
}
else if(counter == 2 || counter == 3) {
	document.getElementById('spaces').innerHTML = "Awesome.";
}
else{
	document.getElementById('spaces').innerHTML = "Good Job."
}
}
}

		}
	}
     // doesnt let u pick the same wrong letter twice
	else{
	 if(wrong.includes(y)){
	 	return false;
	 	//put all the wrong letters at bottom and subtracts 
	 	//one from counter

	 }else
     wrong.push(y);
     document.getElementById('w').innerHTML = "";
     document.getElementById('w').innerHTML = wrong;
counter--;
if(counter == 5){
	document.getElementById('circle').style.backgroundColor = "red";
}
if(counter == 4){
	document.getElementById('square').style.backgroundColor = "red";
}
if(counter == 3){
	document.getElementById('arm').style.backgroundColor = "red";
}
if(counter == 2){
	document.getElementById('arm2').style.backgroundColor = "red";
}
if(counter == 1){
	document.getElementById('leg').style.backgroundColor = "red";
}
if(counter == 0){
	document.getElementById('leg2').style.backgroundColor = "red";

//Lets u know u lost
document.getElementById('counter').innerHTML = "You Lose!";
if(gl.length < 8 && gl.length !== 7 && gl.length > 4){
document.getElementById('spaces').innerHTML = "Try Again Loser!";	
}else if(gl.length == 7 || gl.length == 9){
document.getElementById('spaces').innerHTML = "Just Stop Playing Bro.";
}else if(gl.length == 4){
	document.getElementById('spaces').innerHTML = "You Should Read More.";
}
else{
document.getElementById('spaces').innerHTML = "You Suck!";
}
}
}//Makes the input box refesh after every letter
//document.getElementById('letter').value = "";
}

//}
//}