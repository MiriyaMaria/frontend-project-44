import readlineSync from 'readline-sync';

const startGame = (rule, game) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(`${rule}`);
  let playerAnswer;
  let dataForRound;
  let count = 0;
  for (; count < 3;) {
    dataForRound = game();
    console.log(`Question: ${dataForRound.question}`); // Задаем вопрос
    playerAnswer = readlineSync.question('Your answer: '); // Записываем ответ пользователя
    if (playerAnswer !== dataForRound.correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${dataForRound.correctAnswer}'. \nLet's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default startGame;
