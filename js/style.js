$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
        // checks if window is scrolled more than 70px, adds/removes solid class
        if ($(this).scrollTop() > 70) {
            $('.navbar').addClass('solid');

        } else {
            $('.navbar').removeClass('solid');
        }


    });


});