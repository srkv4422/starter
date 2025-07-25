import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderJobs = (container, query) => {
    container.innerHTML = `
        <header>
            <h1>Jobs</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="keywords" placeholder="Keywords" value="${parseQuery(query).keywords || ''}">
            <input type="text" id="type" placeholder="Type" value="${parseQuery(query).type || ''}">
            <input type="number" id="salary" placeholder="Salary" value="${parseQuery(query).salary || ''}">
        </div>
        <ul>
            <li><a href="/jobs/details/1" onclick="event.preventDefault(); window.history.pushState({}, '', '/jobs/details/1'); window.dispatchEvent(new Event('popstate'));">Job 1</a></li>
            <li><a href="/jobs/details/2" onclick="event.preventDefault(); window.history.pushState({}, '', '/jobs/details/2'); window.dispatchEvent(new Event('popstate'));">Job 2</a></li>
        </ul>
    `;

    document.getElementById('keywords').onchange =
    document.getElementById('type').onchange =
    document.getElementById('salary').onchange = (e) => {
        const newQuery = {
            keywords: document.getElementById('keywords').value,
            type: document.getElementById('type').value,
            salary: document.getElementById('salary').value,
        };
        updateURL('/jobs', newQuery);
    };
};

export const renderJobDetails = (container, id) => {
    container.innerHTML = `
        <header>
            <h1>Job Details ${id}</h1>
            ${ShareButton().outerHTML}
        </header>
        <p>Details about job ${id}.</p>
    `;
};
