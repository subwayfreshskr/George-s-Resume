let slideIndex = 1;
let scrollCount = 0; // 初始化滾動計數器
const scrollThreshold = 3; // 定義需要滾動幾次才換頁

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
    event.preventDefault(); // 阻止默认滚动行为
    scrollCount++;

    if (scrollCount >= scrollThreshold) {
        if (event.deltaY > 0) {
            // 向下滚动
            plusSlides(1);
        } else {
            // 向上滚动
            plusSlides(-1);
        }
        scrollCount = 0; // 重置滾動計數器
    }
});