document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header-items__burger');
  const nav = document.querySelector('.header-items-nav');

  burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      nav.classList.remove('active');
      burger.classList.remove('active');
    } else {
      nav.classList.add('active');
      burger.classList.add('active');
    }
    
  })
  
});