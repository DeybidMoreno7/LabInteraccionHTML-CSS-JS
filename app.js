const btnInc = document.getElementById("btnIncrementar");
const btnDec = document.getElementById("btnDecrementar");
let aux = 0;
let oprimido ;

btnInc.addEventListener("click", function(){
    oprimido = true;
    aux+=1;
});
btnDec.addEventListener("click", function(){
    oprimido = false;
    aux-=1;
});

if(oprimido==true){
    document.getElementById("contador").textContent = aux;
}else if (oprimido==false){
    document.getElementById("contador").textContent = aux;
}




