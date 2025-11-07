const navButton = document.querySelector('#hamburger-button');
const navBar = document.querySelector('#nav-bar');
const currentYear = new Date().getFullYear();
const copyright = document.querySelector('#copyright');
const lastModified = new Date(document.lastModified);
const lastModifiedText = document.querySelector('#last-modified');

copyright.textContent = `\u00A9 | Ethan Atkinson |  WDD231 | ${currentYear}`;

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

lastModifiedText.textContent = `Last Modified: ${lastModified}`;

const directoryCards = document.getElementById('directory-cards');

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    members.forEach((member) => {
        const card = document.createElement('section');
        card.className = 'directory-card';

        card.innerHTML = `
        <h2>${member.name}</h2>
        <img src="${member.image}" alt="Logo of ${member.name}" loading="lazy" width="200" height="200">
        <p>Address: ${member.address}</p>
        <p>Phone Number: ${member.phone}</p>
        <p>Website: ${member.website}</p>
        <p>Membership Level: ${member.membership_level}</p>
        <p>Additional Info: ${member.info}</p>
    `;
        directoryCards.appendChild(card);
    })
}

getMembersData();

const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');

gridButton.addEventListener('click', () => {
    directoryCards.classList.add("grid");
    directoryCards.classList.remove("list");
});

listButton.addEventListener('click', () => {
    directoryCards.classList.add("list");
    directoryCards.classList.remove("grid");
});