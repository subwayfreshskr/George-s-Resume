// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show the button when the user scrolls down 200px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
