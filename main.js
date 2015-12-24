$(".lightBoxLink").on("click", function(){
	$("#image1").attr("src",
		$(this).attr("src"));
	$(".outerLightBox").fadeIn
	(2500);

if ($(this).attr("src")== "lion.jpg"){
	$("#text1").text("You looking at me");
	$("img").show();
}

else if ($(this).attr("src") == "Zebra.jpg"){
	$("img").show();
	$("#text1").text("I have stripes");
} 

else{
	$("img").hide();
	$("#text1").text("Sorry no images");
	$("#text1").css({
		"margin":"300px"
	});
}
});

$(".outerLightBox").on("click",function(e){
	e.preventDefault();
	$(".outerLightBox").hide();
	$("#text1").css("margin", "0px");
});


// when clicked on an anonymous function runs  and $.this creates a new jquery object 


// .attr()this method can get or set a specified attribut and its vlue to get the value of an attribute you spedify the name of the attribute in the parenthese.
// the .on method creates an event listener, which waits for when clicks on it it triggers an anonymous function

