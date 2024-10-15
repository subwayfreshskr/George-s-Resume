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
        '行銷活動': ['pic/accupass實體_banner.png','pic/EDM-02.png','pic/EDM-04.png','pic/EDM-06.png',
            'pic/EDM-08.png','pic/FB_-01.png','pic/主視覺-07.png'
            ,'pic/主視覺-13.png','pic/線上工作坊行程.png','pic/6085252-02.png'],

        '課程推廣': ['pic/Python與TEJ API：量化金融數據分析全攻略.png','pic/howhow課綱_工作區域 1 複本 3.png','pic/Python與TEJ API：量化金融數據分析全攻略(課前提問)_工作區域 1 複本 2.png'
            ,'pic/HOWHOW_工作區域 1 複本.png','pic/howhow課綱-1-16.png','pic/howhow課綱-15.png','pic/howhow課綱_工作區域 1 複本 4.png','pic/howhow課綱_工作區域 1 複本 2.png'
            ,'pic/google classroom_工作區域 1.png'],
            
        '公司宣傳': ['pic/104圖片_工作區域 1-01.png','pic/104圖片-02.png','pic/104圖片-11.png','pic/企業商情.png',
            'pic/信用風險.png','pic/審計品質.png','pic/法遵科技.png','pic/評價分析.png'
            ,'pic/量化金融.png'],

        '圖標設計': ['pic/DRUG.png','pic/ALCOHOL.png','pic/healthy.png','pic/PEPPER.png','pic/HAND.png',
            'pic/vitamin c.png','pic/RAZOR.png','pic/LIPSTICK.png','pic/all.png','pic/範例教學.png','pic/聯絡我們.png','pic/關於TQuant Lab.png',
        'pic/資料集.png','pic/登入及註冊.png','pic/技術手冊.png','pic/首頁.png','pic/熱門資訊 (2).png',
            'pic/熱門產品 (2).png','pic/熱門文章 (2).png','pic/影音學習 (2).png','pic/資產 6.png','pic/模組化建構您的策略.png','pic/龐大且高品質的資料庫.png','pic/強大、嚴謹的回測分析套件.png',
            'pic/官網會員圖_工作區域 1 複本 2.png','pic/官網會員圖_工作區域 1 複本.png','pic/官網會員圖_工作區域 1.png','pic/月暴徒_工作區域 1.png'],

        '社群推播': ['pic/中秋節_line頭像.png','pic/中秋節貼文(中).png','pic/春節_line頭像-01.png','pic/春節_貼文.png','pic/端午節頭貼-04.png',
            'pic/端午貼文(中)-02.png'],

        '個人創作': ['pic/IMG-3490.jpg','pic/IMG-3492.jpg','pic/IMG-3500.jpg','pic/IMG-3521.jpg','pic/工作區域 1.png',
            'pic/工作區域 2.png','pic/工作區域 3.png','pic/工作區域 4.png']
    };
    let currentIndex = 0;

    document.querySelectorAll('.browser-window').forEach(window => {
        window.addEventListener('click', function () {
            const category = this.querySelector('.slideshow-container').dataset.category;
            if (images[category]) {
                showModal(category);
            } else {
                console.error('No images found for category:', category);
            }
        });
    });

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

    document.querySelectorAll('.browser-window').forEach(window => {
        window.addEventListener('click', function () {
            const category = 'marketing';
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
