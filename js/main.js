$(document).ready(function(){
    //Testimonial slider
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
   }); 
 

    //Top slider
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
   });

   $('.open').on('click', function(){

    if($(this).text() == 'Open Menu'){
        $('.mobile').show();
        $(this).text('Close Menu');
    } else{
        $('.mobile').hide();
        $(this).text('Open Menu');
    }
  
});
  
});
            
  







