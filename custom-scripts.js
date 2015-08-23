
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

    function initMap() {
        
       var myLatLng = {lat: 29.612740, lng: -95.545074};
    
       var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 29.613616, lng: -95.556722},
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER
            }
        });
        
         var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });

        
        
    };
