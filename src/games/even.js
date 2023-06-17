import startGame from '../index.js';
import { getRandom } from '../utils.js';

// описание задания:
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// вычисление правильного ответа
const getCorrect = (number) => (number % 2 === 0 ? 'yes' : 'no');

// данные для вопроса:
const getAnswer = () => {
  const question = getRandom(1, 100);
  const correctAnswer = getCorrect(question);
  return { question, correctAnswer };
};

const startEven = () => startGame(description, getAnswer);

export default startEven;
