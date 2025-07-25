import { renderBusiness, renderBusinessDetails } from './views/Business.js';
import { renderJobs, renderJobDetails } from './views/Jobs.js';
import { renderDeals, renderDealDetails } from './views/Deals.js';
import { renderNews, renderNewsDetails } from './views/News.js';
import { renderSell, renderSellDetails } from './views/Sell.js';
import { renderPosts, renderPostDetails } from './views/Posts.js';

const routes = {
    '/business': renderBusiness,
    '/business/details/:id': renderBusinessDetails,
    '/jobs': renderJobs,
    '/jobs/details/:id': renderJobDetails,
    '/deals': renderDeals,
    '/deals/details/:id': renderDealDetails,
    '/news': renderNews,
    '/news/details/:id': renderNewsDetails,
    '/sell': renderSell,
    '/sell/details/:id': renderSellDetails,
    '/posts': renderPosts,
    '/posts/details/:id': renderPostDetails,
};

export const router = (container) => {
    const path = window.location.pathname;
    const query = window.location.search;

    let match;
    for (const route in routes) {
        const regex = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
        match = path.match(regex);
        if (match) {
            const params = match.slice(1);
            routes[route](container, ...params, query);
            return;
        }
    }

    // Default route
    renderBusiness(container, query);
};
