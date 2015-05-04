    var element = document.getElementById('test_el');
    var hammertime = Hammer(element).on("tap", function(event) {
        alert('hello!');
    });
    
  ("#zoom_07").elevateZoom({
  zoomType				: "lens",
  lensShape : "round",
  lensSize    : 200
});
