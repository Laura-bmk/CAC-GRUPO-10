const formRegister = document.querySelector("#formRegister");


const clearValidations = () => {
    document.querySelector("#username").classList.remove('error');
    document.querySelector("#firstname").classList.remove('error');
    document.querySelector("#lastname").classList.remove('error');
    document.querySelector("#dni").classList.remove('error');
    document.querySelector("#email").classList.remove('error');
    document.querySelector("#password").classList.remove('error');
    document.querySelector("#nationality").classList.remove('error');
    document.querySelector("#select").classList.remove('error');
    document.querySelector("#terms").classList.remove('error');
    
    document.querySelector("#error-username").textContent='';
    document.querySelector("#error-firstname").textContent='';
    document.querySelector("#error-lastname").textContent='';
    document.querySelector("#error-dni").textContent='';
    document.querySelector("#error-email").textContent='';
    document.querySelector("#error-password").textContent='';
    document.querySelector("#error-nationality").textContent='';
    document.querySelector("#error-select").textContent='';
    document.querySelector("#error-terms").textContent='';
   
}



/*const expresiones ={
    username: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
	firstname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	dni: /^\d{8}$/ // 8 numeros.

}*/

const validarFormulario = (event) => {
    event.preventDefault();
    clearValidations();

    const username = document.querySelector("#username");
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const dni = document.querySelector("#dni");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const nationality = document.querySelector("#nationality");
    const select = document.querySelector("#select");
    const terms =  document.querySelector("#terms");  
  


    let validation = true;

   
    if(!username.value.trim()){
        username.classList.add('error')
        document.querySelector("#error-username").textContent='Debe completar el campo Usuario';
        validation=false;
    }else if(username.value.length < 4 || username.value.length > 10){
        document.querySelector("#error-username").textContent ='El usuario debe contener entre 4 y 10 caracteres';
        username.classList.add('error')
        validation=false;
    }
    
    if(!firstname.value.trim()){
        firstname.classList.add('error')
        document.querySelector("#error-firstname").textContent='Debe completar el campo Nombre';
        validation=false;
    }

    if(!lastname.value.trim()){
        document.querySelector("#error-lastname").textContent='Debe completar el campo Apellido';
        lastname.classList.add('error')
        validation=false;
    }

    if(!dni.value.trim()){
        dni.classList.add('error')
        document.querySelector("#error-dni").textContent='Debe completar el campo DNI';
        validation=false;
    }else if(dni.value.length < 8 || dni.value.length > 8){
        document.querySelector("#error-dni").textContent ='Debe ingresar los 8 números de su DNI';
        dni.classList.add('error')
        validation=false;
    }

    if(!email.value.trim()){
        document.querySelector("#error-email").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }
    if(!password.value.trim()){
        document.querySelector("#error-password").textContent='Debe completar el campo contraseña';
        password.classList.add('error')
        validation=false;
    }else if(password.value.length < 8 || password.value.length > 12){
        document.querySelector("#error-password").textContent ='La contraseña debe contener entre 8 y 12 caracteres';
        password.classList.add('error')
        validation=false;
    }
    if(!nationality.value.trim()){
        nationality.classList.add('error')
        document.querySelector("#error-nationality").textContent='Debe elegir una opción';
        validation=false;
    }

    if(!select.value.trim()){
        select.classList.add('error')
        document.querySelector("#error-select").textContent='Debe ingresar un archivo';
        validation=false;
    }
    
    if(!terms.checked){
        terms.classList.add('error')
        document.querySelector("#error-terms").textContent='Debe aceptar términos y condiciones';
        validation=false;
    
    }
        
        
    if(validation){
        formRegister.submit()
        window.alert("Registro exitoso!");
    }else {
        return false;
    }
}


formRegister.addEventListener('submit',validarFormulario);