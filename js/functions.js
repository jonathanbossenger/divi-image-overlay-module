jQuery(function ($) {

    var overlay_image = $( '.et_pb_image_overlay .overlay' );
    overlay_image.css('position', 'absolute');
    /*position: absolute;*/

    overlay_image.hover(
        function() {
            $( this ).addClass( "aw-show-overlay" );
        }, function() {
            $( this ).removeClass( "aw-show-overlay" );
        }
    );
});