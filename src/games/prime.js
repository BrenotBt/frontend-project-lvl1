/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import exec from '..';
import random from '../random';
import { cons, car, cdr } from '@hexlet/pairs';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
    if (value < 2) return false;

    const iter = (num) => {
        if (num > value / 2) {
            return true;
        }

        if (value % num === 0) {
            return false;
        }

        return iter(num + 1);
    };
    return iter(2);
};

const getGameData = () => {
    const question = random();
    const answer = isPrime(question) ? 'yes' : 'no';
    return cons(question, answer);
}

export default () => exec(task, getGameData);