function Comvertir (valor ,valorIndicador){
var resultado = (valor / valorIndicador)
return resultado.toFixed(2);

}
$(document).ready(function(){
    $('input[type=radio][name=indicadores]').change(function(){
        var valor=$(this).val();
        $.get('https://mindicador.cl/api/'+valor,function(data){
            var nombreIndicador=data.nombre;
            var valorIndicador=data.serie[0].valor;
            $('.lbl_nombreIndicador').text(nombreIndicador);
            $('.lbl_valorIndicador').text(valorIndicador);
            
            var valor = parseFloat ($('#valorclp').val());
            $('.lbl_resultadoConversion').text(Comvertir(valor, valorIndicador) + " " + nombreIndicador);
        });
    });
});