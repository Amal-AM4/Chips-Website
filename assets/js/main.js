document.addEventListener('DOMContentLoaded', () => {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    const header = document.getElementById('header');

    // menu show
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // menu hidden
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav-link');
    console.log("navLink elements found:", navLink.length);

    const linkAction = (event) => {
        event.preventDefault(); 
        navMenu.classList.remove('show-menu');
        console.log('remove show-menu');
    };
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /*=============== SHADOW HEADER ===============*/
    const shadowHeader = () => {
        window.scrollY >= 50
            ? header.classList.add('shadow-header')
            : header.classList.remove('shadow-header');
    };
    window.addEventListener('scroll', shadowHeader);

    /*=============== SWIPER FAVORITES ===============*/ 
    const swipeFavorites = new Swiper('.favorites__swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: 'auto',
    });

    /*=============== SHOW SCROLL UP ===============*/ 
    const scrollUp = () => {
        const scrollUpT = document.getElementById('scroll-up');
        window.scrollY >= 350
            ? scrollUpT.classList.add('show-scroll')
            : scrollUpT.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', scrollUp);

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollDown = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

            if (sectionsClass) {
                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                } else {
                    sectionsClass.classList.remove('active-link');
                }
            }
        });
    };
    window.addEventListener('scroll', scrollActive);

    /*=============== SCROLL REVEAL ANIMATION ===============*/
    // Your ScrollReveal code can go here if needed
});
