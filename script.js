const themeToggle = document.getElementById('checkbox');
const htmlElement = document.documentElement;
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-content');

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

// Function to handle page switching
function showPage(pageId) {
    pages.forEach(page => {
        if (page.id === `${pageId}-page`) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

// Function to handle active link styling
function setActiveLink(link) {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
}

// Event listener for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const pageId = event.target.getAttribute('data-page');
        showPage(pageId);
        setActiveLink(event.target);
    });
});

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

// Add event listener to the theme toggle switch
themeToggle.addEventListener('change', toggleTheme);

// Handle the proxy form submission (a basic example)
const proxyForm = document.getElementById('proxy-form');
const proxyUrlInput = document.getElementById('proxy-url');
const proxyViewer = document.getElementById('proxy-viewer');

if (proxyForm) {
    proxyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const url = proxyUrlInput.value;
        if (url) {
            // For a functional proxy, you would need a server-side component.
            // This is just a basic frontend example using an iframe.
            // Note: Many sites block iframe embedding.
            const iframe = document.createElement('iframe');
            iframe.src = url;
            proxyViewer.innerHTML = '';
            proxyViewer.appendChild(iframe);
        }
    });
}
