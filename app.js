'use strict';

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