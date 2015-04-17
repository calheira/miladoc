// Variaveis
var partePlural = false;

var tipo_sentenca = "SENTENÇA";
var executado = "parte ré";
var executante = "parte autora";
var evento_sentenca = "XX";
var valor_dano_moral = "XXXXX,XX";
var valor_outros_danos = "YYY,YY";
var outros_danos = "OUTROS DANOS";

var resultado_recurso = "não provido pela Turma Recursal, mantendo";
var evento_recurso = "YY";

var resultado_intimacao = "RESULTADO INTIMACAO";
var evento_intimacao = "X e Y";


var evento_peticao = "ZZ";

//sentenca
$( "#sentenca" ).change(function() {
	tipo_sentenca = $(this).val();
	if (tipo_sentenca == "Procedência com Pedido Contraposto") {
		executado = "parte ré";
		executante = "parte autora";
	} else {
		executado = "parte autora";
		executante = "parte ré";
	}
	atualizaP01();
});

// evento da sentença
$( "#ev_sentenca" ).change(function() {
	evento_sentenca = $(this).val();
	atualizaP01();
});

// valor dano moral
$( "#valor_dano_moral" ).change(function() {
	valor_dano_moral = $(this).val();
	atualizaP01();
});

// outros danos
$( "#outros_danos" ).change(function() {
	outros_danos = $(this).val();
	atualizaP01();
});

// valor outros danos
$( "#valor_outros_danos" ).change(function() {
	valor_outros_danos = $(this).val();
	atualizaP01();
});


// recurso
$( "#recurso" ).change(function() {
	resultado_recurso = $(this).val();
	if (resultado_recurso == "provido") {
		resultado_recurso = "foi provido pela Turma Recursal, alterando a sentença hostilizada";
	} else{
		resultado_recurso = "não provido pela Turma Recursal, mantendo a sentença hostilizada em todos os seus termos";
	}

	atualizaP02();
});


// evento recurso
$( "#ev_recurso" ).change(function() {
	evento_recurso = $(this).val();
	atualizaP02();
});


// resultado intimacao
$( "#intimacao" ).change(function() {
	resultado_intimacao = $(this).val();
	atualizaP03();
});


//evento intimacao
$( "#ev_intimacao" ).change(function() {
	evento_intimacao = $(this).val();
	atualizaP03();
});


//evento intimacao
$( "#ev_peticao" ).change(function() {
	evento_peticao = $(this).val();
	atualizaP04();
});


/**
*
* Funções 
*/



// paragrafo 01
function atualizaP01(){
	$("#paragrafo_01").text("Certifico para os fins de direito que foi prolatada sentença " + tipo_sentenca + " no evento " + evento_sentenca + ", condenando a " + executado + " a pagar a " + executante + " indenização  por dano moral fixado em R$ " + valor_dano_moral + ", e a restituir o valor de R$ " + valor_outros_danos +", relativo aos " + outros_danos + ".");
}




// paragrafo 02
function atualizaP02(){
	$("#paragrafo_02").text("O recurso interposto pela acionado foi conhecido e " + resultado_recurso +", conforme evento " + evento_recurso +".");
}


// paragrafo 03
function atualizaP03(){
	$("#paragrafo_03").text("Intimadas as acionadas para, no prazo de 15 (quinze) dias, efetuarem e comprovarem o pagamento do montante da condenação, sob pena de acréscimo de multa no percentual de 10% (dez por cento), nos termos do art. 475-J do CPC, "+ resultado_intimacao +", conforme atestam os eventos "+evento_intimacao+".");
}


// paragrafo 04
function atualizaP04(){
	$("#paragrafo_04").text("Certifico ainda que no evento "+ evento_peticao +" foi requerida a execução da sentença. Autos conclusos.");
}





// altera o titulo
function titulo (texto){
	$("#titulo").text(texto);
	$("#edit").show();
	$("#imprimir").show();
}

// altera o conteudo
function conteudo (texto){
	$("#conteudo").text(texto);
}





/*
*
*  Auxiliares
*
*/

// retorna a data atual
function dataAtual(){
	// insere a data atual
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    var meses = new Array(12);

    meses[0] = "Janeiro";
    meses[1] = "Fevereiro";
    meses[2] = "Março";
    meses[3] = "Abril";
    meses[4] = "Maio";
    meses[5] = "Junho";
    meses[6] = "Julho";
    meses[7] = "Agosto";
    meses[8] = "Setembro";
    meses[9] = "Outubro";
    meses[10] = "Novembro";
    meses[11] = "Dezembro";

    data = dia + " de " + meses[mes] + " de " + ano;

    return data;
}
