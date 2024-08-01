let currentIndex = 0;
let isTransitioning = false;

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (!isTransitioning) {
        currentIndex++;
        if (currentIndex < totalSlides) {
            slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
        } else {
            slides.style.transition = 'none'; // Remove transition for jump to start
            slides.style.transform = 'translateX(0)';
            currentIndex = 0;
            setTimeout(() => {
                slides.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
                currentIndex++;
                slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
            }, 50); // Small delay to ensure the jump to start is rendered
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const firstSlide = slides.querySelector('.slide').cloneNode(true);
    slides.appendChild(firstSlide);

    setInterval(showSlides, 3000); // Change l'image toutes les 3 secondes
});
