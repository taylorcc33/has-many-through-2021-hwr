import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../providers/AuthProvider'

const Home = () => {
    useEffect(()=>{
        getCats()
    },[])
    const getCats = async()=>{
        try {
            let res = await axios.get('/api/cats')
            console.log(res)
        } catch (error) {
            console.log(error)
            console.log(error.response)
        }
    }
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>Home</h1>
            <p>{user ? user.email : "No user"}</p>
            <p>{localStorage.getItem('access-token')}</p>
        </div>
    )
} 

export default Home