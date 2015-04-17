$(document).ready(function() {
	$('#summernote').summernote();
	$('#save').hide();
	$('#imprimir').hide();
});

var edit = function() {
	$('#edit').hide();
	$('#imprimir').hide();
	$('#save').show();
	$('.click2edit').summernote({focus: true});
};

var save = function() {
  	var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
  	$('#save').hide();
  	$('#imprimir').show();
	$('#edit').show();
  	$('.click2edit').destroy();
};

