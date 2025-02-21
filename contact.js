document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to your server
        // Here's a simulation of sending an email
        setTimeout(() => {
            // Simulate successful email sending (90% chance of success)
            if (Math.random() < 0.9) {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            } else {
                // Simulate an error
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            }
        }, 1500); // Simulate network delay
    });
});