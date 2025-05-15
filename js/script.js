// Theme Toggle Function
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.innerHTML = newTheme === 'dark' ? '🌙' : '☀️';
}

// Initialize Theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-bs-theme', savedTheme);

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.innerHTML = savedTheme === 'dark' ? '🌙' : '☀️';
}

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();

  // Initialize AOS Animation
  AOS.init({
    duration: 1000,
    once: true
  });
});
