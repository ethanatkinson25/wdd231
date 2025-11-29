import { places } from '../data/places.mjs'

console.log(places);

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

const placesSection = document.querySelector('.places-section');

function displayMembers(data) {
    data.forEach(member => {
        const card = document.createElement("div");
        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="${member.photo_url}" alt="photo of ${member.name}" />
            <p>${member.address}</p>
            <p>Price: ${member.cost}</p>
            <p>${member.description}</p>
        `
        placesSection.appendChild(card);
    });
}

displayMembers(places);