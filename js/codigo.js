
$(document).ready(function(){
	//Valores Iniciales
	$("#precioMensualChile").text(30000);
	$("#precioAnualChile").text(336000);
	$("#precioMensualVenezuela").text(30);
	$("#preciomensualOtro").text(40);
	$("#precioAnualOtro").text(480);

	$("#planMensualChile").change(precio_mensual_chile);
	$("#planAnualChile").change(precio_anual_chile);
	$("#planMensualVenezuela").change(precio_mensual_venezuela);
	$("#planMensualOtro").change(precio_mensual_otro);
	$("#planAnualOtro").change(precio_anual_otro);
	
});

function precio_mensual_chile(){
	var pmc = 30000;
	$("#planMensualChile option:selected").each(function(){
		pmc = pmc * $(this).text();
	});
	$("#precioMensualChile").text(pmc);
}

function precio_anual_chile(){
	var pac = 336000;
	$("#planAnualChile option:selected").each(function(){
		pac = pac * $(this).text();
	});
	$("#precioAnualChile").text(pac);
}


function precio_mensual_venezuela(){
	var pmv = 30;
	$("#planMensualVenezuela option:selected").each(function(){
		pmv = pmv * $(this).text();
	});
	$("#precioMensualVenezuela").text(pmv);
}

function precio_mensual_otro(){
	var pmo = 40;
	$("#planMensualOtro option:selected").each(function(){
		pmo = pmo * $(this).text();
	});
	$("#precioMensualOtro").text(pmo);
}

function precio_anual_otro(){
	var pao = 480;
	$("#planAnualOtro option:selected").each(function(){
		pao = pao * $(this).text();
	});
	$("#precioAnualOtro").text(pao);
}
	
