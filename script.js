$(document).ready(function(){

/*$('p').css('border','4px solid red');//cambia secciones
$('.lead').css('border','4px solid blue'); //cambia clases
$('#lesson-1').css('border','4px solid #000000'); //cambia ids
$('*').css('border','1px solid #000000');*/ //cambia todo el documento

//$('.box:first').hide(500); esconde la caja en 500ms
//$('.box:first').hide(500).show(800); 
//$('.box:first').hide(500).delay(600).show(800);
//$('.box:first').slideUp(500).slideDown(700);
//$('.boxes').slideUp(500).slideDown(700); desliza para arriba y luego abajo
//$('.box:first').animate({height:'200px'},200); cambia la altura de la caja 1
//$('.box:first').animate({bottom:'200px',left:'200px'},800); mueve la caja hacia arriba y derecha

//$('p:first').css('border','4px solid red'); coje el primer parrafo
//$('p:gt(1)').css('border','4px solid red'); coje despues el segundo parrafo

//selecciones por relaciones
//$('h2:has(span)').css('border','4px solid red') afecta el h2 que tiene span

//por atributos

//$('p[name=shorty]').css('border','4px solid red'); afecta el parrafo con nombre shorty

});


$(function(){

//$('p:first').attr('class','not-lead'); cambia la clase del primer parrafo
//$('img').attr('src','img2.jpg');
//$('img[src="img1.jpg"]').hide(500).show(1000);

//$('img[name=img2.jpg]').show(0).hide(1000);

	/*$('img').fadeOut(1200,function(){
		$('img').attr('src','img2.jpg').fadeIn(1200);
										}
		) desaparece la primera imagen y luego aparece la segunda*/

//$('p:first').removeClass('lead').addClass('blue'); cambia de clase lead a clase blue
//$('p:first').toggleClass('blue'); cambia la clase a blue
//$('p:first').text('akdnaoisnoainfoie'); cambia el texto de un elemento
//$('p:first').html('<a href=htpp://google.com>Google</a>'); crea un enlance en un elmento
//$('input').val('escribe algo');

//$('h2').children().css('border','4px solid red');
$('h2').parents('section').children().css('border','4px solid red')
});



$(function(){


});
