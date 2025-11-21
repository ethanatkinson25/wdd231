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

const memberModal = document.querySelector("#membership-modal");
const membershipTitle = document.querySelector('#membership-title');
const membershipDescription = document.querySelector('#membership-description');
const nonProfitButton = document.querySelector("#non-profit-button");
const silverButton = document.querySelector("#silver-button");
const bronzeButton = document.querySelector("#bronze-button");
const goldButton = document.querySelector("#gold-button");
const closeModal = document.querySelector("#closeModal");

let membershipData = null;

async function getmembershipInfo() {
    if (membershipData) return membershipData;
    const response = await fetch('data/membershipinfo.json');
    membershipData = await response.json();
    console.log('membershipInfo loaded', membershipData);
    return membershipData;
}

nonProfitButton.addEventListener('click', async () => {
    const data = await getmembershipInfo();
    membershipTitle.textContent = data[0].title;
    membershipDescription.textContent = data[0].description;
    memberModal.showModal();
});

bronzeButton.addEventListener('click', async () => {
    const data = await getmembershipInfo();
    membershipTitle.textContent = data[1].title;
    membershipDescription.textContent = data[1].description;
    memberModal.showModal();
});

silverButton.addEventListener('click', async () => {
    const data = await getmembershipInfo();
    membershipTitle.textContent = data[2].title;
    membershipDescription.textContent = data[2].description;
    memberModal.showModal();
});

goldButton.addEventListener('click', async () => {
    const data = await getmembershipInfo();
    membershipTitle.textContent = data[3].title;
    membershipDescription.textContent = data[3].description;
    memberModal.showModal();
});

closeModal.addEventListener('click', () => {
    memberModal.close();
});