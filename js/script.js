document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.header-items__menu-nav');
  const menu = document.querySelector('.header-items__menu');


  document.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === burger || e.target.parentElement === burger) {
      if (document.documentElement.clientWidth > 767) {
        if (burger.classList.contains('active')) {
          nav.classList.remove('active');
          burger.classList.remove('active');
        } else {
          nav.classList.add('active');
          burger.classList.add('active');
        }
      } else {
        if (burger.classList.contains('active')) {
          menu.classList.remove('active');
          burger.classList.remove('active');
        } else {
          menu.classList.add('active');
          burger.classList.add('active');
        }
      }
    } else if (e.target !== nav && e.target.parentElement !== nav && e.target !== menu && e.target.parentElement !== menu) {
      if (document.documentElement.clientWidth > 767) {
        if (burger.classList.contains('active')) {
          e.preventDefault();
          nav.classList.remove('active');
          burger.classList.remove('active');
        }
      } else {
        if (burger.classList.contains('active')) {
          e.preventDefault();
          menu.classList.remove('active');
          burger.classList.remove('active');
        }
      }
    }
  })

  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
});