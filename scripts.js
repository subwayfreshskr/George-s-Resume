document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    const menuButton = document.getElementById('menu-button');
    const nav = document.getElementById('main-nav');
    const toggleBottomTextButton = document.getElementById('toggle-bottom-text');
    const bottomText = document.querySelector('.bottom-text');

    // 滚动事件处理函数
    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        backToTopButton.classList.toggle('show', scrollTop > 200);
    }

    // 滚动事件监听器
    window.addEventListener('scroll', handleScroll);

    // 点击“回到顶部”按钮时，平滑滚动到顶部
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 点击菜单按钮时，切换导航栏的显示状态和按钮样式
    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            const isNavVisible = nav.classList.toggle('show');
            menuButton.classList.toggle('change', isNavVisible);
            nav.style.maxHeight = isNavVisible ? `${nav.scrollHeight}px` : '0';
        });
    }

    // 点击“展开/收起 内容”按钮时，切换 bottom-text 的显示状态
    if (toggleBottomTextButton && bottomText) {
        toggleBottomTextButton.addEventListener('click', function () {
            const isExpanded = bottomText.classList.toggle('expanded');
            toggleBottomTextButton.classList.toggle('expanded', isExpanded);
        });
    }
});
