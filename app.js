'use strict';

const race = (array) => Promise.race(array).then((value) => console.log(value)).catch((error) => console.log('Rejected :', error));

async function app() {
    race([promise1, promise2]);
}

app();
