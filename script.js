document.addEventListener("DOMContentLoaded", function(event) {


    (function($) {
        $(function() {
            $('.menu__icon').on('click', function() {
                $(this).closest('.menu')
                    .toggleClass('menu_state_open');
            });

            $('.send').on('click', function() {

                $(this).closest('.menu')
                    .removeClass('menu_state_open');
            });
        });
    })(jQuery);
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }
});