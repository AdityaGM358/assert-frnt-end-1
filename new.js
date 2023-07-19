const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Function to close sidebar on clicking outside
document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!targetElement.closest('.sidebar') && !targetElement.closest('.sidebar-toggle')) {
        sidebar.classList.remove('active');
    }
});
