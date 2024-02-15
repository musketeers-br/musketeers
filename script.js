// Carousel functionality
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    let currentIndex = 0;
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        items.forEach(item => {
            item.style.display = 'none';
        });
        items[index].style.display = 'block';
    }

    function nextItem() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        }
        showItem(currentIndex);
    }

    // Initialize carousel
    showItem(currentIndex);

    // Add event listeners for navigation
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');

    prevBtn.addEventListener('click', prevItem);
    nextBtn.addEventListener('click', nextItem);
});

// Dark mode switching
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});