//Intialize Variables
var pick = [];
var Space = [];
var counter = 6;
var wrong = [];
var x;
var generate;
var y = "";
var mu = 1;
//Make Array of Words
var hard = ["dinosaur","pineapple","coconut","telegram","beaver","tarantula","motorcycle","mountain","gorilla","unicycle","desert","giraffe","apartment","trampoliine","extraordinary","trillion","billionaire","lizard","detective","automobile"]
var medium = ["laptop","sunset","raven","sleep","wolf","person","hero","mother","flower","house","fantastic","respect","scooter","watermelon","vegetable","carpet","telephone","father","bumblebee","injustice"]; 
var easy = ["hey","dog","dad","fox","lion","bird","bye","one","two","four","ball","cup","food","candy","bark","car","bike","walk","bus","mom"];
//Choose a difficulty
function Music1(){
	if(mu == 1){
		document.getElementById('1Song').play();
		document.getElementById('Song1').style.color = "blue";
		document.getElementById('3Song').pause();
		document.getElementById('Song3').style.color = "purple";
		document.getElementById('2Song').pause();
		document.getElementById('Song2').style.color = "purple";
		mu = 2;
		return;
	}else if(mu == 2){
		document.getElementById('1Song').pause();
		document.getElementById('Song1').style.color = "brown";
		mu = 1;
		return;
	}
}
function Music2(){
	if(mu == 1){
		document.getElementById('2Song').play();
		document.getElementById('Song2').style.color = "blue";
		document.getElementById('3Song').pause();
		document.getElementById('Song3').style.color = "purple";
		document.getElementById('1Song').pause();
		document.getElementById('Song1').style.color = "purple";
		mu = 2;
		return;
	}else if(mu == 2){
		document.getElementById('2Song').pause();
		document.getElementById('Song2').style.color = "brown";
		mu = 1;
		return;
	}
}
function Music3(){
	if(mu == 1){
		document.getElementById('3Song').play();
		document.getElementById('Song3').style.color = "blue";
		document.getElementById('1Song').pause();
		document.getElementById('Song1').style.color = "purple";
		document.getElementById('2Song').pause();
		document.getElementById('Song2').style.color = "purple";
		mu = 2;
		return;
	}else if(mu == 2){
		document.getElementById('3Song').pause();
		document.getElementById('Song3').style.color = "brown";
		mu = 1;
		return;
	}
}
function Easy(){
	pick = easy;
	generate();
	document.getElementById('dd').innerHTML = "";
	document.getElementById('easy').style.color = "blue";
}
function Medium(){
	pick = medium;
	generate();
	document.getElementById('dd').innerHTML = "";
		document.getElementById('medium').style.color = "blue";
}
function Hard(){
	pick = hard;
	generate();
	document.getElementById('dd').innerHTML = "";
		document.getElementById('hard').style.color = "blue";
}
//Pick a randm word
function generate(){	
x  = Math.floor(Math.random() * 20);
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
}
//When the player presses enter,the inbox gets the value.
window.addEventListener('keydown',check,false);
function check(e){
	if(e.keyCode == "13"){
		y = document.getElementById('letter').value;
		//Checks to see if inbox matches word and if it doesnt it doesnt let u press enter
		//if y inbox length is more than 1
           if(y.length == 2 ){ 
		    return false;
			}
		//Checks to see if the letter typed is in the word
if(generate.includes(y)){
	for(var ii = 0; ii < generate.length; ii++){
		if(y == generate){
	c = generate;
	document.getElementById('spaces').innerHTML = c;
document.getElementById('counter').innerHTML= "You Won!"
if(counter > 3){
	document.getElementById('spaces').innerHTML = "Dang You Smart!!";
}
else if(counter == 2 || counter == 3) {
	document.getElementById('spaces').innerHTML = "Awesome.";
}
else{
	document.getElementById('spaces').innerHTML = "Good Job."
}
}
        //Fills in the letter
		if(generate[ii] == y){
			Space[ii] = y;
var j = Space.toString();
var pp = j.replace(/\d/g,'_');
var c = pp.replace(/,/g, ' ');
document.getElementById('spaces').innerHTML = c;
var rr = c.replace(/\W+/g,"");
//Lets u know if u filled in the whole word
if(rr == generate){
	document.getElementById('counter').innerHTML= "You Won!"
	if(counter > 3){
	document.getElementById('spaces').innerHTML = "Dang You Smart!!";
}
else if(counter == 3 || counter == 2){
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
if(generate.length < 8 && generate.length !== 7 ){
document.getElementById('spaces').innerHTML = "Try Again Loser";	
}else if(generate.length == 7 || generate.length == 9){
document.getElementById('spaces').innerHTML = "Just Stop Playing Bro."
}else{
document.getElementById('spaces').innerHTML = "You Suck";
}
}
}//Makes the input box refesh after every letter
document.getElementById('letter').value = "";
}
}

