let estado=false
const ElementoBoton=document.getElementById("boton")
   
function cambiarTexto() {
    if(estado==false){
         
         ElementoBoton.innerText="Adios"  
    }
    else if(estado==true){
        
        ElementoBoton.innerText="Hola"
       
    }
    estado = !estado
}      