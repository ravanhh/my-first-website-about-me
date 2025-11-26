const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check if user has dark mode preference saved
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
    htmlElement.setAttribute('data-theme', 'dark');
    darkModeToggle.innerHTML = '<span class="toggle-icon">☀️</span>';
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<span class="toggle-icon">🌙</span>';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<span class="toggle-icon">☀️</span>';
    }
});