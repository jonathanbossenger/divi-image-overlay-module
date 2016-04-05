jQuery(function ($) {
    $( '.aw_image_overlay .overlay' ).hover(
        function() {
            $( this ).addClass( "aw-show-overlay" );
        }, function() {
            $( this ).removeClass( "aw-show-overlay" );
        }
    );
});