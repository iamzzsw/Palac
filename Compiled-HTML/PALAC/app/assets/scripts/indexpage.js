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
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
})

