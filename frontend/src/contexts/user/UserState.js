import React, {useReducer} from 'react'
import UserContext from './userContext'
import userReducer from './userReducer'

const UserState = props => {
    const initialState = {
        user: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

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
                return null
            }else{
                const data = await res.json()
                console.log(data.msg)
                return data.msg
            }
        } catch (error) {
            return error
        }
    }

    const login = async (loginData) => {
        try {
            const res = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify(loginData),
                    headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()

            if (data.success){
                dispatch({
                    type: 'LOGIN',
                    payload: data.user.email
                })
            }

            return data

        } catch (error) {

            console.log(error)
        
        }
    }

    const logout = async () => {
        dispatch({
            type: 'LOGOUT'
        })
        fetch(`/api/users/logout`, {
            method: 'GET'
        })
    }

    return (
        <UserContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            login,
            logout,
            registerUser
        }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState