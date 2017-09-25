$(document).ready(function () {
  function init() {
    var href, $lastLink;

    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    href = $lastLink.prop("href");
    href = "https://ed-era.com/books/" + _.last(href.split("-"));
    $lastLink.prop("href", href);
  }

  init();
  require(["gitbook"], function (gitbook) {
    function startMathJax() {
      MathJax.Hub.Config({
        tex2jax: {}
      });

      gitbook.events.bind("page.change", function () {
        MathJax.Hub.Typeset();
      });
    }
    gitbook.events.bind("page.change", init);
    var interval = null
    interval = setInterval(function () {
      if (typeof MathJax === "object") {
        startMathJax()
        clearInterval(interval);
      }
    }, 1000);
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
  }

  init();
  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
  });
});
