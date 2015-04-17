$(document).ready(function(){
    //oculta campos
    $(".esconde").hide();
    $(".alert").hide();
    
	//atualiza a unidade
	$("#unidade").change(atualizaUnidade);
	
	//atualiza o endereco
	$("#endereco").change(atualizaEndereco);
	
	//atualiza o telefone
	$("#telefone").change(atualizaTelefone);
	
	//atualiza local e data
	$("#comarca").change(atualizaComarca);
	
    //atualiza processo
    $("#processo").change(atualizaProcesso);
	
    //atualiza conciliador
    $("#conciliador").change(atualizaConciliador);

    //atualiza digitador
    $("#digitador").change(atualizaDigitador);

    //atualiza autor
    $("#autor01").change(atualizaAutor01);
    $("#autor02").change(atualizaAutor02);
    $("#autor03").change(atualizaAutor03);
    $("#autor04").change(atualizaAutor04);
    $("#autor05").change(atualizaAutor05);

	//atualiza adv autor
	$("#adv_autor01").change(atualizaAdvAutor01);
	$("#adv_autor02").change(atualizaAdvAutor02);
	$("#adv_autor03").change(atualizaAdvAutor03);
	
	//atualiza reu
	$("#reu01").change(atualizaReu01);
	$("#reu02").change(atualizaReu02);
	$("#reu03").change(atualizaReu03);
	$("#reu04").change(atualizaReu04);
	$("#reu05").change(atualizaReu05);
	
	//atualiza preposto
	$("#preposto_reu01").change(atualizaPrepostoReu01);
	$("#preposto_reu02").change(atualizaPrepostoReu02);
	$("#preposto_reu03").change(atualizaPrepostoReu03);
	$("#preposto_reu04").change(atualizaPrepostoReu04);
	$("#preposto_reu05").change(atualizaPrepostoReu05);
	
	//atualiza advogados dos reus
	$("#adv01_reu01").change(atualizaAdv01Reu01);
	$("#adv02_reu01").change(atualizaAdv02Reu01);
	$("#adv01_reu02").change(atualizaAdv01Reu02);
	$("#adv02_reu02").change(atualizaAdv02Reu02);
	$("#adv01_reu03").change(atualizaAdv01Reu03);
	$("#adv02_reu03").change(atualizaAdv02Reu03);
	$("#adv01_reu04").change(atualizaAdv01Reu04);
	$("#adv02_reu04").change(atualizaAdv02Reu04);
	$("#adv01_reu05").change(atualizaAdv01Reu05);
	$("#adv02_reu05").change(atualizaAdv02Reu05);
	
	//atualiza publicacoes em nome de
	$("#adv_publicacoes_reu01").change(atualizaAdvPublicacoesReu01);
	$("#adv_publicacoes_reu02").change(atualizaAdvPublicacoesReu02);
	$("#adv_publicacoes_reu03").change(atualizaAdvPublicacoesReu03);
	$("#adv_publicacoes_reu04").change(atualizaAdvPublicacoesReu04);
	$("#adv_publicacoes_reu05").change(atualizaAdvPublicacoesReu05);
});




function atualizaUnidade() {
  $("#txt_unidade").html($("#unidade").val().toUpperCase());
}

function atualizaEndereco() {
  $("#txt_endereco").html($("#endereco").val());
}

function atualizaTelefone() {
	var texto = "Telefone: ";
	texto = texto.concat($("#telefone").val());
	$("#txt_telefone").html(texto);
}

function atualizaComarca(){
	// insere a data atual
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();

    var meses = new Array(12);

    meses[0] = "Janeiro";
    meses[1] = "Fevereiro";
    meses[2] = "Mar&ccedil;o";
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


    var local = $("#comarca").val().toUpperCase();

    $("#txt_localEdata").html(local + ", " + data + ".");
}

function atualizaProcesso() {
    var texto = "Processo: <strong>" + $("#processo").val().toUpperCase() + "</strong>";
    $("#txt_processo").html(texto);
}

function atualizaConciliador() {
	var assinatura = "_______________________________________________<br>" +
	"<strong>" + $("#conciliador").val().toUpperCase() + "<br>Conciliador(a)</strong>";
    var texto = "Conciliador(a): <strong>" + $("#conciliador").val().toUpperCase() + "</strong>";
    $("#assinatura_conciliador").html(assinatura);
    $("#txt_conciliador").html(texto);
}

function atualizaDigitador() {
    var texto = "Digitador(a): <strong>" + $("#digitador").val().toUpperCase() + "</strong>";
    $("#txt_digitador").html(texto);
}

