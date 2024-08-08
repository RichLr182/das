let imagen = document.getElementById("imgGuitar");
let mostrar = document.getElementById("btnMostrar");
let ocultar = document.getElementById("btnOcultar");
let segundoContenedor = document.getElementById("segundoDiv");
let primerContenedor = document.getElementById("primerDiv");
let opciones = document.getElementById("cmbOpciones");

ocultar.addEventListener("click", function(){
    segundoContenedor.style.display = "none"
});

mostrar.addEventListener("click", function(){
    segundoContenedor.style.display = "block";  
});

opciones.addEventListener("change", function(){
    console.log(opciones.value);

    switch(opciones.value){
        case "0":
            alert("Favor de elegir un color");
            break;
        case "guitar1" :
            imagen.src = "img/Lespaul2.jpg";
            primerContenedor.style.display = "none";
            break;
        case "guitar2":
            imagen.src = "img/gibson-es-335.jpg";
            primerContenedor.style.display = "block";
            break;
        case "guitar3":
                imagen.src = "img/ssg.jpg";
                break;
        case "guitar4":
                imagen.src = "img/explorer.jpg";
                break;
    }
});



