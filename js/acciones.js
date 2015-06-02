// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	audio= window.plugins.LowLatencyAudio;
	audio.preloadFX('B1','audio/C.mp3', function (){},function(msg){alert("ERROR " + msg);});
	audio.preloadFX('B2','audio/D.mp3', function (){},function(msg){alert("ERROR " + msg);});
	audio.preloadFX('B3','audio/E.mp3', function (){},function(msg){alert("ERROR " + msg);});
	audio.preloadFX('B4','audio/F.mp3', function (){},function(msg){alert("ERROR " + msg);});
$('#btnjugar').on ('tap',function(){

	var pantalla=$.mobile.getScreenHeight();
	var encabezado=$('.ui-header').outerHeight();
	var pie=$('.ui-footer').outerHeight();
	var contenido=$('.ui-content').outerHeight();
	//alert ('pantalla ' + pantalla);
	//alert ('encabezado ' + encabezado);
	//alert ('pie' + pie);
	//alert ('contenido ' + contenido);
	var alto=(pantalla-encabezado-pie)/2;
	$('.cuadro').height(alto);
	
	
	
});//btnjugar


$('.cuadro').on ('vmousedown', function(){
	$('#pantalla').append(quien($(this).attr('id')));
	$(this).addClass('pulsado');	
    });	
	
	$('.cuadro').on ('vmouseup', function(){
	$(this).removeClass('pulsado');	
    });	
	
function quien ( q )	
{
	audio.play(q);
	return q.subtring (1);
}


	
});//cuadro

});

