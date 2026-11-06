var url = "https://dolarapi.com/v1/dolares";


function mostrar(){
var id = document.getElementById("numero").value;

    var texto = document.getElementById("texto");

  
fetch(url)
.then((respuesta)=> respuesta.json())
.then((dato)=>{

    var atributos = Object.keys(dato[id]);

    texto.innerHTML="";

    atributos.forEach((elemento  ) => {

    texto.innerHTML += elemento + ':' +  dato[id][elemento] + '</br>'
    
}) 
.catch((error)=>{console.error("error:",error)});   
    



}) 

   //   console.log(atributos);

}



