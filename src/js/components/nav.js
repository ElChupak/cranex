const headerEl = document.querySelector('.header'),
      sectionEl = document.getElementsByTagName('section'),
      homeBody = document.querySelector('.home'),
      scrolled = document.querySelector('.scrolled'),
      menu = document.querySelector('.header__nav');


window.addEventListener('scroll', ()=>{

    let scroll = window.scrollY;

    if(scroll > sectionEl[0].offsetHeight || menu.classList.contains('header__nav--active')) {
        headerEl.classList.add('scrolled');
        
        if(homeBody) {
            homeBody.style.marginTop = `${headerEl.offsetHeight}` + 'px';
        }
    } else {
        headerEl.classList.remove('scrolled');
        if(homeBody) {
            homeBody.style.marginTop = 'auto';
        }
    }
});
