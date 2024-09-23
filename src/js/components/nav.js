const headerEl = document.querySelector('.header'),
      sectionEl = document.getElementsByTagName('section'),
      homeBody = document.querySelector('.home'),
      scrolled = document.querySelector('.scrolled');

window.addEventListener('scroll', ()=>{

    let scroll = window.scrollY;

    if(scroll > sectionEl[0].offsetHeight) {
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

