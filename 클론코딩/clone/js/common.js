$(function() {
  //헤더 GNB 분리시키는 역할
  $("header").load("./header.html .header");

  //back to top 영역
  $(".back-to-top a").click(function(){
    $("html,body").animate({scrollTop : 0 },500);
  });
  //back to top 효과 구현 영역
  $(window).scroll(function(){
    if( $(this).scrollTop() != 0 ){
      $(".back-to-top").addClass("on")
    }else{
      $(".back-to-top").removeClass("on")
    };
  });

  // scroll auto fixed 영역
  $(window).scroll(function(){
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop();
    let gnbBar = $(".gnb");

    if( thisScrollTop >= wHeight - 110 ){
      gnbBar.addClass("sc_gnb")
      // $(".mainmenu li a").css("color","black");
    }else {
      gnbBar.removeClass("sc_gnb")
      // $(".mainmenu li a").css("color","white");
    };
  });//scorll fixed func end

  // slide 영역 ( infinite 미적용 )
    const widthNum = 700;
    const mask = $(".img-box");

    //initial opacity set
    $("#carousel-prev").css("opacity", "0.5"),$("#carousel-next").css("opacity", "1.0")

    $("#carousel-next").click(function() {
      console.log("next test");
      let caInMarginLeft = parseInt(mask.css("margin-left"));
      let isAni = mask.is(":animated");
      if (!isAni && caInMarginLeft == 0) {
        mask.animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function() {
        $("#carousel-prev").css("opacity", "1.0"),$("#carousel-next").css("opacity", "0.5")})
      };
    });

    $("#carousel-prev").click(function() {
      console.log("prev test");
      let caInMarginLeft = parseInt(mask.css("margin-left"));
      let isAni = mask.is(":animated");
      if (!isAni && caInMarginLeft < 0 ) {
        mask.animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function() {
          $("#carousel-prev").css("opacity", "0.5"),$("#carousel-next").css("opacity", "1.0")
        })
      };
    });

});