function assinaturaJuiz() {
    var assinatura = "_______________________________________________<br>" +
	"<strong>" + $("#juiz").val().toUpperCase() + "<br>Juiz(a) de Direito</strong>";
    $("#assinatura_juiz").html(assinatura);
}


function abreAudiencia() {
    // insere a hora atual
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    var texto = "Aberta a audiência, efetuado o pregão às " + hora + 
    " horas e "+ min + " minutos, compareceram as partes conforme registrado acima.<br>";

    $("#txt_abertura").html(texto);
}

function encerraAudiencia() {
    var texto = $("#txt_resultado").html();
    // insere a hora atual
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    texto = texto + "Nada mais havendo, às " + hora + 
    " horas e "+ min + " minutos, foi encerrada a presente audiência.<br>";

    $("#txt_resultado").html(texto);
}

function acordo() {
    var texto = $("#txt_resultado").html();
    texto += "Proposta a Conciliação, RESOLVEM AS PARTES POR FIM A CONTROVÉRSIA, RENUNCIANDO A QUALQUER RECURSO, SALVO A EXECUÇÃO DO QUE ORA AQUI ESTABELECIDO:<br>1. Compromete-se a empresa acionada, por mera liberalidade, a pagar à parte acionante a importância de R$ #valor#, em parcela única, até o dia #data#;<br>2. O pagamento supra deverá ser realizado mediante DEPÓSITO BANCÁRIO no BANCO #banco#, AGÊNCIA: #agencia#, CONTA CORRENTE: #conta#, de titularidade da parte autora, CPF: #CPF#;<br>3. Fica ciente a Acionada que em caso de descumprimento do quanto acima pactuado, incidirá a CLÁUSULA PENAL de 30% (trinta por cento) do valor do acordo;<br>4. Com o cumprimento do acordo supra a parte autora dá-se por satisfeita, para não mais reclamar, seja a que título for, em relação aos fatos alegados na inicial, valendo a presente como transação, nos termos do Art. 840 e seguintes do Código Civil.<br><br>Autos conclusos para HOMOLOGAÇÃO.<br><br>";
    var sentenca = "Vistos,etc.<br>HOMOLOGO O ACORDO CELEBRADO ENTRE AS PARTES, para que surta seus jurídicos e legais efeitos, RESOLVENDO O MÉRITO DO PRESENTE PROCESSO, tendo por supedâneo o disposto no art. 269, III, do CPC.<br>Cumprido ou não o acordo, e neste último caso, em não sendo adotadas as providências pertinentes pelo exequente, no prazo de trinta dias, arquive-se.<br>Dispensadas as custas na forma da lei.<br>Publicada e intimada em audiência. Registre-se.<br>";
	$("#txt_resultado").html(texto);
	$("#txt_titulo_sentenca").html("<strong>HOMOLOGAÇÃO<strong>");
	$("#txt_texto_sentenca").html(sentenca);
	assinaturaJuiz();
}

function desistencia() {
    var texto = $("#txt_resultado").html();
    texto += "Pela parte Acionante foi requerida a DESISTÊNCIA da aludida ação, bem como o desentranhamento dos documentos de fls. #fls#, dos autos.<br><br>Autos conclusos para SENTENÇA.<br><br>";
    var sentenca = "Vistos,etc.<br>Homologo por sentença a DESISTÊNCIA requerida pela parte Autora, para que produza os seus jurídicos e legais efeitos.<br>Declaro extinto o presente processo, sem resolução do mérito (Art. 51, inciso I da Lei 9.099/95).<br>Autorizo o desentranhamento, mediante recibo nos autos. <br>Sem custas. <br>Oportunamente, proceda-se, as anotações de estilo e o arquivamento dos autos. Publicada e intimada em audiência. <br>Publicada e intimada em audiência. Registre-se.<br>";
	$("#txt_resultado").html(texto);
	$("#txt_titulo_sentenca").html("<strong>HOMOLOGAÇÃO<strong>");
	$("#txt_texto_sentenca").html(sentenca);
	assinaturaJuiz();
}

function autorAusente() {
    var texto = $("#txt_resultado").html();
    texto += "Pelo(a) Conciliador(a) foi dito que: \“Apesar de devidamente intimada, conforme relatório do Sistema SAIPRO, a parte autora não compareceu à presente audiência. Assim, são os autos conclusos ao M.M. Juiz para SENTENÇA\”.<br><br>Autos conclusos para SENTENÇA.<br><br>";
    var sentenca = "Vistos,etc.<br>Dispensado relatório, com fundamento no art. 38 da lei 9099/95.<br>Considerando o não comparecimento injustificado da parte autora, apesar de devidamente intimada, declaro EXTINTO O PROCESSO, SEM RESOLUÇÃO DO MÉRITO, à luz do Art. 51, inciso I da Lei 9.099/95.<br>Em face da excepcionalidade da Semana Nacional da Conciliação, deixo de condenar a parte autora ao pagamento das custas. Publicada e intimada em audiência. Registre-se. Após, arquivem-se.<br>";
	$("#txt_resultado").html(texto);
	$("#txt_titulo_sentenca").html("<strong>SENTENÇA<strong>");
	$("#txt_texto_sentenca").html(sentenca);
	assinaturaJuiz();
}

