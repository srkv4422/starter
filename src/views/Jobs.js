import { ShareButton } from '../components/ShareButton.js';
import { parseQuery, updateURL } from '../utils.js';

export const renderJobs = (container, query) => {
    const q = parseQuery(query);
    container.innerHTML = `
        <header>
            <h1>Jobs</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="filters">
            <input type="text" id="keywords" placeholder="e.g., developer" value="${q.keywords || ''}">
            <input type="text" id="type" placeholder="e.g., full-time" value="${q.type || ''}">
            <input type="number" id="salary" placeholder="e.g., 50000" value="${q.salary || ''}">
        </div>
        <ul class="item-list">
            <li><a href="/jobs/details/1" onclick="event.preventDefault(); window.history.pushState({}, '', '/jobs/details/1'); window.dispatchEvent(new Event('popstate'));">
                <strong>Software Developer</strong>
                <span>Type: Full-time, Salary: 50000</span>
            </a></li>
            <li><a href="/jobs/details/2" onclick="event.preventDefault(); window.history.pushState({}, '', '/jobs/details/2'); window.dispatchEvent(new Event('popstate'));">
                <strong>UX Designer</strong>
                <span>Type: Part-time, Salary: 30000</span>
            </a></li>
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
            <h1>Job Details</h1>
            ${ShareButton().outerHTML}
        </header>
        <div class="details-content">
            <h2>Job ${id}</h2>
            <p>Here are the full details for the job, including the job description and how to apply.</p>
        </div>
    `;
};
