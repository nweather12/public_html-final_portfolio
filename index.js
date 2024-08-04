// index.js

document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.getElementById('name');
  
  // Trigger animation on page load
  setTimeout(() => {
    nameElement.classList.add('animate');
  }, 500); // Delay to ensure it shows up after page load
  
  // Optional: Add a click event to toggle the animation
  nameElement.addEventListener('click', function() {
    nameElement.classList.toggle('animate');
  });
});
