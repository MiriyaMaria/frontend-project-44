import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (rule, getQuestionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(`${rule}`);
  for (let count = 0; count < roundsCount; count += 1) {
    const { question, correctAnswer } = getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`); // Задаем вопрос
    const playerAnswer = readlineSync.question('Your answer: '); // Записываем ответ пользователя
    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
