function ingresar(){
    const nombre=document.getElementById('nombre').value
    const rol=document.getElementById('rol').value
    if(nombre==""){
        alert("Nombre de Usuario Vacio")
        return
        
    }
    else if(rol==""){
        alert("Nombre de Rol Vacio")
        return
        
    }
    else if(rol=="administrador"){
        alert("Eres Admistrador, " + nombre)
        
    }
    else if (rol=="editor"){
        alert("Eres Editor, " + nombre)
        
    }
    else{
        alert("El Rol" +rol+ " no existe" )
    }
}
