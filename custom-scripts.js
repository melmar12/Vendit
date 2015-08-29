
// default loaded content 
$( ".Content" ).load( "parents.html" );




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

    // resources links

    // "Calendar" link clicked
    // make Calendar links visable
    // remove this class when other main links are clicked
    // click the year link (2015)
    // add year to end of class (.012015) Jan 2015

    // when a is clicked (.this ??)
    // take id name
    // add "-file" to end of id
    // use new id "id-file" and replace HTML href=".." to display correct file name


$(document).ready(function() {


$("#Year2016").click(function() {

    // add: if 'this' is = 'this'+2016 then do nothing

    $('.Month a').each(function(){ // if class char length is = or > 3 do this
        $(this).attr("class", $(this).attr('class') + "2016");
    });


});





$(".month a").click(function() {
         $('#pdf_content').attr("data", "Cal/" + $(this).attr('class') + ".pdf?#zoom=85&scrollbar=0&toolbar=0&navpanes=0");
});


});

    
