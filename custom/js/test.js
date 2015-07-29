$(document).load($(window).bind(pupsik));

    function pupsik()
    {
        if ($( "div" ).hasClass( "with-summary" ))
        {
        $("div.with-summary").css({"font-style": "italic"});
          /*if($(window).width() < 820px)
          {
              $(".text").css({'visibility': 'hidden', 'width': '1px','height':'1px'});
              $(".btn-knopka").css({'display': 'block', 'position': 'relative', 'width': '140px', 'height': '30px', 'text-align': 'center', 'top': '6px', 'margin': '4px auto'});
          }*/
      }
    }
