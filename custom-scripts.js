
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


// google maps
   var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: -34.397, 
                lng: 150.644
            },
            zoom: 8
        });
    };
