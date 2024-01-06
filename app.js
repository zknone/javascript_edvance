'use strict';

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
