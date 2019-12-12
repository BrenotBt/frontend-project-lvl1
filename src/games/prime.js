#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import exec from '..';
import random from '../random';
import { cons, car, cdr } from '@hexlet/pairs';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxInt = 100;


const getGameData = () => {
    const question = random(maxInt);
    let answer = 'no';
    if(question < 3)
        answer = 'yes';
    for(let i=3; i<question; i += 2){
        if(question%i === 0){
            break;
        }
    }

    return cons(question, answer);
}

export default () => exec(task, getGameData);