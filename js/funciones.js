/* Menu */
$(function(){
	$('.dropdown').mouseenter(function(){
		$('.sublinks').stop(false, true).hide();
		var submenu = $(this).parent().next();
		submenu.css({
			position:'absolute',
			top: $(this).offset().top + $(this).height() + 'px',
			left: $(this).offset().left + 'px',
			zIndex:1000
		});
		submenu.stop().slideDown(300);
		submenu.mouseleave(function(){
			$(this).slideUp(300);
		});
	});
});

/* Slider */
$(function() {
	$("#slidebox").jCarouselLite({
		vertical: false,
		hoverPause:true,
		btnPrev: ".previous",
		btnNext: ".next",
		visible: 1,
		start: 0,
		scroll: 1,
		circular: true,
		auto: true,
		timeout: 1000,
		speed:500,
		btnGo:
		    [".1", ".2",
			".3", ".4"],
		afterEnd: function(a, direction) {
			$(".thumbActive").removeClass("thumbActive");
			$('.'+a[0].id).addClass("thumbActive");
  		}
	});
});

$(document).ready(inicio)
function inicio(){
	/* Contenido */
	$('#Cargar').on('click',function(){
		var contenido = '<div class="Cargar"><img src="img/JQuery.png" alt="JQuery"><p>jQuery es una biblioteca de JavaScript rápida, pequeña y rica en funciones. Hace que cosas como el desplazamiento y la manipulación de documentos HTML, el manejo de eventos, la animación y Ajax sean mucho más simples con una API fácil de usar que funciona en una multitud de navegadores. Con una combinación de versatilidad y extensibilidad, jQuery ha cambiado la forma en que millones de personas escriben JavaScript.</p></div>';
		$( ".Contenido" ).append(contenido);
	});

	/* Peticion AJAX */
	$('#petAjax').on('click',function(){
		$.ajax({
			type: "post",
			url: "peticionAjax.php",
			dataType: "json",
			beforeSend: function(){
				console.log('Haciendo peticion .....');
			},
			success: function (response) {
				console.log('Peticion Satisfactoria');
				console.log(response);
				
				var codHtml = "<h3>Lenguajes Web</h3><ul>";
				codHtml += "<li>HTML: "+response.HTML+"</li>";
				codHtml += "<li>CSS: "+response.CSS+"</li>";
				codHtml += "<li>JS: "+response.JS+"</li>";
				codHtml += "<li>PHP: "+response.PHP+"</li>";
				codHtml += "</ul>";

				$('#RespuestaAjax').append(codHtml);
			}
		});
	});
	
	/* Transicion */
	$('#imagenes').cycle({ 
		fx:    'fade', 
		speed:  500 
	});

	/* Ejemplo Slide */
	$('#mostrar').click(function (e) {
		$('#imgSli').slideDown();
	});

	$('#ocultar').click(function (e) {
		$('#imgSli').slideUp();
	});
}
