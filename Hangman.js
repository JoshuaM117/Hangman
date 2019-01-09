
var s;
//var sort = [];
var Space = [];
var rep;
var counter = 6
;
var wrong = [];
var x;
var generate;
var medium = ["laptop","sunset","raven","spiderman","wolf","person","hero","couch","iphone","house","fantastic","respect","banana","watermelon","vegetable","carpet","telephone","transformers","bumblebee","injustice"]; 
var easy = ["hey","dog","cat","fox","lion","bird","bye","one","two","four"];
function generate(){
x  = Math.floor(Math.random() * 20);
generate = medium[x];
for(var i = 0; i < generate.length; i++){
	Space.push(i);
}
var j = Space.toString();
var p = j.replace(/\w+/g,'_');
var c = p.replace(/,/g, ' ');
document.getElementById('spaces').innerHTML = c;
	//alert(generate);}
}
var y = "";
window.addEventListener('keydown',check,false);
function check(e){
	if(e.keyCode == "13"){
		y = document.getElementById('letter').value;
		if(y.length > 1 ){
			if(y == generate){
             
			}else
			return false;
		}

y = document.getElementById('letter').value;
if(generate.includes(y)){
	//s = generate.indexOf(y);
	for(var ii = 0; ii < generate.length; ii++){
		if(y == generate){
	c = generate;
	document.getElementById('spaces').innerHTML = c;
document.getElementById('counter').innerHTML= "You Won!"
if(counter > 2){
	document.getElementById('spaces').innerHTML = "Dang You Smart!!";
}
else if(counter == 2) {
	document.getElementById('spaces').innerHTML = "Awesome.";
}
else{
	document.getElementById('spaces').innerHTML = "Good Job."
}
}

		if(generate[ii] == y){
			Space[ii] = y;
var j = Space.toString();
var pp = j.replace(/\d/g,'_');
var c = pp.replace(/,/g, ' ');
document.getElementById('spaces').innerHTML = c;
var rr = c.replace(/\W+/g,"");
//alert(rr);
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
	//sort.push(s);
    //sort.sort(function(a,b){
    	//return a-b});
	//document.getElementById('correct').innerHTML = sort + " ";
}
	else{
	 if(wrong.includes(y)){
	 	return false;
	 }else
     wrong.push(y);
     document.getElementById('w').innerHTML = "";
     document.getElementById('w').innerHTML = wrong;
counter--;

document.getElementById('counter').innerHTML = counter + ' Strikes Left!!!';
if(counter == 1){
document.getElementById('counter').innerHTML = counter + ' Strike Left!!!';
}
if(counter == 0){
document.getElementById('counter').innerHTML = "You Lose!";
if(generate.length < 8 && generate.length !== 7 ){
document.getElementById('spaces').innerHTML = "Try Again Loser";	
}else if(generate.length == 7 || generate.length == 9){
document.getElementById('spaces').innerHTML = "Just Stop Playing Bro."
}else{
document.getElementById('spaces').innerHTML = "You Suck";
}
}
}
document.getElementById('letter').value = "";
}
}

