// *************Hamburger menu *************
const navbar = document.querySelector('#navbar');
const navMenu = document.querySelector('.navbar__menu');
const navBurger = document.querySelector('.navbar__burger');
const body = document.querySelector('body');

navBurger.addEventListener('click', () => {
  if(navbar.classList.contains('open')) {
    navbar.classList.remove('open');
    navMenu.classList.remove('open');
    body.classList.remove('not-scroll');    
  } else {
    navbar.classList.add('open');
    navMenu.classList.add('open');
    body.classList.add('not-scroll');    

  }
})

// ********** Fixed navbar ************
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  const upLink = document.querySelector('.up-link');

  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar')
  }

  if(scrollHeight > 500) {
    upLink.classList.add('show');
  } else {
    upLink.classList.remove('show');
  }
})

// ***********Smooth nav scroll ****************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  
  link.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('href').slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // console.log(element);

    const navHeight = navbar.getBoundingClientRect().height;    
    const linksHeight = navMenu.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
   
    if (!fixedNav) {
      position = (position - navHeight);
      // console.log(position);
    }

    if (navHeight > 5) {
      position = position + linksHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
    
    navbar.classList.remove('open');
    navMenu.classList.remove('open'); 
    
  })
})


// ***************Project section*******************
let sortBtn = document.querySelector('.projects__menu').children;
let sortItem = document.querySelector('.project-item').children;
// console.log(sortBtn);


for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener('click', function() {
    // console.log(this.innerHTML); 
    for(let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove('current');
    }
    this.classList.add('current');
    
    let targetData = this.getAttribute('data-target');
    // console.log(targetData);
    for(let k = 0; k < sortItem.length; k ++) {
      sortItem[k].classList.remove('active');
      sortItem[k].classList.add('delete');

      if(sortItem[k].getAttribute('data-item') === targetData || targetData === 'all') {
        sortItem[k].classList.remove('delete');
        sortItem[k].classList.add('active');
      }
    }
  })
}


// ***************************************
// Set date
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();