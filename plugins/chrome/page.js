(function() {

	$("<div id='p12Arrow'></div>").appendTo($("body")).click(function() {
				$(this).remove();				
				chrome.extension.sendRequest(null, function(response) {	
					var body = $("body");					
					
					var container = $("<div class='p12container'></div>");
					body.after(container);
					
					var card = $("<div class='card'></div>").appendTo(container);
					
					var front = $("<div class='front figure'></div>").appendTo(card);
					front.append("<img src='" + response.dataUrl + "'/>");
						
					var back = $("<div class='back figure'></div>").appendTo(card);

					back.append("<span style='font-size:200px;'>2</span>");
					
					body.empty();
					
					setTimeout(function(){
						card.toggleClass("flipped");
					},300)
				});
			});
})();
