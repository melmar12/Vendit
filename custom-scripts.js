
// default loaded content 
$( ".Content" ).load( "home.html" );



// window load functions 
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

// twitter widget js
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';

    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+"://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
    }
}(document,"script","twitter-wjs");


// resources links
$(document).ready(function() {
    $(".resources a").click(function() {
             $('#pdf_content').attr("data", "Cal/" + $(this).attr('class') + ".pdf?#zoom=50&scrollbar=0&toolbar=0&navpanes=0");
    });
}); // TODO: fix page jumping when links are clicked 

    





