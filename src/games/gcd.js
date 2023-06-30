import startGame from '../index.js';
import getRandom from '../utils.js';

// описание задания:
const description = 'Find the greatest common divisor of given numbers.';

// вычисление правильного ответа
const getCorrect = (num1, num2) => {
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
const getAnswer = () => {
  const a = getRandom(1, 50);
  const b = getRandom(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = String(getCorrect(a, b));
  return { question, correctAnswer };
};

const startGCD = () => startGame(description, getAnswer);

export default startGCD;
