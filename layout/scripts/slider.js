let currentIndex = 0;
let autoplayInterval = null;

const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');
const totalItems = galleryItems.length;

document.querySelector('.prev-button').addEventListener('click', () => {
    stopAutoplay();
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    stopAutoplay();
    navigate(1);
});

function navigate(direction) {
    // Pausar el video actual
    const currentVideo = galleryItems[currentIndex].querySelector('iframe');
    if (currentVideo) {
        const videoSrc = currentVideo.src; // Guardar la fuente original
        currentVideo.src = ''; // Pausar el video eliminando temporalmente la fuente
        currentVideo.src = videoSrc; // Restaurar la fuente
    }

    // Calcular el nuevo índice y deslizarse al video correspondiente
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    const offset = -currentIndex * 100;
    galleryContainer.style.transform = `translateX(${offset}%)`;
}

// Función de Autoplay
function startAutoplay(interval) {
    stopAutoplay(); // Limpia intervalos previos para evitar conflictos
    autoplayInterval = setInterval(() => {
        navigate(1); // Avanza al siguiente video
    }, interval);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos
startAutoplay(3000);

// Pausar autoplay cuando el usuario usa las flechas
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});
