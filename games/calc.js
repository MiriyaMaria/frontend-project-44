import startGame from '../src/index.js';
import { getRandom, randomElement } from '../src/utils.js';

// описание задания:
const description = 'What is the result of the expression?';

// вычисление правильного ответа
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
// данные для вопроса:

const getAnswer = () => {
  const operators = ['+', '-', '*'];
  const question = getRandom(1, 20) + randomElement(operators) + getRandom(1, 20);
  const correctAnswer = String(doMath(question));
  return { question, correctAnswer };
};

const startCalc = () => startGame(description, getAnswer);

export default startCalc;
