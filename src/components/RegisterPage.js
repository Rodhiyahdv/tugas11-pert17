import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const RegisterPage = () => {
    const action = useHistory()

    const [register,setRegister] = useState ({
        email: "",
        password: "",
        nama: "",
        alamat: ""
    })

    const handleChange = (event) => {    
        setRegister({
          ...register,
          [event.target.name]: event.target.value
        })
      }

      const handleSubmit = (event) => {
        alert('Registrasi anda berhasil. Data anda:\n Email : '+register.email +
        '\n Password : '+ register.password +
        '\n Nama Lengkap : '+ register.nama +
        '\n Alamat : '+ register.alamat)
        event.preventDefault()
        console.log(register);
        action.push("/Login")
      }

    

    return (
        <div>
            <h1>Halaman Register</h1>
            <form>
                <input type="text" 
                name="email" 
                placeholder="Email" 
                value={register.username}
                onChange={handleChange}/> <br/>

                <input type="text" 
                name="password" 
                placeholder="Password"
                value={register.password}
                onChange={handleChange}/> <br/>

                <input type="text" 
                name="nama" 
                placeholder="Nama Lengkap"
                value={register.nama}
                onChange={handleChange}/> <br/>

                <input type="text" 
                name="alamat" 
                placeholder="Alamat"
                value={register.alamat}
                onChange={handleChange}/> <br/>

                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;