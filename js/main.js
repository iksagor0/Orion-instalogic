// ====== NAV-BAR Sticy ======
window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// OPEN CLOSE SIDE-BAR BY BUTTON
const sidebarBtn = document.querySelector(".sidebar-btn-area");
const navItems = document.querySelectorAll(
    "#header #bottom-header .container .navbar ul li a"
);

const sidebarActive = () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sidebar-active");
};

sidebarBtn.addEventListener("click", sidebarActive);

navItems.forEach((item) => {
    item.addEventListener("click", sidebarActive);
});

// NAV ITEM ACTIVE when it's on screen
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current;
    sections.forEach((section) => {
        if (pageYOffset >= section.offsetTop - section.clientHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("nav-active");

        if (item.classList.contains(current)) {
            item.classList.add("nav-active");
        }
    });
});

//  ====== BANNER SLIDER ======
// const slides = document.querySelectorAll('.banner-slider .slide');
// let counter = 0;

// const next = () => {

//     if (counter <= slides.length - 1) {
//         slides.forEach((item) => {
//             item.classList.remove("active");
//         })

//         slides[counter].classList.add("active");
//         counter++;
//     }
//     if (counter >= slides.length) {
//         counter = 0;
//     }
// }

// setInterval(() => {
//     next();
// }, 5000);

const swiper = new Swiper(".banner-slider", {
    direction: "horizontal",
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
    },
});

// =========    PRODUCTS SLIDER =========
// TINY SLIDER
// const productSlider = tns({
//     container: ".products-slider",
//     items: 1,
//     slideBy: 1,
//     autoplay: true,
//     controls: false,
//     autoplayButtonOutput: false,
//     autoplayTimeout: 2000,
//     speed: 1000,
//     responsive: {
//         850: {
//             items: 2,
//         },
//         300: {
//             autoplayTimeout: 1500,
//             speed: 500,
//             item: 1,
//         },
//     },
// });

var swiperTwo = new Swiper(".products-slider", {
    // SWIPER SLIDER
    loop: true,
    speed: 800,
    slidesPerView: 2,
    autoplay: {
        delay: 500,
    },
    spaceBetween: 30,
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
