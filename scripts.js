document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    const menuButton = document.getElementById('menu-button');
    const nav = document.getElementById('main-nav');
    const toggleBottomTextButton = document.getElementById('toggle-bottom-text');
    const bottomText = document.querySelector('.bottom-text');

    // Scroll event handler
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

    // Toggle bottom-text and button styles when toggle button is clicked
    if (toggleBottomTextButton && bottomText) {
        toggleBottomTextButton.addEventListener('click', function () {
            const isExpanded = bottomText.classList.toggle('expanded');
            toggleBottomTextButton.classList.toggle('expanded', isExpanded);

            if (isExpanded) {
                bottomText.style.opacity = '1';
                bottomText.style.visibility = 'visible';
                bottomText.style.maxHeight = '500px';
            } else {
                bottomText.style.opacity = '0';
                bottomText.style.visibility = 'hidden';
                bottomText.style.maxHeight = '0';
            }
        });
    }
});
