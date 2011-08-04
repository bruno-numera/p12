(function(){	
	var arrow = $("<div id='p12Arrow'></div>").appendTo($("body")).click(function(){
		$(this).remove();
		chrome.extension.sendRequest(null, function(response){		
			$("body").html("<img src='"+response.dataUrl+"'/>");
		});
	});
	
	/*	
		  var body = $("body");
		  
		  var container = $("<div class='p12container'></div>").appendTo(body);
		  
		  var card = $("<div class='card'></div>").appendTo(container); 
		  var front =  $("<div class='front figure'></div>").appendTo(card);
		  var back = $("<div class='back figure'></div>").appendTo(card);
		  
		  front.append("<span style='font-size:200px;'>1</span>");
		  back.append("<span style='font-size:200px;'>2</span>");
		  
		  card.click(function(){ $(this).toggleClass("flipped"); });
		  
	 */
		
	
})();

