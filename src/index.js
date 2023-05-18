import readlineSync from 'readline-sync';
import { getRandom } from './utils.js';

export let playerName;

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
};

let playerAnswer;
let correctAnswer;

export const getAnswer = () => {
  const randomNumber = getRandom(1, 100);
  console.log(`Question: ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');
  correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  getName();
  console.log(`Hello, ${playerName}!`);
  console.log(`${rule}`);
  let count = 0;
  for (; count < 3;) {
    getAnswer();
    if (playerAnswer !== correctAnswer) {
      break;
    }
    console.log('Correct!');
    count += 1;
  }
  if (count === 3) {
    return console.log(`Congratulations, ${playerName}!`);
  }
  return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${playerName}!`);
};

export default startGame;
