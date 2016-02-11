jQuery(document).ready(function($) {
	/*
	Carrosel chamadas principais site
	*/
	$('#chamadas-principais').carousel({
	  interval: 9000
	});



	$('#area-slide-carousel-destaques-capa[data-type="multi"] .item').each(function(){
		
	  var next = $(this).next();
	  if (!next.length) {
		next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  for (var i=0;i<1;i++) {
		next=next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));
	  }
	});



	$('#area-slide-carousel-projetos-capa[data-type="multi"] .item').each(function(){		
	  var next = $(this).next();
	  if (!next.length) {
		next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));	  
	  for (var i=0;i<2;i++) {
		next=next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));
	  }
	});
	
	totalItens = 4;
	$('#area-slide-carousel-agenda-capa .item').each(function(){		
		
		//if ($("#carousel-example-vertical .item").length > 4){
		
			/*
			var next = $(this).next();			
			
			
			
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			
			next.children(':first-child').clone().appendTo($(this));	  
			for (var i=0;i<2;i++) {
				next=next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}

				next.children(':first-child').clone().appendTo($(this));
			}
			*/
		
		//}
		

		
		var next = $(this).next();
		var limite;

		
		//> Total de Itens
		//alert($("#carousel-example-vertical .item").length);		
		
		
		//alert(next.length); //> quantidade de itens
		
		//alert($('div.active').index());
		
		
		
		if (!next.length) {
			next = $(this).siblings(':first');			
		}
		next.children(':first-child').clone().appendTo($(this));
		

		
		if ($("#area-slide-carousel-agenda-capa .item").length <= 2){
			limite = 0;
		}else if ($("#area-slide-carousel-agenda-capa .item").length == 3){
			limite = 1;
		}else{
			limite = 2;		
		}	
		//limite
		
		
		for (var i=0;i < limite;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			
			next.children(':first-child').clone().appendTo($(this));
		}
		
		
		/*
		if (next.next().length >0) {
			next.next().children(':first-child').clone().appendTo($(this));
		}else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
		*/
		
		
	
	});

	
});	
