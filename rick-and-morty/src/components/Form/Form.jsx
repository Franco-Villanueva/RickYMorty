import { useState } from "react";
import validation from "./validation";
import styles from './Form.module.css';

export default function Form({login}) {

    const [userData,setUserData]= useState({email:'',password:''})
    const [errors,setErrors]=useState({})

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
        setErrors(validation({ ...userData, [name]: value })); 
    }

    const handleSubmit= (event)=>{
        event.preventDefault();
        const formErrors = validation(userData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
        // No hay errores de validación, podemos llamar al método de inicio de sesión
        login(userData);
        }
    }

    return (
       <div className={styles.container}>
        <div className={styles.form}>
           <form onSubmit={handleSubmit}>
                <label className={styles.labels} htmlFor="email">Email</label>
                <input className={styles.inputs} type="email" id="email" name="email" value={userData.email} onChange={handleChange} placeholder="Ingresa un email" />
                <p className={styles.errors}>{errors.email}</p>
                <label className={styles.labels} htmlFor="password">Password</label>
                <input className={styles.inputs} type="password" id="password" name="password" value={userData.password} onChange={handleChange} placeholder="Ingresar contraseña" />
                <p className={styles.errors}>{errors.password}</p>
                <button className={styles.btn} type="submit">Submit</button>
            </form>
        </div>
       </div>
    );
   }