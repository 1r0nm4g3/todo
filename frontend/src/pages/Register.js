import React, {useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        terms: false
    }, [])
    
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    let history = useHistory()

    const registerUser = async (newUser) => {
        try {
            const res = await fetch(`/api/users/register`, {
                method: 'POST',
                body: JSON.stringify(newUser),
                    headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(res.ok){
                console.log("Registration Successful")
                history.push('/login')
            }else{
                const data = await res.json()
                console.log(data.msg)
            }
        } catch (error) {
            return error
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        registerUser(user)
    }


    return (
        <main className="main-small">
            <form onSubmit={onSubmit}>
                <h1>Register</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" id="name" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" name="confirmpassword" id="confirmpassword" onChange={onChange}/>
                </div>
                <div className="form-split">
                    <div className="check-group">
                    <input type="checkbox" name="terms" id="terms" checked={user.terms} onChange={onChange}/>
                    <label htmlFor="terms">I agree to the terms of service and privacy policy</label>
                    </div>
                </div>
                <button>Register</button>
                <p>Already have an account? <Link to="/login">Log in!</Link></p>
            </form>
        </main>
    )
}

export default Register
