document.addEventListener('scroll', function() {
    const socialNav = document.getElementById('social-nav');
    const servicesSection = document.getElementById('servicios');
    const swiper =document.getElementById('swiper');
    const titleservices = document.getElementById('title-services');

    const servicesSectionTop = servicesSection.getBoundingClientRect().top;

    if (servicesSectionTop <= 500) {
        socialNav.classList.add('right-align');
    } else {
        socialNav.classList.remove('right-align');
    }

    if (servicesSectionTop <= 300) {
        swiper.classList.add('fade-swiper');
        titleservices.classList.add('top-title');
    } else {
        swiper.classList.remove('fade-swiper');
        titleservices.classList.remove('top-title');
    }
});
