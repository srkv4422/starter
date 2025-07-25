export const BottomNav = () => {
    const navItems = [
        { name: 'Business', path: '/business' },
        { name: 'Jobs', path: '/jobs' },
        { name: 'Deals', path: '/deals' },
        { name: 'News', path: '/news' },
        { name: 'Sell', path: '/sell' },
        { name: 'Posts', path: '/posts' },
    ];

    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';

    navItems.forEach(item => {
        const a = document.createElement('a');
        a.href = item.path;
        a.textContent = item.name;
        a.className = window.location.pathname.startsWith(item.path) ? 'active' : '';
        a.onclick = (e) => {
            e.preventDefault();
            window.history.pushState({}, '', item.path);
            window.dispatchEvent(new Event('popstate'));
        };
        nav.appendChild(a);
    });

    return nav;
};