function autorMudou() {
    var texto = $("#txt_resultado").html();
    texto += "Pelo(a) Conciliador(a) foi dito que: \“A ausência injustificada da parte autora enseja a EXTINÇÃO DO PROCESSO SEM RESOLUÇÃO DO MÉRITO. Assim, são os autos conclusos ao M.M. Juiz para decisão\”.<br><br>Autos conclusos para SENTENÇA.<br><br>";
    var sentenca = "Vistos,etc.<br>Dispensado relatório, com fundamento no art. 38 da lei 9099/95.<br>Compulsando o sistema SAIPRO (relatório anexo), verifica-se que a parte autora não foi intimada para este ato processual em virtude de ter mudado de residência.<br>Ora, é consabido que o(a) autor(a) tem o dever de comunicar ao juízo qualquer mudança havida no seu endereço para que possa ser intimado dos atos processuais. Não o fazendo, como no caso presente, revela desinteresse no andamento do processo.<br>Dispõe o art. 267,III, do CPC, de aplicação subsidiária aos feitos dos Juizados, que se extingue o processo sem julgamento do mérito quando o autor abandonar a causa por mais de 30(trinta) dias.<br>Assim, com amparo no dispositivo legal acima referido, decreto a EXTINÇÃO DO PROCESSO, SEM RESOLUÇÃO DO MÉRITO.<br>Em face da excepcionalidade da Semana Nacional da Conciliação, deixo de condenar a parte autora ao pagamento das custas. Publicada e intimada em audiência. Registre-se. Após, arquivem-se.<br>";
	$("#txt_resultado").html(texto);
	$("#txt_titulo_sentenca").html("<strong>SENTENÇA<strong>");
	$("#txt_texto_sentenca").html(sentenca);
	assinaturaJuiz();
}

function revelia() {
    var texto = $("#txt_resultado").html();
    texto += "Pelo(a) Conciliador(a) foi dito que: \“Apesar de devidamente intimada, conforme relatório do Sistema SAIPRO, a parte demandada não compareceu à presente audiência, ensejando a sua REVELIA.\”.<br><br>Autos conclusos para SENTENÇA.<br><br>";
    $("#txt_resultado").html(texto);
}

function semAcordo() {
    var texto = $("#txt_resultado").html();
    texto += "Proposta a Conciliação, a mesma não logrou êxito.<br><br>Autos conclusos para SENTENÇA.<br><br>";
    $("#txt_resultado").html(texto);
}

function alertaApagar() {
    $("#alertaApagar").show();
}

function escondeAviso() {
    $("#alertaApagar").hide();
}

function limparTudo() {
    limparTexto();
    limparCampos();
    $("#alertaApagar").hide();
}
function limparCampos() {
  $(".limpar_campo").val("");
}

function limparTexto() {
  $(".limpar_texto").html("");
}

//atualiza autores
function atualizaAutor01() {
    var texto = "<strong>" + $("#autor01").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_autor01").html(texto);
}

function atualizaAutor02() {
    var texto = "<strong>" + $("#autor02").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_autor02").html(texto);
}

function atualizaAutor03() {
    var texto = "<strong>" + $("#autor03").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_autor03").html(texto);
}
function atualizaAutor04() {
    var texto = "<strong>" + $("#autor04").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_autor04").html(texto);
}
function atualizaAutor05() {
    var texto = "<strong>" + $("#autor05").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_autor05").html(texto);
}

//atualiza advogados
function atualizaAdvAutor01() {
    var texto = "Advogado(s):<br><strong>" + $("#adv_autor01").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv_autor01").html(texto);
}

function atualizaAdvAutor02() {
    var texto = "<strong>" + $("#adv_autor02").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv_autor02").html(texto);
}

function atualizaAdvAutor03() {
    var texto = "<strong>" + $("#adv_autor03").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv_autor03").html(texto);
}

//atualiza reus
function atualizaReu01() {
    var texto = "<strong>" + $("#reu01").val().toUpperCase() + "</strong>";
    $("#txt_reu01").html(texto);
}

