/* This is a bundle that uses RequireJS to pull in dependencies.
   These dependencies are defined in the registry.xml file */

+function(t,e,i){"use strict";var r={calc:!1};e.fn.rrssb=function(t){var r=e.extend({description:i,emailAddress:i,emailBody:i,emailSubject:i,image:i,title:i,url:i},t);r.emailSubject=r.emailSubject||r.title,r.emailBody=r.emailBody||(r.description?r.description:"")+(r.url?"\n\n"+r.url:"");for(var s in r)r.hasOwnProperty(s)&&r[s]!==i&&(r[s]=a(r[s]));r.url!==i&&(e(this).find(".rrssb-facebook a").attr("href","https://www.facebook.com/sharer/sharer.php?u="+r.url),e(this).find(".rrssb-tumblr a").attr("href","http://tumblr.com/share/link?url="+r.url+(r.title!==i?"&name="+r.title:"")+(r.description!==i?"&description="+r.description:"")),e(this).find(".rrssb-linkedin a").attr("href","http://www.linkedin.com/shareArticle?mini=true&url="+r.url+(r.title!==i?"&title="+r.title:"")+(r.description!==i?"&summary="+r.description:"")),e(this).find(".rrssb-twitter a").attr("href","https://twitter.com/intent/tweet?text="+(r.description!==i?r.description:"")+"%20"+r.url),e(this).find(".rrssb-hackernews a").attr("href","https://news.ycombinator.com/submitlink?u="+r.url+(r.title!==i?"&text="+r.title:"")),e(this).find(".rrssb-reddit a").attr("href","http://www.reddit.com/submit?url="+r.url+(r.description!==i?"&text="+r.description:"")+(r.title!==i?"&title="+r.title:"")),e(this).find(".rrssb-googleplus a").attr("href","https://plus.google.com/share?url="+(r.description!==i?r.description:"")+"%20"+r.url),e(this).find(".rrssb-pinterest a").attr("href","http://pinterest.com/pin/create/button/?url="+r.url+(r.image!==i?"&amp;media="+r.image:"")+(r.description!==i?"&description="+r.description:"")),e(this).find(".rrssb-pocket a").attr("href","https://getpocket.com/save?url="+r.url),e(this).find(".rrssb-github a").attr("href",r.url),e(this).find(".rrssb-print a").attr("href","javascript:window.print()"),e(this).find(".rrssb-whatsapp a").attr("href","whatsapp://send?text="+(r.description!==i?r.description+"%20":r.title!==i?r.title+"%20":"")+r.url)),(r.emailAddress!==i||r.emailSubject)&&e(this).find(".rrssb-email a").attr("href","mailto:"+(r.emailAddress?r.emailAddress:"")+"?"+(r.emailSubject!==i?"subject="+r.emailSubject:"")+(r.emailBody!==i?"&body="+r.emailBody:""))};var s=function(){var t=e("<div>"),i=["calc","-webkit-calc","-moz-calc"];e("body").append(t);for(var s=0;s<i.length;s++)if(t.css("width",i[s]+"(1px)"),1===t.width()){r.calc=i[s];break}t.remove()},a=function(t){if(t!==i&&null!==t){if(null===t.match(/%[0-9a-f]{2}/i))return encodeURIComponent(t);t=decodeURIComponent(t),a(t)}},n=function(){e(".rrssb-buttons").each(function(t){var i=e(this),r=e("li:visible",i),s=r.length,a=100/s;r.css("width",a+"%").attr("data-initwidth",a)})},l=function(){e(".rrssb-buttons").each(function(t){var i=e(this),r=i.width(),s=e("li",i).not(".small").eq(0).width(),a=e("li.small",i).length;if(s>170&&1>a){i.addClass("large-format");var n=s/12+"px";i.css("font-size",n)}else i.removeClass("large-format"),i.css("font-size","");25*a>r?i.removeClass("small-format").addClass("tiny-format"):i.removeClass("tiny-format")})},o=function(){e(".rrssb-buttons").each(function(t){var i=e(this),r=e("li",i),s=r.filter(".small"),a=0,n=0,l=s.eq(0),o=parseFloat(l.attr("data-size"))+55,c=s.length;if(c===r.length){var h=42*c,u=i.width();u>h+o&&(i.removeClass("small-format"),s.eq(0).removeClass("small"),d())}else{r.not(".small").each(function(t){var i=e(this),r=parseFloat(i.attr("data-size"))+55,s=parseFloat(i.width());a+=s,n+=r});var m=a-n;m>o&&(l.removeClass("small"),d())}})},c=function(t){e(".rrssb-buttons").each(function(t){var i=e(this),r=e("li",i);e(r.get().reverse()).each(function(t,i){var s=e(this);if(s.hasClass("small")===!1){var a=parseFloat(s.attr("data-size"))+55,n=parseFloat(s.width());if(a>n){var l=r.not(".small").last();e(l).addClass("small"),d()}}--i||o()})}),t===!0&&u(d)},d=function(){e(".rrssb-buttons").each(function(t){var i,s,a,l,o,c=e(this),d=e("li",c),h=d.filter(".small"),u=h.length;u>0&&u!==d.length?(c.removeClass("small-format"),h.css("width","42px"),a=42*u,i=d.not(".small").length,s=100/i,o=a/i,r.calc===!1?(l=(c.innerWidth()-1)/i-o,l=Math.floor(1e3*l)/1e3,l+="px"):l=r.calc+"("+s+"% - "+o+"px)",d.not(".small").css("width",l)):u===d.length?(c.addClass("small-format"),n()):(c.removeClass("small-format"),n())}),l()},h=function(){e(".rrssb-buttons").each(function(t){e(this).addClass("rrssb-"+(t+1))}),s(),n(),e(".rrssb-buttons li .rrssb-text").each(function(t){var i=e(this),r=i.width();i.closest("li").attr("data-size",r)}),c(!0)},u=function(t){e(".rrssb-buttons li.small").removeClass("small"),c(),t()},m=function(e,r,s,a){var n=t.screenLeft!==i?t.screenLeft:screen.left,l=t.screenTop!==i?t.screenTop:screen.top,o=t.innerWidth?t.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,c=t.innerHeight?t.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,d=o/2-s/2+n,h=c/3-a/3+l,u=t.open(e,r,"scrollbars=yes, width="+s+", height="+a+", top="+h+", left="+d);u&&u.focus&&u.focus()},f=function(){var t={};return function(e,i,r){r||(r="Don't call this twice without a uniqueId"),t[r]&&clearTimeout(t[r]),t[r]=setTimeout(e,i)}}();e(document).ready(function(){try{e(document).on("click",".rrssb-buttons a.popup",{},function(t){var i=e(this);m(i.attr("href"),i.find(".rrssb-text").html(),580,470),t.preventDefault()})}catch(i){}e(t).resize(function(){u(d),f(function(){u(d)},200,"finished resizing")}),h()}),t.rrssbInit=h}(window,jQuery);
/* do not include jquery multiple times */
if (window.jQuery) {
  define('jquery', [], function() {
    return window.jQuery;
  });
}

var panoramas = [];
var panorama = null;
var interval_time = 55;
var heading_increase = 0.01;
var pov_pitch = 0; /* original pitch */
var acceleration = 0.004;
var heading_high_limit = 300; /* Start point */
var heading_low_limit = 197.98; 
var heading_middle = heading_high_limit - ((heading_high_limit - heading_low_limit) / 2);
var pov_interval = null;

function getPanorama(uid) {
  for (var i = 0; i < panoramas.length; i++) {
    var pano = panoramas[i];
    var curr_uid = pano.uid;
    if (curr_uid == uid) {
      return pano;
    }
  };
  
  return false;
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

jQuery(document).ready(function($){

   if (jQuery("body").hasClass('template-advancedsearch')) {
      jQuery("#advanced_search_form").submit(function() {
          jQuery('input').each(function() {
              if (jQuery(this).val() == '') {
                  jQuery(this).attr("name", '');
              }
          });
      });
  }

  jQuery('ul.nav li.dropdown').click(function() {
      jQuery(this).closest('.dropdown-menu').stop(true, true).show();
      jQuery(this).toggleClass("open");
  });
  
  if (isMobile.any()) {
    jQuery("body").addClass("mobile");
  } else {
    jQuery("body").addClass("no-touch");

    var hover_limit = 1050;
    if (jQuery("body").hasClass('plone-toolbar-left-expanded')) {
      hover_limit = 1150;
    }

    jQuery('ul.nav li.dropdown').hover(function() {
        if (window.innerWidth >= hover_limit) {
          jQuery(this).closest('.dropdown-menu').stop(true, true).show();
          jQuery(this).addClass('open');
        }
    }, function() {
        if (window.innerWidth >= hover_limit) {
          jQuery(this).closest('.dropdown-menu').stop(true, true).hide();
          jQuery(this).removeClass('open');
        }
    });
  }
  
  var isLateralNavAnimating = false;
  
  //open/close lateral navigation
  jQuery('.cd-nav-trigger, .cd-nav-trigger-menu').on('click', function(event) {
    event.preventDefault();

    if (slickSlideshow != undefined) {
      if (slickSlideshow.playing) {
        slickSlideshow.pauseCurrentSlide();
      }
    }
  

    if( !isLateralNavAnimating ) {
      if(jQuery(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
      
      jQuery('body').toggleClass('navigation-is-open');
      jQuery('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        //animation is over
        isLateralNavAnimating = false;
      });
    }
  });

  /* Street view functionality */
  if (jQuery(".street-view").length > 0) {
    jQuery(".street-view").each(function(idx, el) {
      var options = {};
      options['lat'] = jQuery(this).data('lat');
      options['lng'] = jQuery(this).data('lng');
      options['heading'] = jQuery(this).data('heading');
      options['pitch'] = jQuery(this).data('pitch');
      options['heading_lower'] = jQuery(this).data('headinglower');
      options['uid'] = jQuery(this).data('uid');
      if (jQuery(this).data('addresscontrol') == "False"){
        options['addressControl'] = false 
      } else {
        options['addressControl'] = true 
      }

      if (jQuery(this).data('zoomcontrol') == "False"){
        options['zoomControl'] = false 
      } else {
        options['zoomControl'] = true 
      }
      
      if (jQuery(this).data('linkscontrol') == "False"){
        options['linksControl'] = false 
      } else{
        options['linksControl'] = true 
      }
      
      if (jQuery(this).data('pancontrol') == "False"){
        options['panControl'] = false 
      } else {
        options['panControl'] = true 
      }
      
      if (jQuery(this).data('enableclosebutton') == "False") {
        options['enableCloseButton'] = false 
      } else {
        options['enableCloseButton'] = true 
      }
      
      if (jQuery(this).data('fullscreencontrol') == "False") {
        options['fullscreenControl'] = false 
      } else {
        options['fullscreenControl'] = true 
      }
      
      var panorama = new google.maps.StreetViewPanorama(
      el,
      {
        position: {lat: options['lat'], lng: options['lng']},
        pov: {heading: options['heading'], pitch: options['pitch']},
        zoom: options['zoom'],
        addressControl: options['addressControl'],
        zoomControl: options['zoomControl'],
        linksControl: options['linksControl'],
        panControl: options['panControl'],
        enableCloseButton: options['enableCloseButton'],
        fullscreenControl: options['fullscreenControl'],
      });

      if (options['heading_lower'] != undefined && options['heading_lower'] != '') {
        pov_pitch = options['pitch'];
        if (options['heading_lower'] > options['heading']) {
          heading_low_limit = options['heading'];
          heading_high_limit = options['heading_lower'];
        } else {
          heading_low_limit = options['heading_lower'];
          heading_high_limit = options['heading'];
        }
        heading_middle = heading_high_limit - ((heading_high_limit - heading_low_limit) / 2);
        options['heading_middle'] = heading_middle;
      }

      options['heading_increase'] = heading_increase;
      var new_panorama = {
        panorama: panorama,
        uid: options['uid'],
        options: options,
        pov_interval: null,
        pov_init: false
      }
      panoramas.push(new_panorama);
    });
  }

  jQuery(".play-button").on('click', function()  {
    var audio_div = jQuery(this).parents('.slick-slide').find('audio')[0];
    if (jQuery(this).hasClass('playing')) {
      jQuery(this).removeClass('playing');
      jQuery(this).addClass('paused');
      jQuery(this).removeClass('hi-icon-volume-up');
      jQuery(this).addClass('hi-icon-volume-off');
      audio_div.player.pause();
    } else if (jQuery(this).hasClass('paused')) {
      jQuery(this).removeClass('paused');
      jQuery(this).addClass('playing');
      jQuery(this).removeClass('hi-icon-volume-off');
      jQuery(this).addClass('hi-icon-volume-up');
      audio_div.player.play();
    } else {
      jQuery(this).addClass('playing');
      audio_div.player.play();
      jQuery(this).removeClass('hi-icon-volume-pff');
      jQuery(this).addClass('hi-icon-volume-up');
    }
  });
});

jQuery(document).ready(function($){

  var mainHeader = jQuery('.cd-auto-hide-header'),
    secondaryNavigation = jQuery('.cd-secondary-nav'),
    //this applies only if secondary nav is below intro section
    belowNavHeroContent = jQuery('.sub-nav-hero'),
    headerHeight = mainHeader.height();
  
  //set scrolling variables
  var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

  mainHeader.on('click', '.nav-trigger', function(event){
    // open primary navigation on mobile
    event.preventDefault();
    mainHeader.toggleClass('nav-open');
  });

  jQuery(window).on('scroll', function(){
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame)
        ? setTimeout(autoHideHeader, 250)
        : requestAnimationFrame(autoHideHeader);
    }
  });

  jQuery(window).on('resize', function(){
    headerHeight = mainHeader.height();
  });

  function autoHideHeader() {
    var currentTop = jQuery(window).scrollTop();

    ( belowNavHeroContent.length > 0 ) 
      ? checkStickyNavigation(currentTop) // secondary navigation below intro
      : checkSimpleNavigation(currentTop);

      previousTop = currentTop;
    scrolling = false;
  }

  function checkSimpleNavigation(currentTop) {
    //there's no secondary nav or secondary nav is below primary nav
      if (previousTop - currentTop > scrollDelta) {
        //if scrolling up...
        mainHeader.removeClass('is-hidden');
      } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        //if scrolling down...
        mainHeader.addClass('is-hidden');
      }
  }

  function checkStickyNavigation(currentTop) {
    //secondary nav below intro section - sticky secondary nav
    var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
    
    if (previousTop >= currentTop ) {
        //if scrolling up... 
        if( currentTop < secondaryNavOffsetTop ) {
          //secondary nav is not fixed
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.removeClass('fixed slide-up');
          belowNavHeroContent.removeClass('secondary-nav-fixed');
        } else if( previousTop - currentTop > scrollDelta ) {
          //secondary nav is fixed
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
          belowNavHeroContent.addClass('secondary-nav-fixed');
        }
        
      } else {
        //if scrolling down...  
        if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
          //hide primary nav
          mainHeader.addClass('is-hidden');
          secondaryNavigation.addClass('fixed slide-up');
          belowNavHeroContent.addClass('secondary-nav-fixed');
        } else if( currentTop > secondaryNavOffsetTop ) {
          //once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.addClass('fixed').removeClass('slide-up');
          belowNavHeroContent.addClass('secondary-nav-fixed');
        }

      }
  }
});

