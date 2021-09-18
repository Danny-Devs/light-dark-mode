const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const toggleText = document.getElementById("toggle-text");
const lightIcon = document.getElementById("light-icon");

function toggleLightMode(value) {
  image1.src = `img/undraw_proud_coder_${value}.svg`;
  image2.src = `img/undraw_feeling_proud_${value}.svg`;
  image3.src = `img/undraw_conceptual_idea_${value}.svg`;
  toggleText.textContent = `${
    value.charAt(0).toUpperCase() + value.slice(1)
  } Mode`;
  if (value === "light") {
    lightIcon.classList.replace("fa-moon", "fa-sun");
  } else if (value === "dark") {
    lightIcon.classList.replace("fa-sun", "fa-moon");
  }
}

// switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    toggleLightMode("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    toggleLightMode("light");
  }
}

// initialize light mode if localstorage contains user preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme); 
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleLightMode('dark');
  }
}

// event listener
toggleSwitch.addEventListener("change", switchTheme);
