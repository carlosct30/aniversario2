document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password-input');
    const loginSection = document.querySelector('.login-section');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ocultar la caja de inicio de sesión
        loginSection.style.display = 'none';

        // Verificar contraseña (en un entorno de producción, esto se enviaría al servidor)
        if (passwordInput.value === '27') {
            const contentSection = document.querySelector('.content-section');
            contentSection.style.display = 'block';
            
            // Mostrar feliz día con efectos
            setTimeout(function() {
                const happyBirthdaySection = document.querySelector('.happy-birthday-section');
                happyBirthdaySection.style.opacity = '1';
                happyBirthdaySection.style.transform = 'translateY(0)';
                
                happyBirthdaySection.style.animation = 'fadeIn 1s ease-in-out forwards';
            }, 500);

            // Mostrar imágenes con efectos
            const imageGallery = document.querySelector('.image-gallery');
            imageGallery.style.opacity = '1';
            imageGallery.style.transform = 'translateY(0)';
            
            imageGallery.querySelectorAll('img').forEach(img => {
                img.style.animation = 'scaleUp 0.5s ease-in-out forwards';
            });
            const images = imageGallery.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('click', function() {
                alert('¡Feliz 27, TE AMO!');
            });
        });

            // Mostrar video
            const videoSection = document.querySelector('.video-section');
            videoSection.style.opacity = '1';
            videoSection.style.transform = 'translateY(0)';
            
            videoSection.style.animation = 'rotate360 10s infinite linear';

            // Mostrar sorpresa
            const surpriseLink = document.querySelector('.surprise-link');
            surpriseLink.style.opacity = '1';
            surpriseLink.style.transform = 'scale(1)';
            surpriseLink.style.animation = 'slideIn 1s ease-in-out forwards';

            // Animación de salida suave al dejar la página
            window.onbeforeunload = function() {
                contentSection.style.animation = 'fadeOut 1s ease-in-out forwards';
            };
        } else {
            alert('Contraseña incorrecta');
            // Muestar nuevamente la caja de inicio de sesión
            loginSection.style.display = 'block';
        }
    });
});