jQuery(document).ready(function() {
  jQuery(".expand-btn").click(function() {
    jQuery(".slick-slideshow").toggleClass("fullscreen");
    if (!jQuery(".slick-slideshow").hasClass("fullscreen")) {
      jQuery(".actions-div .expand-btn i").removeClass("fa-compress");
      jQuery(".actions-div .expand-btn i").addClass("fa-expand");
      slickSlideshow.resizeImage(true, true);
    } else {
      jQuery(".actions-div .expand-btn i").removeClass("fa-expand");
      jQuery(".actions-div .expand-btn i").addClass("fa-compress");
    }
  });

  jQuery(".info-btn").click(function() {
    if (jQuery(".page-container").is(":visible")) {

      jQuery('html, body').animate({
        scrollTop: jQuery("#slickslideshow").offset().top
      }, 600, function() {
        
        jQuery(".actions-div .info-btn i").removeClass("fa-times");
        jQuery(".actions-div .info-btn i").addClass("fa-info-circle");

        jQuery(".page-container, footer").hide();
      });

    } else {
      jQuery('html, body').animate({
        scrollTop: jQuery("#slideshow-controls").offset().top
      }, 600);
      
      jQuery(".actions-div .info-btn i").removeClass("fa-info-circle");
      jQuery(".actions-div .info-btn i").addClass("fa-times");      
      jQuery(".page-container, footer").show();
    }
  });
});


/* ------------------------------------------------------------------------------
    S L I D E S H O W - E N H A N C E M E N T S
--------------------------------------------------------------------------------- */

// Load YouTube Frame API
/*(function(){ //Closure, to not leak to the scope
  var s = document.createElement("script");
  s.src = "http://www.youtube.com/iframe_api"; 
  var before = document.getElementsByTagName("script")[0];
  before.parentNode.insertBefore(s, before);
})();*/

// Pinterest
/*(function(){ //Closure, to not leak to the scope
  var s = document.createElement("script");
  s.src = "//assets.pinterest.com/js/pinit.js"; 
  var before = document.getElementsByTagName("script")[0];
  before.parentNode.insertBefore(s, before);
})();*/

// Twitter
/*!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
*/

function isElementInViewport (el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        Math.abs(rect.top) <= jQuery(el).height()
    );
};


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* Slideshow specific */

slickSlideshow.players = {};
slickSlideshow.playing = false;
slickSlideshow.youtube_ready = false;
slickSlideshow.initiated_youtube = false;

slickSlideshow.slideMouseMove = function() {
  if (slickSlideshow.$obj.getSlick() != undefined) {

    if (jQuery("#slickslideshow").hasClass("fullscreen")) {

      if (slickSlideshow.$obj.slickCurrentSlide() == 0) {
        jQuery("body.portaltype-portlet-page .documentDescription, body.template-contents_view .documentDescription, body.template-contents_view .documentFirstHeading").fadeIn();
        
        if (slickSlideshow.playing != true) {
          jQuery(".video-play-btn").css("opacity", 0.75);
        }
        if (jQuery(".slideshowWrapper").hasClass("moved")) {
          jQuery(".slideshowWrapper").removeClass("moved");
        }
      }

      if (slickSlideshow.playing != true) {
        jQuery(".wrap-prev, .wrap-next").css("opacity", 1);
      }

      if (slickSlideshow.moved) {
        if (slickSlideshow.playing != true) {
          jQuery("body:not(.template-collection_view.portaltype-folder) #slideshow-controls, body.portaltype-object div.on-display-wrapper").fadeIn();
        }
      } else {
        if (slickSlideshow.$obj.slickCurrentSlide() == 0) {
          jQuery("body.portaltype-portlet-page .documentDescription, body.template-contents_view .documentDescription, body.template-contents_view .documentFirstHeading").fadeIn();
          if (jQuery(".slideshowWrapper").hasClass("moved")) {
            jQuery(".slideshowWrapper").removeClass("moved");
          }
        }
      }
    }
  }
};

slickSlideshow.onPlayerStateChange = function(iframeID) {
  return function(event) {
    if (event.data == 1) {
      jQuery("#slideshow-controls, body.portaltype-object div.on-display-wrapper").fadeOut();
      jQuery(".wrap-prev, .wrap-next").css("opacity", 0);
      
      slickSlideshow.playing = true;
      
      setTimeout(function() {
        jQuery(".slick-active.video-slide img.overlay-image").hide();
        jQuery(".video-play-btn").css("opacity", 0);
        jQuery(".video-play-btn").hide();
        jQuery(".slick-active.video-slide iframe").show();
      }, 400);

    } else if (event.data == 2) {
      jQuery("#slideshow-controls, body.portaltype-object div.on-display-wrapper").fadeIn();
      jQuery(".wrap-prev, .wrap-next").css("opacity", 1);
      jQuery("#portal-header-wrapper").fadeIn();
      slickSlideshow.playing = false;
    }

    /* Video ended 
     * Got to next slide */
    else if (event.data == 0) {
      slickSlideshow.$obj.slickNext();
    }
  }
};

slickSlideshow.createYTEvent = function(iframeID, first_slide) {
  return function(event) {
    var player = slickSlideshow.players[iframeID];
    if (first_slide.hasClass('video-slide')) {
      var slide_iframeID = jQuery(first_slide.find('iframe')[0]).attr('id');
      if (slide_iframeID == iframeID) {
        slickSlideshow.startFirstVideo(first_slide);
      }
    }
  }
};

slickSlideshow.pauseCurrentSlide = function() {
  var curr = slickSlideshow.$obj.slickCurrentSlide();
  var $slide = jQuery(slickSlideshow.$obj.getSlick().$slides[curr]);
  if ($slide.hasClass("video-slide")) {
    var frameID = jQuery($slide.find('iframe')[0]).attr("id");
    // Pause video
    var slide_player = slickSlideshow.players[frameID];
    if (slide_player != undefined) {
      slide_player.pauseVideo();
    }
  }
};

slickSlideshow.changeWrapperOpacity = function() {
  jQuery(".slideshowWrapper:before").css('opacity', 0);
};

slickSlideshow.YT_ready = function() {
  if (slickSlideshow.$obj.getSlick() != undefined) { 
    var $first_slide = jQuery(slickSlideshow.$obj.getSlick().$slides[slickSlideshow.initialSlide]);

    jQuery(".video-slide:not(.slick-cloned) iframe").each(function() {
      var iframeID = this.id;
      slickSlideshow.players[iframeID] = new YT.Player(iframeID, {
        events: {
          "onReady": slickSlideshow.createYTEvent(iframeID, $first_slide),
          "onStateChange": slickSlideshow.onPlayerStateChange(iframeID)
        }
      });
    });
  }
};


function onYouTubePlayerAPIReady() {
  slickSlideshow.youtube_ready = true;
  if (slickSlideshow.initiated_youtube == false) {
    if (slickSlideshow.$obj != undefined) { 
      slickSlideshow.YT_ready();
    }
  }
};


/* Responsive storytelling enhancement */

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

_logger = {}
_logger.debug = false;

_logger.log = function(text) {
  if (_logger.debug) {
    console.log(text);
  }
};

slickSlideshow.change_height = function(img, is_obj) {
  if ((jQuery("body").hasClass("portaltype-object") && !jQuery("body").hasClass("userrole-authenticated")) || (is_obj == true)) {
    img.attr("style", "height:100%; width: auto;");
    img_elem = img[0];

    if (img_elem != undefined) {
      var w = img_elem.clientWidth;
    } else {
      var w = img.width();
    }

    if (w == 0) {
      return img.width();
    }

    return w;
  }
};

slickSlideshow.change_width = function(img, is_obj) {

  if ((jQuery("body").hasClass("portaltype-object") && !jQuery("body").hasClass("userrole-authenticated")) || (is_obj == true)) {
    img.attr("style", "width:100%; height: auto;");
    var img_elem = img[0];

    if (img_elem != undefined) {
      var h = img_elem.clientHeight;
    } else {
      var h = img.height();
    }

    if (h == 0) {
      return img.height();
    }

    return h;
  }
};

slickSlideshow.resizeSlide = function() {
  h = slickSlideshow.$obj.height();
  w = slickSlideshow.$obj.width();

  $slick = slickSlideshow.$obj.getSlick();
  $slides = jQuery($slick.$slides);

  $slides.each(function(index) {  
    if (slickSlideshow.view_type == 'double_view' || slickSlideshow.view_type == 'multiple_view') {
      var $imgs = jQuery(jQuery(this).find('img'));
      $imgs.each(function(index) {
        var $img = jQuery(this);
        $img.load(function() {
          var image_h = slickSlideshow.change_width(jQuery(this));
          if (image_h > h) {
            slickSlideshow.change_height(jQuery(this));
          }
          if (!$img.hasClass("loaded")) {
            $img.addClass('loaded');
          }
        });
      });
    } else {
      var $img = jQuery(jQuery(this).find('img')[0]);
      $img.load(function() {
        var image_h = slickSlideshow.change_width(jQuery(this));
        if (image_h > h) {
          slickSlideshow.change_height(jQuery(this));
        }
      });
    }
  });

  jQuery(".slick-cloned").each(function(index) {
    if (slickSlideshow.view_type == 'double_view' || slickSlideshow.view_type == 'multiple_view') {
      var $imgs = jQuery(jQuery(this).find('img'));
      $imgs.each(function(index) {
        var $img = jQuery(this);
        $img.load(function() {
          var image_h = slickSlideshow.change_width(jQuery(this));
          if (image_h > h) {
            slickSlideshow.change_height(jQuery(this));
          }
          if (!$img.hasClass("loaded")) {
            $img.addClass('loaded');
          }
        });
      });
    } else {
      var $img = jQuery(jQuery(this).find('img')[0]);
      $img.load(function() {
        var image_h = slickSlideshow.change_width(jQuery(this));
        if (image_h > h) {
          slickSlideshow.change_height(jQuery(this));
        }
      });
    }
  });
};

