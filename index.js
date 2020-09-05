// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * "Persistence of the data"-Nathan Brown (instructor)
 *    2 declares outside the function. The function has access to it. A Higher-Order function is a function that receives a function as an argument or returns the function as output.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 *    Counter1 has a function inside a function which i think is closure. It has an outer function that is being called by an inner function.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
//
 *    1 is better when we dont want our variable to be effected by outside. It is reuseable. Not sure how to describe 2.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning()

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
console.log(":   :  : :::[TASK 2]::: :  :   :")
function inning(){  // I DONT GET EXACTLY WHY IM NOT USING A PARAM
  let points = 0;  // Could I do this so it will add with each repeat but clear if i ask it to?
    points = Math.floor(Math.random()*3);
    return points;
}
console.log('rndScore1: ',inning())
console.log('rndScore2: ',inning())
console.log('rndScore3: ',inning())
console.log('rndScore4: ',inning())
console.log('rndScore5: ',inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example,
finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}
*/
console.log(":   :  : :::[TASK 3]::: :  :   :")

// function finalScore(inning,numOfInnings){
//   let awayTeam = 0;
//   let homeTeam = 0;
//     for (let i = 0; i < numOfInnings; i++) {
//       homeTeam = homeTeam + inning();
//       awayTeam = awayTeam + inning();}
//   return {"Home" : homeTeam,
//           "Away" : awayTeam}
//}
// console.log(finalScore(inning,9));

function finalScore(inning, inningNum){
  let home = 0;
  let away = 0;
  for(let i = 0; i < inningNum; i++){
    home  = home  + inning();
    away  = away  + inning();}
    return {Home: home,
            Away: away}
}
console.log(finalScore(inning,9));

/* Task 4:
Create a function called `scoreboard` that accepts the following parameters:
(1) Callback function `getInningScore`
(2) Callback function `inning` that you wrote above
(3) A number of innings
and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
...
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
console.log(":   :  : :::[TASK 4]::: :  :   :")

//getInningScore
// it will take 1 param: inning
// inning takes in max score

// function getInningScore(cb) {
//   const home = 0;
//   const away = 0;

//   return {
//     home: home += cb(3),
//     away: away += cb(3)
//   };
// }

// console.log(getInningScore(inning));

// scoreboard(getInningScore, inning, numInnings) {
//   // code
//   getInningScore(inning);
// }


function scoreboard(inning,numberInnings) {
  let score = {
    'Home': 0,
    'Away': 0,}
  for (let i=0; i<numberInnings; i++){
    score.Home += inning();
    score.Away += inning();
function suffix(){  // I can do as a variable?
  if(i===1){
    return"st"
  }else if (i===2){
    return"nd"
  }else if (i===3){
    return"rd"
  }else {
    return"th"
  }
}
    console.log(`${i+1}${suffix()} inning: ${score.Home} - ${score.Away}`);
  }
  console.log(`Final Score: ${score.Home} - ${score.Away}`);
}
scoreboard(inning, 9);