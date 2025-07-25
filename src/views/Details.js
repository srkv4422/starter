import { ShareButton } from '../components/ShareButton.js';

export const renderDetailsPage = (type, id) => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <header>
            <h1>${type} Details ${id}</h1>
            ${ShareButton().outerHTML}
        </header>
        <p>This is the details page for ${type} with ID ${id}.</p>
        <a href="/${type.toLowerCase()}">Back to list</a>
    `;
};
