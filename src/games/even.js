import startGame from '../index.js';
import getRandomNumber from '../utils.js';

// описание задания:
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// вычисление правильного ответа
const isEven = (number) => (number % 2 === 0);

// данные для вопроса:
const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const startEven = () => startGame(description, getQuestionAndCorrectAnswer);

export default startEven;
