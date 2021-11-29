 $(document).ready(function () {
    // Isotope for Gallery
    
    
    if ( $('.iso-box-wrapper').length > 0 ) { 
        

        var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

        $container.imagesLoaded(function () {
            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });
            $imgs.load(function(){
                $container.isotope('reLayout');
            })
        });

        //filter items on button click
        $('.filter-wrapper li a').click(function(){
            var $this = $(this), filterValue = $this.attr('data-filter');
            $container.isotope({ 
                filter: filterValue,
                animationOptions: { 
                    duration: 750, 
                    easing: 'linear', 
                    queue: false, 
                }                
            }); 
             
                       

            // don't proceed if already selected
            if ( $this.hasClass('selected') ) { 
                return false; 
            }

            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');

            return false;
        });
    }

    // Magnific Popup for Gallery
    $('.iso-box-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            }
        }
        });
      
});























