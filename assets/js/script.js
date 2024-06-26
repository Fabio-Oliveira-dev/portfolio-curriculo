let urlGit = 'https://github.com/Fabio-Oliveira-dev';
let git = document.getElementById('git');

git.addEventListener("click", function() {
    window.open(urlGit, '_blank');
})


let urlBehance = 'https://www.behance.net/fabio-dev-designer';
behance = document.getElementById('behance');

behance.addEventListener("click", function() {
    window.open(urlBehance, '_blank');
})


let urlLinkedin = 'https://www.linkedin.com/in/fabio-oliveira-a8a60321b/';
let linkedin = document.getElementById('linkedin');

linkedin.addEventListener("click", function() {
    window.open(urlLinkedin, '_blank');
})


let urlTiktok = 'https://www.tiktok.com/@fabiooliveiradev';
let tiktok = document.getElementById('tiktok');

tiktok.addEventListener("click", function() {
    window.open(urlTiktok, '_blank');
})

let urlInstagram = 'https://www.instagram.com/fabio.oliveira92/';
let instagram = document.getElementById('instagram');

instagram.addEventListener("click", function() {
    window.open(urlInstagram, '_blank');
})

let fone = '21968917243';
let urlWhatsapp = `https://wa.me/${fone}`;
let whatsapp = document.getElementById('whatsapp');

whatsapp.addEventListener("click", function() {
    window.open(urlWhatsapp, '_blank');
})

// let email = 'fabiooliveiraideia2@gmail.com';
// let urlEmail = `mailto:${email}`;
// let e_mail = document.getElementById('email');

// e_mail.addEventListener("click", function() {
//     window.open(urlEmail, '_blank');
// })

/* Inicio Links github e acesso aos projetos*/
let ancoras = document.getElementsByClassName(".ancora-caixa");

ancoras.addEventListener("click", function() {
    window.open(ancoras, '_blank');
})
/* Fim Links github e acesso aos projetos*/