function somar(){
var n1 = parseFloat(document.getElementById('numero1').value);
var n2 = parseFloat(document.getElementById('numero2').value);

if (isNaN(n1) || isNaN (n2)){
alert('Numero invalidos');
return;
}
alert('Soma:' + (n1+n2));
}
function subtrair(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    
    if (isNaN(n1) || isNaN (n2)){
    alert('Numero invalidos');
    return;
    }
    alert('Soma:' + (n1-n2));
    }

