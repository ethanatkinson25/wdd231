const spotlightSection = document.querySelector('#spotlight-cards');

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    members.forEach((member) => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';

        card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="Logo of ${member.name}" width="200" height="200">
        <p>Address: ${member.address}</p>
        <p>Phone Number: ${member.phone}</p>
        <p>Website: ${member.website}</p>
        <p>Membership Level: ${member.membership_level}</p>
        <p>Additional Info: ${member.info}</p>
    `;
        spotlightSection.appendChild(card);
    })
}

getMembersData();