/**
 * Created by Tolstenko Alexander on 12.12.2019.
 */

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default (min=0, max=100) => getRandomInt(min,max);