slickSlideshow.resizeImages = function() {

  if (jQuery("body").hasClass("portaltype-object")) {
    h = slickSlideshow.$obj.height();
    w = slickSlideshow.$obj.width();

    $slick = slickSlideshow.$obj.getSlick();
    $slides = jQuery($slick.$slides);

    jQuery(".slick-cloned").each(function(index) {
      if (slickSlideshow.view_type == "double_view" || slickSlideshow.view_type == 'multiple_view' || jQuery("body").hasClass("template-instruments_view")) {
        
        var $imgs = jQuery(jQuery(this).find('img'));
        $imgs.each(function(index_imgs) {
          var $img = jQuery(this);
          $img.load(function() {
            var image_h = slickSlideshow.change_width(jQuery(this));
            if (image_h > h) {
              slickSlideshow.change_height(jQuery(this));
            }
            if (!$img.hasClass("loaded")) {
              $img.addClass('loaded');
            }
          });
        });
      } else {
        var $img = jQuery(jQuery(this).find('img')[0]);
        //$img.hide();
        $img.load(function() {
          var image_h = slickSlideshow.change_width(jQuery(this));
          if (image_h > h) {
            slickSlideshow.change_height(jQuery(this));
          }
          $img.show();
        });
      }
    });

    $slides.each(function(index) {  
      if (slickSlideshow.view_type == "double_view" || slickSlideshow.view_type == 'multiple_view' || jQuery("body").hasClass("template-instruments_view")) {
        var $imgs = jQuery(jQuery(this).find('img'));
        $imgs.each(function(index_imgs) {
          var $img = jQuery(this);
          $img.load(function() {
            var image_h = slickSlideshow.change_width(jQuery(this));
            if (image_h > h) {
              slickSlideshow.change_height(jQuery(this));
            }
            if (!$img.hasClass("loaded")) {
              $img.addClass('loaded');
            }
          });
        });
      } else {
        var $img = jQuery(jQuery(this).find('img')[0]);
        //$img.hide();
        $img.load(function() {
          var image_h = slickSlideshow.change_width(jQuery(this));
          if (image_h > h) {
            slickSlideshow.change_height(jQuery(this));
          }
          $img.show();
        });
      }
    });
  }
};

slickSlideshow.startPlayInstrument = function(currSlide) {
  /*var slide = currSlide;
  setTimeout(function() { currSlide.slickPlay(); }, 3000);*/
};

slickSlideshow.resizeImage = function(current, is_obj) {
  if (jQuery("body").hasClass("portaltype-object") || (is_obj == true)) {
    var gap = slickSlideshow.gap;

    if (slickSlideshow.isCollection) {
      var h = jQuery(".slideshow").height();
    } else if (!slickSlideshow.regular){
      var h = jQuery(window).height();
    } else if (slickSlideshow.regular) {
      var h = jQuery(".slideshow").height();
    }

    if ((h - gap > 0) && slickSlideshow.regular != true) {
      //slickSlideshow.$obj.attr("style", "height:"+(h-gap)+"px;");
    } else if (slickSlideshow.regular) {
      slickSlideshow.$obj.attr("style", "height:"+(h-gap)+"px;");
    }
    
    if (slickSlideshow.resize || jQuery("body").hasClass("portaltype-object")) {
      h = slickSlideshow.$obj.height();
      w = slickSlideshow.$obj.width();

      $slick = slickSlideshow.$obj.getSlick();
      currentSlide = $slick.currentSlide;

      $slides = $slick.$slides;
      var total = $slides.length;

      if (slickSlideshow.view_type != "double_view") {
        if (currentSlide > 0 && currentSlide < $slides.length-1) {
          if (current) {
            $slides = $slides.slice(currentSlide-1, currentSlide+1);
          } else {
            $slides = [$slides[currentSlide-1], $slides[currentSlide+1]];
          }
        } else if (currentSlide == 0 && total > 1) {
          if (current) {
            $slides = [$slides[total-1], $slides[currentSlide], $slides[currentSlide+1]];
          } else {
            $slides = [$slides[total-1], $slides[currentSlide+1]];
          }
        } else if (currentSlide == total-1) {
          if (current) {
            $slides = [$slides[total-2], $slides[0]];
          }
        }
      }

      jQuery($slides).each(function(index) {
        if (slickSlideshow.view_type == "double_view" || slickSlideshow.view_type == "multiple_view") {
          var $imgs = jQuery(jQuery(this).find('img'));
          $imgs.each(function(index) {
            var $img = jQuery(this);
            var image_h = slickSlideshow.change_width(jQuery(this), true);
            if (image_h > h) {
              slickSlideshow.change_height(jQuery(this), true);
            }
          });
        } else {
          if (!jQuery(this).hasClass('video-slide')) {
            var $img = jQuery(jQuery(this).find('img')[0]);
            var image_h = slickSlideshow.change_width($img, true);
            if (image_h > h) {
              slickSlideshow.change_height($img, true);
            }
          }
        }
      });
    }
  }
};

slickSlideshow.addSlideInIndex = function(slides, index) {
  _logger.log("Add new bulk on index: "+index);
  
  for (var i = 0; i < slides.length; i++) {
    item = slides[i];
    slide_item = {
      'url': item.image_url,
      'obj_url': item.url,
      'object_id': item.object_id,
      'title': item.title,
      'description': item.description,
      'body': item.body,
      'schema': item.schema
    }
    slickSlideshow.slides.splice((index+i+1), 0, slide_item);
    
    if (slickSlideshow.double_view == false) { 
      if (slides[i].image_url != "") {
        slickSlideshow.$obj.slickAdd("<div data-title='"+slides[i].title+"' data-id='"+slides[i].object_id+"' data-description='"+slides[i].description+"' data-url='"+slides[i].url+"' data-body='"+slides[i].body+"'><div class='inner-bg'><img data-lazy='"+slides[i].image_url+"'/></div></div>", (index+i));
      } else {
        slickSlideshow.$obj.slickAdd("<div data-title='"+slides[i].title+"' data-id='"+slides[i].object_id+"' data-description='"+slides[i].description+"' data-url='"+slides[i].url+"' data-body='"+slides[i].body+"' class='no-image-slide'><div class='title-description-wrapper'><h1 class='documentFirstHeading no-image'>"+slides[i].title+"</h1><div class='documentDescription description no-image'>"+slides[i].description+"</div></div></div>", (index+i));
      }
    } else if (slickSlideshow.view_type == "double_view") {
      slide_w_images = "<div data-title='"+slides[i].title+"' data-id='"+slides[i].object_id+"' data-description='"+slides[i].description+"' data-url='"+slides[i].url+"' data-body='"+slides[i].body+"'><div class='inner-bg'>";
      for (var j = 0; j < slides[i].images.length; j++) {
        slide_w_images += "<div class='double-container'><img data-lazy='"+slides[i].images[j]+"'/></div>";
      };
      slide_w_images += "</div></div>";
      slickSlideshow.$obj.slickAdd(slide_w_images, (index+i));
    }
  }

  slickSlideshow.resizeSlide();
};

slickSlideshow.toggle_play = function(playBtn, slide) {
    if (playBtn.hasClass('playing')) {
      slide.slickPause();
      playBtn.removeClass('playing');
      playBtn.addClass('paused');
      jQuery(".actions-div .play-btn i").removeClass("fa-pause");
      jQuery(".actions-div .play-btn i").addClass("fa-play");
      jQuery(".slideshow").removeClass('playing');
      jQuery(".slideshow").addClass('paused');
    } else {
      slide.slickPlay();
      playBtn.removeClass('paused');
      playBtn.addClass('playing');
      jQuery(".actions-div .play-btn i").removeClass("fa-play");
      jQuery(".actions-div .play-btn i").addClass("fa-pause");
      jQuery(".slideshow").removeClass('paused');
      jQuery(".slideshow").addClass('playing');
    }
};

slickSlideshow.addNavigationSlides = function() {

  slides = slickSlideshow.slides;

  var init_slide = 0;

  if (!jQuery("body").hasClass('template-multiple_view')) {
    init_slide = 1;
  } else {
    /*init_slide = 1;
    var first_slide = slides[0];
    var first_slick_slideshow = jQuery(slickSlideshow.$obj.getSlick().$slides[0]);

    var slide_w_images = "";
    for (var j = 0; j < first_slide.images.length; j++) {
      slide_w_images += "<div><div class='inner-bg'><img data-lazy='"+first_slide.images[j]+"'/></div></div>";
    };
    
    first_slick_slideshow.slickAdd(slide_w_images);*/
  }

  for (var i = init_slide; i < slides.length; i++) {
    if (slickSlideshow.double_view == false) {
      if (slides[i].url != "") {
        slickSlideshow.$obj.slickAdd("<div data-title='"+slides[i].title+"' data-id='"+slides[i].object_id+"' data-description='"+slides[i].description+"' data-url='"+slides[i].obj_url+"' data-body='"+slides[i].body+"'><div class='inner-bg'><img data-lazy='"+slides[i].url+"'/></div></div>");
      } else {
        slickSlideshow.$obj.slickAdd("<div data-title='"+slides[i].title+"' data-id='"+slides[i].object_id+"' data-description='"+slides[i].description+"' data-url='"+slides[i].obj_url+"' data-body='"+slides[i].body+"' class='no-image-slide'><div class='title-description-wrapper'><h1 class='documentFirstHeading no-image'>"+slides[i].title+"</h1><div class='documentDescription description no-image'>"+slides[i].description+"</div></div></div>");
      }
    } else if (slickSlideshow.view_type == "double_view") {
      slickSlideshow.$obj.addClass('double-view');
      slide_w_images = "<div data-title='"+slides[i].title+"' data-id='"+slides[i].object_id+"' data-description='"+slides[i].description+"' data-url='"+slides[i].obj_url+"' data-body='"+slides[i].body+"'>";
      for (var j = 0; j < slides[i].images.length; j++) {
        slide_w_images += "<div class='double-container'><div class='inner-bg'><img data-lazy='"+slides[i].images[j]+"'/></div></div>";
      };
      slide_w_images += "</div>";
      slickSlideshow.$obj.slickAdd(slide_w_images);

    } else if (slickSlideshow.view_type == "multiple_view") {
      slickSlideshow.$obj.addClass('multiple-view');

      slide_w_images = "<div class='inner-slideshow' data-title='"+slides[i].title+"' data-id='"+slides[i].object_id+"' data-description='"+slides[i].description+"' data-url='"+slides[i].obj_url+"' data-body='"+slides[i].body+"'>";
      for (var j = 0; j < slides[i].images.length; j++) {
        slide_w_images += "<div><div class='inner-bg'><img data-lazy='"+slides[i].images[j]+"'/></div></div>";
      };
      slide_w_images += "</div>";
      slickSlideshow.$obj.slickAdd(slide_w_images);
    }
  }

  if (!jQuery("body").hasClass('template-multiple_view')) {
    var $currSlide = jQuery(slickSlideshow.$obj.getSlick().$slides[0]);
    var first = slickSlideshow.slides[0];
    if (first != undefined) {
      $currSlide.attr('data-title', first.title);
      $currSlide.attr('data-id', first.object_id);
      $currSlide.attr('data-description', first.description);
      $currSlide.attr('data-url', first.obj_url);
      $currSlide.attr('data-body', first.body);
      slickSlideshow.resizeImages();
      slickSlideshow.updateSlideDetails(0, $currSlide, $currSlide.attr("data-title"), $currSlide.attr("data-description"));
    }
  } else {
    var $currSlide = jQuery(slickSlideshow.$obj.getSlick().$slides[0]);
    var first = slickSlideshow.slides[0];
    $currSlide.attr('data-title', first.title);
    $currSlide.attr('data-id', first.object_id);
    $currSlide.attr('data-description', first.description);
    $currSlide.attr('data-url', first.obj_url);
    $currSlide.attr('data-body', first.body);
    slickSlideshow.resizeImages();
    slickSlideshow.updateSlideDetails(0, $currSlide, $currSlide.attr("data-title"), $currSlide.attr("data-description"));
    jQuery(".slideshowWrapper").addClass("slick-init");
  }

  return;
};

