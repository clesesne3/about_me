'use strict';

// create & initialize variable to track user points
var userPoints = 0;

// greet user and ask for their name
var user = prompt('Welcome to my profile! What\'s your name?');
console.log('The user\'s name is ' + user);
alert('Hi, ' + user + '! I\'m glad you\'re here to checkout my page!');

// ask if user wants to play guessing game
var startGame = prompt('If you\'re interested in learning more about me, how about a quick game? (Yes or No)').toLowerCase();
console.log(user + 'answered ' + startGame);
if (startGame === 'yes') {
  alert('Awesome, ' + user + '! Let\'s get started!');
}
else {
  alert('Sorry to hear that ' + user + '. But, unfortunately, you still have to play...enjoy :-)');
}
/*
// Question #1 - Where was I born?
var answer1 = prompt('Alright ' + user + ', first question: Was I born in Washington, DC? (Yes or No)').toLowerCase();
console.log(user + ' answered ' + answer1 + ' for Question 1');
if (answer1 === 'yes') {
  userPoints ++;
  alert('That\'s right, ' + user + '! You now have ' + userPoints + ' point.');
}
else {
  alert('Oooh, sorry ' + user + ', that\'s incorrect! You still have ' + userPoints + ' points, but keep going!');
}

// Question #2 - How many countries/places have I visited?
var answer2 = prompt('Okay, second question ' + user + '. Have I traveled to more than 10 countries? (Yes or No)').toLowerCase();
console.log(user + ' answered ' + answer2 + ' for Question 2');
if (answer2 === 'yes') {
  userPoints ++;
  alert('Correct, ' + user + '! I\'ve been to 15 different countries! You now have ' + userPoints + ' points. Keep it up!');
}
else {
  alert('Nope! That\'s incorrect! You currently have ' + userPoints + ' points, but don\'t give up now ' + user + '!');
}

// Question #3 - My favorite food?
var answer3 = prompt('Third question for you ' + user + ': Are "tacos" my favorite food ? (Yes or No)').toLowerCase();
console.log(user + ' answered ' + answer3 + ' for Question 3');
if (answer3 === 'yes') {
  alert('Although tacos are great ' + user + ', unfortunately, they\'re not my favorite! You have ' + userPoints + ' points.');
}
else {
  userPoints++;
  alert('Guess there\'s no stumping you, huh ' + user + '? Spaghetti is my favorite, and you now have ' + userPoints + ' points.');
}

// Question #4 - What is my professional background?
var answer4 = prompt('You made it to the fourth question ' + user + '...you\'re doing great. Now, would you bet on me being an aerospace engineer? (Yes or No)' ).toLowerCase();
console.log(user + ' answered ' + answer4 + ' for Question 4');
if (answer4 === 'yes') {
  userPoints ++;
  alert('You got it, ' + user + '! Thanks for believing in me...you\'ve got ' + userPoints + ' points!');
}
else {
  alert('Aww, c\'mon ' + user + '! Why didn\'t you bet on me?!...Points: ' + userPoints);
}

// Question #5 - Fun or inconspicuous fact about me
var answer5 = prompt('Hey ' + user + '! Did I ever play keyboard in a band? (Yes or No)').toLowerCase();
console.log(user + ' answered ' + answer5 + ' for Question 5');
if (answer5 === 'yes') {
  userPoints++;
  alert('That\'s right ' + user + '! Nice job! You currently have ' + userPoints + ' points.');
}
else {
  alert('Sorry ' + user + ', that\'s wrong. Great try though! You scored a total of ' + userPoints + ' points.');
}*/

//Question #6 - Guess the number I am thinking of!(Generate random number; user will have four attempts)
var guessNum = Math.floor((Math.random() * 10) + 1); // creates random integer between 1 and 10 inclusively
var answer6 = prompt('Okay ' + user + ', I\'m thinking of a number between 1 and 10...can you guess which number? (Enter integer between 1 and 10)');
console.log(user + ' answered ' + answer6 + ' for Question 6');
var numTries = 0; //initialize counter for number of user guesses
var maxTries = 4;
if (answer6 === guessNum) {
  userPoints++;
  alert('Wow! Way to go, ' + user + '! You read my mind! You have ' + userPoints + ' points.');
}
else if (Number.isInteger(answer6) === false) {
  alert('You have to enter an integer!');
  answer6 = prompt('Number between 1 and 20? (Enter integer between 1 and 20):');
}
else {
  while (numTries < 3) {
    numTries++;
    var remainingTries = maxTries - numTries;
    alert('Nope, guess again ' + user + '! You still have ' + remainingTries + ' left.');
    answer6 = prompt('Number between 1 and 10? (Enter integer between 1 and 10):\n Tries left: ' + remainingTries);
  }
  alert('Don\'t beat yourself up about it, ' + user + ' :-) On to the final question!');
}

//Question #7 - Guess one of my favorite countries to visit
var answer7 = prompt('You\'ve made it to the final question, ' + user + '. Ready? Can you guess one of the many countries I\'ve explored? (Don\'t forget, countries are proper nouns...be sure to capitalize that first letter!)');
console.log(user + ' answered ' + answer7 + ' for Question 7');
var countryArray = ['South Africa', 'China', 'Jamaica', 'Dubai', 'France', 'Germany', 'England', 'Luxembourg'];
var numAttempts = 0; // initialize counter for number of user guesses
var maxAttempts = 6; // maximum number of user guesses
var guessCorrect = false;

while(numAttempts < 5) {
  // loop through array of countries to check user's answer against all array items
  for (var i = 0; i < countryArray.length; i++) {
    if (answer7 === countryArray[i]) {
      userPoints++;
      alert('Awesome, you got it, ' + user + '! ' + answer7 + ' is an amazing place!');
      alert('You scored ' + userPoints + ' out of 7 points, ' + user + '!');
      guessCorrect = true; //Boolean value to confirm correct user guess
      break; // break out of for loop if user guesses correctly
    }

    else {
      guessCorrect = false;
      continue;
    }
  }

  // break out of while loop if user guesses correctly
  if (guessCorrect === true) {
    break;
  }

  // give user 5 more attempts if initial guess is incorrect
  else {
    numAttempts++;
    var remainingAttempts = maxAttempts - numAttempts;
    alert('Nope, great place, but that one wasn\'t on the list. Try again!');
    answer7 = prompt('Guess another country: \n Tries Left: ' + remainingAttempts);
  }
}

// thank user; end guessing game
alert('Thanks for playing and visiting my page ' + user + '!');
