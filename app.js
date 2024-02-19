'use strict';

const address = 'https://pokeapi.co/api/v2/pokemon/ditto';

async function fetchData(address, errorText) {
    try {
        const response = await fetch(address);

        if (!response.ok) {
            console.log(errorText)
        };

        return await response.json();

    } catch (error) {
        console.log(errorText)
    }
}

fetchData(address, 'Something went wrong').then((data) => {
    const { abilities } = data;
    const abilityUrl = abilities[0].ability.url;


    fetchData(abilityUrl, 'Can not fetch ability').then((data) => {
        const {flavor_text_entries: textEntries} = data;

        const {flavor_text: text} = textEntries.find(item => item.language.name === 'en');
        console.log(text);
    })
})