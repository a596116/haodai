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
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
// }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 6000); // Change image every 2 seconds
// }
/*------------------------------------------------------------------------------------------- */


// bar顯示
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

      if($this_Top < 100){
        document.querySelector('.bar.white').style = "background-color:none";
        document.querySelector('.bar-item.home').style = "background-color:none;";
      }
      else{document.querySelector('.bar.white').style = "background-color:rgb(145, 145, 145)"}
      
			if($this_Top > 100 && $this_Top < h1-190){
        document.querySelector('.bar-item.home').style = "background-color:black;transition: all 0.35s ease-in-out";}
      else{document.querySelector('.bar-item.home').style = "background-color:none;transition: all 0.35s ease-in-out";}

			if($this_Top > h1-190 && $this_Top < h2-500){
        document.querySelector('.bar-item.box').style = "background-color:black;transition: all 0.35s ease-in-out";}
        else{document.querySelector('.bar-item.box').style = "background-color:none;transition: all 0.35s ease-in-out";}

      if($this_Top > h2-500 && $this_Top < h3-550){
        document.querySelector('.bar-item.data').style = "background-color:black;transition: all 0.35s ease-in-out";}
        else{document.querySelector('.bar-item.data').style = "background-color:none;transition: all 0.35s ease-in-out";}

      if($this_Top > h3-550 && $this_Top < h4-650){
        document.querySelector('.bar-item.horse').style = "background-color:black;transition: all 0.35s ease-in-out";}
        else{document.querySelector('.bar-item.horse').style = "background-color:none;transition: all 0.35s ease-in-out";}

      if($this_Top > h4-650){
        document.querySelector('.bar-item.ma').style = "background-color:black;transition: all 0.35s ease-in-out";}
        else{document.querySelector('.bar-item.ma').style = "background-color:none;transition: all 0.35s ease-in-out";}



		}).scroll();
	});
});
/*------------------------------------------------------------------------------------------- */


// photo carousel 打開圖片
function add_photo(a) {
  $(document.body).append('<div style="position: fixed;width: 100%;height: 100%;z-index: 1;left: 0;top: 0;" id="show_photo"><div id="lbOverlay" onclick="rm_photo()"style="opacity: 0.8;" ></div><div class="" id="lbCenter" style="width: 345px; height: 537px; display: block;position: absolute;top: 50%;left: 62%;margin: -260px 0 0 -330px;"><div id="lbImage" style="background-image: url('+a+'); display: block;"><div style="position: relative; width: 325px; height: 517px;"></div></div></div></div>');
}
function rm_photo() {
  $('#show_photo').remove();
}






// !function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),"top"!=r[0]&&"bottom"!=r[0]&&"left"!=r[1]&&"right"!=r[1]||(r=[r[1],r[0]]),this.positionX!==s&&(r[0]=this.positionX.toLowerCase()),this.positionY!==s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo(this.mirrorContainer);var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,mirrorContainer:"body",refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t,i=o.winHeight,e=o.docHeight,s=Math.min(this.boxOffsetTop,e-i),h=Math.max(this.boxOffsetTop+this.boxHeight-i,0),r=this.boxHeight+(s-h)*(1-this.speed)|0,a=(this.boxOffsetTop-s)*(1-this.speed)|0;r*this.aspectRatio>=this.boxWidth?(this.imageWidth=r*this.aspectRatio|0,this.imageHeight=r,this.offsetBaseTop=a,t=this.imageWidth-this.boxWidth,"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-t:isNaN(this.positionX)?this.offsetLeft=-t/2|0:this.offsetLeft=Math.max(this.positionX,-t)):(this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0,t=this.imageHeight-r,"top"==this.positionY?this.offsetBaseTop=a:"bottom"==this.positionY?this.offsetBaseTop=a-t:isNaN(this.positionY)?this.offsetBaseTop=a-t/2|0:this.offsetBaseTop=a+Math.max(this.positionY,-t))},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d("+this.mirrorLeft+"px, "+(this.mirrorTop-e)+"px, 0px)",visibility:this.visibility,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d("+this.offsetLeft+"px, "+this.offsetTop+"px, 0px)",position:"absolute",height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){function s(){if(p==i.pageYOffset)return i.requestAnimationFrame(s),!1;p=i.pageYOffset,h.render(),i.requestAnimationFrame(s)}if(!this.isReady){var h=this,r=t(e),a=t(i),n=function(){o.winHeight=a.height(),o.winWidth=a.width(),o.docHeight=r.height(),o.docWidth=r.width()},l=function(){var t=a.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,a.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};a.on("resize.px.parallax load.px.parallax",function(){n(),h.refresh(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){l(),o.requestRender()}),n(),l(),this.isReady=!0;var p=-1;s()}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;t.render(),t.isBusy=!1},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var h=t.fn.parallax;t.fn.parallax=function(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})},t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=h,this},t(function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);

// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });









