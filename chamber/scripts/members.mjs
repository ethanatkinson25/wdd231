export async function initMembershipCards() {
    const memberModal = document.querySelector('#membership-modal');
    const membershipTitle = document.querySelector('#membership-title');
    const membershipDescription = document.querySelector('#membership-description');
    const nonProfitButton = document.querySelector('#non-profit-button');
    const silverButton = document.querySelector('#silver-button');
    const bronzeButton = document.querySelector('#bronze-button');
    const goldButton = document.querySelector('#gold-button');
    const closeModal = document.querySelector('#closeModal');

    let membershipData = null;
    async function getMembershipInfo() {
        if (membershipData) return membershipData;
        const resp = await fetch('data/membershipinfo.json');
        membershipData = await resp.json();
        return membershipData;
    }

    function bindButton(btn, index) {
        if (!btn) return;
        btn.addEventListener('click', async () => {
            const data = await getMembershipInfo();
            if (membershipTitle) membershipTitle.textContent = data[index]?.title || '';
            if (membershipDescription) membershipDescription.textContent = data[index]?.description || '';
            if (memberModal && typeof memberModal.showModal === 'function') memberModal.showModal();
        });
    }

    bindButton(nonProfitButton, 0);
    bindButton(bronzeButton, 1);
    bindButton(silverButton, 2);
    bindButton(goldButton, 3);

    if (closeModal && memberModal) {
        closeModal.addEventListener('click', () => {
            if (typeof memberModal.close === 'function') memberModal.close();
        });
    }
}
