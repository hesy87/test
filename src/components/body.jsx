import { useEffect, useState } from "react";
import './body.css'

const Body = () => {
    const [Data,setData]= useState([])
    async function fetchDataHandler (){
        const respose = await fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        const data = await respose.json()
        console.log(data.hits);
        const trasformData = data.hits.map((items)=> {
            return {
                id: items.story_id,
                title: items.title,
                url:items.url,
                points:items.points,
                author:items.author,
                date:(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(items.created_at_i)),
                num_comments:items.num_comments,
            }
        })
        setData(trasformData)
        const timestamp = Date.now()
        console.log(timestamp);
    } 
    
    useEffect(()=>{
        fetchDataHandler()
    },[]);
    
    return (
        <>
        <div className="container story">
        {Data.map(items => 
        <>
        <div className="d-flex">
            <p className="title">{items.title}</p>
            <p className="title ms-2 Story_link">({items.url})</p>
        </div>
        <div className="d-flex subtitle">
            <p>{items.points} points |</p>
            <p>&nbsp;{items.author} |</p>
            <p>&nbsp;{items.date} |</p>
            <p>&nbsp;{items.num_comments} comments</p>
        </div>
        </>
        )}        
        </div>
            
        </>
    );
}
 
export default Body;