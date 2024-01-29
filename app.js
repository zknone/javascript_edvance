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