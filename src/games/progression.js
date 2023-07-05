import startGame from '../index.js';
import getRandomNumber from '../utils.js';

// описание задания:
const description = 'What number is missing in the progression?';

// вычисления для вопроса
const arithmeticSequence = (firstElement, difference, sequenceLength) => {
  const result = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    result.push(firstElement + i * difference);
  }
  return result;
};

// данные для вопроса:
const getQuestionAndCorrectAnswer = () => {
  const startValue = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 5);
  const progressionLength = getRandomNumber(5, 10);
  const dataForQuestion = arithmeticSequence(startValue, progressionStep, progressionLength);

  const indexOfHiddenElement = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(dataForQuestion[indexOfHiddenElement]);
  dataForQuestion[indexOfHiddenElement] = '..';
  const question = dataForQuestion.join(' ');
  return { question, correctAnswer };
};

const startProgression = () => startGame(description, getQuestionAndCorrectAnswer);

export default startProgression;
