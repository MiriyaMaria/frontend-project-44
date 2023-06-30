import startGame from '../index.js';
import getRandom from '../utils.js';

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
const getAnswer = () => {
  const startValue = getRandom(1, 20);
  const progressionStep = getRandom(1, 5);
  const progressionLength = getRandom(5, 10);
  const dataForQuestion = arithmeticSequence(startValue, progressionStep, progressionLength);

  const indexOfHiddenElement = getRandom(0, progressionLength);
  const correctAnswer = String(dataForQuestion[indexOfHiddenElement]);
  dataForQuestion[indexOfHiddenElement] = '..';
  const question = dataForQuestion.join(' ');
  return { question, correctAnswer };
};

const startProgression = () => startGame(description, getAnswer);

export default startProgression;
