// Menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Scroll direction navigation
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide header at the very top of the page
      if (currentScrollY < 100) {
        header.classList.remove('hidden');
        lastScrollY = currentScrollY;
        return;
      }
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        header.classList.add('hidden');
      } else {
        // Scrolling up - show header
        header.classList.remove('hidden');
      }
      
      lastScrollY = currentScrollY;
    });
  }
});