function suma(numero1,numero2) {
    var num1=parseFloat(document.getElementById('numero1').value);
    var num2=parseFloat(document.getElementById('numero2').value);
    var res=num1+num2;
    document.getElementById('resultado').value=res
    if(res%2==0){
     document.getElementById('bandera').value="par"
    }
    else{
        document.getElementById('bandera').value="impar"
    }
} 
function medio(numero3,numero4,numero5) {
    var num3=parseFloat(document.getElementById('numero3').value);
    var num4=parseFloat(document.getElementById('numero4').value);
    var num5=parseFloat(document.getElementById('numero5').value);
    if(num3>num4&num3<num5){
        document.getElementById('resultado2').value=num3;
    }
    else
        if(num4>num3&num4<num5){
            document.getElementById('resultado2').value=num4;
        }
        else
            if(num5>num3&num5<num4){
                document.getElementById('resultado2').value=num5;
            }
        }



function factorial(numero6) {
    var num6=parseFloat(document.getElementById('numero6').value);
    var c=1;
   for(var i=1;i<=num6;i++){
    c=c*i;
   }
   document.getElementById('resultado3').value=c
} 

function primos(numero) {
    var num=parseFloat(document.getElementById('numero').value);
    document.getElementById('resultado6').value=ny
    for(var i=0;i<=num;i++){
        if(i%num==0){
            document.getElementById('resultado6').value=i
        }
    }
} 