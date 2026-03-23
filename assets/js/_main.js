/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  $(".js-image-carousel").each(function() {
    var $carousel = $(this);
    var $slides = $carousel.find(".image-carousel__slide");
    var $dots = $carousel.find(".image-carousel__dot");
    var interval = parseInt($carousel.attr("data-carousel-interval"), 10) || 5000;
    var currentIndex = 0;
    var timerId;

    if ($slides.length < 2) {
      return;
    }

    var showSlide = function(index) {
      currentIndex = (index + $slides.length) % $slides.length;
      $slides.removeClass("is-active").eq(currentIndex).addClass("is-active");
      $dots.removeClass("is-active").eq(currentIndex).addClass("is-active");
    };

    var startAutoPlay = function() {
      timerId = setInterval(function() {
        showSlide(currentIndex + 1);
      }, interval);
    };

    var stopAutoPlay = function() {
      clearInterval(timerId);
    };

    $carousel.find(".image-carousel__control--prev").on("click", function() {
      stopAutoPlay();
      showSlide(currentIndex - 1);
      startAutoPlay();
    });

    $carousel.find(".image-carousel__control--next").on("click", function() {
      stopAutoPlay();
      showSlide(currentIndex + 1);
      startAutoPlay();
    });

    $dots.on("click", function() {
      stopAutoPlay();
      showSlide($(this).index());
      startAutoPlay();
    });

    $carousel.on("mouseenter focusin", function() {
      stopAutoPlay();
    });

    $carousel.on("mouseleave focusout", function() {
      stopAutoPlay();
      startAutoPlay();
    });

    showSlide(0);
    startAutoPlay();
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
