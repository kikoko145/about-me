$(document).ready(function () {
    $(window).scroll(function () {
        //check if windows scrolled more than 500px then add/remove solid class
        if ($(this).scrollTop > 500) {
            $('.navbar').addClass('solid');
            $(".back-to-top").addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $(".back-to-top").addClass('visible'); 
        }
    });
});

$(document).ready(function () {
    //add smooth transition to all links
    $("a").on('click', function (event) {
        
        //make sure this .hash have some value before everdriving default behavior
        if (this.hash !=="") {
            //prevent default anchor click behavior
            event.preventDefault();

            //store hash
             var hash = this.hash;

             //using jquey animate() method to add smooth page scroll
             //optional number (800) specifies the numeber of miliseconds it takes to scroll to the specified area

             $('html, body').animate({
                scrollTop: $(hash).offset().top
             }, 800, function () {

                //add hash (#) to url when done scrolling{default click behavior}
                window.location.hash = hash;
             });
        } // end if
    });
});