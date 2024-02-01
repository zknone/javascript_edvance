'use strict';


class Enemy {
    #health;
    constructor(health){
        this.#health = health;
    }

    set health(amount) {
        this.#health = amount;
    }

    get health() {
        return this.#health;
    }

    getHit(weapon){
        this.health(this.health() - weapon.power());
    }
}

class Orc extends Enemy {
    constructor(health){
        super(health);
    }
}

const newOrc = new Orc(100);

console.log(newOrc);