document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    const menuButton = document.getElementById('menu-button');
    const nav = document.getElementById('main-nav');

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
});

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let altText = document.getElementById("altText");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("show");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("show");

    // Update title bar with alt text of the current image
    altText.textContent = slides[slideIndex - 1].querySelector("img").alt;
}

showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Removed the mouse wheel functionality

let startX;
document.getElementById("browserWindow").addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX;
});

document.getElementById("browserWindow").addEventListener("touchend", function(event) {
    let endX = event.changedTouches[0].clientX;
    let difference = startX - endX;

    if (Math.abs(difference) > 50) {
        if (difference > 0) {
            plusSlides(1);
        } else {
            plusSlides(-1);
        }
    }
});

document.querySelector('.arrow-animation').addEventListener('click', function() {
    document.querySelector('.custom-section').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('load', function() {
    if (window.innerWidth <= 768) {
        const maskOverlay = document.querySelector('.mask-overlay');
        if (maskOverlay) {
            setTimeout(function() {
                maskOverlay.style.opacity = '0';
                setTimeout(function() {
                    maskOverlay.style.display = 'none';
                }, 1000);
            }, 3500);
        }
    }
});

