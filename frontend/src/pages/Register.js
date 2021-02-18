import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <main class="main-small">
            <form>
                <h1>Register</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="confirmpassword" name="confirmpassword" id="confirmpassword"/>
                </div>
                <div className="form-split">
                    <div className="check-group">
                    <input type="checkbox" name="terms" id="terms"/>
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
