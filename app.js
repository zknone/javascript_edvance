'use strict';

const Person = function(race, name, lang) {
        this.race = race;
        this.name = name;
        this.lang = lang;
    };

Person.prototype.speak = function() {
    console.log('I am human and I can speak!');
}

const Orc = function(name, lang) {
    Person.call(this, name, lang);
    this.name = name;
    this.lang = lang;
    this.race = 'Orc';
    this.hasWeapon = true;
}

Orc.prototype.hit = function(hasWeapon) {
    hasWeapon?  console.log('Arrggh! Hit human') : console.log('Sorry! I lost my weapon');
}

const Elf = function(name, lang) {
    Person.call(this, name, lang);
    this.name = name;
    this.lang = lang;
    this.race = 'Elf';
    this.spellTypes = ['fireball', 'ice shard'];
}

Elf.prototype.castSpell = function(spell) {
    this.spellTypes.find((item) => {if (item === spell) {
        console.log(`I cast ${item}!`)
    }})
};

const Legolas = new Elf('Legolas', 'elvish');
console.log(Legolas);
Legolas.castSpell('fireball');

const Urgoth = new Orc('Urgoth', 'orcish');
console.log(Urgoth);
Urgoth.hit(!Urgoth.hasWeapon);

const Boromir = new Person('human', 'Boromir', 'human');
Boromir.speak();
=======
const monthTime = 30 * 24 * 60 * 60 * 1000;
const dayTime = 24 * 60 * 60 * 1000;
const hourTime = 60 * 60 * 1000;
const minuteTime = 1 * 60 * 1000;

const setNewYearTimer = () => {
    const end = new Date('2024/12/31').getTime();

    const interval = setInterval(()=> {
        const remainingTime = end + 100 - new Date().getTime();
        const adjustedTime = remainingTime - monthTime - dayTime - hourTime - minuteTime;
        const month = 
            new Intl.DateTimeFormat('ru-Ru', {
                month: 'numeric',
            }).format(adjustedTime);
        const days = 
            new Intl.DateTimeFormat('ru-Ru', {
                day: 'numeric',
            }).format(adjustedTime);
        const hours = 
            new Intl.DateTimeFormat('ru-Ru', {
                hour: 'numeric',
            }).format(adjustedTime);
        const minutes = 
            new Intl.DateTimeFormat('ru-Ru', {
                minute: 'numeric',
            }).format(adjustedTime);
        const seconds = 
            new Intl.DateTimeFormat('ru-Ru', {
                second: 'numeric',
            }).format(adjustedTime);
        console.log(`Осталось ${month} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`);
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('Новый год!')
    }, new Date('2024/12/31').getTime()) - new Date + 100;
}

setNewYearTimer();
=======
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
