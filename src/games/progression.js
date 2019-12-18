/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

import { cons } from '@hexlet/pairs';
import exec from '..';
import random from '../random';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestion = (startValue, step, hiddenElementIndex) => {
  const iter = (start, question, limit) => {
    if (limit === progressionLength) {
      return question;
    }

    if (limit === hiddenElementIndex) {
      return iter(start + step, `${question} ..`, limit + 1);
    }

    return iter(start + step, `${question} ${start + step}`, limit + 1);
  };

  return iter(startValue, String(startValue), 1);
};

const getGameData = () => {
  const hiddenElementIndex = random(1, progressionLength - 1);
  const startValue = random();
  const step = random();

  const question = getQuestion(startValue, step, hiddenElementIndex);
  const answer = startValue + step * hiddenElementIndex;

  return cons(question, String(answer));
};

export default () => exec(task, getGameData);
