function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" red", "");
  }
  document.getElementById(linkName).style.display = "block";
}
// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();




$().ready(function() {  
    $('.kwicks').kwicks({  
        max : 696,  
        spacing : 0,  
        sticky: true,
    });  
});

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



/*------------------------------------------------------------------------------------------- */
// Data旁的圖片
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


/*------------------------------------------------------------------------------------------- */
// bar顯示
$(function(){
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
      var h1 = document.getElementById("home").scrollHeight;
      var h2 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight;
      var h3 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight + document.getElementById("Data").scrollHeight;
      var h4 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight + document.getElementById("Data").scrollHeight + document.getElementById("horse").scrollHeight;
      var h5 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight + document.getElementById("Data").scrollHeight + document.getElementById("horse").scrollHeight + document.getElementById("ma").scrollHeight;

      if($this_Top < 100){document.querySelector('.bottom').style = "background-color:none;transition: all 0.4s ease-in-out;"}
        else{document.querySelector('.bottom').style = "background-color:rgba(22, 22, 22, 0.75);transition: all 0.4s ease-in-out;"}

      if($this_Top < h1-(h1/3)){
        document.querySelector('.home').style = "box-shadow: 0 3px 0 0 rgb(45, 124, 243);padding-bottom:15px;transition: all 0.35s ease-in-out;";
      }
        else{document.querySelector('.home').style = "box-shadow:none";document.querySelector('.home').style = "padding-bottom:15px;transition: all 0.35s ease-in-out;"}
      
			if($this_Top > h1-(h1/3) && $this_Top < h2-(h1/3)){
        document.querySelector('.box').style = "box-shadow: 0 3px 0 0 rgb(45, 124, 243);padding-bottom:15px;transition: all 0.35s ease-in-out;"}
        else{document.querySelector('.box').style = "box-shadow:none";document.querySelector('.box').style = "padding-bottom:15px;transition: all 0.35s ease-in-out;"}

			if($this_Top > h2-(h1/3) && $this_Top < h3-(h1/3)){
        document.querySelector('.data').style = "box-shadow: 0 3px 0 0 rgb(45, 124, 243);padding-bottom:15px;transition: all 0.35s ease-in-out;"}
        else{document.querySelector('.data').style = "box-shadow:none";document.querySelector('.data').style = "padding-bottom:15px;transition: all 0.35s ease-in-out;"}

      if($this_Top > h3-(h1/3) && $this_Top < h4-(h1/3)){
        document.querySelector('.horse').style = "box-shadow: 0 3px 0 0 rgb(45, 124, 243);padding-bottom:15px;transition: all 0.35s ease-in-out;"}
        else{document.querySelector('.horse').style = "box-shadow:none";document.querySelector('.horse').style = "padding-bottom:15px;transition: all 0.35s ease-in-out;"}

      if($this_Top > h4-(h1/3) && $this_Top < h5-(h1/3)){
        document.querySelector('.ma').style = "box-shadow: 0 3px 0 0 rgb(45, 124, 243);padding-bottom:15px;transition: all 0.35s ease-in-out;"}
        else{document.querySelector('.ma').style = "box-shadow:none";document.querySelector('.ma').style = "padding-bottom:15px;transition: all 0.35s ease-in-out;"}



		}).scroll();
	});
});

// document.querySelector(".bar_img").onclick = function(){
//   document.querySelector("#home").scrollIntoView(false);
//   }
// document.querySelector(".home").onclick = function(){
//   document.querySelector("#home").scrollIntoView(false);
//   }
// document.querySelector(".box").onclick = function(){
//   document.querySelector("#box").scrollIntoView(false);
//   }
// document.querySelector(".data").onclick = function(){
//   document.querySelector("#Data").scrollIntoView(false);
//   }
// document.querySelector(".horse").onclick = function(){
//   document.querySelector("#horse").scrollIntoView(false);
//   }
// document.querySelector(".ma").onclick = function(){
//   document.querySelector("#ma").scrollIntoView(false);
//   }
/*------------------------------------------------------------------------------------------- */


// photo carousel 打開圖片
function add_photo(a) {
  $(document.body).append('<div style="position: fixed;width: 100%;height: 100%;z-index: 1;left: 0;top: 0;" id="show_photo"><div id="lbOverlay" onclick="rm_photo()"style="opacity: 0.8;" ></div><div class="" id="lbCenter" style="width: 345px; height: 537px; display: block;position: absolute;top: 50%;left: 62%;margin: -260px 0 0 -330px;"><div id="lbImage" style="background-image: url('+a+'); display: block;"><div style="position: relative; width: 325px; height: 517px;"></div></div></div></div>');
}
function rm_photo() {
  $('#show_photo').remove();
}







  





