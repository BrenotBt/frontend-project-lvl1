#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import exec from '..';
import random from '../random';
import { cons, car, cdr } from '@hexlet/pairs';

const task = 'Find the greatest common divisor of given numbers.';
const maxInt = 1000;

const getAnswer = (p1,p2) =>  {
    while (p1 && p2) {
        p1 > p2 ? p1 %= p2 : p2 %= p1;
    }
    p1 += p2;
    return p1;
}

const getGameData = () => {
    const p1 = random(maxInt);
    const p2 = random(maxInt);

    const question = `${p1} ${p2}`;
    const answer = getAnswer(p1,p2);

    return cons(question, String(answer));
}

export default () => exec(task, getGameData);