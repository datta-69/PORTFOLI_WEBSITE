// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault(); // Prevent default anchor link behavior
//       const targetId = this.getAttribute('href'); // Get the target section ID
//       const targetSection = document.querySelector(targetId); // Find the target section
//       if (targetSection) {
//         // Scroll smoothly to the target section
//         targetSection.scrollIntoView({
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
  
//   // Mobile menu toggle functionality
//   const mobileMenu = document.getElementById('mobile-menu');
//   const navLinks = document.getElementById('nav-links');
  
//   mobileMenu.addEventListener('click', () => {
//     // Toggle the 'active' class to show/hide the mobile menu
//     navLinks.classList.toggle('active');
//   });
  
//   // Highlight active navigation link based on scroll position
//   const sections = document.querySelectorAll('section'); // All sections on the page
//   const navLinksAll = document.querySelectorAll('.nav-links a'); // All navigation links
  
//   window.addEventListener('scroll', () => {
//     let current = ''; // Variable to store the current active section ID
  
//     // Loop through all sections to determine which one is currently in view
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop; // Top position of the section
//       const sectionHeight = section.clientHeight; // Height of the section
//       if (pageYOffset >= sectionTop - sectionHeight / 3) {
//         current = section.getAttribute('id'); // Set the current section ID
//       }
//     });
  
//     // Loop through all navigation links to add/remove the 'active' class
//     navLinksAll.forEach(link => {
//       link.classList.remove('active'); // Remove 'active' class from all links
//       if (link.getAttribute('href').includes(current)) {
//         link.classList.add('active'); // Add 'active' class to the current link
//       }
//     });
//   });
  
//   // Close mobile menu when a link is clicked
//   navLinks.addEventListener('click', () => {
//     if (navLinks.classList.contains('active')) {
//       navLinks.classList.remove('active'); // Hide the mobile menu
//     }
//   });








// Smooth scrolling with header offset
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Mobile menu improvements
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Toggle menu with animation
mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
    navLinks.classList.remove('active');
    mobileMenu.classList.remove('open');
  }
});

// Close menu on scroll
window.addEventListener('scroll', () => {
  navLinks.classList.remove('active');
  mobileMenu.classList.remove('open');
});

// Update active link detection with header offset
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - headerHeight - 50) {
      current = section.getAttribute('id');
    }
  });
  
  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > ) {
    navLinks.classList.remove('active');
    mobileMenu.classList.remove('open');
  }
});