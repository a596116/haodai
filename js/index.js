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


// 自動撥放圖片
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
/*------------------------------------------------------------------------------------------- */



$(function(){
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
			//當高度小於100時，關閉區塊	
			// if($this_Top < 100){
			// 	$('#top-bar').stop().animate({top:"-65px"});
			// 	}
      var h1 = document.getElementById("home").scrollHeight;
      var h2 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight;
      var h3 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight + document.getElementById("Data").scrollHeight;
      var h4 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight + document.getElementById("Data").scrollHeight + document.getElementById("horse").scrollHeight;
      // var h5 = document.getElementById("home").scrollHeight + document.getElementById("box").scrollHeight + document.getElementById("Data").scrollHeight + document.getElementById("horse").scrollHeight + document.getElementById("ma").scrollHeight;

			if($this_Top < h1-190){
        document.querySelector('.bar-item.home').style = "background-color:black";}
      else{document.querySelector('.bar-item.home').style = "background-color:none";}

			if($this_Top > h1-190 && $this_Top < h2-500){
        document.querySelector('.bar-item.box').style = "background-color:black";}
        else{document.querySelector('.bar-item.box').style = "background-color:none";}

      if($this_Top > h2-500 && $this_Top < h3-550){
        document.querySelector('.bar-item.data').style = "background-color:black";}
        else{document.querySelector('.bar-item.data').style = "background-color:none";}

      if($this_Top > h3-550 && $this_Top < h4-650){
        document.querySelector('.bar-item.horse').style = "background-color:black";}
        else{document.querySelector('.bar-item.horse').style = "background-color:none";}

      if($this_Top > h4-650){
        document.querySelector('.bar-item.ma').style = "background-color:black";}
        else{document.querySelector('.bar-item.ma').style = "background-color:none";}




		}).scroll();
	});
});