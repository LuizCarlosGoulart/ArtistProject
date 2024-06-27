document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = [
        'images/img01.webp',
        'images/img02.webp',
        'images/img03.webp',
        'images/img04.webp',
        'images/img05.webp',
        'images/img06.webp',
    ];

    const galleryContainer = document.querySelector('.gallery-container');
    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Arte do artista';
        galleryContainer.appendChild(img);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Aqui você pode adicionar o código para enviar o formulário
        alert("Mensagem enviada com sucesso!");
    });

    const images = document.querySelectorAll('.gallery-container img');

    function checkVisibility() {
        const gallerySection = document.querySelector('#gallery');
        const rect = gallerySection.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            images.forEach(img => {
                const imgRect = img.getBoundingClientRect();
                if (imgRect.top < window.innerHeight && imgRect.bottom > 0) {
                    img.classList.add('visible');
                }
            });
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Para verificar a visibilidade no carregamento inicial

    // Pop-up functionality
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');

    document.body.appendChild(popup);
    document.body.appendChild(popupOverlay);

    images.forEach(img => {
        img.addEventListener('click', function() {
            const popupImg = document.createElement('img');
            popupImg.src = img.src;
            popup.innerHTML = '';
            popup.appendChild(popupImg);
            popup.classList.add('active');
            popupOverlay.classList.add('active');
        });
    });

    popupOverlay.addEventListener('click', function() {
        popup.classList.remove('active');
        popupOverlay.classList.remove('active');
    });

    // Header visibility control
    const header = document.querySelector('header');
    let isInitialSection = true;

    function handleScroll() {
        if (window.scrollY === 0) {
            header.style.top = '0';
            isInitialSection = true;
        } else if (isInitialSection && window.scrollY > 50) {
            header.style.top = '-60px';
            isInitialSection = false;
        }
    }

    function handleMouseMove(event) {
        if (!isInitialSection && event.clientY < 50) { // Se o mouse estiver no topo da tela
            header.style.top = '0';
        } else if (!isInitialSection) {
            header.style.top = '-60px'; // Ajuste conforme a altura do header
        }
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    // Toggle menu visibility on logo click
    const logo = document.querySelector('.logo img');
    const nav = document.querySelector('nav ul');

    logo.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
});
