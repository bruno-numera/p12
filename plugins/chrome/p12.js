(function(){
	var body = $("body");	
	var p12Arrow = $("<div id='p12_arrow'></div>");
	body.after(p12Arrow);
	p12Arrow.click(function(){
		body.toggleClass("rotated");
	});	
}());