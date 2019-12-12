#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 05.12.2019.
 */

import exec from '..';
import random from '../random';
import iseven from '../iseven';
import { cons, car, cdr } from '@hexlet/pairs';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxInt = 1000;

const getGameData = () => {
    const question = random(maxInt);
    if(iseven(question))
        return cons(question, 'yes');
    else
        return cons(question, 'no');
}

export default () => exec(task, getGameData);