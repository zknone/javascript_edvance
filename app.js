'use strict';

const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/');

        if (!response.ok) {
            console.log(response.status);
        }
        return response.json();
    } catch {
        console.log (new Error('Damn'));
    }    
 };

 const renderCard = (title, id) => {
    const item = document.createElement('li');
    item.id = id;
    item.innerHTML = title;
    return item;
 }

 const app = async () => {
    const { products } = await fetchData();
    const appContainer = document.querySelector('#app');

    const list = document.createElement('ul');
    list.id = 'list';
    list.className = 'products-list';

    products.map(item => list.append(renderCard(item.title, item.id)));
    appContainer.append(list);
 };

 app();