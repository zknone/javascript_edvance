'use strict';

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });

const race = (array) => Promise.race(array).then((value) => console.log(value)).catch((error) => console.log('Rejected :', error));

async function app() {
    race([promise1, promise2]);
}

app();
