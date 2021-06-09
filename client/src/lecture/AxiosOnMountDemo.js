import React from 'react'
import StringifyJSON from '../components/StringifyJSON'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const Things = () => {
    // about the useState hook
    // const {data,loading,error} = useAxiosOnMount('/api/things')
    const {data,loading,error} = useAxiosOnMount('https://reqres.in/api/users?delay=3')

    if(loading) return <p>loading</p>
    if(error) return <p>error occurred </p>
    return (
        <div>
            <h1>Things</h1>
            <StringifyJSON json={data} />
        </div>
    )
} 

export default Things