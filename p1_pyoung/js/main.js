$(function(){
    var sta = 0; //열기버튼, nav 닫힘
    $('.nav_btn').click(function(){
      if (sta == 0)
      {
      $('#nav').slideDown();
      $(this).text('닫기'); // $(this).css({'background-image':'url()'})
      sta = 1;
      } 
      else 
      {
      $('#nav').slideUp();
      $(this).text('열기'); // $(this).css({'background-image':'url()'})
      sta = 0;
      }
    })
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows : true, 
        dots : false, 
        autoplay : true,
        autoplaySpeed : 2000, 
        pauseOnHover : true,
        swipe : true
      });
      $(".vertical-center").slick({
        infinite: true,
        dots:false,
        vertical: true,
        autoplay : true,
        autoplaySpeed : 1500, 
        slidesToShow: 1,
        slidesToScroll: 1,
      });
      
  })