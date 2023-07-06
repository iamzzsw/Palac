$(document).ready(function () {

    $('.center').slick({
        centerMode: true,
        dots: true,
        infinite: false,
        variableWidth: true,
        slidesToShow: 3,
        draggable: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
})

