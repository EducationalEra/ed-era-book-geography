$(document).ready(function () {
  var href;
  
  $("a.toggle-search").remove();
  href = $(".custom-link:last").prop("href");
  //href = "https://ed-era.com/books/" + _.last(href.split("-"));
  href = "http://" + _.last(href.split("-")) + ".ed-era.com";
  $(".custom-link:last").prop("href", href);
});

$("img#map1").hide();
$("img#map2").hide();
$("img#map3").hide();
$(document).on('click', '.show-map', function() {
	if($('input#map1').prop( "checked" ))
		$("img#map1").show();
    if(!$('input#map1').prop( "checked" )){
    	$("img#map1").hide();
    }
    if($('input#map2').prop( "checked" ))
		$("img#map2").show();
    if(!$('input#map2').prop( "checked" )){
    	$("img#map2").hide();
    }    
    if($('input#map3').prop( "checked" ))
		$("img#map3").show();
    if(!$('input#map3').prop( "checked" )){
    	$("img#map3").hide();
    }    
});