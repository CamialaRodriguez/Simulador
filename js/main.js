function inversion(){
  //capturamos los valores de los campos del formulario
  let cNombres= document.getElementById("nombres").value;
  let cTelefono= document.getElementById("telefono").value;
  let cEmail= document.getElementById("email").value;
  let cMontos= document.getElementById("inversion").value;
  let cTiempo= document.getElementById("tiempo").value;
//capturamos los contenedores pre simulacion y post simulacion

  let contPre= document.querySelector('.pre-simulation');
  let contPost =document.querySelector('.post-simulation');
  //
  let sNombres= document.getElementById("nombres-show");
  let sEmail= document.getElementById("email-show");
  let sTiempo= document.getElementById("tiempo-show");
  let sMonto= document.getElementById("interes-show");
  let sGanancia= document.getElementById("ganancia-show");
  let sTotal= document.getElementById("total-show");
//mostramos y ocultamos el panel de la derecha 
 contPost.classList.remove("disabled");
 contPre.classList.add("disabled");
 //mostramos los datos del usuario
 sNombres.innerHTML=(cNombres);
 sEmail.innerHTML=(cEmail);
 sTiempo.innerHTML=(cTiempo);
 sMonto.innerHTML=(cMontos);
 

//Se utiliza el switch para cambiar el tiempo y el interes 
 switch(cTiempo){
  case "1":
    sTiempo.textContent = "12 MESES";
    sMonto.textContent = "0.8%";

    ganancia=(cMontos*0.008);
    gananciaTotal=parseFloat(ganancia)+parseFloat(cMontos);

    sTotal.innerHTML=(gananciaTotal*12);
    sGanancia.innerHTML=(ganancia*12);
    
    break;
  case "2":
    sTiempo.textContent = "24 MESES";
    sMonto.textContent = "1.3%";

    ganancia=((cMontos*1.3)/100);
    gananciaTotal=parseFloat(ganancia)+parseFloat(cMontos);

    sTotal.innerHTML=(gananciaTotal*24);
    sGanancia.innerHTML=(ganancia*24);
    break;
  case "3":
    sTiempo.textContent = "36 MESES";
    sMonto.textContent = "1.7%";

    ganancia=((cMontos*1.7)/100);
    gananciaTotal=parseFloat(ganancia)+parseFloat(cMontos);

    sTotal.innerHTML=(gananciaTotal*36);
    sGanancia.innerHTML=(ganancia*36);
    break;
 }


//  Variable  g 
//  0.8%/100*12=0,096
 
}


// alert('Bienvenido usuario' + cNombres + " su telefone es " + cTelefono );
// console.log("Bienvenido usuario " + cNombres + " su telefono es " + cTelefono );

//let contador= 100;
// while (contador >0) {
//   console.log(contador);
//   alert (contador);
//   contador=contador -1;
  
// }