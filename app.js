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

 let state;
 let counterBlock = 0;

 const resetButtons = (state) => {
   const buttons = document.querySelectorAll('.button-to-press');

   console.log(buttons);

   [...buttons].map((item) => {
      if (item.getAttribute('data-id') === state) {
         item.innerHTML = 'Нажата!';
      } else {
         item.innerHTML = 'Нажми меня';
      };
   })
 };

 const changeHandler = (event) => {
   const target = event.target;
   if (target.className !== 'button-to-press') return;
   state = target.getAttribute('data-id');

   const counter = document.querySelector('#counter');
   counterBlock += 1;
   counter.innerHTML = counterBlock;

   resetButtons(state);
 }



 const app = async () => {
    const appContainer = document.querySelector('#app');
    console.log(appContainer);
    for (let i = 1; i <= MAX_BUTTONS; i++ ) {
        appContainer.append(renderButton(i));
    }
    appContainer.addEventListener('click',changeHandler);
 };

 document.addEventListener('DOMContentLoaded', app);