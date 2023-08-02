

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export default function validation(userData){
    const errors = {}

    if(!regexEmail.test(userData.email)){
        errors.email = 'El usuarion debe ser un email'
    }
    if(!userData.email){
        errors.email ='Este campo no puede estar vacio'
    }
    if(userData.email.length>35){
        errors.email = 'Max. 35 caracteres'
    }

    if(!regexPassword.test(userData.password)){
        errors.password = 'La constaseña debe contener un numero'
    }
    if(userData.password.length<6 || userData.password.length>10){
        errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres'
    }

    return errors;
}