slickSlideshow.getNavigationContent = function(query, object_id, init) {
  var request_url = "get_nav_objects";
  var URL;

  location_query_split = window.location.href.split('?');
  current_url = location_query_split[0];
  
  if (object_id != "") {
    location_url_split = current_url.split("/");
    location_url_split[location_url_split.length-1] = object_id;
    current_url = location_url_split.join('/');
  }

  // Set request URL
  URL = current_url + "/" + request_url + query;

  slickSlideshow.request_url = URL;
  slickSlideshow.query = query;

  if (jQuery("body").hasClass('template-multiple_view') && query != "") {
    URL += "&bulk=5";
  } else if (jQuery("body").hasClass('template-multiple_view') && query == "") {
    URL += "?bulk=5";
  }

  var get_content = true;
  if (getParameterByName('collection_id') == "") {
    get_content = false;
  }
  
  if (get_content != false) {
    $.getJSON(URL, function(data) {
      if (data != undefined) {
        
        object_to_go = data.object_idx;
        
        slickSlideshow.double_view = data.has_list_images;
        slickSlideshow.total = data.total;
        slickSlideshow.total_items = data.total_items;
        slickSlideshow.view_type = data.view_type;
        slickSlideshow.slideCount = data.index_obj;

        _logger.log(slickSlideshow.total_items);

        $.each(data.list, function(index, item) {
          slide_item = {
            'url': item.image_url,
            'obj_url': item.url,
            'object_id': item.object_id,
            'title': item.title,
            'description': item.description,
            'body': item.body,
            'schema': item.schema
          }

          if (slickSlideshow.double_view) {
            slide_item.images = item.images;
          }
          slickSlideshow.slides.push(slide_item);
        });
        
        slickSlideshow.addNavigationSlides();
        
        if (slickSlideshow.reseted) {
          var push_url = slickSlideshow.slides[0].obj_url + slickSlideshow.query;
          history.replaceState(null, null, push_url);
        }

        if (!init) {
          slickSlideshow.initSlick(object_to_go);
        }

        var $slides = slickSlideshow.$obj.getSlick().$slides;

        var currentSlide = 0;
        $currentSlideObj = jQuery($slides[currentSlide]);
        var description = $currentSlideObj.attr('data-description');
        var title = $currentSlideObj.attr('data-title');
        var original_title =  $currentSlideObj.attr('data-title');

        if (title == undefined) {
          title = "";
        } 

        if (description != undefined) {
          title = "";
        }

        if (title.length > 45) {
          title = title.substring(0, 44);
          title = title + "...";
        }
        

        var title_and_description = title + description;
        if (title_and_description.length > 85) {
          var offset = title_and_description.length - 85;
          title = title.substring(0, title.length-offset-1);
          title = title + "...";
        }

        if (slickSlideshow.total_items < 2) {
          jQuery("#slide-count").hide();
        }

        jQuery("#slideshow-controls #slide-count").html((slickSlideshow.slideCount) + "/" + slickSlideshow.total_items);
        if (slickSlideshow.slideCount == 1) {
          jQuery("div.wrap-prev").hide();
        } else if (slickSlideshow.slideCount == slickSlideshow.total_items) {
          jQuery("div.wrap-next").hide();
        }


        if ((title != "") && (description != "")) {
          // TEMP jQuery("#slideshow-controls #slide-description").html(title + ", " + description);
          jQuery("#slideshow-controls #slide-description").html(original_title);
        }

        if (!init) {
          jQuery(".slideshowWrapper").addClass("slick-init");
        } else if (jQuery("body").hasClass("template-double_view")) {
          slickSlideshow.resizeImages();
        }
        
      }
    });
  }

};

slickSlideshow.updateFacebook = function(url) {
  /*jQuery(".fb-like").attr("data-href", url);
  FB.XFBML.parse();*/
};

slickSlideshow.updateTwitter = function(url, document_title) {
  /*jQuery(".twitter-row").html('');
  var structure = '<a href="https://twitter.com/share" class="twitter-share-button" data-url="'+url+'" data-text="'+document_title+'">Tweet</a>';
  jQuery(".twitter-row").html(structure);
  $.getScript("http://platform.twitter.com/widgets.js");*/
};

slickSlideshow.updatePinterest = function(current) {
  // TODO
  /*var $slide = jQuery(slickSlideshow.$obj.getSlick().$slides[current])
  var $img = jQuery($slide.find('img')[0])

  var url = $img.attr('data-lazy');
  if (url == undefined) {
    var url = $img.attr('src');
  }
  var pinterest_href = jQuery("#pinterest-btn").attr("href");
  var pinterest_url = pinterest_href + url;
  jQuery("#pinterest-btn").attr("href", pinterest_url);*/
};

slickSlideshow.updateSocialButtons = function(current, document_title) {
  var browser_url = window.location.href;
  slickSlideshow.updatePinterest(current);
  slickSlideshow.updateFacebook(browser_url);
  slickSlideshow.updateTwitter(browser_url, document_title);
};

slickSlideshow.findHashSlide = function(location_hash)  {

  var hash = location_hash.split("#")[1]

  var slides = slickSlideshow.slides;
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].relative_path != undefined) {
      if (slides[i].relative_path == hash) {
        return i;
      }
    }
  };

  return 0;
};

slickSlideshow.findHashCollectionSlide = function(location_hash) {
  var hash = location_hash.split("#")[1]
  
  var $slides = jQuery(".slick-slideshow div:not(.inner-bg)");
  for (var i = 0; i < $slides.length; i++) {
    var url = jQuery($slides[i]).attr("data-url");
    if (url != undefined) {
      var url_compare = "/"+url.split("/").slice(3).join("/");
      if (url_compare == hash) {
        return i;
      }
    }
  };
  return 0;
};

slickSlideshow.initSlick = function(object_idx) {
  if (slickSlideshow.$obj != undefined) {
    
    if (slickSlideshow.regular) {

      if (window.location.hash != "") {
        slickSlideshow.initialSlide = slickSlideshow.findHashSlide(window.location.hash);
      }

      slickSlideshow.$obj.slick({
        accessibility: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        lazyLoad: "progressive",
        initialSlide: slickSlideshow.initialSlide,
        adaptiveHeight: false,
        focusOnSelect: false,
        draggable: false,
        onAfterChange: slickSlideshow.afterChange,
        onBeforeChange: slickSlideshow.beforeChange,
        appendArrows: jQuery(".slideshowWrapper"),
        nextArrow: "<div class='wrap-next'><button type='button' class='slick-next'></button></div>",
        prevArrow: "<div class='wrap-prev'><button type='button' class='slick-prev'></button></div>"
      });

      jQuery(".slideshowWrapper").addClass("slick-init");

      slickSlideshow.resizeWindow();
      slickSlideshow.resizeImages();

      jQuery(window).resize(function() {
        slickSlideshow.resizeWindow();
        slickSlideshow.resizeImage(true);
      });

    } else {
      var speed = 500;

      if (slickSlideshow.editingMode == true) {
        if (window.location.hash != "") {
          slickSlideshow.initialSlide = slickSlideshow.findHashSlide(window.location.hash);
          object_idx = slickSlideshow.initialSlide;
          slickSlideshow.slideCount = slickSlideshow.initialSlide + 1;
          jQuery(".slideshowWrapper").addClass("slick-init");
        }
      }

      if (jQuery("body").hasClass('template-book_view')) {
        if (window.location.hash != "") {
          slickSlideshow.initialSlide = slickSlideshow.findHashSlide(window.location.hash);
          object_idx = slickSlideshow.initialSlide;
          slickSlideshow.slideCount = slickSlideshow.initialSlide + 1;
        }
        speed = 0;
      }

      if (jQuery("body").hasClass('template-instrument_view')) {
        if (window.location.hash != "") {
          slickSlideshow.initialSlide = slickSlideshow.findHashSlide(window.location.hash);
          object_idx = slickSlideshow.initialSlide;
          slickSlideshow.slideCount = slickSlideshow.initialSlide + 1;
        }
        speed = 0;
      }

      slickSlideshow.$obj.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        speed: speed,
        autoplaySpeed: 500,
        slidesToShow: 1,
        initialSlide: object_idx,
        lazyLoad: 'progressive',
        adaptiveHeight: true,
        focusOnSelect: false,
        onAfterChange: slickSlideshow.afterChange,
        onBeforeChange: slickSlideshow.beforeChange,
        appendArrows: jQuery(".slideshowWrapper"),
        nextArrow: "<div class='wrap-next'><button type='button' class='slick-next'></button></div>",
        prevArrow: "<div class='wrap-prev'><button type='button' class='slick-prev'></button></div>"
      });

      if (slickSlideshow.view_type == "multiple_view") {
        jQuery(".play-btn").removeClass('playing');
        jQuery(".play-btn").addClass('paused');
        jQuery(".actions-div .play-btn i").removeClass("fa-pause");
            jQuery(".actions-div .play-btn i").addClass("fa-play");
      }

      var h = jQuery(window).height();
      var gap = slickSlideshow.gap;

      //slickSlideshow.$obj.attr("style", "height:"+(h-gap)+"px;");

      if (!jQuery("body").hasClass('template-double_view') && !jQuery("body").hasClass('template-multiple_view') && !jQuery("body").hasClass('template-book_view')) {
        // DO not resize
      } else {
        // Resize
        slickSlideshow.resizeImages();
      }
      
      if (slickSlideshow.view_type == "multiple_view") {
        var $currSlide = jQuery(slickSlideshow.$obj.getSlick().$slides[0]);
      }

      if (jQuery("body").hasClass("template-book_view")) {
        var document_title = document.title.split('—');
        var title = document_title[0];
        jQuery("#slideshow-controls #slide-description").html(title);
      }

      if (jQuery("body").hasClass("template-instruments_view")) {
        jQuery(".play-btn").removeClass('playing');
        jQuery(".play-btn").addClass('paused');
        jQuery(".actions-div .play-btn i").removeClass("fa-pause");
            jQuery(".actions-div .play-btn i").addClass("fa-play");
        var document_title = document.title.split('—');
        var title = document_title[0];
        jQuery("#slideshow-controls #slide-description").html(title);
      }

      var $currSlide = jQuery(slickSlideshow.$obj.getSlick().$slides[object_idx]);

      if (jQuery("body").hasClass("template-instrument_view") || jQuery("body").hasClass("template-book_view")) {
        slickSlideshow.updateSlideDetails(0, $currSlide, title, "");
      } else {
        // Metadata comes after slideshow loaded
        //slickSlideshow.updateSlideDetails(0, $currSlide, $currSlide.attr("data-title"), $currSlide.attr("data-description"));
      }

      slickSlideshow.resizeImage(true);
      jQuery("#slideshow-controls, body.portaltype-object div.on-display-wrapper").show();

      jQuery(window).resize(function() {
        slickSlideshow.resizeImage(true);
      });

      
    }
  }
};


slickSlideshow.setLoadingProperties = function() {
  slickSlideshow.bulk = 10;
  slickSlideshow.lastItem = 0;
  slickSlideshow.forward = true;
  slickSlideshow.dangerous_entries = 1;
  slickSlideshow.dangerous_item = slickSlideshow.bulk;
  slickSlideshow.buffer = 4;
  slickSlideshow.total = false;
  slickSlideshow.reseted = false;
  slickSlideshow.regular = false;
  slickSlideshow.isCollection = false;
  slickSlideshow.double_view = false;
  slickSlideshow.multiple_view = false;
  slickSlideshow.view_type = "regular";
  slickSlideshow.total_items = 0;
  slickSlideshow.slideCount = 1;
  slickSlideshow.gap = 160;
  slickSlideshow.resize = true;
  slickSlideshow.moved = false;
  slickSlideshow.editingMode = false;
  slickSlideshow.initialSlide = 0;
  slickSlideshow.no_image = false;

  if (jQuery("body").hasClass('template-multiple_view')) {
    slickSlideshow.bulk = 5;
    slickSlideshow.buffer = 1;
  }
};

slickSlideshow.resizeWindow = function() {
  var w = jQuery(window).width();
  var ratio = 16/9;
  var h = w / ratio;

  jQuery(".slideshow").css("height", h+"px");
  jQuery("#slickslideshow").css("height", h+"px");
};

