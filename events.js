document.addEventListener('DOMContentLoaded', function() {
    const registerButtons = document.querySelectorAll('.register-btn');
    
    registerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventType = this.getAttribute('data-event');
            // Redirect to registration page with event parameter
            window.location.href = `registration.html?event=${eventType}`;
        });
    });
});