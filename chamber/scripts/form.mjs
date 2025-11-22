export function attachFormHandler(options = {}) {
    const { formSelector = 'form', redirectUrl = 'thankyou.html' } = options;
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const submission = {
            firstName: formData.get('first-name') || '',
            lastName: formData.get('last-name') || '',
            title: formData.get('title') || '',
            email: formData.get('email') || '',
            phone: formData.get('number') || '',
            company: formData.get('business-name') || '',
            membershipLevel: formData.get('member-status') || '',
            description: formData.get('buisness-description') || '',
            timestamp: new Date().toISOString()
        };

        try {
            sessionStorage.setItem('membershipSubmission', JSON.stringify(submission));
        } catch (err) {
            console.warn('Could not save submission to sessionStorage', err);
        }

        const tsInput = document.querySelector('#timestamp');
        if (tsInput) tsInput.value = submission.timestamp;

        window.location.href = redirectUrl;
    });
}

export function getStoredSubmission() {
    const raw = sessionStorage.getItem('membershipSubmission');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (err) { return null; }
}
