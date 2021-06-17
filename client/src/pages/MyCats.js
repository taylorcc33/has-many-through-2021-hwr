import axios from 'axios'
import React, {useState, UseEffect, useEffect} from 'react'
import { Card, Image } from 'semantic-ui-react'
import Cat from '../components/Cat'

const MyCats = ()=> {
    const [cats, setCats] = useState([])

    useEffect(()=>{
        getMyCats()
    },[])

    const getMyCats = async () =>{
        try{
           let res = await axios.get('/api/my_cats')
           console.log(res)
           setCats(res.data)
        } catch(err){
            alert('err')
            console.log(err)
            console.log(err.response)
        }
    }
    const renderCats = ()=>{
        if(cats.length == 0){
            return <p>No liked cats</p>
        }
        return (
         <Card.Group itemsPerRow={4}>
             {cats.map(c => <Cat key={c.id} {...c} />)}
         </Card.Group>   
        )
    }
    return (
        <div>
            <h1>MyCats</h1>
            {renderCats()}
        </div>
    )
}

export default MyCats