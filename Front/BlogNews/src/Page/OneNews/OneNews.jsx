import { useLayoutEffect, useState} from "react"
import axios from "axios";
import { IPServer } from "../../config";
import "./OneNews.scss";

export default function OneNews(){
    const [Info,setInfo]= useState([]);
    const href = window.location.href;
    const idNews= href.match(/\d+$/);
    const config ={headers:{
        idnews:idNews
    }}
    useLayoutEffect(()=>{
        axios.get(`${IPServer}getone`,config  )
        .then((req)=>{
            setInfo(req.data[0]);
        })
    },[])
    console.log(Info);

    return(
        <div className="OneNews">
            <h1>{Info.namenews}</h1>
            <h3>Дата публикаций: {Info.datepublish}</h3>
            <h3>{Info.textnews}</h3>
        </div>
    )
}