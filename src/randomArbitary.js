#!C:/nodejs/node

/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

const getRandomInt = (min,max) => Math.floor(Math.random() * (max - min)) + min;

export default (min,max) => getRandomInt(min,max);