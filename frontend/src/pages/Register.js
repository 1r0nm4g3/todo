import React, {useState, useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'
import UserContext from '../contexts/user/userContext'

const Register = () => {
    const userContext = useContext(UserContext)
    const {registerUser} = userContext

    const [newUserData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        terms: false
    }, [])
    
    const onChange = e => setUserData({...newUserData, [e.target.name]: e.target.value})

    let history = useHistory()

    const onSubmit = async e => {
        e.preventDefault()
        let errors = await registerUser(newUserData)
        if(errors === null){
            history.push("/")
        }else{
            console.log(errors)
        }
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
                    <input type="checkbox" name="terms" id="terms" checked={newUserData.terms} onChange={onChange}/>
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
