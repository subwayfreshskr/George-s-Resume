document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    const menuButton = document.getElementById('menu-button');
    const nav = document.getElementById('main-nav');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const carouselImage = document.getElementById('carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const body = document.body;

    let currentCategory = '';
    const images = {
        '行銷活動': ['gdd/線上工作坊行程.png','gdd/EDM-02.png','gdd/EDM-04.png','gdd/EDM-06.png',
            'gdd/EDM-08.png','gdd/FB_-01.png','gdd/主視覺-07.png','gdd/主視覺-13.png'],
        '課程活動': ['pic/端午節_Banner.png'],
        '公司宣傳': ['pic/端午節_Banner.png'],
        '小圖設計': ['pic/端午節_Banner.png'],
        '社群推廣': ['pic/端午節_Banner.png'],
        '個人設計': ['pic/端午節_Banner.png']
    };
    let currentIndex = 0;

    function showModal(category) {
        currentCategory = category;
        currentIndex = 0;
        updateCarouselImage();
        modal.style.display = 'block';
        body.classList.add('no-scroll');
    }

    function hideModal() {
        modal.style.display = 'none';
        body.classList.remove('no-scroll');
    }

    function updateCarouselImage() {
        if (images[currentCategory] && images[currentCategory][currentIndex]) {
            carouselImage.src = images[currentCategory][currentIndex];
        }
    }

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        backToTopButton.classList.toggle('show', scrollTop > 200);
    }

    window.addEventListener('scroll', handleScroll);

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            const isNavVisible = nav.classList.toggle('show');
            menuButton.classList.toggle('change', isNavVisible);
            nav.style.maxHeight = isNavVisible ? `${nav.scrollHeight}px` : '0';
        });
    }

    document.querySelectorAll('.category-box').forEach(box => {
        box.addEventListener('click', function () {
            const category = this.innerText.trim();
            if (images[category]) {
                showModal(category);
            }
        });
    });

    closeButton.addEventListener('click', function () {
        hideModal();
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            hideModal();
        }
    });

    prevButton.addEventListener('click', function () {
        const categoryImages = images[currentCategory];
        if (categoryImages) {
            currentIndex = (currentIndex - 1 + categoryImages.length) % categoryImages.length;
            updateCarouselImage();
        }
    });

    nextButton.addEventListener('click', function () {
        const categoryImages = images[currentCategory];
        if (categoryImages) {
            currentIndex = (currentIndex + 1) % categoryImages.length;
            updateCarouselImage();
        }
    });
});
