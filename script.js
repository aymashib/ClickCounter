const sumar = document.getElementById("sum");
const restar = document.getElementById("substract");
const reiniciar = document.getElementById("reset");
const contar = document.getElementById("contar");
var numero = 0

sumar.addEventListener("click", function(){
    numero++;
    contar.innerHTML = numero
});

restar.addEventListener("click", function(){
    numero--;
    contar.innerHTML = numero
});

reiniciar.addEventListener("click",function(){
    numero = 0
    contar.innerHTML = numero
});

