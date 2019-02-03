  $("#menu-toggle").click(function(e) {
    $("#wrapper").toggleClass("toggled");
  });

 $("#project-1-image,#project-1-details").hover(
  function(){
    $(this).css('opacity', '0.5');
    $("#project-1-details").css('display', 'block')
  },
    function(){
    $(this).css('opacity', '1');
    $("#project-1-details").css('display', 'none')
  });


setInterval(
 function(){
      if (!$("#wrapper").hasClass("toggled")) {
          $("#menu-toggle").effect("shake",{distance:10,times:2},"slow");
        }
 },
 5000  /* 10000 ms = 10 sec */
);
    /* //do zmieniania koloru navbara
      function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var div_top = $('#opener-about').offset().top;
        if (window_top > div_top) {
            $('#sticky').addClass('stick');
        } else
        {
            $('#sticky').removeClass('stick');
        }
      }
    */
