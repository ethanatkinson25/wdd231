const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        // let card = document.createElement('section');
        // let h2 = document.createElement('h2');
        // let birthday = document.createElement('p');
        // let deathDay = document.createElement('p');
        // let length = document.createElement('p');
        // let order = document.createElement('p');
        // let birthplace = document.createElement('p');
        // let numberOfChildren = document.createElement('p');
        // let img = document.createElement('img');
        const card = document.createElement('section');

        card.innerHTML = `
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <p>Birthdate: ${prophet.birthdate}</p>
        <p>Deathday: ${prophet.death}</p>
        <p>Length of Service: ${prophet.length}</p>
        <p>Order: ${prophet.order}</p>
        <p>Birthplace: ${prophet.birthplace}</p>
        <p>Number of Children: ${prophet.numofchildren}</p>
    `;

        cards.appendChild(card);
    })

}

getProphetsData();