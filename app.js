'use strict';

const userBirthDay = '2007/1/1';

const checkBirthday = (date) => {
    if (Number(date.split('/')[2]) <= 0 || Number(date.split('/')[2]) >= 32 || !Number(date.split('/')[2])) return 'Вы ввели некорректный день';
    if (Number(date.split('/')[1]) <= 0 || Number(date.split('/')[1]) >= 13 || !Number(date.split('/')[1])) return 'Вы ввели некорректный месяц';

    const birthDay = new Date(date);
    const now = new Date();
    const AGE_OF_MAJORITY = 18;
    
    const age = now.getFullYear() - birthDay.getFullYear();

    if (age < AGE_OF_MAJORITY) return 'Нужно дорасти немного';
    if (age === AGE_OF_MAJORITY) {
        if (now.getMonth() < birthDay.getMonth()) return 'Нужно дорасти немного';
        if ((now.getMonth() === birthDay.getMonth()) && (now.getDate() < birthDay.getDate())) return 'Нужно дорасти немного';
    }
    return 'Ооо. Вы большой мальчик';
}
console.log(checkBirthday(userBirthDay));

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
        'd16': 16,
        'd20': 20,
    };

    if (!diceVariants[dice]) return "Вы ошиблись с кубиком";

    return `Кинул кубик ${dice} и выкинул ${makeItRandom(1, diceVariants[dice])}`;
}

console.log(throwDice('d4'));

const data = [
    {
        id: 1,
        name: 'Вася',
    },
    {
        id: 2,
        name: 'Петр',
    },
    {
        id: 1,
        name: 'Вася',
    },
    {
        id: 1,
        name: 'Вася',
    },
    {
        id: 3,
        name: 'Эмануил',
    },
    {
        id: 4,
        name: 'Веспуччи',
    },
];

const makeUnique = (array) => {
    let modifiedArray = [];
    array.map(item => {
        if (!modifiedArray.find(({ id }) => id === item.id)) {
            modifiedArray.push(item);
        }
    });
    return modifiedArray;
}

console.log(makeUnique(data));
