'use strict';

const address = 'https://pokeapi.co/api/v2/pokemon/ditto';

const request = new XMLHttpRequest();
request.open('GET', address);
request.send();
request.addEventListener('load', function() {
    const {abilities} = JSON.parse(this.responseText);
    console.log(abilities[0].ability);

    const abilityUrl = abilities[0].ability.url;

    const abilityRequest = new XMLHttpRequest();
    abilityRequest.open('GET', abilityUrl);
    abilityRequest.send();
    abilityRequest.addEventListener('load', function() {
        const {flavor_text_entries: textEntries} = JSON.parse(this.responseText);
        const {flavor_text: text} = textEntries.find(item => item.language.name === 'en');
        console.log(text);
    });

});