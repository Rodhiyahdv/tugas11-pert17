import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const LoginPage = () => {    
    const actionLogin = useHistory()

    const [login,setLogin] = useState ({
        email: "",
        password: ""
    })

    const handleChange = (event) => {    
        setLogin({
          ...login,
          [event.target.name]: event.target.value
        })
      }

      const handleSubmit = (event) => {
        alert('Login berhasil. Data anda:\n Email : '+ login.email +
        '\n Password : '+ login.password )
        event.preventDefault()
        console.log(login);
        actionLogin.push("/")
      }

    

    return (
        <div>
            <h1>Halaman Login</h1>
            <form>
                <input type="text" 
                name="email" 
                placeholder="Email" 
                value={login.username}
                onChange={handleChange}/> <br/>

                <input type="text" 
                name="password" 
                placeholder="Password"
                value={login.password}
                onChange={handleChange}/> <br/>

                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;