const btnInc = document.getElementById("btnIncrementar");
const btnDec = document.getElementById("btnDecrementar");
let aux = 0;
function actualizarColor() {
    if (aux >= 10) {
        contador.style.color = "#000000";
    } else {
        contador.style.color = "#ffffff";
    }
}


btnInc.addEventListener("click", function(){
    aux+=1;
    document.getElementById("contador").textContent = aux;
    actualizarColor();
});
btnDec.addEventListener("click", function(){
    aux-=1;
    document.getElementById("contador").textContent = aux;
    actualizarColor();
});



