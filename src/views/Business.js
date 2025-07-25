import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderBusiness = (container, query) => {
    const q = parseQuery(query);
    container.innerHTML = `
        <header>
            <h1>Business</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="category" placeholder="e.g., restaurants" value="${q.category || ''}">
            <input type="text" id="location" placeholder="e.g., manchester" value="${q.location || ''}">
            <select id="sort">
                <option value="rating" ${q.sort === 'rating' ? 'selected' : ''}>Sort by Rating</option>
                <option value="name" ${q.sort === 'name' ? 'selected' : ''}>Sort by Name</option>
            </select>
        </div>
        <ul class="item-list">
            <li><a href="/business/details/123" onclick="event.preventDefault(); window.history.pushState({}, '', '/business/details/123'); window.dispatchEvent(new Event('popstate'));">
                <strong>Business One</strong>
                <span>Category: Restaurant, Location: Manchester</span>
            </a></li>
            <li><a href="/business/details/456" onclick="event.preventDefault(); window.history.pushState({}, '', '/business/details/456'); window.dispatchEvent(new Event('popstate'));">
                <strong>Business Two</strong>
                <span>Category: Cafe, Location: London</span>
            </a></li>
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
    };
};

export const renderBusinessDetails = (container, id) => {
    container.innerHTML = `
        <header>
            <h1>Business Details</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="details-content">
            <h2>Business ${id}</h2>
            <p>Here are the full details for the business, including reviews and other information.</p>
        </div>
    `;
};
