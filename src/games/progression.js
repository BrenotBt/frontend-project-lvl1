#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import exec from '..';
import random from '../randomArbitary';
import { cons, car, cdr } from '@hexlet/pairs';

const task = 'What number is missing in the progression?';

const minStart = 0;
const maxStart = 10;
const minInd = 2;
const maxInd = 10;
const minLen = 10;
const maxLen = 20;

const getGameData = () => {
    let start = random(minStart,maxStart);
    const ind = random(minInd,maxInd);
    const len = random(minLen,maxLen);
    const qind = random(minInd,len-1);

    let question = [];
    let answer = '';

    for(let i=0; i<len; i++){
        if(qind === i) {
            answer = String(start);
            question.push('..');
        }else{
            question.push(String(start));
        }
        start += ind;
    }

    return cons(question.join(' '), answer);
}

export default () => exec(task, getGameData);