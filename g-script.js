document.addEventListener('DOMContentLoaded', function() {
    const pins = document.querySelectorAll('.pin');
    const sidebar = document.querySelector('.sidebar');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarYear = document.getElementById('sidebar-year');
    const sidebarDescription = document.getElementById('sidebar-description');
    const closeBtn = document.querySelector('.close-btn');

    pins.forEach(pin => {
        pin.addEventListener('click', function() {
            sidebarTitle.textContent = this.getAttribute('data-title');
            sidebarYear.textContent = this.getAttribute('data-year');
            sidebarDescription.textContent = this.getAttribute('data-description');

            sidebar.classList.add('open'); // Slide in the sidebar
        });
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open'); // Close the sidebar
    });
});

// Back Button Function
function goBack() {
    window.location.href = "character-selection.html";
}