let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
    
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.navbar').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    logo:true,
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidePerView: 1,
        },
        640: {
            slidePerView: 2,
        },
        768: {
            slidePerView: 3,
        },
        1024: {
            slidePerView: 4,
        },
    },
});