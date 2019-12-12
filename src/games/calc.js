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
const operatorCount = 3;

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

const getAnswer = (piont1,piont2,operator) => {
    switch (operator) {
        case "+":
            return piont1 + piont2;
        case "-":
            return piont1 - piont2;
        case "*":
            return piont1 * piont2;
        default: break;
    }
    return null;
}

const getGameData = () => {
    const piont1 = random(maxInt);
    const piont2 = random(maxInt);
    const operator = getOperator(random(operatorCount));

    const question = `${piont1} ${operator} ${piont2}`;
    const answer = getAnswer(piont1,piont2,operator);

    return cons(question, String(answer));
}

export default () => exec(task, getGameData);