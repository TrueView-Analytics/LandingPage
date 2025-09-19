document.addEventListener('DOMContentLoaded', function () {
    // Collapsible blocks for info section (open on click or hover, close on unhover)
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(btn => {
        const content = btn.nextElementSibling;
        // Click to toggle
        btn.addEventListener('click', function () {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                content.style.maxHeight = null;
                content.style.padding = '0 22px';
            } else {
                btn.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '16px 22px';
            }
        });
        // Hover to open
        btn.addEventListener('mouseenter', function () {
            btn.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '16px 22px';
        });
        // Unhover to close
        btn.addEventListener('mouseleave', function () {
            btn.classList.remove('active');
            content.style.maxHeight = null;
            content.style.padding = '0 22px';
        });
        // Also close when mouse leaves the content area
        content.addEventListener('mouseleave', function () {
            btn.classList.remove('active');
            content.style.maxHeight = null;
            content.style.padding = '0 22px';
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
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
                if (response.ok) {
                    formStatus.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo en la mayor brevedad.';
                    formStatus.style.color = 'green';
                    contactForm.reset();
                } else {
                    return response.json().then(data => {
                        throw new Error(data.message || 'Error al enviar el mensaje.');
                    });
                }
            })
            .catch(error => {
                formStatus.textContent = 'Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.';
                formStatus.style.color = 'red';
                console.error('Form submission error:', error);
            });
        });
    }

    // Features grid animation on scroll
    const gridContainer = document.querySelector('.features-grid');
    if (gridContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gridContainer.classList.add('show');
                    gridContainer.classList.remove('hide');
                } else {
                    gridContainer.classList.add('hide');
                    gridContainer.classList.remove('show');
                }
            });
        }, {
            threshold: 0.5
        });
        observer.observe(gridContainer);
    }
});