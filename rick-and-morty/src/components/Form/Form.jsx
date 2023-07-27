import { useState } from "react";
import validation from "./validation";

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
       <div>
           <form onSubmit={handleSubmit}>
                <label  htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
                <p>{errors.email}</p>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
                <p>{errors.password}</p>
                <button type="submit">Submit</button>
            </form>
       </div>
    );
   }