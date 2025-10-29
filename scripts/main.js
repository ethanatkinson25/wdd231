const currentYear = new Date().getFullYear();
const copyright = document.querySelector('#copyright');
const lastModified = new Date(document.lastModified);
const lastModifiedText = document.querySelector('#last-modified');
const navButton = document.querySelector('#hamburger-button');
const navBar = document.querySelector('#nav-bar');

copyright.textContent = `\u00A9 | Ethan Atkinson | ${currentYear}`;
lastModifiedText.textContent = `Last Modified: ${lastModified}`;

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