function atualizaReu02() {
    var texto = "<strong>" + $("#reu02").val().toUpperCase() + "</strong>";
    $("#txt_reu02").html(texto);
}
function atualizaReu03() {
    var texto = "<strong>" + $("#reu03").val().toUpperCase() + "</strong>";
    $("#txt_reu03").html(texto);
}
function atualizaReu04() {
    var texto = "<strong>" + $("#reu04").val().toUpperCase() + "</strong>";
    $("#txt_reu04").html(texto);
}
function atualizaReu05() {
    var texto = "<strong>" + $("#reu05").val().toUpperCase() + "</strong>";
    $("#txt_reu05").html(texto);
}

//atualiza preposto
function atualizaPrepostoReu01() {
    var texto = "Preposto(a):" + $("#preposto_reu01").val().toUpperCase() + " - Assinatura:_________________________________";
    $("#txt_preposto_reu01").html(texto);
}
function atualizaPrepostoReu02() {
    var texto = "Preposto(a):" + $("#preposto_reu02").val().toUpperCase() + " - Assinatura:_________________________________";
    $("#txt_preposto_reu02").html(texto);
}
function atualizaPrepostoReu03() {
    var texto = "Preposto(a):" + $("#preposto_reu03").val().toUpperCase() + " - Assinatura:_________________________________";
    $("#txt_preposto_reu03").html(texto);
}
function atualizaPrepostoReu04() {
    var texto = "Preposto(a):" + $("#preposto_reu04").val().toUpperCase() + " - Assinatura:_________________________________";
    $("#txt_preposto_reu04").html(texto);
}
function atualizaPrepostoReu05() {
    var texto = "Preposto(a):" + $("#preposto_reu05").val().toUpperCase() + " - Assinatura:_________________________________";
    $("#txt_preposto_reu05").html(texto);
}

//atualiza advogados reus
function atualizaAdv01Reu01() {
    var texto = "Advogado(s):<br><strong>" + $("#adv01_reu01").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv01_reu01").html(texto);
}

function atualizaAdv02Reu01() {
    var texto = "<strong>" + $("#adv02_reu01").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv02_reu01").html(texto);
}

function atualizaAdv01Reu02() {
    var texto = "Advogado(s):<br><strong>" + $("#adv01_reu02").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv01_reu02").html(texto);
}

function atualizaAdv02Reu02() {
    var texto = "<strong>" + $("#adv02_reu02").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv02_reu02").html(texto);
}
function atualizaAdv01Reu03() {
    var texto = "Advogado(s):<br><strong>" + $("#adv01_reu03").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv01_reu03").html(texto);
}

function atualizaAdv02Reu03() {
    var texto = "<strong>" + $("#adv02_reu03").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv02_reu03").html(texto);
}

function atualizaAdv01Reu04() {
    var texto = "Advogado(s):<br><strong>" + $("#adv01_reu04").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv01_reu04").html(texto);
}

function atualizaAdv02Reu04() {
    var texto = "<strong>" + $("#adv02_reu04").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv02_reu04").html(texto);
}
function atualizaAdv01Reu05() {
    var texto = "Advogado(s):<br><strong>" + $("#adv01_reu05").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv01_reu05").html(texto);
}

function atualizaAdv02Reu05() {
    var texto = "<strong>" + $("#adv02_reu05").val().toUpperCase() + "</strong> - Assinatura:_________________________________";
    $("#txt_adv02_reu05").html(texto);
}

//atualiza publicacoes em nome de

function atualizaAdvPublicacoesReu01() {
    var texto = "<strong>As publicações devem ser feitas em nome de: " + $("#adv_publicacoes_reu01").val().toUpperCase() + ".";
    $("#txt_adv_publicacoes_reu01").html(texto);
}

function atualizaAdvPublicacoesReu02() {
    var texto = "<strong>As publicações devem ser feitas em nome de: " + $("#adv_publicacoes_reu02").val().toUpperCase() + ".";
    $("#txt_adv_publicacoes_reu02").html(texto);
}

function atualizaAdvPublicacoesReu03() {
    var texto = "<strong>As publicações devem ser feitas em nome de: " + $("#adv_publicacoes_reu03").val().toUpperCase() + ".";
    $("#txt_adv_publicacoes_reu03").html(texto);
}

function atualizaAdvPublicacoesReu04() {
    var texto = "<strong>As publicações devem ser feitas em nome de: " + $("#adv_publicacoes_reu04").val().toUpperCase() + ".";
    $("#txt_adv_publicacoes_reu04").html(texto);
}

function atualizaAdvPublicacoesReu05() {
    var texto = "<strong>As publicações devem ser feitas em nome de: " + $("#adv_publicacoes_reu05").val().toUpperCase() + ".";
    $("#txt_adv_publicacoes_reu05").html(texto);
}
