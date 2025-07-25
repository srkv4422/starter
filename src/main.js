import { router } from './router.js';
import { BottomNav } from './components/BottomNav.js';

const app = document.getElementById('app');

const layout = () => {
    const pageContainer = document.getElementById('page-container');
    if (!pageContainer) {
        app.innerHTML = `
            <div id="page-container"></div>
        `;
        app.appendChild(BottomNav());
    }
};

const navigate = () => {
    layout();
    const pageContainer = document.getElementById('page-container');
    router(pageContainer);

    // Update active state in bottom nav
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.bottom-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

window.addEventListener('popstate', navigate);

document.addEventListener('DOMContentLoaded', () => {
    // Set initial route
    if (window.location.pathname === '/') {
        window.history.replaceState({}, '', '/business');
    }
    navigate();
});
