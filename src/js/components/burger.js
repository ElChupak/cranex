const burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__nav'),
    overlay = document.querySelector('.overlay'),
    headerBar = document.querySelector('.header'),
    scroll = calcScroll();

const disScroll = () => {
  let pagePosition = window.scrollY;
  let scroll = calcScroll();

  document.body.style.overflow = 'hidden';
  // document.body.style.marginRight = `${scroll}px`;
  // headerBar.style.marginRight = `${scroll}px`;
  // burger.style.marginRight = `${scroll}px`;

  // headerBar.style.paddingRight = `${scroll}px`;

  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';  
}


const enScroll = () => {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.overflow = '';
  document.body.style.top = '';
  document.body.style.marginRight = `0px`;
  headerBar.style.marginRight = `0px`;
  burger.style.marginRight = `0px`;
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
}

function calcScroll() {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

const toggleClasses = () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  overlay.classList.toggle('overlay--active');
}


burger.addEventListener('click', (e) => {
  toggleClasses();

  if (burger.classList.contains('burger--active')) {
    disScroll();
  } else {
    enScroll();
  }

  if(headerBar.classList.contains('header__nav--active')) {
    headerBar.style.backgroundColor = '#6e6e6e';
  } else {
    headerBar.style.backgroundColor = '';
  }

});

overlay?.addEventListener('click', (e) => {
  if(e.target.classList.contains('overlay')) {
    toggleClasses();

    if (burger.classList.contains('burger--active')) {
      disScroll();
    } else {
      enScroll();
    }
  }
});




