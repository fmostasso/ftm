/*FAZENDO UM SCROLL SUAVE PELOS LINKS DA PÁGINA. FOI USADO 1 SEGUNDO DE TRANSIÇÃO DA ANIMAÇÃO*/

function ativaScrollSuave(selector) {
	$(selector).click(function(event){
	event.preventDefault();

	var target = $(this).attr('href');
	
	$('html, body').animate({
	scrollTop: $(target).offset().top
	}, 1000);
	});
}


ativaScrollSuave('a[href*=home]');
ativaScrollSuave('a[href*=sobre]');
ativaScrollSuave('a[href*=contato]');
