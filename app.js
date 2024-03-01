'use strict';

const MAX_BUTTONS = 5;

 const renderButton = (id) => {
    const button = document.createElement('button');
    button.id = id;
    button.innerHTML = 'Нажми меня';
    button.className = 'button-to-press';
    button.setAttribute('data-id', id);
    return button;
 }

 const changeHandler = (event) => {

    console.log(event)
    // searchTerm = event.target.value;
    // const actualList = document.querySelector('#list').childNodes;
    
    // [...actualList].map((item) => {
    //     item.style.color = 'black';
    // })

    // if (searchTerm === '') return;

    // [...actualList].map((item) => {
    //     const itemDescription = item.querySelector('.card-description');
    //     if (itemDescription.textContent.includes(searchTerm)) {
    //         item.style.color = 'red';
    //     }
    // })
 }

 const app = async () => {
    const appContainer = document.querySelector('#app');
    console.log(appContainer);
    for (let i = 1; i++ ;i <= MAX_BUTTONS) {
        appContainer.append(renderButton(i));
    }
 };

 document.addEventListener('DOMContentLoaded', app);