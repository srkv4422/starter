export const ShareButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Share';
    button.className = 'share-button';

    button.onclick = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard!');
        });
    };

    return button;
};
