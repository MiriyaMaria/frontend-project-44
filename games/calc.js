import readlineSync from 'readline-sync';
import { getRandom, randomElement } from '../src/utils.js';

const rule = 'What is the result of the expression?';

let playerName;
const getName = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
};

let playerAnswer;
let correctAnswer;

const operators = ['+', '-', '*'];

const doMath = (str) => {
  let result = 0;
  if (str.includes('+')) {
    const operand = str.split('+');
    result = +operand[0] + +operand[1];
  }
  if (str.includes('-')) {
    const operand = str.split('-');
    result = +operand[0] - +operand[1];
  }
  if (str.includes('*')) {
    const operand = str.split('*');
    result = +operand[0] * +operand[1];
  }
  return result;
};

export const getAnswer = () => {
  const randomExpression = getRandom(1, 20) + randomElement(operators) + getRandom(1, 20);
  console.log(`Question: ${randomExpression}`);
  playerAnswer = readlineSync.question('Your answer: ');
  correctAnswer = doMath(randomExpression);
};

const playCalc = () => {
  getName();
  console.log(`Hello, ${playerName}!`);
  console.log(`${rule}`);
  let count = 0;
  for (; count < 3;) {
    getAnswer();
    if (Number(playerAnswer) !== correctAnswer) {
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

export default playCalc;
