import React, {useEffect} from 'react'
import axios from 'axios'

function Home() {

    
   useEffect(()=>{
        
        axios.get("https://639960f516b0fdad773af872.mockapi.io/chrt").then((resp)=>{
            console.log("resp", resp)
            dispatch(getUsers(resp.data))
            .catch((error)=>{
                console.log(error)
            })
        })
    },[])
    
  return (
    <>
    <div>Home</div>
    {/* {
      console.log(users)
    } */}
    </>
    

  )
}

export default Home