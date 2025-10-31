const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {

 document.body.classList.remove('light')
} 
else {
  document.body.classList.add('light')
  // Apply light mode styles or logic
}

const toggle = document.querySelector('.primary-action');
toggle.addEventListener('click', () => {
document.body.classList.toggle('light')
});
