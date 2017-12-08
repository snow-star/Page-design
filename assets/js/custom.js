$(document).ready( function() {
  
   function log(str) {
    $("#console").append("<div class='line'>"+str+"</div>");
  }

  log("Hello, (jquery version - " + $.fn.jquery + ")");
  
  $(document).on( "click", "#play", function(e) { e.preventDefault();
    var t = $(this), 
    p = t.parents(".video-wrapper"),
    v = p.siblings("video-player"); 

    $(".video-wrapper video").fadeOut( 400, function() {
      $(".video--content").fadeOut( 400, function() {
        log( "fadeOut : complete" );
        $(".video-player").addClass("visible").fadeIn( 400 );
      });
    });
                                                 
    
  });
});