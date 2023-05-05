const url = 'https://github.com/Fabio-Oliveira-dev';
const a = document.querySelector('#git');

function openInNewTab(url){
    const win = window.open(url, '_blank')
    win.focus()
};

a.addEventListener('click', () => {
    openInNewTab(url)
});


const urlBehance = 'https://www.behance.net/fabio-dev-designer';
const aBehance = document.querySelector('#behance');

function openInNewTab(urlBehance){
    const win = window.open(urlBehance, '_blanck')
    win.focus()
};

aBehance.addEventListener('click', () => {
    openInNewTab(urlBehance)
});

const urlLinkedin = 'https://www.linkedin.com/in/fabio-oliveira-a8a60321b/';
const aLinkedin = document.querySelector('#linkedin');

function openInNewTab(urlLinkedin) {
    const win = window.open(urlLinkedin, '_blank')
    win.focus()
};

aLinkedin.addEventListener('click', () => {
    openInNewTab(urlLinkedin)
});

const urlTiktok = 'https://www.tiktok.com/@fabiooliveiradev';
const aTiktok = document.querySelector('#tiktok');

function openInNewTab(urlTiktok) {
    const win = window.open(urlTiktok, '_blanck')
    win.focus()
};

aTiktok.addEventListener('click', () => {
    openInNewTab(urlTiktok)
});