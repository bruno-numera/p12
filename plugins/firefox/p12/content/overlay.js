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
	

}