slickSlideshow.startVideoFromSlide = function(slide) {

  if (!slickSlideshow.editingMode && !isMobile.any()) {
    var iframeID = jQuery(slide.find('iframe')[0]).attr('id');

    var player = slickSlideshow.players[iframeID];
    if (player != undefined) {
      if (player.playVideo) {
        player.playVideo();
      } else {
        jQuery(".slick-active.video-slide img.overlay-image").hide();
        jQuery(".video-play-btn").hide();
        jQuery(".video-play-btn").css("opacity", 0);
        jQuery(".slick-active.video-slide iframe").show();
      }
    }  else {
      jQuery(".slick-active.video-slide img.overlay-image").hide();
      jQuery(".video-play-btn").hide();
      jQuery(".video-play-btn").css("opacity", 0);
      jQuery(".slick-active.video-slide iframe").show();

    }
  }
};

slickSlideshow.startFirstVideo = function(slide) {
  if (!slickSlideshow.editingMode && !isMobile.any()) {
    var iframeID = jQuery(slide.find('iframe')[0]).attr('id');
    var player = slickSlideshow.players[iframeID];
    
    if (player != undefined) {
      if (player.playVideo) {
        player.playVideo();
      } else {
        jQuery(".slick-active.video-slide img.overlay-image").hide();
        jQuery(".video-play-btn").css("opacity", 0);
        jQuery(".slick-active.video-slide iframe").show();
        jQuery(".video-play-btn").hide();
      }
    } else {
      jQuery(".slick-active.video-slide img.overlay-image").hide();
      jQuery(".video-play-btn").css("opacity", 0);
      jQuery(".slick-active.video-slide iframe").show();
      jQuery(".video-play-btn").hide();
    }
  }
};

slickSlideshow.addCollectionItems = function(data) {
  for (i = 0; i < data.length; i++) {
    var remoteURL = data[i].remote_url;
    var _id = data[i]._id;
    var description = data[i].data_description;
    var title = data[i].data_title;
    var url = data[i].data_url;
    var image_path = data[i].image_path;
    
    if (data[i].is_video && data[i].has_overlay) {
      var slide = "<div data-url='"+url+"' data-description='"+description+"' data-title='"+title+"' class='video-slide'>"
      + "<div class='video-play-btn'></div>"
      + "<img src='"+image_path+"' class='overlay-image'/>"
      + "<iframe frameborder='0' allowfullscreen src='"+remoteURL+"' id='"+_id+"' class='video-iframe with-overlay'></iframe>"
      + "</div>";
      slickSlideshow.$obj.slickAdd(slide);
    } else if (data[i].is_video && !data[i].has_overlay) {
      var slide = "<div data-url='"+url+"' data-description='"+description+"' data-title='"+title+"' class='video-slide'>"
      + "<iframe frameborder='0' allowfullscreen src='"+remoteURL+"' id='"+_id+"' class='video-iframe without-overlay'></iframe>"
      + "</div>";
      slickSlideshow.$obj.slickAdd(slide);
    } else {
      var slide = "<div data-url='"+url+"' data-description='"+description+"' data-title='"+title+"'>"
      + "<div class='inner-bg'>"
      + "<img src='"+image_path+"'/>"
      + '</div>'
      + "</div>";
      slickSlideshow.$obj.slickAdd(slide);
    }
  }
};

slickSlideshow.addNextSlidesCollection = function(data_url) {
  var request_url = "/get_collection_items";

  var URL = data_url + request_url;

  $.getJSON(URL, function(data) {
    if (data != undefined) {
      slickSlideshow.addCollectionItems(data);
    }
  })
};

slickSlideshow.initCollection = function() {
  slickSlideshow.$obj = jQuery(jQuery('.slick-slideshow')[0]);

  jQuery("#slickslideshow").toggleClass("fullscreen");
  slickSlideshow.setLoadingProperties();
  
  /* Check editing mode */
  if (jQuery("body").hasClass('userrole-authenticated')) {
    slickSlideshow.editingMode = true;
  }

  slickSlideshow.isCollection = true;

  if (window.location.hash != "") {
    slickSlideshow.initialSlide = slickSlideshow.findHashCollectionSlide(window.location.hash);
  }

  slickSlideshow.slideCount = slickSlideshow.initialSlide + 1;

  slickSlideshow.$obj.slick({
    accessibility: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    initialSlide: slickSlideshow.initialSlide,
    speed: 500,
    adaptiveHeight: true,
    focusOnSelect: false,
    onAfterChange: slickSlideshow.afterChange,
    onBeforeChange: slickSlideshow.beforeChange,
    appendArrows: jQuery(".slideshowWrapper"),
    nextArrow: "<div class='wrap-next'><button type='button' class='slick-next'></button></div>",
    prevArrow: "<div class='wrap-prev'><button type='button' class='slick-prev'></button></div>"
  });

  jQuery("#slickslideshow").addClass("slick-init");
  slickSlideshow.total_items = slickSlideshow.$obj.getSlick().$slides.length;
  if (slickSlideshow.total_items == 0) {
    jQuery(".slideshow-loader").fadeOut(200)
  }
  if (slickSlideshow.total_items < 2) {
    jQuery("#slide-count").hide();
  }

  jQuery("#slideshow-controls #slide-count").html((slickSlideshow.slideCount) + "/" + slickSlideshow.total_items);
  jQuery("#slideshow-controls #slide-description").html(jQuery(slickSlideshow.$obj.getSlick().$slides[slickSlideshow.initialSlide]).attr("data-description"));

  // Check if front-page
  /*var data_url = jQuery("#slickslideshow").attr('data-url');
  if (data_url != undefined) {
    slickSlideshow.addNextSlidesCollection(data_url);
  }*/

  slickSlideshow.resizeWindow();
  slickSlideshow.resizeImages();

  jQuery(window).resize(function() {
    slickSlideshow.resizeWindow();
    slickSlideshow.resizeImage(true);
  });

  jQuery(window).scroll(function() {
    var isvisible = isElementInViewport(jQuery("#slickslideshow"));
    
    if (!isvisible) {
      if (slickSlideshow.playing) {
        slickSlideshow.pauseCurrentSlide();
      }
    }
  });

};

slickSlideshow.init = function() {
  var query = location.search;

  $slick_slideshow = jQuery(jQuery('.slick-slideshow')[0]);

  /* Collection slideshow */
  if ($slick_slideshow != undefined) {
    if ($slick_slideshow.hasClass('collection')) {
      slickSlideshow.initCollection();
      if (slickSlideshow.youtube_ready) {
        slickSlideshow.initiated_youtube = true;
        slickSlideshow.YT_ready();
      }
      return;
    }
  }

  /* Single content slideshow */
  if ($slick_slideshow.hasClass("regular")) {


    _logger.log("==== INIT Regular slideshow ====");
    slickSlideshow.$obj = jQuery(jQuery('.slick-slideshow')[0]);
    slickSlideshow.$contentListingObj = jQuery(jQuery('.slick-slideshow a')[0]);
    slickSlideshow.$contentListingObj.remove();
    slickSlideshow.getDetails();
    slickSlideshow.setLoadingProperties();

    /* Check editing mode */
    if (jQuery("body").hasClass('userrole-authenticated')) {
      slickSlideshow.editingMode = true;
    }

    slickSlideshow.regular = true;
    slickSlideshow.double_view = false;
    slickSlideshow.getContentListing("regular");
    
    jQuery("#slickslideshow").toggleClass("fullscreen");
    return;
  }

  if (jQuery("body").hasClass('template-instrument_view')) {
    
    _logger.log("==== INIT Regular slideshow ====");
    slickSlideshow.$obj = jQuery(jQuery('.slick-slideshow')[0]);

    slickSlideshow.$contentListingObj = jQuery(jQuery('.slick-slideshow a')[0]);
    slickSlideshow.$contentListingObj.remove();
    slickSlideshow.getDetails();
    slickSlideshow.setLoadingProperties();

    /* Check editing mode */
    if (jQuery("body").hasClass('userrole-authenticated')) {
      slickSlideshow.editingMode = true;
    }

    var gap = 0;
      var h = jQuery(window).height();
      slickSlideshow.gap = gap;  
    slickSlideshow.resize = true;
    
    
    //slickSlideshow.$obj.attr("style", "height:"+(h-gap)+"px;");
    slickSlideshow.double_view = false;
    slickSlideshow.getContentListing("regular");
    
    jQuery("#slickslideshow").toggleClass("fullscreen");
    jQuery("header").toggleClass("fullscreen");

    return;
  }

  if (jQuery("body").hasClass('template-book_view')) {
    
    _logger.log("==== INIT Regular slideshow ====");
    slickSlideshow.$obj = jQuery(jQuery('.slick-slideshow')[0]);

    slickSlideshow.$contentListingObj = jQuery(jQuery('.slick-slideshow a')[0]);
    slickSlideshow.$contentListingObj.remove();
    slickSlideshow.getDetails();
    slickSlideshow.setLoadingProperties();

    /* Check editing mode */
    if (jQuery("body").hasClass('userrole-authenticated')) {
      slickSlideshow.editingMode = true;
    }

    var gap = 160;
      var h = jQuery(window).height();
      slickSlideshow.gap = gap;  
    slickSlideshow.resize = true;
    jQuery(".actions-div .expand-btn i").removeClass("fa-compress");
        jQuery(".actions-div .expand-btn i").addClass("fa-expand");
    
    //slickSlideshow.$obj.attr("style", "height:"+(h-gap)+"px;");
    slickSlideshow.double_view = false;
    slickSlideshow.getContentListing("regular");
    
    return;
  }

  /* Storytelling slideshow */

  if (query != "" || query == "") {
    _logger.log("==== INIT Loading feature ====");
    slickSlideshow.$obj = jQuery(jQuery('.slick-slideshow')[0]);
    slickSlideshow.$contentListingObj = jQuery(jQuery('.slick-slideshow a')[0]);
    slickSlideshow.$contentListingObj.remove();
    slickSlideshow.$container = jQuery(jQuery(".slideshowContent")[0]);
    slickSlideshow.getDetails();
    slickSlideshow.setLoadingProperties();
    
    /* Check editing mode */
    if (jQuery("body").hasClass('userrole-authenticated')) {
      slickSlideshow.editingMode = true;
    }

    var gap = 0;
      var h = jQuery(window).height();
      slickSlideshow.gap = gap; 


      if (!jQuery("body").hasClass("template-double_view") && !jQuery("body").hasClass("template-drawing_view") && !jQuery("body").hasClass("template-multiple_view") && !jQuery("body").hasClass('template-instruments_view')) {
        // FULL SCREEN OPTION
        jQuery("#slickslideshow").toggleClass("fullscreen");
        jQuery("header").toggleClass("fullscreen");
        slickSlideshow.resize = false;
    } else {
      // ZOOMED OUT OPTION
      var gap = 160;
        var h = jQuery(window).height();
        slickSlideshow.gap = gap;
      slickSlideshow.resize = true;
      jQuery(".actions-div .expand-btn i").removeClass("fa-compress");
          jQuery(".actions-div .expand-btn i").addClass("fa-expand");
    }

    //slickSlideshow.$obj.attr("style", "height:"+(h-gap)+"px;");
    slickSlideshow.getContentListing("");
  }
};

slickSlideshow.addBulkElements = function(index) {
  var request_url = "get_next_objects";
  var URL;

  location_query_split = window.location.href.split('?');
  current_url = location_query_split[0];

  // Set request URL
  //var add_object = slickSlideshow.slides[index-1];

  if (slickSlideshow.query != "") {
    URL = current_url + "/" + request_url + slickSlideshow.query + "&object_id="+slickSlideshow.slides.length;
  } else {
    URL = current_url + "/" + request_url + "?object_id="+slickSlideshow.slides.length;
  }

  if (jQuery("body").hasClass('template-multiple_view')) {
    URL += "&bulk=5";
  }

  //_logger.log("[Slideshow bulk] Get next bulk for object_id: "+add_object.object_id)
  
  // Request
  $.getJSON(URL, function(data) {
    if (data.list != undefined) {
      slickSlideshow.total = data.total;
      slickSlideshow.addSlideInIndex(data.list, index-1);
    }
  });
};

