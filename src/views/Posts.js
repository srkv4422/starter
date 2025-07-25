import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderPosts = (container, query) => {
    container.innerHTML = `
        <header>
            <h1>Posts</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="tag" placeholder="Tag" value="${parseQuery(query).tag || ''}">
            <select id="sort">
                <option value="recent" ${parseQuery(query).sort === 'recent' ? 'selected' : ''}>Recent</option>
                <option value="popular" ${parseQuery(query).sort === 'popular' ? 'selected' : ''}>Popular</option>
            </select>
        </div>
        <ul>
            <li><a href="/posts/details/1" onclick="event.preventDefault(); window.history.pushState({}, '', '/posts/details/1'); window.dispatchEvent(new Event('popstate'));">Post 1</a></li>
            <li><a href="/posts/details/2" onclick="event.preventDefault(); window.history.pushState({}, '', '/posts/details/2'); window.dispatchEvent(new Event('popstate'));">Post 2</a></li>
        </ul>
    `;

    document.getElementById('tag').onchange =
    document.getElementById('sort').onchange = (e) => {
        const newQuery = {
            tag: document.getElementById('tag').value,
            sort: document.getElementById('sort').value,
        };
        updateURL('/posts', newQuery);
    };
};

export const renderPostDetails = (container, id) => {
    container.innerHTML = `
        <header>
            <h1>Post Details ${id}</h1>
            ${ShareButton().outerHTML}
        </header>
        <p>Details about post ${id}.</p>
    `;
};
