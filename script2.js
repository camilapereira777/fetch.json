
var datos = [{nombre: "cami", edad: 17},
               {nombre: "juan", edad: 27},
               {nombre: "jhoselin", edad: 18}]


function mostrar(){

    var x = document.getElementById("id").value;

    console.log(datos[x]);

    var nombreDeAtributos = Object.keys(datos[x]);

    console.log(nombreDeAtributos);

    nombreDeAtributos.forEach(elementos => {

        console.log(elementos);

    })

    

    var texto = document.getElementById("texto");

    texto.innerText = x

}

