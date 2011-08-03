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
	p12Arrow.css("height", "100px");
	p12Arrow.css("width", "100px");
	p12Arrow.css("position", "fixed");
	p12Arrow.css("z-index", "9999");
	p12Arrow.css("right", "0");
	p12Arrow.css("bottom", "0");
	
	p12Arrow.click(function(){
		body.toggleClass("rotated");
	});	
}
