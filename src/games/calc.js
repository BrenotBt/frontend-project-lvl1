/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import { cons, car, cdr } from '@hexlet/pairs';
import exec from '..';
import random from '../random';

const task = 'What is the result of the expression?';
const maxInt = 10;

const getOperators = () => cons('+', cons('-', cons('*', null)));

const getLength = (list) => {
  const iter = (step, ind) => {
    if (cdr(step) === null) {
      return ind;
    }

    return iter(cdr(step), ind + 1);
  };

  return iter(list, 0);
};

const getAnswer = (piont1, piont2, operator) => {
  switch (operator) {
    case '+':
      return piont1 + piont2;
    case '-':
      return piont1 - piont2;
    case '*':
      return piont1 * piont2;
    default: break;
  }
  return null;
};

const getOperator = (list, ind) => {
  const iter = (step, num) => {
    if (ind === num) {
      return car(step);
    }

    return iter(cdr(step), num + 1);
  };
  return iter(list, 0);
};

const getGameData = () => {
  const piont1 = random(0, maxInt);
  const piont2 = random(0, maxInt);

  const operators = getOperators();
  const operatorIndex = random(0, getLength(operators) + 1);
  const operator = getOperator(operators, operatorIndex);

  const question = `${piont1} ${operator} ${piont2}`;
  const answer = getAnswer(piont1, piont2, operator);

  return cons(question, String(answer));
};

export default () => exec(task, getGameData);
