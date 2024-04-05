import { useEffect, useState } from "react";
import { IPServer } from "../../config";
import axios from "axios";
import "./Main.scss";
import { useNavigate } from "react-router-dom";

export default function Main(){
    const [reqAllNews,setAN] = useState([]);
    const nav = useNavigate();
    useEffect(()=>{
         axios.get(`${IPServer}getall`)
        .then((req)=>{
            console.log(req);
            setAN(req.data);
        })
    },[])
    console.log(`${IPServer}getall`);
    const OneNews = (props)=>{
        return(
        <button className="OneNews">
            <h3>{props.namenews}</h3>
            <h4>{props.datapublish}</h4>
        </button>)
    }
    const AllNews = ()=>{return(
        <div className="AllNews">{
        reqAllNews.map((reqOneNews)=>{
            return(
                <OneNews namenews = {reqOneNews.namenews} datapublish = {reqOneNews.datepublish} />
            )
        })
        }
        </div>
        )
    }
    return(
        <div className="Main">
            <h1>Все Новости</h1>
            <button id="btnAdd" onClick={(e)=>{e.preventDefault();nav("/addnews")}}>+</button>
            <AllNews /> 
        </div>
    )
}
