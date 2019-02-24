/* jQuery Keep Ratio */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

!(function (t) {
  "use strict";var n = t.jQuery,
      i = t.requestAnimationFrame,
      e = { ratio: 4 / 3, calculate: "height" },
      r = function r(t, n, e) {
    var r;if ("height" === n.calculate) {
      var a = t.width();r = function () {
        t.height(Math.round(a / n.ratio));
      };
    } else {
      var u = t.height();r = function () {
        t.width(Math.round(u * n.ratio));
      };
    }return e ? r() : i(r), t;
  },
      a = function a(t, i, e) {
    return t.each(function () {
      r(n(this), i, e);
    });
  };n.fn.keepRatio = function (i) {
    i = n.extend({}, e, i);var r = n(this);return n(t).on("resize", function () {
      a(r, i);
    }), a(r, i, !0);
  };
})(window);

},{}]},{},[1]);

/* IsMobile */
var isMobile = {
   iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
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

/* I am a food blog custom code */

var $counter = 0,
	p;

function checkInput(target, event) {

	// Executes search if searchbar is not empty or labelled
	$input = $(target).parent().find("input");

	if ( $input.val() == "Search" || $input.val() == "" ) {
		event.preventDefault();
		$input.val('').focus();
	}
}

function removeAds() {
	$("<iframe>").attr('src', '/top-cadillac.html').attr('scrolling', 'no').appendTo($( "#top-ad .ad-container" ));
	$("<iframe>").attr('src', '/bottom-cadillac.html').attr('scrolling', 'no').appendTo($( "#bottom-ad .ad-container" ));
	$(".ad-container").addClass("ad-loaded");
}

function roadblock() {
	$("#side-ad").remove();
}

function makeAds() {
	$("<iframe>").attr('src', '/top.html').attr('scrolling', 'no').appendTo($( "#top-ad .ad-container" ));
	$("<iframe>").attr('src', '/bottom.html').attr('scrolling', 'no').appendTo($( "#bottom-ad .ad-container" ));
	$(".ad-container").addClass("ad-loaded");
}

function checkHeader() {
	if ($("#header-anchor").length > 0 && $(window).scrollTop() > $("#header-anchor").offset().top) {
		$("#header").addClass("sticky")
	} else {
		$("#header").removeClass("sticky")
	}
}

$(function() {



});

var toggle = {

	menu: function(e) {
		e.preventDefault();

		if ( $("nav").css("right").match(/\d+/)[0] == 0) {

			$("nav").animate({
				right: "-180px"
			},500);

		} else {

			$("nav").animate({
				right: "0"
			},500);

		}
	},

}

var format = {

	single: function() {
		format.page();
		format.video();
		format.images();
		format.recipes();
		format.sticker();
		format.headnotes();
	},

	page: function() {
		checkHeader();
		$("nav").css("right","");
	},

	video: function() {

		$(".wp-video").removeAttr("style");
		$("video").removeAttr("height width controls");
		$(".wp-video").css({"max-width":"100%"});
		$("video").css({"width":"100%"});

		(isMobile.any() == null) ? $("video").attr("autoplay",true) : $("video").attr("controls", true);

	},

	images: function() {

		$("p img").each(function() {
			if ( $(this).attr("width") == '2880') $(this).parent().addClass("retina-image"); // used to be retina hero
			if ( $(this).attr("width") == '1450') $(this).closest("p").addClass("retina-image");
			if ( $(this).attr("width") == '724' || $(this).attr("width") == '725') $(this).closest("p").addClass("retina-image"); //was regular image
			if ( $(this).attr("width") == '700') $(this).addClass("twoup");
			if ( $(this).attr("height") == '905') $(this).addClass("tall");
		});


		$("div.wp-caption img").each(function() {
			if ( $(this).attr("width") == '1450') {
				$(this).closest("div").removeAttr("style").wrap('<p class="retina-image">');
			}
		});

		if ( $("#main-image img").attr("height") == '482') { $("#main-image").addClass("small") } else
		if ( $("#main-image img").attr("width") == '725') { $("#main-image").addClass("sm") } else
		if ( $("#main-image img").attr("width") == '960') { $("#main-image").addClass("medium") }//	 else

		$("p").each(function() {
			if ($(this).find("img").length == 2 && $(this).find("a").length == 0) {
				$(this).find("img").wrap("<div>");
				$(this).addClass("twoup-container no-links") ;
			} else 	if ($(this).find("img").length == 2 && $(this).find(".twoup-wide").length == 0) {
				$(this).addClass("twoup-container")
			}

			if ($(this).find(".twoup-wide").length == 2) {
				$(this).addClass("twoup-container twoup-wide-container")
			}
		});

//		$(".retina-image img").css({ width: "100%" }).keepRatio({ ratio: 3 / 2, calculate: 'height' });
//		$(".regular-image img:not(.tall)").css({ width: "100%" }).keepRatio({ ratio: 3 / 2, calculate: 'height' });
//		$(".wp-caption img:not(.tall)").css({ width: "100%" }).keepRatio({ ratio: 3 / 2, calculate: 'height' });

//		$(".tall").keepRatio({ ratio: 4 / 5, calculate: 'height' });
//		$("img.twoup").keepRatio({ ratio: 3 / 4, calculate: 'height' });
//		$("img.twoup-wide").keepRatio({ ratio: 6/4, calculate: 'height' });

//		$('.retina-hero img').keepRatio({ ratio: 3 / 2, calculate: 'height' });

//		if ( !$("#main-image").hasClass("square") ) {
//			//$('#main-image').keepRatio({ ratio: 3 / 1.7, calculate: 'height' });
//			$('#main-image').keepRatio({ ratio: 16/9, calculate: 'height' });
//		}
	},

	recipes: function() {

		$("blockquote").addClass("recipe");
		$("<div>").addClass("noodle-hr recipe-body").prependTo("blockquote");
		$(".main-photo").prependTo("blockquote");

		$tags = $("#tags").html();
		$("<div>").addClass("recipe-tags noodle-br").html("<h4>See More</h4>" + $tags).appendTo("blockquote");
		$(".recipe-tags").find("a").addClass("btn");

		$("blockquote").each(function(){

			$recipeID = "#recipe-" + $(this).index();
			$(this).attr("id", "recipe-" + $(this).index());

			// Create Title

			$title = $("<div>").addClass("recipe-metadata").insertBefore($recipeID + " .recipe-body");
			$(this).find(".recipename").appendTo($title);
			$(this).find(".yield").appendTo($title);
			$(this).find(".preptime").appendTo($title);
			$(this).find(".cooktime").appendTo($title);
			$(this).find(".totaltime").appendTo($title);

			// Clear Whitespace
			$(this).find("p").each(function(){
				if ($.trim($(this).text()) == '') $(this).remove();
			});

			// Create Ingredients
			$ingredients = $("<div>").addClass("columns three ingredients-list").appendTo($recipeID + " .recipe-body");

			if ( $(this).find("ul").length > 1 ) {

				if ( $($recipeID + " ul:first").prev("h4") ) $($recipeID + " ul:first").prev("h4").appendTo($ingredients);

				$($recipeID + " ul:first").nextUntil($recipeID + " ul:last").andSelf().add($recipeID + " ul:last").appendTo($ingredients);

			} else {

				$($recipeID + "  ul").appendTo($ingredients);

			}

			// Create Steps

			$steps = $("<div>").addClass("columns nine recipe-steps").appendTo($recipeID + " .recipe-body");

			$($recipeID + " .recipe-body").nextUntil(".recipe-tags").appendTo($steps);

			//Add Utils
			$("#recipe-sidebar").removeAttr("id").addClass("recipe-utilities").insertAfter("blockquote .photo");

			// Move Tags
			$(this).find(".recipe-tags").appendTo($recipeID + " .recipe-steps");

		});

		// Clean up

		// Add to title
		if ($(".recipe-metadata:first .yield").length > 0) {
			$("<span>").addClass("yield").text($(".recipe-metadata:first .yield").text()).appendTo($(".header-recipe-metadata"));
		}
		if ($(".recipe-metadata:first .totaltime").length > 0) {
			$("<time>").addClass("totaltime").text($(".recipe-metadata:first .totaltime").text()).appendTo($(".header-recipe-metadata"));
		}

	},

	sticker: function() {
		$(".post-container h6").wrap("<div class='fadebar sticker'></div>");
	},

	headnotes: function() {
		$("#headnotes").insertBefore(".recipe-header");
	}

}

var bindBehavior = {

	window: function() {
		// UI Bindings
		$("#back-to-top").on("click",function(){				$("html, body").animate({ scrollTop: 0 }, 500) });
		$(".dropdown").on("mouseenter",function(){				if ($("nav").css("position") != "fixed") $(".dropdown-content").show() });
		$(".dropdown").on("mouseleave",function(){ 				if ($("nav").css("position") != "fixed") $(".dropdown-content").hide() });

		// Search
		$(".search-input").on("click",function(){ 				$(this).val('') });
		$(".search-form").on("click","button", function(e){		checkInput($(this), e) });
		$("#search").on("click","button", function(e){			checkInput($(this), e) });
		$(".search").focusout(function(){ 						if ($(this).val() == ''){ $(this).val($(this).data('current')) } });
		$("#header .search").on("click",function(){						$("#search").fadeIn(150); $("#search input").focus(); });
		$(".close").on("click",function(e){						$("#search").fadeOut(150); });

		$(window).on("scroll", checkHeader);
		$(window).on("resize", format.page);
		//rotateLogo();
	},

	pin: function() {
		$("body").on("click",".pinme",function() { PinUtils.pinAny(); });
	},

	jump: function() {
		$(".jump").on("click",function(){ $("html, body").animate({ scrollTop: ($("blockquote").offset().top - 100) }, 500) });
	},

	subscribe: function() {
		$(".subscribe-link").on("click",function(){ $("html, body").animate({ scrollTop: ($("#footer-container").offset().top - 100) }, 500) });
	}

}
