document.addEventListener('DOMContentLoaded', function () {
    // Collapsible blocks for info section
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '16px 22px';
            } else {
                content.style.maxHeight = null;
                content.style.padding = '0 22px';
            }
        });
    });
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

    //TEST FOR GRID ITEMS ANIMATION ON SCROLL
    // Select the grid container
    const gridContainer = document.querySelector('.features-grid');

    // Create an Intersection Observer to observe when the grid enters and exits the viewport
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // When the grid comes into view, add the 'show' class to trigger animations
        gridContainer.classList.add('show');
        gridContainer.classList.remove('hide'); // Ensure hide is removed when visible
        } else {
        // When the grid leaves the viewport, add the 'hide' class to trigger disappear animations
        gridContainer.classList.add('hide');
        gridContainer.classList.remove('show'); // Remove the show class when not visible
        }
    });
    }, {
    threshold: 0.5  // Trigger when 50% of the grid is visible
    });

    // Start observing the grid container
    observer.observe(gridContainer);






});