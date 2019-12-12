#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import exec from '..';
import random from '../random';
import iseven from '../iseven';
import { cons, car, cdr } from '@hexlet/pairs';

const task = 'What is the result of the expression?';
const maxInt = 10;

const getOperator = (ind) => {
    switch (ind) {
        case 0:
            return "+";
        case 1:
            return "-";
        case 2:
            return "*";
        default: break;
    }
    return null;
}

const getAnswer = (p1,p2,o) => {
    switch (o) {
        case "+":
            return p1 + p2;
        case "-":
            return p1 - p2;
        case "*":
            return p1 * p2;
        default: break;
    }
    return null;
}

const getGameData = () => {
    const p1 = random(maxInt);
    const p2 = random(maxInt);
    const o = getOperator(random(3))

    const question = `${p1} ${o} ${p2}`;
    const answer = getAnswer(p1,p2,o)

    return cons(question, String(answer));
}

export default () => exec(task, getGameData);