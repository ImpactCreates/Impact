const themeToggle = document.getElementById('checkbox');
const htmlElement = document.documentElement;

// Function to set the theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Function to toggle the theme
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Check for saved theme in localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
    }
} else {
    // Default to light mode if no theme is saved
    setTheme('light');
}

// Add event listener to the toggle switch
themeToggle.addEventListener('change', toggleTheme);

