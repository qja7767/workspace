$(function() {
  // GNB 내려오게하는곳
  $("#gnb-layout").on({
    mouseenter: function(){
      $("#gnb-layout").addClass("open");
      $("body").addClass("on");
    },
    mouseleave: function(){
      $("body").removeClass("on");
    }
  });

  // GNB 마우스엔터 위치 인식후 높이값 조정 및 클래스 부여
  function gnbHover(elem1, elem2, elem3){
    $(elem1).on({
      mouseenter: function(){
        $(elem2).addClass("current");
        $("#gnb-layout").css("min-height", elem3);
      },
      mouseleave: function(){
        $(elem2).removeClass("current");
        $("#gnb-layout").css("min-height", "92px");
      }
    })
  }

gnbHover("li.n1", "a.n1", "472px");
gnbHover("li.n2", "a.n2", "700px");
gnbHover("li.n3", "a.n3", "335px");
gnbHover("li.n4", "a.n4", "484px");
gnbHover("li.n5", "a.n5", "645px");
gnbHover("li.n6", "a.n6", "335px");

});
