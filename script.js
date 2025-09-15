document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
        })
        .then(response => {
            console.log("Formspark response:", response);
            return response.json();
        })
        .then(data => {
            console.log("Response JSON:", data);
            if (data && data.id) {
                formStatus.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo en la mayor brevedad.';
                formStatus.style.color = 'green';
                contactForm.reset();
            } else {
                throw new Error(data.message || 'Error desconocido');
            }
        })
        .catch(error => {
            formStatus.textContent = 'Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.';
            formStatus.style.color = 'red';
            console.error('Form submission error:', error);
        });
    });
});