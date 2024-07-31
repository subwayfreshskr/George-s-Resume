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
let scrollCount = 0;
const scrollThreshold = 3;

showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("show");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("show");
    dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.getElementById("browserWindow").addEventListener("wheel", function(event) {
    event.preventDefault();
    scrollCount++;

    if (scrollCount >= scrollThreshold) {
        if (event.deltaY > 0) {
            plusSlides(1);
        } else {
            plusSlides(-1);
        }
        scrollCount = 0;
    }
});


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
