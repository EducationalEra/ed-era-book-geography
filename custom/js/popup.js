$( window ).load( function(){
    console.log('1');
    $( "div.popup" ).replaceWith( "<div class='" + "description" + "'><div class='" + "text" +"'>Ще більше відеоматеріалів в <a class='"+"knopka1"+"' href='" + "https://study.ed-era.com/courses/EdEra/G101/g101/about" + "' target='" + "_blank" + "'>онлайн-курсі</a> від розробників цієї книги</div><div class='" + "btn-knopka" +"'><a class='"+"knopka"+"' href='" + "https://study.ed-era.com/courses/EdEra/g102/G102/about" + "'   target='" + "_blank" + "'>Перейти на курс</a></div>" );
});

$( 'iframe' ).click( function(){
    console.log('2');
    $( "div.popup" ).replaceWith( "<div class='" + "description" + "'><div class='" + "text" +"'>Ще більше відеоматеріалів в <a class='"+"knopka1"+"' href='" + "https://study.ed-era.com/courses/EdEra/G101/g101/about" + "' target='" + "_blank" + "'>онлайн-курсі</a> від розробників цієї книги</div><div class='" + "btn-knopka" +"'><a class='"+"knopka"+"' href='" + "https://study.ed-era.com/courses/EdEra/g102/G102/about" + "'   target='" + "_blank" + "'>Перейти на курс</a></div>" );
});