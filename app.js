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
