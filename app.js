'use strict';

// create & initialize variable to track user points
var userPoints = 0;

// greet user and ask for their name
var user = prompt('Welcome to my profile! What\'s your name?');
console.log('The user\'s name is ' + user);
alert('Hi, ' + user + '. Thanks for checking out my page.');

// ask if user wants to play guessing game
var startGame = prompt('Interested in learning more about me? How about a quick game? (Yes or No)').toLowerCase();
console.log(user + 'answered ' + startGame);
if (startGame === 'y') {
  alert('Awesome, ' + user + '! Let\'s get started!');
}
else {
  alert('Sorry to hear that, ' + user + '! But, unfortunately, you still have to play...enjoy :-)');
}

// Question #1 - Where was I born?
var answer1 = prompt('Alright ' + user + ', first question: Was I born in Washington, DC? (Yes or No)').toLowerCase();
console.log(user + 'answered ' + answer1);
if (answer1 === 'yes') {
  userPoints += 1;
  alert('That\'s right, ' + user + '! You now have ' + userPoints + ' point.');
}
else {
  alert('Oooh, sorry ' + user + ', that\'s incorrect! You still have ' + userPoints + ' points, but keep going!');
}

// Question #2 - What college did I attend?
var answer2 = prompt('Second question, ' + user + '. Did I attend Morehouse College for undergrad? (Yes or No)').toLowerCase();
// Question #3 -

// Question #4 -

// Question #5 -