slickSlideshow.resetSlideshow = function(item) {
  return true;
  var slide_count = slickSlideshow.slideCount;
  slickSlideshow.$obj.html('');
  slickSlideshow.$obj.unslick();

  if (slickSlideshow.slides[item] != undefined) {
    object_id = slickSlideshow.slides[item].object_id;
  } else {
    object_id = "";
  }

  slickSlideshow.slides.length = 0;
  slickSlideshow.slides = [];
  slickSlideshow.setLoadingProperties();
  slickSlideshow.reseted = true;
  slickSlideshow.slideCount = slide_count;
  slickSlideshow.getContentListing(object_id);
};

slickSlideshow.updateSlideshowLoading = function(current) {
  var reset = false;

  if (slickSlideshow.dangerous_item != undefined && slickSlideshow.total == false) {
    dangerous_zone_start = slickSlideshow.dangerous_item - slickSlideshow.buffer;
    dangerous_zone_end = slickSlideshow.dangerous_item + slickSlideshow.buffer;
    
    _logger.log("[Slideshow loading] Current slide: "+current);
    _logger.log("[Slideshow loading] Dangerous zone start: "+dangerous_zone_start);

    if (current >= dangerous_zone_start && current <= dangerous_zone_end) {
      if (slickSlideshow.forward) {
        slickSlideshow.addBulkElements(slickSlideshow.dangerous_item);
        slickSlideshow.dangerous_entries += 1;
        slickSlideshow.dangerous_item = slickSlideshow.bulk*slickSlideshow.dangerous_entries;
      } else {
        return false;
        reset = true;
        slickSlideshow.reseted = true;
        slickSlideshow.resetSlideshow(dangerous_zone_end);
      }
    }
  }

  return reset;
};

slickSlideshow.updateSchema = function(schema) {  
  if (jQuery("body").hasClass('template-book_view')) {
    slickSlideshow.getSchemaSlide(slickSlideshow.$obj.slickCurrentSlide());
    return false;
  }

  if (slickSlideshow.editingMode) {
    return false;
  }

  _logger.log("[Update schema] try to update");
  jQuery(".object-fieldset").html('');

  var html = "";
  var body = "";

  for (var i = 0; i < schema.length; i++) {
    if (schema[i].fields.length > 0) {
      html += "<h3 class='fieldset-header'>"+schema[i].name+"</h3>";
      for (var j = 0; j < schema[i].fields.length; j++) {
        if (schema[i].fields[j].title != "body") {
          html += "<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12 object-label' style='padding-left:0px;'><span>"+schema[i].fields[j].title+"</span></div><div class='col-lg-7 col-md-7 col-sm-7 col-xs-12 object-value'><p>"+schema[i].fields[j].value+"</p></div>";
        } else {
          body = schema[i].fields[j].value;
        }
      }
    }
  }
  
  var no_lt = html.replace(/&lt;/g, "<");
  var res = no_lt.replace(/&gt;/g, ">");
  
  var jsBody = jQuery($.parseHTML(body));
  var htmlBody = $.parseHTML(jsBody.text());
  //jQuery("#body-text").html('');
  //jQuery("#body-text").html(htmlBody);
  jQuery(".object-fieldset").html(res);
};

slickSlideshow.updateSchemaSlide = function(schema) {
  _logger.log("[Update schema] try to update");
  jQuery(".object-fieldset").html('');

  var html = "";
  var body = "";

  for (var i = 0; i < schema.length; i++) {
    if (schema[i].fields.length > 0) {
      html += "<h3 class='fieldset-header'>"+schema[i].name+"</h3>";
      for (var j = 0; j < schema[i].fields.length; j++) {
        if (schema[i].fields[j].title != "body") {
          html += "<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12 object-label' style='padding-left:0px;'><span>"+schema[i].fields[j].title+"</span></div><div class='col-lg-7 col-md-7 col-sm-7 col-xs-12 object-value'><p>"+schema[i].fields[j].value+"</p></div>";
        } else {
          body = schema[i].fields[j].value;
        }
      }
    }
  }

  
  var no_lt = html.replace(/&lt;/g, "<");
  var res = no_lt.replace(/&gt;/g, ">");

  var jsBody = jQuery($.parseHTML(body));
  var htmlBody = $.parseHTML(jsBody.text());
  
  jQuery("#body-text").html('');
  jQuery("#body-text").html(htmlBody);
  jQuery(".object-fieldset").html(res);
  /*if (slickSlideshow.no_image) {
    jQuery(".portaltype-object #parent-fieldname-text").show();
    jQuery(".container.object-container").show();
    jQuery(".object-fields").show();
    
    //window.location.hash = "#slideshow-controls";
  }*/
};

slickSlideshow.getSchemaSlide = function(currentSlide) {
  var URL = "";
  var request_url = "get_fields";
  var $slide_object = jQuery(slickSlideshow.$obj.getSlick().$slides[currentSlide]);
  var data_url = document.location.href;

  if (document.location.search != "") {
    temp_url = data_url;
    data_url = temp_url.replace(document.location.search, '');
  }

  URL = data_url + "/" + request_url;

  $.getJSON(URL, function(data) {
    if (data) {
      if (data.schema != undefined) {
        slickSlideshow.updateSchemaSlide(data.schema);
      }
    }
  });
};


slickSlideshow.updateSchemaCollection = function(currentSlide) {
  var URL = "";
  var request_url = "get_fields";
  var $slide_object = jQuery(slickSlideshow.$obj.getSlick().$slides[currentSlide]);
  var data_url = $slide_object.attr('data-url');

  URL = data_url + "/" + request_url;

  $.getJSON(URL, function(data) {
    if (data.schema != undefined) {
      slickSlideshow.updateSchema(data.schema);
    }
  });
};

slickSlideshow.beforeChange = function(event) {
  if (!jQuery(".slideshowWrapper").hasClass("moved")) {
    jQuery(".slideshowWrapper").addClass("moved")
  }
  currentSlide = event.currentSlide;
  var $currSlider = jQuery(event.$slides[currentSlide]);

  slickSlideshow.changeWrapperOpacity();

  if (jQuery("body").hasClass('template-instruments_view') && $currSlider.hasClass('inner-slideshow')) {
    jQuery(".play-btn").removeClass('playing');
    jQuery(".play-btn").addClass('paused');
    jQuery(".actions-div .play-btn i").removeClass("fa-pause");
        jQuery(".actions-div .play-btn i").addClass("fa-play");
    $currSlider.slickPause();
  }

  if ($currSlider.hasClass("video-slide")) {
    var frameID = jQuery($currSlider.find('iframe')[0]).attr("id");
    // Pause video
    var slide_player = slickSlideshow.players[frameID];
    if (slide_player != undefined && slide_player.pauseVideo) {
      slide_player.pauseVideo();
    }
  }
};

slickSlideshow.updateDOMTitle = function(body, title) {
  /* Update title */
  if (slickSlideshow.editingMode) {
    return false;
  }

  var document_title = document.title.split('—');
  document_title[0] = title;

  document.title = document_title.join('—');
  
  // Change title
  jQuery("#content h1.documentFirstHeading:not(.no-image)").html(title);
};

slickSlideshow.updateSlideDescriptionBar = function(title, description) {
  if (title == undefined) {
    title = "";
  }

  var original_title = title;

  if  (description == undefined) {
    description = "";
  }
  
  if (title.length > 45) {
    title = title.substring(0, 44);
    title = title + "...";
  }

  var title_and_description = title + description;
  if (title_and_description.length > 85) {
    var offset = title_and_description.length - 85;
    title = title.substring(0, title.length-offset-1);
    title = title + "...";
  }

  /* **** */
  // Update description bar
  /* **** */

  if (description != "") {
    //jQuery("#slideshow-controls #slide-description").html(title + ", " + description);
    jQuery("#slideshow-controls #slide-description").html(original_title);
  } else {
    jQuery("#slideshow-controls #slide-description").html(original_title);
  }
};

slickSlideshow.updateSlideDetails = function(curr, currentSlide, title, description) {
  var $currentSlideObj = currentSlide;

  jQuery("#content div.documentDescription.description:not(.no-image)").html(description);

  // Set length of description
  if (title == undefined) {
    title = "";
  }

  var original_title = title;

  if  (description == undefined) {
    description = "";
  }
  
  if (title.length > 45) {
    title = title.substring(0, 44);
    title = title + "...";
  }

  var title_and_description = title + description;
  if (title_and_description.length > 85) {
    var offset = title_and_description.length - 85;
    title = title.substring(0, title.length-offset-1);
    title = title + "...";
  }

  /* **** */
  // Update description bar
  /* **** */

  if (slickSlideshow.total_items < 2) {
    jQuery("#slide-count").hide();
  }



  jQuery("#slideshow-controls #slide-count").html((slickSlideshow.slideCount) + "/" + slickSlideshow.total_items);
  if (description != "") {
    if ($currentSlideObj.hasClass("video-slide")) {
      jQuery("#slideshow-controls #slide-description").html(description);
    } else {
      jQuery("#slideshow-controls #slide-description").html(original_title);
    }
  } else {
    if ($currentSlideObj.hasClass("video-slide")) {
      jQuery("#slideshow-controls #slide-description").html('');
    } else {
      jQuery("#slideshow-controls #slide-description").html(original_title);
    }
  }

  // Update schema of object
  if (slickSlideshow.isCollection != true) {
    var schema = slickSlideshow.slides[curr].schema;
    slickSlideshow.updateSchema(schema);
  } else {
    if (slickSlideshow.regular == false) {
      slickSlideshow.updateSchemaCollection(curr);
    } else {
      var schema = slickSlideshow.slides[curr].schema;
      slickSlideshow.updateSchema(schema);
    }
  }
};

slickSlideshow.updateDOMProperties = function(curr, currentSlide, title, description, body) {
  slickSlideshow.updateDOMTitle(body, title);
  slickSlideshow.updateSlideDetails(curr, currentSlide, title, description);
};

slickSlideshow.contentAJAXrefresh = function(curr, currentObject) {
  var $currentSlideObj = currentObject;

  if (slickSlideshow.isCollection) {
    var description = $currentSlideObj.attr('data-description');
    var title = $currentSlideObj.attr('data-title');
    var body = $currentSlideObj.attr('data-body');
  } else {
    
    var collection_id = getParameterByName("collection_id");
    var b_start = getParameterByName("b_start");
    var new_b_start = slickSlideshow.slideCount - 1;

    if (collection_id != "" && b_start != "") {
      slickSlideshow.query = "?collection_id="+collection_id+"&b_start="+new_b_start;
    }

    var push_url = $currentSlideObj.attr('data-url') + slickSlideshow.query;

    history.replaceState(null, null, push_url);
    var description = $currentSlideObj.attr('data-description');
    var title = $currentSlideObj.attr('data-title');
    var body = $currentSlideObj.attr('data-body');
    slickSlideshow.updateSocialButtons(0, title);
  }

  slickSlideshow.updateDOMProperties(curr, $currentSlideObj, title, description, body);
  
  if ($currentSlideObj.hasClass('video-slide')) {
    slickSlideshow.startVideoFromSlide($currentSlideObj);
  }
};

