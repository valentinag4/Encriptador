var sal=document.getElementById('salidat');
var input= document.querySelector("textarea");

function Encriptar() {
   var imagen= document.getElementById('muñeco');
    var input= document.querySelector("textarea");
    var input2=input.value;
    console.log(input2);
    var salida=input2
    .replaceAll('e','enter')
    .replaceAll('i','imes')
    .replaceAll('a','ai')
    .replaceAll('o','ober')
    .replaceAll('u','ufat');
    
   sal.innerHTML=`${salida}  `
   padre=imagen.parentNode;
   padre.removeChild(imagen);


    console.log(salida);
   
 }
  function  desEncriptar() {
   
    var input= document.querySelector("textarea")
    var input2=input.value
    console.log(input2);
    var salida=input2
    .replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ai','a')
    .replaceAll('ober','o')
    .replaceAll('ufat','u')
    ;
    sal.innerHTML=`${salida}  `
    console.log(salida);
   
 }

//  esto se hace para no usar el onclick en html 

//  var boton = document.getElementById("copiar");
//  boton.addEventListener("click", copiarAlPortapapeles, false);
 
 function copiarAlPortapapeles() {
   navigator.clipboard.writeText(sal.innerHTML)
 }