var log = Application.console.log;

window.addEventListener("load", function() {
	if (gBrowser){
		gBrowser.addEventListener("DOMContentLoaded", function(event){
			var doc = event.originalTarget; // doc is document that triggered the event
			var win = doc.defaultView; // win is the window for the doc
			
			if (win != win.top){
				return; //only top window.
			}
			
			if (win.frameElement){
				return; // skip iframes/frames
			}	
			
			onLoaded();
			
		}, false);
	}
}, false);

function onLoaded (){
	var document = top.window.content.document;
	
	var body = $(document.body);	
	body.append("<div id='p12_arrow'></div>");
	
	var p12Arrow = $(document.getElementById("p12_arrow"));	
	p12Arrow.css("background-color", "red");
	p12Arrow.css("height", "10px");
	p12Arrow.css("width", "10px");
	p12Arrow.css("position", "fixed");
	p12Arrow.css("z-index", "9999");
	p12Arrow.css("right", "0");
	p12Arrow.css("bottom", "0");
	
	body.after('<canvas id="webCanvas"></canvas>');
	var canvas = document.getElementById("webCanvas");
	var ctx = canvas.getContext("2d");
	
	var css = "<style type='text/css'> " +
			"#webCanvas.rotated {" +
			"-moz-animation-name: p12Animation;" +
			"-moz-animation-duration: 2s;" +
			"-moz-animation-delay: 0s;" +
			"-moz-animation-fill-mode : forwards} " +
			"@-moz-keyframes p12Animation { " +
			"from {-moz-transform : scaleX(1)}" +
			"to {-moz-transform : scaleX(-1)}" +
			"}" +
			"#webCanvas {" +
			"position : fixed;" +
			"left : 0;" +
			"top : 0;" +
			"}" +
			"</style>"; 

	p12Arrow.click(function(){
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
		
		//desenha a imagem do website
		ctx.drawWindow(top.window.content, win.x, win.y, (win.w+win.x), (win.h+win.y), "rgb(254,0,0)");
		
		//limpa todos os elementos da tela e adiciona o css relevante a animação
		$(document.getElementById("webCanvas")).toggleClass("rotated");
		
		body.html(css);
	});
}

