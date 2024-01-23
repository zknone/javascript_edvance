'use strict';

const userBirthDay = '2005/1/12';

const checkBirthday = (date) => {
    if (!date.split('/')[2]) return false;

    const birthDay = new Date(date);
    const now = new Date();
    const AGE_OF_MAJORITY = 18;
    
    const age = now.getFullYear() - birthDay.getFullYear();

    if (age < AGE_OF_MAJORITY) return false;
    if (age === AGE_OF_MAJORITY) {
        if (now.getMonth() < birthDay.getMonth()) return false;
        if ((now.getMonth() === birthDay.getMonth()) && (now.getDate() > birthDay.getDate())) return true;
    }
    return true;
}
console.log(checkBirthday(userBirthDay));