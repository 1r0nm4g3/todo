import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../contexts/user/userContext'

const Header = () => {
    const userContext = useContext(UserContext)
    const {user, logout} = userContext

    return (
        <header>
            <div className="navbar">
                <div className="navbar--title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" className="navbar--logo">
    <path id="Path_1" data-name="Path 1" d="M9,5H7A2,2,0,0,0,5,7V19a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2H15M9,5a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2M9,5a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2m-3,7h3m-3,4h3M9,12h.01M9,16h.01" transform="translate(-4 -2)" fill="none" stroke="#831843" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </svg>
                    <h3>Listit</h3>
                </div>
                <nav>
                    <ul className="navbar--links">
                        <li className="navbar--link"><Link to="/">My Lists</Link></li>
                        <li className="navbar--link"><Link to="/about">About</Link></li>
                        <li className="navbar--link">
                           {(user===null)? (<Link to="/login">Login</Link>) : (<Link to="/" onClick={logout}>Logout {user}</Link>)}
                        </li>
                        <li className="meatballMenu"><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14">
    <path id="Path_2" data-name="Path 2" d="M4,6H20M4,12H20M4,18H20" transform="translate(-3 -5)" fill="none" stroke="#831843" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </svg></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
