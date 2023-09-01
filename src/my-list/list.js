import React, {useEffect, useState} from "react"
import { api} from "../api/Api"
import './my-list.css'

import ListItem from "../components/list-items/List-item"

const List = () => {

    const [data, setData] = useState(null)
    const fetchData = () => {
        fetch(api).then(response => response.json()).then(result => {
              
               console.log(result)
                setData(result?.items)

                
    
            }).catch(error => {
              
                console.log(error)
            });

    }
    
    useEffect(() => {
        
        setTimeout(() => {
            fetchData()
        }, 1000)
    }, [])
    // const getChannelIcon=()=>{
    //     fetch(channel)
    // .then(res=>res.json()).then(res=>{
    //         console.log("channel",res)
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // }
  
   
    return <div className="mt-5 p-2">
      
   <>
  
    <div className="main-video-container " >{data&&data?.map((item, id) => <div key={id}><ListItem item={item} /></div>)}</div>
   
    
    </>
</div>


}
export default List