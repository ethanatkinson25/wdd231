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

function showVisitMessage() {
    const key = 'lastVisit';
    const now = new Date();
    const raw = localStorage.getItem(key);

    let message = '';
    if (!raw) {
        message = 'Welcome!  This is your first visit!';
    } else {
        const last = new Date(raw);
        const diffMs = now - last;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
            message = 'Welcome back!  You visited earlier today.';
        } else if (diffDays === 1) {
            message = 'Welcome back!  You visited yesterday.';
        } else {
            message = `Welcome back!  Your last visit was ${diffDays} days ago.`;
        }
    }

    const visitMessageDiv = document.querySelector('#visit-message');
    if (visitMessageDiv) {
        visitMessageDiv.textContent = message;
    }
    localStorage.setItem(key, now.toISOString());
}

const placesSection = document.querySelector('.places-section');

function displayMembers(data) {
    data.forEach(member => {
        const card = document.createElement("div");
        card.innerHTML = `
            <img src="${member.photo_url}" alt="photo of ${member.name}">
            <h2>${member.name}</h2>
            <address>${member.address}</address>
            <p class="cost">Price: ${member.cost}</p>
            <p class="member-description">${member.description}</p>
            <button>Learn More</button>
        `
        placesSection.appendChild(card);
    });
}

showVisitMessage();
displayMembers(places);