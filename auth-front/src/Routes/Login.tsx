import { useState } from "react";
import Layout from "../Layout/Layout";

const SignIn = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

  return (
    <Layout>
        <form className="form">
            <h1>Login</h1>
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
            <button type="button">Login</button>
        </form>
    </Layout>
  )
}

export default SignIn;