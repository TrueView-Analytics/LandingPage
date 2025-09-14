document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting and reloading the page

        // In a real application, you would send this data to a server here.
        // For example, using fetch() or an AJAX call.

        // Example of what to do with the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value; // Added company field
        const message = document.getElementById('message').value;

        // Log the data to the console for demonstration
        console.log('Form Submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Company:', company);
        console.log('Message:', message);

        // Display a success message to the user
        formStatus.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo en la mayor brevedad.';
        formStatus.style.color = 'green';
        contactForm.reset(); // Clear the form fields
    });
});