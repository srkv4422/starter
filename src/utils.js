export const parseQuery = (queryString) => {
    const params = new URLSearchParams(queryString);
    const query = {};
    for (const [key, value] of params.entries()) {
        query[key] = value;
    }
    return query;
};

export const updateURL = (path, query) => {
    const queryString = new URLSearchParams(query).toString();
    const newURL = `${path}${queryString ? `?${queryString}` : ''}`;
    window.history.pushState({}, '', newURL);
    window.dispatchEvent(new Event('popstate'));
};
