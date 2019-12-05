#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 05.12.2019.
 */

import readlineSync from 'readline-sync';

export default () =>
{
    console.log('Welcome to the Brain Games!')
    console.log();
    const askName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + askName + '!');
}