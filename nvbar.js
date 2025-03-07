function toggleMenu() {
    const sidemenu = document.getElementById('sidemenu');
    sidemenu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const sidemenu = document.getElementById('sidemenu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!sidemenu.contains(event.target) && 
        !menuIcon.contains(event.target) && 
        sidemenu.classList.contains('active')) {
        sidemenu.classList.remove('active');
    }
});