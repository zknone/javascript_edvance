'use strict';

const monthTime = 30 * 24 * 60 * 60 * 1000;
const dayTime = 24 * 60 * 60 * 1000;
const hourTime = 60 * 60 * 1000;
const minuteTime = 1 * 60 * 1000;

const setNewYearTimer = () => {
    const end = new Date('2024/12/31').getTime();

    const interval = setInterval(()=> {
        const remainingTime = end + 100 - new Date().getTime();
        const adjustedTime = remainingTime - monthTime - dayTime - hourTime - minuteTime;
        const month = 
            new Intl.DateTimeFormat('ru-Ru', {
                month: 'numeric',
            }).format(adjustedTime);
        const days = 
            new Intl.DateTimeFormat('ru-Ru', {
                day: 'numeric',
            }).format(adjustedTime);
        const hours = 
            new Intl.DateTimeFormat('ru-Ru', {
                hour: 'numeric',
            }).format(adjustedTime);
        const minutes = 
            new Intl.DateTimeFormat('ru-Ru', {
                minute: 'numeric',
            }).format(adjustedTime);
        const seconds = 
            new Intl.DateTimeFormat('ru-Ru', {
                second: 'numeric',
            }).format(adjustedTime);
        console.log(`Осталось ${month} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`);
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('Новый год!')
    }, new Date('2024/12/31').getTime()) - new Date + 100;
}

setNewYearTimer();