import React, {useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../contexts/user/userContext'

const Login = (props) => {
    const userContext = useContext(UserContext)
    const {login} = userContext

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        remember: false,
        redirect: false
    }, [])

    let history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()
        let loginResult = await login(loginData)
        if(loginResult.success){
            history.push('/lists')
        }else{
            console.log(loginResult)
        }
    }

    const onChange = e => setLoginData({...loginData, [e.target.name]: e.target.value})

    return (
        <main className="main-small">
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={onChange}/>
                </div>
                <div className="form-split">
                    <div className="check-group">
                    <input type="checkbox" name="remember" id="remember" onChange={onChange}/>
                    <label htmlFor="remember">Remember Me</label>
                    </div>
                    <Link to="/" className="right-align">Forgot your password?</Link>
                </div>
                <button>Log In</button>
                <p>Don't have an account? <Link to="/register">Create one!</Link></p>
            </form>
        </main>
    )
}

export default Login
