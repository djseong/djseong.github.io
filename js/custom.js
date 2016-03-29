$('#siteNav').affix({
  offset: {
    top: 100
  }
});

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );
    if (target.selector == "#home") 
    {
       if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    }
    }
    else 
    {
      if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 1000);
    }
     }

});
