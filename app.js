'use strict';

// create & initialize variable to track user points
var userPoints = 0;

// greet user and ask for their name
var user = prompt('Welcome to my profile! What\'s your name?');
console.log('The user\'s name is ' + user);
alert('Hi, ' + user + '! Welcome to my profile page.');

// ask if user wants to play guessing game
var startGame = prompt('Interested in learning more about me? How about a quick game? (Yes or No)').toLowerCase();
console.log(user + 'answered ' + startGame);
if (startGame === 'yes') {
  alert('Awesome, ' + user + '! Let\'s get started!');
}
else {
  alert('Sorry to hear that, ' + user + '! But, unfortunately, you still have to play...enjoy :-)');
}

// Question #1 - Where was I born?
var answer1 = prompt('Alright ' + user + ', first question: Was I born in Washington, DC? (Yes or No)').toLowerCase();
console.log(user + ' answered ' + answer1 + 'for Question 1');
if (answer1 === 'yes') {
  userPoints += 1;
  alert('That\'s right, ' + user + '! You now have ' + userPoints + ' point.');
}
else {
  alert('Oooh, sorry ' + user + ', that\'s incorrect! You still have ' + userPoints + ' points, but keep going!');
}

// Question #2 - How many countries/places have I visited?
var answer2 = prompt('Okay, second question, ' + user + '. Have I traveled to more than 10 countries? (Yes or No)').toLowerCase();
console.log(user + ' answered ' + answer2 + 'for Question 2');
if (answer2 === 'yes') {
  userPoints += 1;
  alert('Correct, ' + user + '! I\'ve been to 15 different countries! You now have ' + userPoints + ' points. Keep it up!');
}
else {
  alert('Nope! That\'s incorrect! You currently have ' + userPoints + ' points, but don\'t give up now, ' + user + '!');
}

// Question #3 - My favorite food?
var answer3 = prompt('Third question for you, ' + user + ': Are "tacos" my favorite food ? (Yes or No)').toLowerCase();
console.log(user + ' answered ' + answer3 + 'for Question 3');
if (answer3 === 'yes') {
  alert('Although tacos are great, ' + user + ', unfortunately they\'re not my favorite! You have ' + userPoints + ' points.');
}
else {
  alert('Guess there\'s no pulling fast one on you, huh' + user + '? Spaghetti is my favorite, and you now have ' + userPoints + ' points.');
}

// Question #4 - What is my professional background?
var answer4 = prompt('You made it to the fourth question, ' + user + ', you\'re doing great. Now, would you bet on me being an aerospace engineer? (Yes or No)' ).toLowerCase();
console.log(user + ' answered ' + answer4 + 'for Question 4');
if (answer4 === 'yes') {
  userPoints += 1;
  alert('You got it, ' + user + '! Thanks for believing in me...you\'ve got ' + userPoints + ' points!');
}
else {
  alert('Aww, c\'mon ' + user + '! Why didn\'t you bet on me?!...Points: ' + userPoints);
}

// Question #5 - Fun/inconspicuous fact about me
