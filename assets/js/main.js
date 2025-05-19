document.addEventListener('DOMContentLoaded', function() {
  // Find the hamburger menu button
  const hamburger = document.querySelector('.hamburger-menu');
  const navList = document.querySelector('.nav-list');
  
  // Only add the event if the hamburger exists
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      // Toggle active class on the nav list
      if (navList) {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
      }
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = hamburger.contains(event.target) || navList.contains(event.target);
    if (!isClickInside && navList.classList.contains('active')) {
      navList.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
}); 