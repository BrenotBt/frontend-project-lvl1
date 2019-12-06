#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 05.12.2019.
 */

import hello from '..';
import readlineSync from 'readline-sync';
import random from '../random';
import iseven from '../iseven';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const ask = (attempt, Name) => {
    const val = random(1000);
    console.log("Question: "+val);
    const answer = readlineSync.question("Your answer: ");
    const res = iseven(val);
    if((answer === 'yes' && res)  || (answer === 'no' && !res)){
        console.log("Correct!");
        attempt++;
        if(attempt === 3)
            console.log("Congratulations, " + Name + "!")
        else
            ask(attempt, Name);
    }else{
        console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + (res ? 'yes': 'no') + "'.");
        console.log("Let's try again, " + Name + "!");
        ask(0, Name);
    }
}

export default () =>
{
    const Name = hello(task);
    ask(0, Name);
}