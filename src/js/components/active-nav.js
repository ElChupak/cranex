const navLinksEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;


navLinksEls.forEach(el => {
    const navLinkPathname = new URL(el.href).pathname;


    if(windowPathname === navLinkPathname) {
        el.classList.add('nav__link--current')
    }
});