import { useState } from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { API_URL } from "../Auth/constant";
import {toast} from 'react-toastify'


const SignUp = () => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { isAuthenticated } = useAuth();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        try {
            const response = await toast.promise(fetch(`${API_URL}/signup`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    name,
                    userName,
                    password
                })
            }),{
                pending: 'Handle your data...',
                success: 'User Created! 👌',
                error: 'Something went wrong, try later... 🤯'
              }) 

            if(response.ok){
                console.log('User Created');
            }else{
                console.log('');
            }
        } catch (error) {
            console.log(`Error at handleSubmit ${error}`);
            
        }
    }

    if(isAuthenticated){
        return <Navigate to='/dashboard' />
    }

    return (
    <Layout>
        <form className="form" onSubmit={handleSubmit}>
            
            <h1>SignUp</h1>
            <label>Name:</label>
            <input 
                value={name}
                type="text" 
                name="name" 
                id="name" 
                onChange={(e) => setName(e.target.value)}
            />
            <label>Username:</label>
            <input 
                value={userName}
                type="text"
                name="username" 
                id="username" 
                onChange={(e) => setUserName(e.target.value)}
            />
            <label>Password:</label>
            <input 
                value={password}
                type="password" 
                name="password" 
                id="password" 
                onChange={(e) => setPassword(e.target.value)}

            />

            <button type="submit">Create User</button>
        </form>
    </Layout>
    )
}

export default SignUp;