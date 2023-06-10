import startGame from '../src/index.js';
import { getRandom, randomElement } from '../src/utils.js';

// описание задания:
const description = 'What is the result of the expression?';

// вычисление правильного ответа
const doMath = (str) => {
  let result;
  const [num1, operation, num2] = str.split(' ');
  switch (operation) {
    case '+':
      result = +num1 + +num2;
      break;
    case '-':
      result = +num1 - +num2;
      break;
    case '*':
      result = +num1 * +num2;
      break;
    default:
      result = 0;
  }
  return result;
};
// данные для вопроса:

const getAnswer = () => {
  const operators = ['+', '-', '*'];
  const question = `${getRandom(1, 20)} ${randomElement(operators)} ${getRandom(1, 20)}`;
  const correctAnswer = String(doMath(question));
  return { question, correctAnswer };
};

const startCalc = () => startGame(description, getAnswer);

export default startCalc;
