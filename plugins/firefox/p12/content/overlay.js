var log = Application.console.log;

window.addEventListener("load", function() {
	if (gBrowser) {
		gBrowser.addEventListener("DOMContentLoaded", function(event) {
			var doc = event.originalTarget; // doc is document that triggered
			// the event
			var win = doc.defaultView; // win is the window for the doc

			if (win != win.top) {
				return; // only top window.
			}

			if (win.frameElement) {
				return; // skip iframes/frames
			}

			onLoaded();

		}, false);
	}
}, false);

function onLoaded() {
	overrideJqueryContext();

	var body = $("body");
	var p12Arrow = $("<div id='p12Arrow'></div>").appendTo(body);

	p12Arrow.css("background-color", "red");
	p12Arrow.css("height", "200px");
	p12Arrow.css("width", "300px");
	p12Arrow.css("position", "relative");
	p12Arrow.css("z-index", "9999");

	 body.after('<canvas id="webCanvas"></canvas>');
	 var canvas = document.getElementById("webCanvas");
	 var ctx = canvas.getContext("2d");
	//
	// var css = "<style type='text/css'> " + "body.rotated {"
	// + "-moz-animation-name: p12Animation; "
	// + "-moz-animation-duration: 2s;" + "-moz-animation-delay: 0s;"
	// + "-moz-animation-fill-mode : forwards} "
	// + "@-moz-keyframes p12Animation { "
	// + "from {-moz-transform : rotate(0deg)}"
	// + "to {-moz-transform : rotate(360deg)}" + "}" + "#webCanvas {"
	// + "position : fixed;" + "left : 0;" + "top : 0;" + "}" + "</style>";

	p12Arrow.click(function() {
		$(this).flip({direction:"lr"});
	});

	function captureScreen() {
		var win = {
			x : top.window.content.scrollX,
			y : top.window.content.scrollY,
			w : top.window.content.innerWidth,
			h : top.window.content.innerHeight
		}

		canvas.style.width = win.w;
		canvas.style.height = win.h;

		canvas.width = win.w;
		canvas.height = win.h;

		// desenha a imagem do website
		ctx.drawWindow(top.window.content, win.x, win.y, (win.w + win.x),
				(win.h + win.y), "rgb(254,0,0)");
	}

	function rotateScreen() {
		// limpa todos os elementos da tela e adiciona o css relevante a
		// animação
		body.html(css);
		body.toggleClass("rotated");

	}
}

function overrideJqueryContext(){
	var document = top.window.content.document;
	jQuery.noConflict();
	$ = function(selector, context) {
		return new jQuery.fn.init(selector, document);
	};
	$.fn = $.prototype = jQuery.fn;
	jQuery.extend($, jQuery);
}

// var document = top.window.content.document;
//
// var body = $(document.body);
// body.append("<div id='p12Arrow'></div>");
// var p12Arrow = $(document.getElementById("p12Arrow"));
//
// p12Arrow.css("position", "fixed");
// p12Arrow.css("bottom", "0");
// p12Arrow.css("right", "0");
// p12Arrow.css("height", "10px");
// p12Arrow.css("width", "10px");
// p12Arrow.css("background-color", "red");
// p12Arrow.css("z-index", "9999");
//
// p12Arrow.click(function() {
// $(this).remove();
//	
// $(document.body).after("<canvas id='aCanvas'></canvas>");
//
// // var width = document.getElementsByTagName('html')[0].offsetWidth;
// // var height = document.getElementsByTagName('html')[0].offsetHeight;
//
// alert("Width: " + width + " -- Height: " + height);
//
// var cnvs = document.getElementById("aCanvas");
//
// $(cnvs).css("width", width + "px");
// $(cnvs).css("height", height + "px");
// $(cnvs).css("position", "absolute");
// $(cnvs).css("top", 0);
// $(cnvs).css("left", 0);
//
// cnvs.width = width;
// cnvs.height = height;
//
// var ctx = cnvs.getContext("2d");
// ctx.drawWindow(top.window.content, 0, 0, width, height,
// "rgb(255,255,255)");
//
// $(document.body).empty();
// });

