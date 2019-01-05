// live search ready
jQuery(document).ready(function($){

// convert alt to lower
$('.container img').each(function(){
$(this).prop('alt', $(this).prop('alt').toLowerCase());
});

// use input box 
$('#user_input').on('keyup', function(){

// search criteria -> lower
var searchTerm = $(this).val().toLowerCase();

    // if search criteria found show else hide
    $('.container img').each(function(){
        console.log($(this).prop('alt').indexOf(searchTerm));
        if ($(this).prop('alt').indexOf(searchTerm) >= 0 || searchTerm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });

});

});