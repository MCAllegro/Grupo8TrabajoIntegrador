function validar(){
const form = document.getElementById('form').value;
const usuario=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
const password2=document.getElementById('password2').value;

if(
    usuario==="" || email==="" || password==="" || password2==="" ){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else
        if(usuario.lenght<8){
            alert("El usuario  es demasiado corto");
            return false;
        }
    

}



