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
  let scrollStartY = window.scrollY;
  const header = document.querySelector('.site-header');
  const scrollThreshold = 100; // Pixels to scroll up before showing header

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide header at the very top of the page
      if (currentScrollY < 100) {
        header.classList.remove('hidden');
        lastScrollY = currentScrollY;
        scrollStartY = currentScrollY;
        return;
      }
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header and reset scroll start point
        header.classList.add('hidden');
        scrollStartY = currentScrollY;
        if (window.headerShowTimeout) {
          clearTimeout(window.headerShowTimeout);
        }
      } else {
        // Scrolling up - only show header after scrolling up enough
        const scrollUpDistance = scrollStartY - currentScrollY;
        
        if (scrollUpDistance >= scrollThreshold) {
          header.classList.remove('hidden');
        }
      }
      
      lastScrollY = currentScrollY;
    });
  }
});