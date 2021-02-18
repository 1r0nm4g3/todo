import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <main class="main-small">
            <form>
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className="form-split">
                    <div className="check-group">
                    <input type="checkbox" name="remember" id="remember"/>
                    <label htmlFor="remember">Remember Me</label>
                    </div>
                    <a href="#">Forgot your password?</a>
                </div>
                <button>Log In</button>
                <p>Don't have an account? <Link to="/register">Create one!</Link></p>
            </form>
        </main>
    )
}

export default Login
