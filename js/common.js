var mobile = !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)
  ? false
  : true;
$(function() {
  $(".germ.good").on("click", function() {
    $(this).addClass("on");
    $(this).attr("src", "images/good-probiotic-on.png");
    checkResult();
  });
  function checkResult() {
    if (
      $("#g01").hasClass("on") &&
      $("#g02").hasClass("on") &&
      $("#g03").hasClass("on") &&
      $("#g04").hasClass("on") &&
      $("#g05").hasClass("on")
    ) {
      $(".loading").addClass("on");
      setTimeout(function() {
        window.location.href = "success.html";
      }, 3000);
    }
  }
});


