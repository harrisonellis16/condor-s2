
import Math from 'react';

export const logicService = {
    newRandom
}

function newRandom() {
    var precision = 100;

    var randomNum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);  

    return randomNum;
}


