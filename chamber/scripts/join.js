import { attachFormHandler } from './form.mjs';
import { renderThankYou } from './thankyou.js';

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

if (document.querySelector('#non-profit-button')) {
    import('./members.mjs')
        .then(mod => mod.initMembershipCards())
        .catch(err => console.warn('Failed to load membership module', err));
}

attachFormHandler();

renderThankYou();