/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import { cons } from '@hexlet/pairs';
import exec from '..';
import random from '../random';

const task = 'Find the greatest common divisor of given numbers.';

const getAnswer = (value1, value2) => {
  let remainder = 0;
  let result = 0;
  if (value1 >= value2) {
    remainder = value1 % value2;
    if (remainder === 0) {
      result = value2;
      return result;
    }
    return getAnswer(value2, remainder);
  }

  if (value1 <= value2) {
    remainder = value2 % value1;
    if (remainder === 0) {
      result = value1;
      return result;
    }
  }
  return getAnswer(value1, remainder);
};

const getGameData = () => {
  const p1 = random();
  const p2 = random();

  const question = `${p1} ${p2}`;
  const answer = getAnswer(p1, p2);

  return cons(question, String(answer));
};

export default () => exec(task, getGameData);
