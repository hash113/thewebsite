$( window ).load(function() 
{
 	$("#one,.header").fadeIn("slow");

	$('#sketches').click(function(){
		$("#one").fadeOut("slow");
		window.open("sketches.html","_self");
	});

	$('#graphics').click(function(){
		$("#three").fadeIn("slow");
		$("#one").fadeOut("slow");
	})
});