
AOS.init();

let counter = document.querySelector(".row .row");
let counter_Up = new counterUp(counter);
counter_Up.start();
counter_Up.update();

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 2,
    responsive: {
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
});
