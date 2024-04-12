import { useLayoutEffect, useState} from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import {Alert, CircularProgress} from "@mui/material";
import {IPServer} from "../../config.js";

export default function Main(){
    const [reqAllNews,setAN] = useState(null);
    const nav = useNavigate();
    const data = {
        url:`${IPServer}getall`
    }
    useLayoutEffect(() => {
        const worker = new Worker("./src/script/worker.js");
        worker.onmessage = function(e) {
            setAN(e.data);
            worker.terminate();
        };
        worker.postMessage(data);
    }, []);
    const OneNews = (props)=>{
        return(
        <button className="OneNews" onClick={()=>{nav(`/news/${props.idnews}`)}}>
            <h3>{props.namenews}</h3>
            <h4>{props.datapublish}</h4>
        </button>)
    }
    const AllNews = ()=>{return(
        <div className="AllNews">{
        reqAllNews.map((reqOneNews)=>{
            return(
                <OneNews idnews={reqOneNews.idnews} namenews = {reqOneNews.namenews} datapublish = {reqOneNews.datepublish} />
            )
        })
        }
        </div>
        )
    }
    const getNews = ()=> {
        if (reqAllNews) {
            if (!reqAllNews.error) {
                return (<AllNews/>)
            } else return ( <Alert severity="error">Ошибка со стороны сервера. Перезагрузите страницу или попробойте позже.</Alert>)
        } else return (<CircularProgress sx={{margin: "auto"}}/>)
    }
    return(
        <div className="Main">
            <h1>Все Новости</h1>
            { getNews()}
        </div>
    )
}