slickSlideshow.updateSlideCount = function(currentSlide) {

  var $slides = slickSlideshow.$obj.getSlick().$slides;
  var on_site_total = $slides.length-1;

  if (currentSlide == on_site_total && slickSlideshow.lastItem == 0) {
    slickSlideshow.slideCount -= 1;
    slickSlideshow.forward = false;
    slickSlideshow.lastItem = currentSlide;
  } else if (currentSlide == 0 && slickSlideshow.lastItem == on_site_total) {
    slickSlideshow.slideCount += 1;
    slickSlideshow.forward = true;
    slickSlideshow.lastItem = currentSlide;
  } else if (currentSlide < slickSlideshow.lastItem) {
    slickSlideshow.slideCount -= 1;
    slickSlideshow.forward = false;
    slickSlideshow.lastItem = currentSlide;
  } else {
    slickSlideshow.slideCount += 1;
    slickSlideshow.forward = true;
    slickSlideshow.lastItem = currentSlide;
  }

  if (slickSlideshow.slideCount <= 0) {
    slickSlideshow.slideCount = slickSlideshow.total_items;
  } else if (slickSlideshow.slideCount >= slickSlideshow.total_items+1) {
    slickSlideshow.slideCount = 1;
  }
  
  if (slickSlideshow.forward) {
    
    if (slickSlideshow.moved && jQuery(".slideshow").hasClass('playing')) {
      
      } else {
      if (!isMobile.any() && jQuery("#slickslideshow").hasClass("fullscreen")) {
        jQuery(".wrap-next").css("opacity", 1);
        jQuery("#portal-header-wrapper, #slideshow-controls, body.portaltype-portlet-page .documentDescription, body.template-contents_view .documentDescription, body.template-contents_view .documentFirstHeading, body.portaltype-object div.on-display-wrapper").fadeOut();
        if (!jQuery(".slideshowWrapper").hasClass("moved")) {
                jQuery(".slideshowWrapper").addClass("moved");
              }
        jQuery(".wrap-prev").css("opacity", 0);
        } else if (!isMobile.any() && !jQuery("#slickslideshow").hasClass("fullscreen")) {
          jQuery("body.portaltype-portlet-page .documentDescription, body.template-contents_view .documentDescription, body.template-contents_view .documentFirstHeading").fadeOut();
        }
      }
      slickSlideshow.moved = true;
  } else {
    
    if (slickSlideshow.moved && jQuery(".slideshow").hasClass('playing')) {
      
      } else {
        if (!isMobile.any() && jQuery("#slickslideshow").hasClass("fullscreen")) {
        jQuery(".wrap-prev").css("opacity", 1);
        jQuery("#portal-header-wrapper, #slideshow-controls, body.portaltype-portlet-page .documentDescription, body.template-contents_view .documentDescription, body.template-contents_view .documentFirstHeading, body.portaltype-object div.on-display-wrapper").fadeOut();
        if (!jQuery(".slideshowWrapper").hasClass("moved")) {
                jQuery(".slideshowWrapper").addClass("moved");
              }
        jQuery(".wrap-next").css("opacity", 0);
        } else if (!isMobile.any() && !jQuery("#slickslideshow").hasClass("fullscreen")) {
          jQuery("body.portaltype-portlet-page .documentDescription, body.template-contents_view .documentDescription, body.template-contents_view .documentFirstHeading").fadeOut();
        }
      }
      slickSlideshow.moved = true;
  }
};

