/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: UI Solutions
Version: 1.0.0
-------------------------------------------------------------------*/
  
$(document).ready(function(){
    $(".openMenu").click(function(){
      $(".myNav").addClass("active");
    });
    $(".hideMe").click(function(){
        $(".myNav").removeClass("active");
      });

    
  });
  $(document).ready(function(){
    $(".openFilter").click(function(){
      $(".hideFilter").addClass("active");
      $(".fixed-top").addClass("active");
    });
    $(".hideMe").click(function(){
        $(".hideFilter").removeClass("active");
        $(".fixed-top").removeClass("active");
      });

    
  });
        


        $(document).ready(function () {
            $('.mainslider').owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
            
                },
                1000: {
                    items: 1,
            
            
                }
            }
            
            })
            })



            $(document).ready(function () {
                $('.sahyog_product_list').owlCarousel({
                nav: true,
                margin:15,
                loop: true,
                navText:[" <div  class='nav-btn prev-slide'><img src='images/icons/left_icon.svg'></div>","<div class='nav-btn next-slide'><img src='images/icons/right_icon.svg'></div>"],
                autoplay: true,
                autoplayTimeout: 3000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    600: {
                        items: 4,
                
                    },
                    1000: {
                        items:6,
                    }
                }               
                })
                })

                
    
                $('.sahyog_popular_product').owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                autoplay: true,
                margin:15,
                autoplayTimeout: 4000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                
                    },
                    1000: {
                        items: 3,

                
                    }
                }
                })

                // Testimonial
                    $('.testimonial').owlCarousel({
                        nav: false,
                        margin:25 , 
                        dots: true,
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 2500,
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: 1,
                                nav: false
                            },
                            600: {
                                items: 1,
                            },
                            1000: {
                                items: 2,
                            }
                        }
        
                    }) 
                    // Brand Slider
                    
                    $('.brand_slider').owlCarousel({
                        items: 1,
                        nav: false,
                        margin:15, 
                        dots: true,
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 2500,
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: 2,
                                nav: false
                            },
                            600: {
                                items: 2,
                            },
                            1000: {
                                items: 6,
                            }
                        }
                    }) 
                    
    $(".proViewSingle").owlCarousel({
        items:1,
        loop:true,
        mouseDrag:true,
        nav:false,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:false,
        margin:15,
    });

$(".proViewList").owlCarousel({
        items:1,
        loop:false,
        mouseDrag:true,
        nav:true,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:1000,
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
        dots:false,
        margin:15,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,
            },
            // breakpoint from 480 up
            480 : {
                items:6,
            },
            
                600:
                {
                    items:6,
                },
                
            
            
                1000:{
                  items:6,
                }
              
            
            
        }
    });

    $(document).ready(function(){

	$('.home_banar_slider').owlCarousel({
	    autoplay:true,
    autoplayTimeout:3000,
	    loop:true,
	    items:1,
	    nav:false,
	    dots:true,
	})
    /*
	$('.quickViewSlide').owlCarousel({
	    loop:true,
	    items:1,
	    nav:true,
	    navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
	    dots:false,
	})*/

	$('.prodtLisSlider').owlCarousel({
	    loop:true,
	    items:1,
	    nav:false,
	    dots:true,
	    responsive:{
	        0:{
	            items:1,
	            margin:30,
	        },
	        480:{
	            items:2,
	            margin:0,
	        }
	    }
	})

	$('.related_product').owlCarousel({
	    loop:true,
	    nav:true,
	    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    dots:true,
	    margin:30,
	    responsive:{
	        0:{
	            items:1,
	    				margin:5,
	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        992:{
	            items:4,
	        },
	        1200:{
	            items:4,
	        }
	    }
	})


	$('.addressSlider').owlCarousel({
	    loop:false,
	    nav:true,
	    navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
	    dots:false,
	    responsive:{
	        0:{
	            items:1,
	    				margin:5,
	        },
	        768:{
	            items:2,
	        },
	        992:{
	            items:1,
	        },
	        1200:{
	            items:2,
	        }
	    }
	})


	$('.s-pro-slide').owlCarousel({
	     autoplay:true,
    autoplayTimeout:3000,
	    loop:true,
	    nav:false,
	    dots:false,
	    margin:0,
	    items:1,
        return:false,
	})

	jQuery(".search_triger").click(function(){
		jQuery(".searchBox").toggleClass("active");
		jQuery(this).toggleClass("active");
	});

	jQuery(".menu_list.hasDrop").click(function(){
		jQuery(this).toggleClass("active");
	});

	jQuery(".menu_triger").click(function(){
		jQuery(".menu_content").toggleClass("active");
		jQuery(this).toggleClass("active");
	});

	jQuery(".woocard").click(function(){
		jQuery(".cart_sidebar_container").addClass("active");
	});

	jQuery(".close_cart, .cartOverlay").click(function(){
		jQuery(".cart_sidebar_container").removeClass("active");
	});

	jQuery(".galary-triger").click(function(){
		jQuery(this).addClass("active").siblings().removeClass("active");
	});

	jQuery(".filBoxT").click(function(){
		jQuery(this).toggleClass("active");
	});


	jQuery(".filterTriger").click(function(){
		jQuery(".search_side").addClass("active");
	});


	jQuery(".shortByTriger").click(function(){
		jQuery(".shorBymobListSec").addClass("active");
	});


	jQuery(".shortOverlay").click(function(){
		jQuery(".shorBymobListSec").removeClass("active");
	});

	jQuery(".shorBymobList ul li").click(function(){
		jQuery(this).addClass("active").siblings().removeClass("active");
	});

	jQuery(".cancel_filter, .filterOverlay").click(function(){
		jQuery(".search_side").removeClass("active");
	});

});


if ( $(window).width() < 768) {
 $('.productListRow').addClass('prodtLisSlider');
 $('.productListRow').addClass('owl-carousel');
}
else {
	$('.productListRow').removeClass('prodtLisSlider');
	$('.productListRow').removeClass('owl-carousel');
}



    function increaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      if(value < 5){
          value++;
        document.getElementById('number').value = value;
      }
      
    }

    function decreaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      if(value > 1){
        value--;
        document.getElementById('number').value = value;    
      }
      
    }

    function increaseValue2() {
      var value = parseInt(document.getElementById('number2').value, 10);
      value = isNaN(value) ? 0 : value;
      
      
      if(value < 5){
          value++;
         document.getElementById('number2').value = value;
      }
    }

    function decreaseValue2() {
      var value = parseInt(document.getElementById('number2').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      if(value > 1){
        value--;
        document.getElementById('number').value = value;    
      }
    }
    
    
    $(document).ready(function(){

    	$(".opMenu").click(function(){
    $(".myOverlay, .woo_menus_container").addClass("active");
  });
  $(".closeNav").click(function(){
    $(".menu_content, .myOverlay, .woo_menus_container").removeClass("active");
  });
});
    


if ( $(window).width() < 991) {
    (function($) {
        $(document).ready(function() {         
          $('.dropDown > a').click(function() {
          $('.megaMenu', $(this).parents(".dropDown")).slideToggle();
          return false;
          });
        });
      }) ( jQuery );
    }

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".sahyog_Topbar").addClass("d-none");
        } else {
            $(".sahyog_Topbar").removeClass("d-none");
        }
    });

    	$(document).ready(function() {
			$('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		});



            
        // AOS Animation
        AOS.init({
            duration: 1200,
        })
        //-----JS for Price Range slider-----

//-----JS for Price Range slider-----

function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }