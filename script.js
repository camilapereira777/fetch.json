var url = "https://dolarapi.com/v1/dolares";

fetch(url)
.then((respuesta)=> respuesta.json())
.then((dato)=>{
    console.log(dato);
}) 
.catch((error)=>{console.error("error:",error)}); 