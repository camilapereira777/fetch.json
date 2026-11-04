
var vector = [{nombre: "cami", edad: 17},
               {nombre: "juan", edad: 27},
               {nombre: "jhoselin", edad: 18}
]

function mostrar(){

    var id = document.getElementById("numero").value;

    var texto = document.getElementById("texto");

    
    
var atributos = Object.keys(vector[id]);

texto.innerHTML="";

atributos.forEach((elemento  ) => {

    texto.innerHTML += elemento + ':' + vector [id][elemento] + '</br>'


}) 

   //   console.log(atributos);

}