slickSlideshow.updateSlideURLFragment = function(slide) {
  if (!slickSlideshow.isCollection) {
    var url = slide.relative_path;
    var original_path = window.location.href.split(/\?|#/)[0];
    var absolute_path = original_path + "#" + url;
    history.replaceState(null, null, absolute_path);
  }
};

slickSlideshow.updateSlideCollectionURL = function(slide) {
  var url = slide.attr("data-url");
  var real_url = url.split("/").slice(3).join("/");
  var original_path = window.location.href.split(/\?|#/)[0];
  var absolute_path = original_path + "#/" + real_url;
  history.replaceState(null, null, absolute_path);
};

slickSlideshow.afterChange = function(event) {
  //slickSlideshow.resizeImage(false);

  var currentSlide = slickSlideshow.$obj.getSlick().currentSlide;
  var $slides = slickSlideshow.$obj.getSlick().$slides;

  if (currentSlide == slickSlideshow.lastItem) {
    return;
  }

  /* *********** */
  /* TO BE FIXED */
  /* *********** */
  //jQuery(".video-slide img.overlay-image").hide();

  /* ****************** */
  /* Update slide count */
  /* ****************** */
  slickSlideshow.updateSlideCount(currentSlide);

  /* ******************************** */
  /* Update slideshow Loading feature */
  /* ******************************** */
  var reset = slickSlideshow.updateSlideshowLoading(currentSlide);

  /* ******************* */
  /* Regular slideshow   * 
  /* ******************* */


  if (slickSlideshow.regular || jQuery("body").hasClass('template-book_view') || jQuery("body").hasClass('template-instrument_view') || slickSlideshow.editingMode) {
    var slide = slickSlideshow.slides[currentSlide];
    var description = slide.description;

    if (slide.is_object) {
      description = "<a href='"+slide.relative_path+"'>"+slide.description+"</a>";
    }

    if (slickSlideshow.total_items < 2) {
      jQuery("#slide-count").hide();
    }

    jQuery("#slideshow-controls #slide-count").html((slickSlideshow.slideCount) + "/" + slickSlideshow.total_items);
    
    if (slickSlideshow.editingMode) {
      if (slide != "") {
        var object_nr = jQuery("#form-widgets-identification_identification_objectNumber");
        if (object_nr.length) {
          var obj_title = document.title.split('—')[0];
          var title = slide.reproduction_reference;
          object_number = object_nr.val();
          if (object_number != "") {
            if (title != "" && title != null) {
              var absolute_path = slide.absolute_path;
              var absolute_path_view = absolute_path + "/view";
              var final_title = "(<a href='"+absolute_path_view+"'>"+title+"</a>)";

              if (obj_title != "") {
                var description = object_number + " - " + obj_title + " "+final_title;
              } else {
                var description = object_number + " - " + final_title;
              }
            } else {
              if (obj_title != "") {
                var description = object_number + " - " + obj_title;
              } else {
                var description = object_number;
              }
            }
            jQuery("#slideshow-controls #slide-description").html(description);
          } else {
            var description = title;
            if (title == null) {
              if (obj_title != "") {
                description = obj_title;
              } else {
                description = "";
              }
            } else {
              var absolute_path = slide.absolute_path;
              var absolute_path_view = absolute_path + "/view";
              var final_title = "(<a href='"+absolute_path_view+"'>"+title+"</a>)";

              if (obj_title != "") {
                description = obj_title + " - " + final_title;
              } else {
                description = final_title;
              }
            }
            jQuery("#slideshow-controls #slide-description").html(description);
          }
        } else {
          var obj_title = document.title.split('—')[0];
          var title = slide.reproduction_reference;
          var description = title;
          if (title == null) {
            description = "";
          } else {
            var absolute_path = slide.absolute_path;
            var absolute_path_view = absolute_path + "/view";
            var final_title = "(<a href='"+absolute_path_view+"'>"+title+"</a>)";
            if (obj_title != "") {
              description = obj_title + " - " + final_title;
            } else {
              description = final_title;
            }
          }
          jQuery("#slideshow-controls #slide-description").html(description);
        }
      }
      if (jQuery("body").hasClass('template-edit')) {
        //jQuery("#slideshow-controls").show();
      } 
    }

    if (!jQuery("body").hasClass('template-book_view') && !jQuery("body").hasClass('template-instrument_view')) {
      jQuery("#slideshow-controls #slide-description").html(description);
    }

    slickSlideshow.updateSlideURLFragment(slide);
  }

  /* ******************* */
  /* Special slideshow    * 
  /* ******************* */
  if (reset == false && slickSlideshow.regular == false && !jQuery("body").hasClass('template-book_view') && !jQuery("body").hasClass('template-instrument_view') && !slickSlideshow.editingMode) {

    // --- Update object details
    $currentSlideObj = jQuery($slides[currentSlide]);

    if ($currentSlideObj.hasClass('no-image-slide')) {
      if (!jQuery("body").hasClass('no-image-slide')) {
        jQuery("body").addClass("no-image-slide");
      }
    } else {
      if (jQuery("body").hasClass('no-image-slide')) {
        jQuery("body").removeClass("no-image-slide");
      }
    }

    
    if (slickSlideshow.slideCount-1 == 1) {
      jQuery("div.wrap-prev").show();
    } 

    else if (slickSlideshow.slideCount == 1) {
      jQuery("div.wrap-prev").hide();
    }

    if (slickSlideshow.forward) {
      if (slickSlideshow.slideCount == slickSlideshow.total_items) {
        jQuery("div.wrap-next").hide();
      }
    } else {
      jQuery("div.wrap-next").show();
    }


    if ($currentSlideObj.hasClass('video-slide')) {
      jQuery(".actions-div").hide();
    } else {
      jQuery(".actions-div").show();
    }

    if (slickSlideshow.isCollection) {
      slickSlideshow.updateSlideCollectionURL($currentSlideObj);
    }

    slickSlideshow.contentAJAXrefresh(currentSlide, $currentSlideObj);

    // Multiple View
    if (jQuery("body").hasClass("template-instruments_view")) {
      if (jQuery(".play-btn").hasClass("playing")) {
        jQuery(".play-btn").removeClass('playing');
        jQuery(".play-btn").addClass('paused');
        jQuery(".actions-div .play-btn i").removeClass("fa-play");
            jQuery(".actions-div .play-btn i").addClass("fa-pause");
      } else {
        /*jQuery(".play-btn").addClass('playing');
        jQuery(".actions-div .play-btn i").removeClass("fa-play");
            jQuery(".actions-div .play-btn i").addClass("fa-pause");*/
      }
      /*jQuery(".play-btn").removeClass('playing');
      jQuery(".play-btn").addClass('playing');
      jQuery(".actions-div .play-btn i").removeClass("fa-play");
          jQuery(".actions-div .play-btn i").addClass("fa-pause");*/

      //setTimeout(function(){ $currentSlideObj.slickPlay() }, 2000);

    }
  } 
};

slickSlideshow.getRegularContent = function() {
  _logger.log('[Content listing : regular]')
  var URL, querystring;
  if (slickSlideshow.url.indexOf("?") != -1) {
    querystring = slickSlideshow.url.slice(slickSlideshow.url.indexOf("?") + 1);
    slickSlideshow.url = slickSlideshow.url.slice(0, slickSlideshow.url.indexOf("?"));
  } else {
    querystring = "";
  }

  // Make it non-recursive
  slickSlideshow.recursive = false;
  querystring = "";

  if (slickSlideshow.recursive) {
    if (querystring == "") {
      URL = slickSlideshow.url + '/slideshowListing';
      if (slickSlideshow.editingMode) {
        URL += "?edit=true";
      }
    } else {
      URL = slickSlideshow.url + '/slideshowListing' + '?' + querystring;
      if (slickSlideshow.editingMode) {
        URL += "&edit=true";
      }
    }
  } else {
    if (querystring == "") {
      URL = slickSlideshow.url + '/slideshowListing?recursive=false';
      if (jQuery("body").hasClass("template-book_view") || jQuery("body").hasClass('template-instrument_view')) {
        URL += "&book_view=true";
      }
      if (slickSlideshow.editingMode) {
        URL += "&edit=true";
      }
    } else {
      URL = slickSlideshow.url + '/slideshowListing' + '?' + querystring + "&recursive=false";
      if (slickSlideshow.editingMode) {
        URL += "&edit=true";
      }
    }
  }

  var slickInited = true;
  if (window.location.hash != "" || jQuery("body").hasClass("template-book_view")) {
    slickInited = false;
  }

  if (slickInited) {
    var lead_image_url = jQuery("meta[property='og:image']").attr("content");
    if (lead_image_url != undefined) {
      var lead_image_scale = lead_image_url + "/@@images/image/large";
    } else {
      var lead_image_scale = undefined;
    }
    if (lead_image_scale != undefined) {

      slickSlideshow.$obj.append("<div><div class='inner-bg'><img class='first-image' id='first-image-regular' data-lazy='"+lead_image_scale+"'/></div></div>");
      slickSlideshow.initSlick();
    } else {
      slickInited = false;
    }

    if (lead_image_scale != undefined) {
      jQuery("#first-image-regular").load(function() {
        var h = slickSlideshow.$obj.height();
        var image_h = slickSlideshow.change_width(jQuery(this));

        if (image_h > h) {
          slickSlideshow.change_height(jQuery(this));
        }

        jQuery(this).addClass("first-loaded");
        jQuery("#slickslideshow").addClass("slick-init");
      });
    } 
  }
  
  $.getJSON(URL, function(data) {
    var data_len = jQuery(data).length;
    
    if (data_len == 0) {
      jQuery(".slideshow-loader").fadeOut();
      if (slickSlideshow.editingMode) {
        jQuery("body").addClass("no-img-slideshow");
      }
    }

    $.each(data, function(index, item) {
      if (index == data_len - 1) {
        slickSlideshow.getSlideDetails(item, true, slickInited);
      } else {
        slickSlideshow.getSlideDetails(item, false, slickInited);
      }
    });
  });
};

/***** 
  GET CONTENT TYPE
*****/

slickSlideshow.getContentListing = function(object_number) {
  var URL;  
  var query = location.search;

  if (slickSlideshow.editingMode && object_number == "") {
    object_number = "regular";
  }

  if (object_number != "regular") {
    // Get lead media first
    if (jQuery("body").hasClass('template-drawing_view') || jQuery("body").hasClass('template-view') || jQuery("body").hasClass('template-instruments_view')) {
      // DRAWINGS
      var lead_image_url = jQuery("meta[property='og:image']").attr("content");
      if (lead_image_url != undefined) {
        var lead_image_scale = lead_image_url + "/@@images/image/large";
      } else {
        var lead_image_scale = undefined;
      }
      var title = jQuery("meta[property='zm:title']").attr("content");
      var description = jQuery("meta[property='zm:description']").attr("content");

      if (lead_image_scale != undefined) { 
        slickSlideshow.$obj.append("<div><div class='inner-bg'><img class='first-image' id='first-image' data-lazy='"+lead_image_scale+"'/></div></div>");
      }

      slickSlideshow.initSlick(0);
      slickSlideshow.getSchemaSlide(0);
      slickSlideshow.updateSlideDescriptionBar(title, description);
      slickSlideshow.getNavigationContent(query, object_number, true);

      if (lead_image_scale != undefined && lead_image_scale != "") { 
        jQuery("#first-image").load(function() {
          var h = slickSlideshow.$obj.height();
          var image_h = slickSlideshow.change_width(jQuery(this));

          if (image_h > h) {
            slickSlideshow.change_height(jQuery(this));
          }

          jQuery(this).addClass("first-loaded");
          jQuery("#slickslideshow").addClass("slick-init");
        });
      } else {
        jQuery("#slickslideshow").addClass("slick-init");
        slickSlideshow.no_image = true;
        jQuery("body").addClass("no-img-slideshow");
      }

    } else if (jQuery("body").hasClass('template-double_view')) {
      // DOUBLE VIEW
      slickSlideshow.view_type = "double_view";
      
      var has_double_image = true;

      var lead_image_url = jQuery("meta[property='og:image']").attr("content");
      var lead_image_scale = lead_image_url + "/@@images/image/large";
      var title = jQuery("meta[property='zm:title']").attr("content");
      var description = jQuery("meta[property='zm:description']").attr("content");

      var double_lead_image_url = jQuery("meta[property='teylers:double_image']").attr("content");
      
      if (double_lead_image_url == "") {
        has_double_image = false
      }

      if (has_double_image) {
        var double_lead_image_scale = double_lead_image_url;
      } else {
        var double_lead_image_scale = "";
      }

      var content = "<div><div class='double-container'><div class='inner-bg'><img class='first-image' data-lazy='"+lead_image_scale+"'/></div></div><div class='double-container'><div class='inner-bg'><img class='double-image' data-lazy='"+double_lead_image_scale+"'/></div></div></div>";
      
      slickSlideshow.$obj.append(content);
      slickSlideshow.initSlick(0);
      slickSlideshow.getSchemaSlide(0);
      slickSlideshow.updateSlideDescriptionBar(title, description);
      
      slickSlideshow.resizeImages();
      slickSlideshow.getNavigationContent(query, object_number, true);

      if (has_double_image) {
        jQuery("img.double-image").load(function() {
          jQuery("#slickslideshow").addClass("slick-init");
        });
      } else {
        jQuery("img.first-image").load(function() {
          jQuery("#slickslideshow").addClass("slick-init");
        });
      }
    } else {
      slickSlideshow.getNavigationContent(query, object_number, false);
    }
  } else if (object_number == "regular") {
    slickSlideshow.getRegularContent();
  }
};

slickSlideshow.getSlideDetails = function(item, last, slickInited) {
  var URL = "";
  var embed = "";
  var isVideo = false;

  var slide_item = {
    'url': item.url,
    'UID': item.UID,
    'relative_path': item.relative_path,
    'absolute_path': item.absolute_path,
    'is_object': item.is_object,
    'reproduction_reference': item.reproduction_reference
  }

  slickSlideshow.slides.push(slide_item);

  /*if (item.media.type == "Youtube") {
    embed = slickSlideshow.getYoutubeEmbed(item.media);
    isVideo = true;
  }*/

  slide_item.video = isVideo;
  slide_item.embed = embed;
  slide_item.description = item.description;

  if (last) {
    slickSlideshow.addSlides(slickInited);
  }
};

slickSlideshow.addSlides = function(slickInited) {
  if (slickInited) {
    for (var i = 1; i < slickSlideshow.slides.length; i++) {
      if (slickSlideshow.slides[i].video != true) {
        slickSlideshow.$obj.slickAdd("<div><div class='inner-bg'><img data-lazy='"+slickSlideshow.slides[i].url+"/@@images/image/large'/></div></div>");
      } else {
        slickSlideshow.$obj.slickAdd("<div class='video-slide'><div class='inner-bg'>"+slickSlideshow.slides[i].embed+"</div></div>");
      }
    }
  } else {
    for (var i = 0; i < slickSlideshow.slides.length; i++) {
      if (slickSlideshow.slides[i].video != true) {
        slickSlideshow.$obj.append("<div><div class='inner-bg'><img data-lazy='"+slickSlideshow.slides[i].url+"/@@images/image/large'/></div></div>");
      } else {
        slickSlideshow.$obj.append("<div class='video-slide'><div class='inner-bg'>"+slickSlideshow.slides[i].embed+"</div></div>");
      }
    }

    slickSlideshow.initSlick();
    jQuery(".slideshow-loader").fadeOut();
  }

  slickSlideshow.total_items = slickSlideshow.$obj.getSlick().$slides.length;
  if (slickSlideshow.total_items < 2) {
    jQuery("#slide-count").hide();
  }

  var slide = ""
  if (slickSlideshow.slides.length) {
    slide = slickSlideshow.slides[0];
  }


  if (slickSlideshow.editingMode) {
    if (slide != "") {
      var object_nr = jQuery("#form-widgets-identification_identification_objectNumber");
      if (object_nr.length) {
        var obj_title = document.title.split('—')[0];
        var title = slide.reproduction_reference;
        object_number = object_nr.val();
        if (object_number != "") {
          if (title != "" && title != null) {
            var absolute_path = slide.absolute_path;
            var absolute_path_view = absolute_path + "/view";
            var final_title = "(<a href='"+absolute_path_view+"'>"+title+"</a>)";

            if (obj_title != "") {
              var description = object_number + " - " + obj_title + " "+final_title;
            } else {
              var description = object_number + " - " + final_title;
            }
          } else {
            if (obj_title != "") {
              var description = object_number + " - " + obj_title;
            } else {
              var description = object_number;
            }
          }
          jQuery("#slideshow-controls #slide-description").html(description);
        } else {
          var description = title;
          if (title == null) {
            if (obj_title != "") {
              description = obj_title;
            } else {
              description = "";
            }
          } else {
            var absolute_path = slide.absolute_path;
            var absolute_path_view = absolute_path + "/view";
            var final_title = "(<a href='"+absolute_path_view+"'>"+title+"</a>)";

            if (obj_title != "") {
              description = obj_title + " - " + final_title;
            } else {
              description = final_title;
            }
          }
          jQuery("#slideshow-controls #slide-description").html(description);
        }
      } else {
        var obj_title = document.title.split('—')[0];
        var title = slide.reproduction_reference;
        var description = title;
        if (title == null) {
          description = "";
        } else {
          var absolute_path = slide.absolute_path;
          var absolute_path_view = absolute_path + "/view";
          var final_title = "(<a href='"+absolute_path_view+"'>"+title+"</a>)";
          if (obj_title != "") {
            description = obj_title + " - " + final_title;
          } else {
            description = final_title;
          }
        }
        jQuery("#slideshow-controls #slide-description").html(description);
      }
    }
    if (jQuery("body").hasClass('template-edit')) {
      jQuery("#slideshow-controls, body.portaltype-object div.on-display-wrapper").show();
    }
  }

  jQuery(".slideshow").addClass("slideshow-loaded");
  jQuery("#slickslideshow").addClass("slick-init");
  jQuery("#slideshow-controls #slide-count").html((slickSlideshow.slideCount) + "/" + slickSlideshow.total_items);
};


jQuery(document).ready(function() {
  if (slickSlideshow.$obj != undefined) {

    if (!isMobile.any()) {
      slickSlideshow.$obj.mousemove(slickSlideshow.slideMouseMove);
      jQuery("iframe").mouseover(slickSlideshow.slideMouseMove);

      if  (!(jQuery("body").hasClass("portaltype-object") && (jQuery("body").hasClass("userrole-authenticated")))) {
        jQuery("#row-items, .object-fields, .page-container").mouseenter(function() {
          if (jQuery("#slickslideshow").hasClass("fullscreen")) {
            if (slickSlideshow.$obj.getSlick().$slides.length > 1) {
              jQuery("#slideshow-controls, body.portaltype-object div.on-display-wrapper").fadeOut();
            }
            jQuery(".wrap-prev, .wrap-next").css("opacity", 0);
            jQuery(".video-play-btn").css("opacity", 0);
          }
        });
      }
    }
  }
});

var init_datagrid = function(element) {
    element.find('.datagridwidget-body').each(function() {
        var $this = $(this);
        
        aa = $this.children(".auto-append").size() > 0;
        $this.data("auto-append", aa);

        // Hint CSS
        if (aa) {
            $this.addClass("datagridwidget-body-auto-append");
        } else {
            $this.addClass("datagridwidget-body-non-auto-append");
        }

        dataGridField2Functions.updateOrderIndex(this, false);

        if (!aa) {
            dataGridField2Functions.ensureMinimumRows(this);
        }
    }); 
}

var INPUTS_QUERY = "div.template-edit input, div.template-edit select:not(.formTabs), div.template-edit textarea, div.template-edit button"


var disable_inputs = function() {
    jQuery(INPUTS_QUERY).prop("disabled", true);
};

var ajaxLoadTabs = function(fieldset_id) {
    if ((jQuery("body").hasClass("template-edit") || jQuery("body div.template-edit").length > 0) && jQuery("body").hasClass("portaltype-object") && !jQuery("body").hasClass("template-all_tabs")) {
        if (fieldset_id != "default") {

            var query = "/@@all_tabs";

            var link = window.location.href;
            if (window.location.search != "" || window.location.hash != "") {
                link = window.location.protocol + "//" + window.location.host + window.location.pathname;   
            } 

            link_split = link.split('/');
            last_member = link_split[link_split.length-1]
            if (last_member == "view" || last_member == "view/" || last_member == "contents_view" || last_member == "contents_view/" || last_member == "edit" || last_member == "edit/") {
                link_split[link_split.length-1] = ""; 
                link = link_split.join('/');
            }

            url = link + query;

            $.ajax({
                url: url,
                success: function(data) {
                    setTimeout(function() {
                        var fieldsets = jQuery(data).find("fieldset");
                        fieldsets.each(function() {
                            var _id = jQuery(this).attr("id");

                            if (jQuery("body").hasClass("template-edit")) {
                                if (_id != 'fieldset-default') {
                                    var fieldset = jQuery(this);
                                    var original_fieldset = jQuery("fieldset#"+_id);
                                    original_fieldset.append(fieldset.html());
                                } 
                            } else {
                                if (_id != 'fieldset-default' && _id != 'fieldset-identification') {
                                    var fieldset = jQuery(this);
                                    var original_fieldset = jQuery("fieldset#"+_id);
                                    original_fieldset.append(fieldset.html());
                                } 
                            }
                        });
                        disable_inputs();
                        jQuery(document).trigger("readyAgain", [{fieldset_id: "fieldset:not(#fieldset-identification)"}]);
                        init_datagrid(jQuery("fieldset:not(#fieldset-identification)"));
                    }, 50);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    if (errorThrown == "") {
                        errorThrown = "Unable to get tabs. Please <a href='"+window.location.href+"'>refresh</a> the page."
                    } else {
                        errorThrown = errorThrown + " - Unable to get tabs."
                    }
                }
            });
        }
    }
};

require(['jquery', 'pat-registry'],
  function(jQuery, registry) {
    jQuery(document).on('readyAgain', function(event, data) {
      var scansearch = jQuery('body');
      if (event.type == "readyAgain") {
        scansearch = data.fieldset_id;
        registry.scan(jQuery(scansearch));
      }
    });
});

jQuery(document).ready(function() {
  if (jQuery("body").hasClass('portaltype-object') && jQuery("body").hasClass("userrole-authenticated")) {
    ajaxLoadTabs("all");
  };
});



require([
  'jquery',
], function($, dep1, logger){
  'use strict';

  // initialize only if we are in top frame
  if (window.parent === window) {
    jQuery(document).ready(function() {
      jQuery('body').addClass('zeeuwsmuseum-main');
    });
  }
});


