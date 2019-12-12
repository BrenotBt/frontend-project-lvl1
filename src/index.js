#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 05.12.2019.
 */

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
const firstRound = 1;

export default (task, generateGameData) =>
{
    console.log('Welcome to the Brain Games!')
    if(task !== undefined)
        console.log(task);
    console.log();

    const askName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${askName}!`);
    console.log();

    const step = (ind) =>
    {
        if (ind > roundsCount) {
            console.log(`Congratulations, ${askName}!`);
            return;
        }

        const gameData = generateGameData();
        const question = car(gameData);
        const answer = cdr(gameData);

        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');
        if (answer !== userAnswer) {
            console.log(`${askName} is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${askName}`);
            return step(firstRound);
        }

        console.log('Correct!');
        step(ind + 1);
    }

    return step(firstRound);
}