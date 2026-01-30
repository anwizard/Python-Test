// Handle button click
function handleButtonClick() {
    alert('Welcome! Thank you for clicking the button.');
    // Scroll to services section
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields.');
                return;
            }
            
            // Show success message
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            
            // Reset form
            this.reset();
        });
    }
});

// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
