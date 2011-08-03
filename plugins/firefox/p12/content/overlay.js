window.addEventListener("load", function() { 
	if(gBrowser){
		gBrowser.addEventListener("DOMContentLoaded", function(event){
			var doc = event.originalTarget;
			var win = doc.defaultView;
			
			
		}, false);
	}
/*
	var appcontent = document.getElementById("appcontent");   // browser
	if(appcontent)
		alert('adding listener');
		appcontent.addEventListener("DOMContentLoaded", function(event){
			var doc = event.originalTarget;
			var win = doc.defaultView;
			
			if (doc.nodeName == "#document"){
				return; // only documents
			}
			
			if (win.frameElement){
				return; // skip iframes/frames
			}
			
			alert('loaded', doc.locatin.href);
			
		}, false);
		*/
}, false);

/*
var myExtension = {
		init: function() {
			,

			onPageLoad: function(aEvent) {
				var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
				// do something with the loaded page.
				// doc.location is a Location object (see below for a link).
				// You can use it to make your code executed on certain pages only.
				if(doc.location.href.search("forum") > -1)
					alert("a forum page is loaded");

				// add event listener for page unload 
				aEvent.originalTarget.defaultView.addEventListener("unload", function(event){ myExtension.onPageUnload(event); }, true);
			},

			onPageUnload: function(aEvent) {
				// do something
			}
		}
*/