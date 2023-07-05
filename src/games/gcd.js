import startGame from '../index.js';
import getRandomNumber from '../utils.js';

// описание задания:
const description = 'Find the greatest common divisor of given numbers.';

// вычисление правильного ответа
const getCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

// данные для вопроса:
const getQuestionAndCorrectAnswer = () => {
  const a = getRandomNumber(1, 50);
  const b = getRandomNumber(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = String(getCommonDivisor(a, b));
  return { question, correctAnswer };
};

const startGCD = () => startGame(description, getQuestionAndCorrectAnswer);

export default startGCD;
