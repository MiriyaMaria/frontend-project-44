import startGame from '../src/index.js';
import { getRandom } from '../src/utils.js';

// описание задания:
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// вычисление правильного ответа
const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number !== 2) {
      return false;
    }
  }
  return true;
};

// данные для вопроса:
const getAnswer = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const startPrime = () => startGame(description, getAnswer);

export default startPrime;
