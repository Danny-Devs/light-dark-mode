const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleText = document.getElementById('toggle-text');
const lightIcon = document.getElementById('light-icon');



function activateLightMode() {
  image1.src = "img/undraw_proud_coder_light.svg";
  image2.src = "img/undraw_feeling_proud_light.svg";
  image3.src = "img/undraw_conceptual_idea_light.svg";
  toggleText.textContent = 'Light Mode';
  lightIcon.classList.add('fa-sun');
  lightIcon.classList.remove('fa-moon');
}

function activateDarkMode() {
  image1.src = "img/undraw_proud_coder_dark.svg";
  image2.src = "img/undraw_feeling_proud_dark.svg";
  image3.src = "img/undraw_conceptual_idea_dark.svg";
  toggleText.textContent = 'Dark Mode';
  lightIcon.classList.add('fa-moon');
  lightIcon.classList.remove('fa-sun');
}

//  switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    activateDarkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    activateLightMode();
  }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);