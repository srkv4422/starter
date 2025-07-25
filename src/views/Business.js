import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderBusiness = (container, query) => {
    container.innerHTML = `
        <header>
            <h1>Business</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="category" placeholder="Category" value="${parseQuery(query).category || ''}">
            <input type="text" id="location" placeholder="Location" value="${parseQuery(query).location || ''}">
            <select id="sort">
                <option value="rating" ${parseQuery(query).sort === 'rating' ? 'selected' : ''}>Rating</option>
                <option value="name" ${parseQuery(query).sort === 'name' ? 'selected' : ''}>Name</option>
            </select>
        </div>
        <ul>
            <li><a href="/business/details/123" onclick="event.preventDefault(); window.history.pushState({}, '', '/business/details/123'); window.dispatchEvent(new Event('popstate'));">Business 1</a></li>
            <li><a href="/business/details/456" onclick="event.preventDefault(); window.history.pushState({}, '', '/business/details/456'); window.dispatchEvent(new Event('popstate'));">Business 2</a></li>
        </ul>
    `;

    document.getElementById('category').onchange =
    document.getElementById('location').onchange =
    document.getElementById('sort').onchange = (e) => {
        const newQuery = {
            category: document.getElementById('category').value,
            location: document.getElementById('location').value,
            sort: document.getElementById('sort').value,
        };
        updateURL('/business', newQuery);
        renderBusiness(container, new URLSearchParams(newQuery).toString());
    };
};

export const renderBusinessDetails = (container, id) => {
    container.innerHTML = `
        <header>
            <h1>Business Details ${id}</h1>
            ${ShareButton().outerHTML}
        </header>
        <p>Details about business ${id}.</p>
    `;
};
