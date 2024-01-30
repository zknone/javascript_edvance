'use strict';


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