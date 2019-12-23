/**
 * Created by Tolstenko Alexander on 05.12.2019.
 */

import { cons } from '@hexlet/pairs';
import exec from '..';
import random from '../random';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => value % 2 === 0;

const getGameData = () => {
  const question = random();
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => exec(task, getGameData);
