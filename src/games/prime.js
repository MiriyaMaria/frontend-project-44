import startGame from '../index.js';
import getRandomNumber from '../utils.js';

// описание задания:
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// вычисление правильного ответа
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// данные для вопроса:
const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const startPrime = () => startGame(description, getQuestionAndCorrectAnswer);

export default startPrime;
