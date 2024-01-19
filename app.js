'use strict';

const userBirthDay = '2006/1/30';

const checkBirthday = (date) => {
    const birthDay = new Date(date);
    const now = new Date();
    const AGE_OF_MAJORITY = 18;
    
    const age = now.getFullYear() - birthDay.getFullYear();

    if (age < AGE_OF_MAJORITY) return false;
    if (age === AGE_OF_MAJORITY) {
        if (now.getMonth() < birthDay.getMonth()) return false;
        if ((now.getMonth() === birthDay.getMonth()) && (now.getDay() > birthDay.getDay())) return true;
    }
    return false;
}

console.log(checkBirthday(userBirthDay));