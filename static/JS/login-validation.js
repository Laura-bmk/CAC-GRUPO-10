const formLogin = document.querySelector("#formLogin");

const clearValidations = () => {
    document.querySelector("#username").classList.remove('error');
    document.querySelector("#password").classList.remove('error');
    document.querySelector("#error-username").textContent='';
    document.querySelector("#error-password").textContent='';
    
}
const validarFormulario = (event) => {
    event.preventDefault();
    clearValidations();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    let validation = true;
    if(!username.value.trim()){
        username.classList.add('error')
        document.querySelector("#error-username").textContent='Debe completar el campo Usuario';
        validation=false;
    }else if(username.value.length < 4){
        document.querySelector("#error-username").textContent ='El usuario contiene un mínimo de 4 caracteres';
        username.classList.add('error')
        validation=false;
    }
    
    
    if(!password.value.trim()){
        document.querySelector("#error-password").textContent='Debe completar el campo contraseña';
        password.classList.add('error')
        validation=false;
    }else if(password.value.length < 8 || password.value.length > 12){
        document.querySelector("#error-password").textContent ='La contraseña contiene entre 8 y 12 caracteres';
        password.classList.add('error')
        validation=false;
    }

    if(validation){
        formLogin.submit()
    }else{
        return false;
    }
}


formLogin.addEventListener('submit',validarFormulario);