'use strict';

const userBirthDay = '2007/1/1';

const checkBirthday = (date) => {
    if (Number(date.split('/')[2]) <= 0 || Number(date.split('/')[2]) >= 32 || !Number(date.split('/')[2])) return 'Вы ввели некорректный день';
    if (Number(date.split('/')[1]) <= 0 || Number(date.split('/')[1]) >= 13 || !Number(date.split('/')[1])) return 'Вы ввели некорректный месяц';

    const birthDay = new Date(date);
    const now = new Date();
    const AGE_OF_MAJORITY = 18;
    
    const age = now.getFullYear() - birthDay.getFullYear();

    if (age < AGE_OF_MAJORITY) return 'Нужно дорасти немного';
    if (age === AGE_OF_MAJORITY) {
        if (now.getMonth() < birthDay.getMonth()) return 'Нужно дорасти немного';
        if ((now.getMonth() === birthDay.getMonth()) && (now.getDate() < birthDay.getDate())) return 'Нужно дорасти немного';
    }
    return 'Ооо. Вы большой мальчик';
}
console.log(checkBirthday(userBirthDay));