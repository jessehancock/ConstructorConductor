/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


var Tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var Cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var Lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
var Jesse = new User('Jesse', 'jhancock@gmail.com', 'WOWZ');

users.push(Tyler);
users.push(Cahlan);
users.push(Lenny);
users.push(Jesse);


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

	

	console.log('Tyler\'s information is ' + Tyler.name + Tyler.email + Tyler.pw);
//Console.log all of Tylers information

  

console.log('Cahlan\'s information is '+ Cahlan.name + Cahlan.email + Cahlan.pw);
//Now console.log all of Cahlans information



console.log('Lenny\'s information is '+ Lenny.name + Lenny.email + Lenny.pw);

//Now create another instance of User using your own information and then add that to your users array.


console.log('Lenny\'s information is '+ Jesse.name + Jesse.email + Jesse.pw);
  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
for(var i = 0; i< users.length; i++){
	console.log(users[i].name);
}
