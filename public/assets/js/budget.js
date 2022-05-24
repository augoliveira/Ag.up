$(document).ready(function(){
	
	//Barra lateral
	function asideResize(){
		if($(window).width()>768){
			var alturaContainer = $("#container").height();
							 	  $("aside").css("height", alturaContainer+200);
		}
	}

	$(window).resize(function(){
		if($(window).width()>768){
			var alturaContainerAtt = $("#container").height();
						 	    	 $("aside").css("height", alturaContainerAtt+200);
	    }
	});

	//SVG Ajuste
	/*
     * Replace all SVG images with inline SVG
     */
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

	/******Passo a Passo*****/
	//Seleção de Perfil 01
	$("form#budget .perfil").click(function(){
		//Marca o selecionado
		$("form#budget .perfil").removeClass("active");
		$(this).addClass("active");
		$(this).children("input[name='perfil']").prop("checked", true);

		//Mostra próximo passo
		//alert($("input[name='perfil']:checked", "form#budget").val());
		$("#step-01").hide();
		$("#step-02").fadeIn();
		$("#p2 .next").hide();

		$("nav#menu ul li").removeClass("active");
		$("#t2").addClass("active");

		//Chama novamente o resize do menu
		asideResize();
	});

	//Seleção de Tipo de Projeto 02
	var products = new Array();
	$("form#budget .project-type").click(function(){
		//Define quais produtos vai apresentar
	    var valueProduct = $(this).attr("id");
			valueProduct = valueProduct.replace("_select", "");

		//Marca/Desmarca o selecionado
		if($(this).children("input[name='product[]']").is(':checked')) {
			$(this).children("input[name='product[]']").prop("checked", false);
			$(this).removeClass("active");

			products.splice(products.indexOf(valueProduct), 1);
			$("#step-03 #"+valueProduct).hide();
		}else{
			$(this).children("input[name='product[]']").prop("checked", true);
			$(this).addClass("active");

			products.push(valueProduct);
		}

		//var valueProduct = parseInt($("input[name='product']:checked", "form#budget").val());

		//Checa se existe algum selecionado
		if($("input[name='product[]']").is(':checked')) {
			//Mostra próximo passo
			$("#p2 .next").fadeIn();
		}else{
			//Esconde próximo passo
			$("#p2 .next").hide();
		}
	});

	//Preencher dados do projeto
	$("#p2 .next").click(function(){
		//Mostro Conteúdo
		$("#step-03").fadeIn();

		for (var i = 0; i < products.length; i++) {
			$("#step-03 #"+products[i]).fadeIn();
		}

		//Mostro Próximo Passo
		$("#p2 .next").fadeIn();

		//Chama novamente o resize do menu
		asideResize();
	});
	
	//Controles 
	$("form#budget ul.control-step li.prev").click(function(){
		var thisSteptoPrev = $(this).parent().attr("id");
			thisSteptoPrev = thisSteptoPrev.replace(/\D/gim, '');
			thisSteptoPrev = parseInt(thisSteptoPrev);

		var prevStep = thisSteptoPrev-1;

		$("#step-0"+thisSteptoPrev).hide();
		$("#step-0"+prevStep).fadeIn();

		$("nav#menu ul li").removeClass("active");
		$("#t"+prevStep).addClass("active");

		//Chama novamente o resize do menu
		asideResize();
	});

	$("form#budget ul.control-step li.next").click(function(){
		var thisSteptoNext = $(this).parent().attr("id");
			thisSteptoNext = thisSteptoNext.replace(/\D/gim, '');
			thisSteptoNext = parseInt(thisSteptoNext);

		var nextStep = thisSteptoNext+1;

		$("#step-0"+thisSteptoNext).hide();
		$("#step-0"+nextStep).fadeIn();

		//Controla info do formulário
		if(nextStep == 4){
			console.log("entrou");
			if($("input[name='perfil']:checked").val() == 1){
				$("#info-company").hide();
			}else{
				$("#info-company").show();
			}
		}

		$("nav#menu ul li").removeClass("active");
		$("#t"+nextStep).addClass("active");

		//Chama novamente o resize do menu
		asideResize();
	});

	//Form
	$("#close-contato").click(function(){
		$("#m-contato").fadeOut();
		location.reload();
	});
	
	$('#enviar').click(function(){
	     $('form#budget').submit();
	 });

	$('form#budget').submit(function(e){
		e.preventDefault();

		var form = $(this);

		$('input[type="text"], input[type="email"], textarea', form).css({
			'-webkit-box-shadow':'none',
			'box-shadow':'none'
		});

		if($('input[name="nome"]', form).val() == ""){
			$('input[name="nome"]', form).css({
				'-webkit-box-shadow':'inset 0 0 0 3px #BE0007',
				'box-shadow':'inset 0 0 0 3px #BE0007'
			}).focus();
			return false;
		}

		if($('input[name="email"]', form).val() == "" || !checkMail($('input[name="email"]', form).val())){
			$('input[name="email"]', form).css({
				'-webkit-box-shadow':'inset 0 0 0 3px #BE0007',
				'box-shadow':'inset 0 0 0 3px #BE0007'
			}).focus();
			return false;
		}

		if($('input[name="celular"]', form).val() == ""){
			$('input[name="celular"]', form).css({
				'-webkit-box-shadow':'inset 0 0 0 3px #BE0007',
				'box-shadow':'inset 0 0 0 3px #BE0007'
			}).focus();
			return false;
		}

		var valores = form.serialize();
		
		$('input', form).attr('disabled', 'disabled');
		$('textarea', form).attr('disabled', 'disabled');
		$.ajax({
			type     : 'POST',
			url      : 'send-this.php',
			data     : valores,
			dataType : 'json',
			success  : function(retorno){
				$('input', form).removeAttr('disabled');
				$('textarea', form).removeAttr('disabled');
				if(retorno.status == 1){
					
					/*Swal.fire({
						text: retorno.msg,
						showConfirmButton: true,
						confirmButtonColor: '#ffcc00',
						onClose: () => {
							window.location.reload(); 
						}
					});*/

					$('#m-contato').fadeIn();
					return false;
				}else{
					form.get(0).reset();
					
					Swal.fire({
						text: retorno.msg,
						showConfirmButton: true,
						confirmButtonColor: '#ffcc00',
					});
				}
			}
		});
	});

});

//Máscaras
function Mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}

function leech(v){
	v=v.replace(/o/gi,"0")
	v=v.replace(/i/gi,"1")
	v=v.replace(/z/gi,"2")
	v=v.replace(/e/gi,"3")
	v=v.replace(/a/gi,"4")
	v=v.replace(/s/gi,"5")
	v=v.replace(/t/gi,"7")
	return v
}

function Integer(v){
	return v.replace(/\D/g,"")
}

function Telefone(v){
	v=v.replace(/\D/g,"")
	v=v.replace(/^(\d\d)(\d)/g,"($1) $2")
	v=v.replace(/(\d{4})(\d)/,"$1-$2")
	return v
}

function Data(v){
	v=v.replace(/\D/g,"")
	v=v.replace(/(\d{2})(\d)/,"$1/$2")
	v=v.replace(/(\d{2})(\d)/,"$1/$2")
	return v
}

function checkMail(mail){
	var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
	if(typeof(mail) == "string"){
		if(er.test(mail)){ return true; }
	}else if(typeof(mail) == "object"){
		if(er.test(mail.value)){ 
			return true; 
		}
	}else{
		return false;
	}
}