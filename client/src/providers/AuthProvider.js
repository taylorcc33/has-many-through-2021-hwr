import React, {useState} from 'react'
import axios from 'axios'
// we use this with the useContext hook
export const AuthContext = React.createContext()

// we use this with the in a higherOrder component
// won't use this one
export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
    const [user, setUser] = useState(null)

    // register the user (ie new users)
    const handleRegister = async (userFormData, history) => {
        // do axios call here
        try {
           let res = await axios.post('/api/auth', userFormData)
           console.log(res)
           setUser(res.data.data)
           // go to home page
           history.push('/')
        } catch (err) {
            alert('err occured check console')
            console.log(err)
            console.log(err.response)
        }
    }
    // logging existing user
    const handleLogin = async (userFormData, history) => {
         // do axios call here
         try {
            let res = await axios.post('/api/auth/sign_in', userFormData)
            console.log(res)
            setUser(res.data.data)
            // go to home page
            history.push('/')
         } catch (err) {
             alert('err occured check console')
             console.log(err)
             console.log(err.response)
         }
    }
    // loggount logged in user user
    const handleLogout = async (history) => {
        console.log('handleLogout called')
        try {
            let res = await axios.delete('/api/auth/sign_out')
            console.log(res)
            setUser(null)
            history.push('/login')
        } catch (err) {
            alert('err occured check console')
            console.log(err)
            console.log(err.response)
        }
  
    }

    return (
        <AuthContext.Provider value={{
            testValue: 'test value here',
            user,
            authenticated: user !== null,
            handleRegister,
            handleLogin,
            handleLogout,
            setUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider