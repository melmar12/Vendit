/*
TODO:

- reorganize code order

*/


// default loaded content 


$( ".Content" ).load( "home.html" );

$( ".parents-link" ).click(function() {
  $( ".Content" ).load( "parents.html" );
});

$( ".home-link" ).click(function() {
  $( ".Content" ).load( "home.html" );
});

// Window Load Functions 
$(window).load(function() {
    // image carousel - plugin 
    $('.flexslider').flexslider( {
        animation: "slide",
    });
    
    // text carousel - plugin
    $('.text-carousel').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        dots: true,
    
    }); // TODO: fix next/prev buttons
   
});


// Google Maps - plugin 
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

// Twitter Widget js - plugin
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


// Resources Links
$(document).ready(function() {
    $(".resources a").click(function() {
             $('#pdf_content').attr("data", "Cal/" + $(this).attr('class') + ".pdf?#zoom=50&scrollbar=0&toolbar=0&navpanes=0");
    });
}); // TODO: fix page jumping when links are clicked 


// Sticky Navigation 
var nav                 = document.querySelector('.nav'),
    nav_height          = getComputedStyle(nav).height.split('px')[0],
    nav_links           = document.querySelector('.nav-links'),
    nav_links_height    = getComputedStyle(nav_links).height.split('px')[0],
    sticky_class        = 'is-fixed';
    unfixed             = 'unfixed'


function stickyScroll(e) {

  if( window.pageYOffset > (nav_height) ) {
    nav_links.classList.add(sticky_class);
  }

  if( window.pageYOffset < (nav_height) ) {
    nav_links.classList.remove(sticky_class);

  }
}

window.addEventListener('scroll', stickyScroll, false);
// TODO: reverse slide up effect?

    




