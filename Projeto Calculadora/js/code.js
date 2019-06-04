var result = "";


$(document).on("click","#calc", function(){
  var alcool = $("#alcool").val();
  var gas = $("#gasolina").val();
  result = parseFloat(alcool) / parseFloat(gas);
if(result>0.7){
  $("#result").val("Gasolina");
} else {
  $("#result").val("Alcool");
}
});

$(document).on("click","#calcular", function(){
  var people = $("#people").val();
  var refrigerante = 600;
  var agua = 200;
  var bolo = 100;
  var doce = 3;
  var salgado = 10;

  var refri = parseFloat(refrigerante) * parseFloat(people);
  var water = parseFloat(agua) * parseFloat(people);
  var cake = parseFloat(bolo) * parseFloat(people);
  var candy = parseFloat(doce) * parseFloat(people);
  var snack = parseFloat(salgado) * parseFloat(people);

  $("#refri").val(refri + " ml");
  $("#agua").val(water + " ml");
  $("#bolo").val(cake + " Gramas");
  $("#doce").val(candy + " Unidades");
  $("#salgado").val(snack + " Unidades");
});
