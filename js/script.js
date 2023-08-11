$(function(){

  $('#loading').addClass('loaded');

  
  $('.toggle-btn').on('click',function(){
    if($('.toggle-btn').hasClass('open')){
        $('.toggle-btn, .hm_menu,body,main,footer').removeClass('open');
    }else{
        $('.toggle-btn, .hm_menu,body,main,footer').addClass('open');
    }
  });

  $(".hm_click1").click(function () {
    $(".hm_on_menu1").slideToggle();
  });
  $(".hm_click2").click(function () {
    $(".hm_on_menu2").slideToggle();
  });

  $(".hm_click1").on("click",function(){
    if($(".hm_click1").hasClass("open")){
      $(".hm_click1").removeClass("open");
    }else{
      $(".hm_click1").addClass("open");
    }
  });
  $(".hm_click2").on("click",function(){
    if($(".hm_click2").hasClass("open")){
      $(".hm_click2").removeClass("open");
    }else{
      $(".hm_click2").addClass("open");
    }
  });

/////////スクロール時にしたからフワッと表示/////////////////////

$(window).scroll(function (){
  $('#contents1').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200){
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
      }
  });
  $('#contents2').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });
  $('#contents3').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });
  $('#contents4').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });
  $('#contents5').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });
  $('#contents6').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });
  $('#contents7').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });
  $('#footer').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });





});

});
