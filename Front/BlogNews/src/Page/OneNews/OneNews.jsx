import { useEffect, useState } from "react"
import axios from "axios";
import { IPServer } from "../../config";
import "./OneNews.scss";

export default function OneNews(){
    const [Info,setInfo]= useState();
    const location = location.window.location.href
    // useEffect(()=>{
    //     axios.get(`${IPServer}getone`, )
    //     .then((req)=>{
    //         console.log(req);
    //         setInfo(req.data);
    //     })
    // },[])
    return(
        <div className="OneNews">
            Привет
        </div>
    )
}