
// default loaded content 
$( ".Content" ).load( "home.html" );

$(window).load(function() {
    // image carousel
    $('.flexslider').flexslider( {
        animation: "slide",
    });
    
    // text carousel
    $('.text-carousel').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        dots: true,
    

    });
    
    });