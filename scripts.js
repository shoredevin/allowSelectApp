
    const html = document.querySelector('html');
    html.style.setProperty('--tw-bg-opacity', 1);
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.cssClass { user-select: auto !important; }';
    document.getElementsByTagName('head')[0].appendChild(style);
    const elements = document.getElementsByTagName('*');
    for(const element of elements) {
        element.classList.add('cssClass');
    }