import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import {AuthContext} from '../providers/AuthProvider'

// the status of users
// I could have a user in state - (logged in)
// I do not have user but have a token
   // - need to check if token is valid, if valid in need to setUser to state
// i could not have user in state(context), and not have a token in localstorage
  // user not logged

const FetchUser = (props)=>{

    const [loaded,setLoaded] = useState(false)
    const {authenticated, setUser} = useContext(AuthContext)

    useEffect(()=>{
        checkUser()
    },[])

    const checkUser = async () => {
        // if authenticated that means we have a user in state (logged In)
        // if don't have a access-token, we are not logged in
        if( authenticated || !localStorage.getItem('access-token')){
            setLoaded(true)
            return;
        }

        // at this point we don't have in user in state, but we
        // have an access-token so we need to check to see if it
        // it is valid, if so setUser
        try{
           const res = await axios.get("/api/auth/validate_token")
           // if we had a valid token in local storage this return user
           setUser(res.data.data)
        } catch(err) {
           // having a invalid token will cause the axios call to fail
           // token is not valid
        } finally {
           //Block of code to be executed regardless of the try / catch result
           setLoaded(true)
        }
    }

    return loaded ? props.children : null

}

export default FetchUser
