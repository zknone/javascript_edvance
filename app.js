'use strict';

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