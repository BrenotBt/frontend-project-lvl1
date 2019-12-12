#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import exec from '..';
import random from '../randomArbitary';
import iseven from '../iseven';
import { cons, car, cdr } from '@hexlet/pairs';

const task = 'What number is missing in the progression?';
const maxInt = 10;


const getGameData = () => {
    let start = random(0,maxInt);
    const ind = random(2,maxInt);
    const len = random(10,20);
    const qind = random(2,len-1);

    let q = [];
    let answer = '';
    for(let i=0; i<len; i++){
        if(qind === i) {
            answer = String(start);
            q.push('..');
        }else{
            q.push(String(start));
        }
        start += ind;
    }

    return cons(q.join(' '), answer);
}

export default () => exec(task, getGameData);