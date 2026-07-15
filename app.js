const btnInc = document.getElementById("btnIncrementar");
const btnDec = document.getElementById("btnDecrementar");
let aux = 0;
btnInc.addEventListener("click", function(){
    aux+=1;
    document.getElementById("contador").textContent = aux;
});
btnDec.addEventListener("click", function(){
    aux-=1;
    document.getElementById("contador").textContent = aux;
});


