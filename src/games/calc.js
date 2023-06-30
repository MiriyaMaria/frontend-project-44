import startGame from '../index.js';
import getRandom from '../utils.js';

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
      return 0;
  }
};
// данные для вопроса:

const getAnswer = () => {
  const operators = ['+', '-', '*'];
  const operand1 = getRandom(1, 20);
  const operator = operators[getRandom(0, 2)];
  const operand2 = getRandom(1, 20);
  const question = `${operand1}${operator}${operand2}`;
  const correctAnswer = String(doMath(operand1, operator, operand2));
  return { question, correctAnswer };
};

const startCalc = () => startGame(description, getAnswer);

export default startCalc;
