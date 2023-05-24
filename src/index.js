import readlineSync from 'readline-sync';

const startGame = (rule, game) => {
  let playerName;
  const getName = () => {
    console.log('Welcome to the Brain Games!');
    playerName = readlineSync.question('May I have your name? ');
  };

  getName();
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
      break;
    }
    console.log('Correct!');
    count += 1;
  }
  if (count === 3) {
    return console.log(`Congratulations, ${playerName}!`);
  }
  return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${dataForRound.correctAnswer}'. \nLet's try again, ${playerName}!`);
};

export default startGame;
