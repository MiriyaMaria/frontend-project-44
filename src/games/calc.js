import startGame from '../index.js';
import getRandomNumber from '../utils.js';

// описание задания:
const description = 'What is the result of the expression?';

// вычисление правильного ответа
const doMath = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};
// данные для вопроса:

const getQuestionAndCorrectAnswer = () => {
  const operators = ['+', '-', '*'];
  const operand1 = getRandomNumber(1, 20);
  const operator = operators[getRandomNumber(0, 2)];
  const operand2 = getRandomNumber(1, 20);
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(doMath(operand1, operator, operand2));
  return { question, correctAnswer };
};

const startCalc = () => startGame(description, getQuestionAndCorrectAnswer);

export default startCalc;
