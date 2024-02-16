$(document).ready(function(){
    $(".img1, .img2, .img3").click(function() { 
        var altPicValue = $(this).attr('alt-pic');
        console.log('alt-pic is', altPicValue);
        
        // Check if the data attribute 'original-src' is set
        if (!$(this).data('original-src')) {
            // If not set, store the original source
            $(this).data('original-src', $(this).attr('src'));
        }
        
        // Get the current source of the image
        var currentSrc = $(this).attr('src');
        
        // Toggle between original and alternate sources
        if (currentSrc === altPicValue) {
            // If the current source is the alternate source, switch to the original
            $(this).attr('src', $(this).data('original-src'));
            console.log('Image source changed to original', $(this).data('original-src'));
        } else {
            // If the current source is the original, switch to the alternate
            $(this).attr('src', altPicValue);
            console.log('Image source changed to', altPicValue);
        }
    });
});
