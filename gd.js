document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    const menuButton = document.getElementById('menu-button');
    const nav = document.getElementById('main-nav');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselImages = document.querySelector('.carousel-images');
    let index = 0;

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        backToTopButton.classList.toggle('show', scrollTop > 200);
    }

    // Scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll to top when back-to-top button is clicked
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Toggle navigation and menu button styles when menu button is clicked
    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            const isNavVisible = nav.classList.toggle('show');
            menuButton.classList.toggle('change', isNavVisible);
            nav.style.maxHeight = isNavVisible ? `${nav.scrollHeight}px` : '0';
        });
    }

    // Carousel functionality
    function showSlide(newIndex) {
        const totalSlides = document.querySelectorAll('.carousel-image').length;
        if (newIndex >= totalSlides) {
            index = 0;
        } else if (newIndex < 0) {
            index = totalSlides - 1;
        } else {
            index = newIndex;
        }
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(index + 1);
    });
});
