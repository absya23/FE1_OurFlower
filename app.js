// use JQuery
$(".goTopBtn").click(function (e) {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  //onclick="window.scrollTo(0, 0);"
  return false;
});

function toggleMenu() {
  $(".drop-menu-home").toggleClass("close");
  $(".drop-down-overlay").toggleClass("close");
}

$(".barBtn").click(toggleMenu);

$(".drop-menu").click(toggleMenu);

// SHOPPAGE SLIDE SHOW

// $(function () {
//   $(".shop-slide-show img:gt(0)").hide();
//   setInterval(function () {
//     $(".shop-slide-show :first-child")
//       .fadeOut() //FadeOut là ảnh đang hiện
//       .next("img")
//       .fadeIn() //fadeIn ảnh tiếp theo
//       .end()
//       .appendTo(".shop-slide-show"); // chuyển vị trí ảnh xuống cuối
//   }, 2000);
// });

function slider() {
  $current = $(".shop-slide-show img.active");
  if ($current.length == 0) {
    $(".shop-slide-show img:first-child").addClass("active");
  } else {
    $next = $current.removeClass("active").next();
    if ($next.length == 0) {
      $(".shop-slide-show img:first-child").addClass("active");
    } else {
      $next.addClass("active");
    }
  }
}

setInterval(slider, 3000);
