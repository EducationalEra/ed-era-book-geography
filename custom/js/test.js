$(document).load($(window).bind(pupsik));

    function pupsik()
    {
        if ($( "div" ).hasClass( "with-summary" ))
        {
        $("div.book-body").css({"color", "yellow"});
      }
    }
