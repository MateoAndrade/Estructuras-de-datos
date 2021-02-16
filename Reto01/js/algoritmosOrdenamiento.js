  
function algoritmoBurbuja() {
    alert("Soy la función burbuja");
}
function algoritmoBurbujaDsc() {
    alert("Soy la función burbuja descendente");
}
function algoritmoBurbujaAsc() {
    alert("Soy la función burbuja ascendente");
}


function algoritmoSeleccion() {
    alert("Soy la función selección");
}
function algoritmoSeleccionDsc() {
    alert("Soy la función selección descendente");
}
function algoritmoSeleccionAsc() {
    alert("Soy la función selección ascendente");
}

function algoritmoInsercion() {
    alert("Soy la función inserción");
}
function algoritmoInsercionDsc() {
    alert("Soy la función inserción descendente");
}
function algoritmoInsercionAsc() {
    alert("Soy la función inserción ascendente");
}

function showSelected() {
    let seleccion = document.getElementById("algoritmoSeleccionado").value;
    if ((seleccion === "1") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoBurbujaDsc();
    }else if((seleccion === "1") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoBurbujaAsc();
    }else if((seleccion === "2") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoInsercionDsc();
    }else if((seleccion === "2") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoInsercionAsc();
    }else if((seleccion === "3") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoSeleccionDsc();
    }else if((seleccion === "3") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoSeleccionAsc();
    }
}

function cambioImagenes(){
    /*let valor = document.getElementById("imgSelect").value;
    alert("Por Valor: " + valor);
 
    /* Para obtener el texto 
    let temp = document.getElementById("seleccionar");
    let selected = temp.options[temp.selectedIndex].text;
    alert("Por Texto: " + selected);

    let componente = document.getElementById("img");
    if(Number(valor) === 1){
        componente.innerHTML += '<image src="img/1.png" width="180px">'+'<image src="img/2.png" width="180px">'+
        '<image src="img/3.png" width="180px">'+'<image src="img/4.png" width="180px">'+'<image src="img/5.png" width="180px">' + 
        '<image src="img/6.png" width="180px">';
    }else if(Number(valor) === 2){
        componente.innerHTML += '<image src="img/L1.png" width="180px">'+'<image src="img/L2.png" width="180px">'+
        '<image src="img/L3.png" width="180px">'+'<image src="img/L4.png" width="180px">'+'<image src="img/L5.png" width="180px">'+
        '<image src="img/L6.png" width="180px">';
    }
}*/
}
function cambiarImagenes(){
    let grupo1 = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png"];
    let grupo2 = ["img/L1.png","img/L2.png","img/L3.png","img/L4.png","img/L5.png","img/L6.png"];
    let grupo3 = ["img/R1.png","img/R2.png","img/R3.png","img/R4.png","img/R5.png","img/R6.png"];

    let imgSelect = document.getElementById("imgSelect").value;
    let max = 6;
    let min = 0;
    if(imgSelect == ""){
        alert("Seleccione una :v");
    }

    if(imgSelect === "1"){
        document.getElementById("img1").src = grupo1[1];
        document.getElementById("img2").src = grupo1[0];
        document.getElementById("img3").src = grupo1[5];
        document.getElementById("img4").src = grupo1[4];
        document.getElementById("img5").src = grupo1[2];
        document.getElementById("img6").src = grupo1[3];
    }else if(imgSelect === "2"){
        document.getElementById("img1").src = grupo2[1];
        document.getElementById("img2").src = grupo2[3];
        document.getElementById("img3").src = grupo2[2];
        document.getElementById("img4").src = grupo2[0];
        document.getElementById("img5").src = grupo2[5];
        document.getElementById("img6").src = grupo2[4];
    }else if(imgSelect === "3"){
        document.getElementById("img1").src = grupo3[1];
        document.getElementById("img2").src = grupo3[4];
        document.getElementById("img3").src = grupo3[2];
        document.getElementById("img4").src = grupo3[3];
        document.getElementById("img5").src = grupo3[5];
        document.getElementById("img6").src = grupo3[0];
    }
}


