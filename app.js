'use strict';

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://dummyjson.com/products/');

//         if (!response.ok) {
//             console.log(response.status);
//         }
//         return response.json();
//     } catch {
//         console.log (new Error('Damn'));
//     }    
//  };

//  const renderCard = (title, id) => {
//     const item = document.createElement('li');
//     item.id = id;
//     const description = document.createElement('div');
//     description.className = 'card-description';
//     const button = document.createElement('button');
//     description.innerHTML = title;
//     button.className = 'delete-button';
//     button.innerHTML = 'X';
//     button.setAttribute('data-id', id);
//     item.append(description);
//     item.append(button);
//     return item;
//  }

//  const deleteHandler = (event) => {
//     if (event.target.className === 'delete-button') {
//         const listItemToDelete = event.target.parentNode;
//         listItemToDelete.remove();
//     }
//  }

//  const app = async () => {
//     const { products } = await fetchData();
//     const appContainer = document.querySelector('#app');
//     appContainer.addEventListener('click', deleteHandler);
//     const appButton = document.querySelector('#start-button');

//     let searchTerm = '';

//     const input = document.createElement('input');
//     appContainer.append(input);

//     input.addEventListener('input', (event) => {
//         searchTerm = event.target.value;
//         const actualList = document.querySelector('#list').childNodes;
        
//         [...actualList].map((item) => {
//             item.style.color = 'black';
//         })

//         if (searchTerm === '') return;

//         [...actualList].map((item) => {
//             const itemDescription = item.querySelector('.card-description');
//             if (itemDescription.textContent.includes(searchTerm)) {
//                 item.style.color = 'red';
//             }
//         })
//     });

//     const list = document.createElement('ul');
//     list.id = 'list';
//     list.className = 'products-list';

//     appButton.addEventListener('click', () => {
//         list.innerHTML='';
//         products.map(item => list.append(renderCard(item.title, item.id)));
//     })

//     appContainer.append(list);
//  };

//  app();