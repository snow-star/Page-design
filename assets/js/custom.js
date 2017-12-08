$(document).ready(function(){
  
  $('#bg-table td').each(function(i){
    
    var
        $o = $(this),
        $tr = $o.closest('tr'),
        col = $o.index(),
        row = $tr.index(),
        xCord = col*160, 
        yCord = row*120;
    
    $o.css({ backgroundPosition: -xCord+'px  '+(-yCord)+'px'});
    
  });
  (function slide(){
    var num = 0;
    (function animation(){
      var
          aniTime = 125,
          delay = 5000,
          $cells = $('#bg-table td'),
          numCells = $cells.length,
          i = 0,
          type = 0;
      
      if (num % 2 == 0) {
        type = 1;
        delay = 0;
        setTimeout(function(){changeImage();}, (aniTime*numCells));
      }
     
        (function animationLoop(){
          setTimeout(function(){
            $('#bg-table td').eq(i).css('opacity', type);
            i++;
            if(i < numCells) {
              animationLoop();
            }
          }, aniTime)
            })(); // Loop
      
      num++;
      setTimeout(function(){         
        animation();
      }, (aniTime*numCells)+delay);
      
      function changeImage(){
         var image = $('#background');
        
        if (image.hasClass('on')){
          image.removeClass('on');
          image.css('background-image', 'url(http://lorempixel.com/output/city-q-c-640-480-3.jpg)');
        }
        else {
        image.addClass('on');
          image.css('background-image', 'url(http://lorempixel.com/output/city-q-c-640-480-7.jpg)');
        }
        
      }
      
    })() // Change BG
})()
  
  
  
  
});