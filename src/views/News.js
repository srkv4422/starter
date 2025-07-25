import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderNews = (container, query) => {
    container.innerHTML = `
        <header>
            <h1>News</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="category" placeholder="Category" value="${parseQuery(query).category || ''}">
            <select id="timeframe">
                <option value="24h" ${parseQuery(query).timeframe === '24h' ? 'selected' : ''}>24h</option>
                <option value="week" ${parseQuery(query).timeframe === 'week' ? 'selected' : ''}>Week</option>
            </select>
        </div>
        <ul>
            <li><a href="/news/details/1" onclick="event.preventDefault(); window.history.pushState({}, '', '/news/details/1'); window.dispatchEvent(new Event('popstate'));">News 1</a></li>
            <li><a href="/news/details/2" onclick="event.preventDefault(); window.history.pushState({}, '', '/news/details/2'); window.dispatchEvent(new Event('popstate'));">News 2</a></li>
        </ul>
    `;

    document.getElementById('category').onchange =
    document.getElementById('timeframe').onchange = (e) => {
        const newQuery = {
            category: document.getElementById('category').value,
            timeframe: document.getElementById('timeframe').value,
        };
        updateURL('/news', newQuery);
    };
};

export const renderNewsDetails = (container, id) => {
    container.innerHTML = `
        <header>
            <h1>News Details ${id}</h1>
            ${ShareButton().outerHTML}
        </header>
        <p>Details about news ${id}.</p>
    `;
};
