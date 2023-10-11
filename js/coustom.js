// JavaScript Document

$(document).ready(function () {

	var owl = $("#banner-slide");
	owl.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
		navigation: true,
		dots: false,
		autoplay: true,
		nav:true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		lazyLoad: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}

	});
	var owl = $("#testi-slider");
	owl.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
		navigation: true,
		dots: false,
		autoplay: true,
		nav:true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		lazyLoad: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}

	});
	
	var owl = $("#story-div");
	owl.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
		navigation: true,
		dots: false,
		autoplay: true,
		nav:true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		lazyLoad: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}

	});
	
	var owl = $("#ps-slider");
	owl.owlCarousel({
		autoplay: true,
		center: true,
		loop: true,
		nav: true,

	});
	
	$('.owl-carousel').owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  nav: true,
});

});

$(function() {
  var $tabButtonItem = $('#tab-button li'),
      $tabSelect = $('#tab-select'),
      $tabContents = $('.tab-contents'),
      activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).fadeIn(700);
    e.preventDefault();
  });

  $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});
// jQuery jarallax /
$(document).ready(function () {
  objectFitImages();
  
	  /* init Jarallax */
	  jarallax(document.querySelectorAll('.jarallax'));
  
	  jarallax(document.querySelectorAll('.jarallax-keep-img'), {
		  keepImg: true,
	  });
});
// jQuery nav /
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
 document.getElementById("myNav").style.height = "0%";
}
// jQuery scroll fix /
$(document).ready(function() {
  $( window ).scroll(function() {
		var height = $(window).scrollTop();
		if(height >= 55) {
			$('.navbar').addClass('fixed-menu');
		} else {
			$('.menu-area').removeClass('fixed-menu');
		}
	});
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#dynamic').addClass('newClass');
    } else {
       $('#dynamic').removeClass('newClass');
    }
});
// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/
$(document).ready(function () {
	var items = $(".list-wrapper .list-item");
		var numItems = items.length;
		var perPage = 18;
	
		items.slice(perPage).hide();
	
		$('#pagination-container').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
		
});
$(document).ready(function () {
	var items = $(".list-wrapper2 .list-item2");
		var numItems = items.length;
		var perPage = 18;
	
		items.slice(perPage).hide();
	
		$('#pagination-container2').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
});

$(document).ready(function () {
	var items = $(".list-wrapper3 .list-item3");
		var numItems = items.length;
		var perPage = 18;
	
		items.slice(perPage).hide();
	
		$('#pagination-container3').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
});
$(document).ready(function () {
	var items = $(".list-wrapper4 .list-item4");
		var numItems = items.length;
		var perPage = 18;
	
		items.slice(perPage).hide();
	
		$('#pagination-container4').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
});
$(document).ready(function () {
	var items = $(".list-wrapper5 .list-item5");
		var numItems = items.length;
		var perPage = 18;
	
		items.slice(perPage).hide();
	
		$('#pagination-container5').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
});
$(document).ready(function () {
	var items = $(".list-wrapper6 .list-item6");
		var numItems = items.length;
		var perPage = 18;
	
		items.slice(perPage).hide();
	
		$('#pagination-container6').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).show();
			}
		});
});
$(document).ready(function () {
	  $('.without-caption').magnificPopup({
			  type: 'image',
			  closeOnContentClick: true,
			  closeBtnInside: false,
			  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			  image: {
				  verticalFit: true
			  },
			  zoom: {
				  enabled: true,
				  duration: 300 // don't foget to change the duration also in CSS
			  }
		  });
	  
	  $('.with-caption').magnificPopup({
			  type: 'image',
			  closeOnContentClick: true,
			  closeBtnInside: false,
			  mainClass: 'mfp-with-zoom mfp-img-mobile',
			  image: {
				  verticalFit: true,
				  titleSrc: function(item) {
					  return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				  }
			  },
			  zoom: {
				  enabled: true
			  }
		  });
});
$(document).ready(function () {
	$('.zoom-trigger').click(function() {
	  $('#exampleModal .modal-dialog').toggleClass('modal-xl');
	  $('#exampleModal .modal-body').toggleClass('zoomed');
	});
	
	// revert modal class on close
	$('#exampleModal').on('hidden.bs.modal', function (e) {
	  $(this).find('.modal-dialog').removeClass('modal-xl');
	  $(this).find('.modal-body').removeClass('zoomed');
	})
	
	$('.zoom-trigger').click(function() {
	  $('#exampleModaln .modal-dialog').toggleClass('modal-xl');
	  $('#exampleModaln .modal-body').toggleClass('zoomed');
	});
	
	// revert modal class on close
	$('#exampleModaln').on('hidden.bs.modal', function (e) {
	  $(this).find('.modal-dialog').removeClass('modal-xl');
	  $(this).find('.modal-body').removeClass('zoomed');
	})
	
	$('.zoom-trigger').click(function() {
	  $('#exampleModal3 .modal-dialog').toggleClass('modal-xl');
	  $('#exampleModal3 .modal-body').toggleClass('zoomed');
	});
	
	// revert modal class on close
	$('#exampleModal3').on('hidden.bs.modal', function (e) {
	  $(this).find('.modal-dialog').removeClass('modal-xl');
	  $(this).find('.modal-body').removeClass('zoomed');
	})
});