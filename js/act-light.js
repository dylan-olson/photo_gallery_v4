
// lightgallery call
$(document).ready(function() {
  $("#lightgallery").lightGallery(); 
});

// lightgallery options
$('#lightgallery').lightGallery({
    mode: 'lg-slide',
    cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
    height: '100%',
    width: '100%',
    download: false,
    getCaptionFromTitleOrAlt: true
}); 


