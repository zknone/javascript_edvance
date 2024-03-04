'use strict';

class Billing {
    #amount;
    constructor(amount){
        this.#amount = amount;
    }

    add (amount) {
        this.#amount += amount;
        return this;
    }

    get () {
        return this.#amount;
    }

    calculateTotal(){
        console.log(this.get());
    }
}

class fixBilling extends Billing{
    constructor (amount) {
        super(amount);
}

    calculateTotal(){
        return this.get();
    }
    
}

class HourBilling extends Billing{
    #hours;
    #surplusWork = 0;
    constructor (amount, hours) {
        super(amount);
        this.#hours = hours;
    }

    add (additionalPrice, additionalHours) {
        this.#surplusWork += additionalPrice * additionalHours;
        return this;
    }

    calculateTotal(){
        return (this.get() * this.#hours) + this.#surplusWork;
    }
    
}
      
class ItemBilling extends Billing{
    #items;
    #surplusGoods = 0;
    constructor (amount, items) {
        super(amount);
        this.#items = items;
    }

    add (additionalPrice, additionalItems) {
        this.#surplusGoods += additionalPrice * additionalItems;
        return this;
    }

    calculateTotal(){
        return (this.get() * this.#items) + this.#surplusGoods;
    }
}


const firstBill = new Billing(100);
firstBill.add(10).add(12);
firstBill.calculateTotal();

const secondBill = new fixBilling(200).add(12).add(13);
console.log(secondBill.calculateTotal());

const thirdBill = new HourBilling(5, 5).add(12, 1).add(1, 3);
console.log(thirdBill.calculateTotal());

const fourthBill = new ItemBilling(13, 5).add(2, 1).add(1, 3);
console.log(fourthBill.calculateTotal());


class Car {
    #_mark;
    #_model;
    #_mileage;

    constructor(mark, model, mileage){
        this.#mark = mark;
        this.#model = model;
        this.#mileage = mileage;
    }

    set #mark (mark) {
        this.#_mark = mark;
    }

    set #model (model) {
        this.#_model = model;
    }

    set #mileage (mileage) {
        this.#_mileage = mileage;
    }

    get #mark () {
        return this.#_mark;
    }

    get #mileage () {
        return this.#_mileage;
    }

    get #model () {
        return this.#_model;
    }


    changeMiliage(newValue) {
        if (newValue > 0 && newValue !== this.#mileage){
            this.#mileage = newValue;
        }
    }

    info() {
        console.log(`Mark: ${this.#mark}, Model: ${this.#model}, Mileage: ${this.#mileage}`);
    }
}

const toyota = new Car('Toyota', 'vista', 10000);
toyota.info();

toyota.changeMiliage(12000);
toyota.info();

console.log(toyota);

class Person {
    #race;
    #name;
    #lang;

    constructor(race, name, lang){
        this.#name = name;
        this.#race = race;
        this.#lang = lang;
    }

    setRace(race) {
        this.#race = race;
    }

    get() {
        return this.#name;
    }

    speak () {
        console.log('I am human and I can speak!');
    }
};

class Orc extends Person {
    constructor (name, lang) {
        super(name, lang);
        this.setRace('Orc');
        this.hasWeapon = true;
    }

    hit (hasWeapon) {
        hasWeapon?  console.log('Arrggh! Hit human') : console.log('Sorry! I lost my weapon');
    }

    speak () {
        console.log('I am orc and I crush!');
    }
}   

class Elf extends Person {
    constructor(name, lang) {
        super(name, lang);
        this.setRace('Elf');
        this.spellTypes = ['fireball', 'ice shard'];
    }

    castSpell(spell) {
        this.spellTypes.find((item) => {if (item === spell) {
            console.log(`I cast ${item}!`)
        }})
    }

    speak() {
        console.log('I am elf and I collect cats!');
    }
}

const Legolas = new Elf('Legolas', 'elvish');
console.log(Legolas);
Legolas.castSpell('fireball');

const Urgoth = new Orc('Urgoth', 'orcish');
console.log(Urgoth);
Urgoth.hit(!Urgoth.hasWeapon);

const Boromir = new Person('human', 'Boromir', 'human');
Boromir.speak();
Urgoth.speak();
Legolas.speak();


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

console.log(makeUnique(data));


const address = 'https://pokeapi.co/api/v2/pokemon/ditto';

async function fetchData(address, errorText) {
    try {
        const response = await fetch(address);

        if (!response.ok) {
            console.log(errorText)
        };

        return await response.json();

    } catch (error) {
        console.log(errorText)
    }
}

fetchData(address, 'Something went wrong').then((data) => {
    const { abilities } = data;
    const abilityUrl = abilities[0].ability.url;

    fetchData(abilityUrl, 'Can not fetch ability').then((data) => {
        const {flavor_text_entries: textEntries} = data;

        const {flavor_text: text} = textEntries.find(item => item.language.name === 'en');
        console.log(text);
    })
})

const getPosition = () => {
    return new Promise((resolve, reject)=> {
        navigator.geolocation.getCurrentPosition((position) => {
            if (!position.coords) {
                reject (new Error('cant check'))
            };

            resolve (position.coords);
        }
    )}
)}

getPosition().then((data) => console.log(data)).catch((error) => console.log(error));
