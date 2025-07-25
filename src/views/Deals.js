import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderDeals = (container, query) => {
    container.innerHTML = `
        <header>
            <h1>Deals</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="category" placeholder="Category" value="${parseQuery(query).category || ''}">
            <select id="sort">
                <option value="hot" ${parseQuery(query).sort === 'hot' ? 'selected' : ''}>Hot</option>
                <option value="new" ${parseQuery(query).sort === 'new' ? 'selected' : ''}>New</option>
            </select>
        </div>
        <ul>
            <li><a href="/deals/details/1" onclick="event.preventDefault(); window.history.pushState({}, '', '/deals/details/1'); window.dispatchEvent(new Event('popstate'));">Deal 1</a></li>
            <li><a href="/deals/details/2" onclick="event.preventDefault(); window.history.pushState({}, '', '/deals/details/2'); window.dispatchEvent(new Event('popstate'));">Deal 2</a></li>
        </ul>
    `;

    document.getElementById('category').onchange =
    document.getElementById('sort').onchange = (e) => {
        const newQuery = {
            category: document.getElementById('category').value,
            sort: document.getElementById('sort').value,
        };
        updateURL('/deals', newQuery);
    };
};

export const renderDealDetails = (container, id) => {
    container.innerHTML = `
        <header>
            <h1>Deal Details ${id}</h1>
            ${ShareButton().outerHTML}
        </header>
        <p>Details about deal ${id}.</p>
    `;
};
