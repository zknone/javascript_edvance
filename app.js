'use strict';

const makeItRandom = (min, max) => {
    return Math.floor(min + Math.random().toFixed(2)*(max - min + 1))
}

const throwDice = (dice) => {
    const diceVariants = {
        'd4': 4,
        'd6': 6,
        'd8': 8,
        'd10': 10,
        'd12': 12,
        'd20': 20,
    };

    return `Кинул кубик ${dice} и выкинул ${makeItRandom(1, diceVariants[dice])}`;
}

console.log(throwDice('d12'));