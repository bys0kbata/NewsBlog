import { useEffect, useState } from "react";
import { IPServer } from "../../config";

export default function Main(){
    const [reqAllNews,setAN] = useState([]);
    useEffect(()=>{
        //await axios.get(`${IPServer}getall`)
    },[])
    console.log(`${IPServer}getall`);
    const OneNews = (props)=>{
        return(
        <div className="OneNews">
            <h3>{props.namenews}</h3>
            <h4>{props.datapublish}</h4>
        </div>)
    }
    const AllNews = ()=>{return(
        <div>{
        reqAllNews.map((reqOneNews)=>{
            return(
                <OneNews namenews = {reqOneNews.namenews} datapublish = {reqOneNews.datapublish} />
            )
        })
        }
        </div>
        )
    }
    return(
        <>
            <AllNews /> 
        </>
    )
}
