export function renderThankYou(containerSelector = '.info-display') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const rawData = sessionStorage.getItem('membershipSubmission');
    if (!rawData) {
        container.innerHTML = '<p>No submission data found. If you just submitted the form, try again.</p>';
        return;
    }

    try {
        const data = JSON.parse(rawData);
        const submittedAt = new Date(data.timestamp);
        const submittedAtStr = isNaN(submittedAt) ? data.timestamp : submittedAt.toLocaleString();

        container.innerHTML = `
            <h2>Thank you, ${escapeHtml(data.firstName || data.company || 'Member')}!</h2>
            <p><strong>Submitted:</strong> ${submittedAtStr}</p>
            <dl>
                <dt>Full name</dt>
                <dd>${escapeHtml((data.firstName + ' ' + data.lastName).trim() || '—')}</dd>
                <dt>Company</dt>
                <dd>${escapeHtml(data.company || '—')}</dd>
                <dt>Title</dt>
                <dd>${escapeHtml(data.title || '—')}</dd>
                <dt>Email</dt>
                <dd>${escapeHtml(data.email || '—')}</dd>
                <dt>Phone</dt>
                <dd>${escapeHtml(data.phone || '—')}</dd>
                <dt>Membership Level</dt>
                <dd>${escapeHtml(data.membershipLevel || '—')}</dd>
                <dt>Business Description</dt>
                <dd>${escapeHtml(data.description || '—')}</dd>
            </dl>
        `;

    } catch (err) {
        console.error('Failed to parse submission data', err);
        container.innerHTML = '<p>There was a problem reading your submission data.</p>';
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}