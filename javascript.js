function calculo(){
  var tasa = 12;
  var monto = $("input[name=monto]").val();
  var iva = (monto * tasa)/100;
  $("input[name=iva]").val(iva);
  $("input[name=total]").val(parseInt(monto)+parseInt(iva));
}
