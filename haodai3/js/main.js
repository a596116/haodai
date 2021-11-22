
/*---------------------------------------------------------------------------- 
*******************************Loading************************************
----------------------------------------------------------------------------*/
window.onload = function() {
  $('.Loading-warp').delay(300).fadeOut('slow');
}

/*---------------------------------------------------------------------------- 
*******************************owlCarousel************************************
----------------------------------------------------------------------------*/
$(".owl-carousel").owlCarousel({
    items: 1, // 一次輪播幾個項目
    loop: true, // 循環輪播
    autoplay: true, // 自動輪播
    autoplayTimeout: 5000, // 切換時間
    autoplayHoverPause: true, // 滑鼠經過時暫停
    nav: true,
    navText: [""]
    }),

$(".owl-carousel1").owlCarousel({
  loop:true,
  margin:15,
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
      loop:true
    },
    600:{
      items:3,
      loop:true
    },
    1000:{
      items:5,
      loop:true
    }
  },
  // autoplay: true, // 自動輪播
  // autoplayTimeout: 2000, // 切換時間
  // autoplayHoverPause: true, // 滑鼠經過時暫停
})
 

// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " dark-grey";
}
document.getElementById("myLink").click();




$(function () {
  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom',
    easing: 'ease-in-sine'
  });});






