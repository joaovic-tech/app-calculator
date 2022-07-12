const html = document.querySelector('html');
const checkbox = document.getElementById('checkbox');
const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');

checkbox.addEventListener('change', () => {
  html.classList.toggle('dark-mode');
  moon.classList.toggle('hidden');
  sun.classList.toggle('hidden');
});
