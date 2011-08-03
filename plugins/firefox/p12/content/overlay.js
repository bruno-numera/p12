window.addEventListener("load", function() { 
	var appcontent = document.getElementById("appcontent");   // browser
	if(appcontent)
		alert('adding listener');
		appcontent.addEventListener("DOMContentLoaded", function(){
				alert('DOM loaded');
		}, false);
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