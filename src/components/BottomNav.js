export const BottomNav = () => {
    const navItems = [
        { name: 'Business', path: '/business', icon: 'briefcase' },
        { name: 'Jobs', path: '/jobs', icon: 'search' },
        { name: 'Deals', path: '/deals', icon: 'tag' },
        { name: 'News', path: '/news', icon: 'file-alt' },
        { name: 'Sell', path: '/sell', icon: 'store' },
        { name: 'Posts', path: '/posts', icon: 'comment' },
    ];

    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';

    navItems.forEach(item => {
        const a = document.createElement('a');
        a.href = item.path;
        a.className = window.location.pathname.startsWith(item.path) ? 'active' : '';
        a.innerHTML = `
            <i class="fas fa-${item.icon}"></i>
            <span>${item.name}</span>
        `;
        a.onclick = (e) => {
            e.preventDefault();
            window.history.pushState({}, '', item.path);
            window.dispatchEvent(new Event('popstate'));
        };
        nav.appendChild(a);
    });

    return nav;
};
