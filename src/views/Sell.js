import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderSell = (container, query) => {
    container.innerHTML = `
        <header>
            <h1>Sell</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="category" placeholder="Category" value="${parseQuery(query).category || ''}">
            <input type="text" id="location" placeholder="Location" value="${parseQuery(query).location || ''}">
            <input type="text" id="price" placeholder="Price" value="${parseQuery(query).price || ''}">
        </div>
        <ul>
            <li><a href="/sell/details/1" onclick="event.preventDefault(); window.history.pushState({}, '', '/sell/details/1'); window.dispatchEvent(new Event('popstate'));">Item 1</a></li>
            <li><a href="/sell/details/2" onclick="event.preventDefault(); window.history.pushState({}, '', '/sell/details/2'); window.dispatchEvent(new Event('popstate'));">Item 2</a></li>
        </ul>
    `;

    document.getElementById('category').onchange =
    document.getElementById('location').onchange =
    document.getElementById('price').onchange = (e) => {
        const newQuery = {
            category: document.getElementById('category').value,
            location: document.getElementById('location').value,
            price: document.getElementById('price').value,
        };
        updateURL('/sell', newQuery);
    };
};

export const renderSellDetails = (container, id) => {
    container.innerHTML = `
        <header>
            <h1>Item Details ${id}</h1>
            ${ShareButton().outerHTML}
        </header>
        <p>Details about item ${id}.</p>
    `;
};
