import { useLayoutEffect, useState} from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import {Alert, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
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
    const OneNews2 = (props) =>{
        return (
    <Card className="OneNews" sx={{ maxWidth: 345 }} onClick={()=>{nav(`/news/${props.idnews}`)}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="src/Page/Main/rossijskaya-gazeta.jpg_1990113833.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.namenews}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.datapublish}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
    }
    const AllNews = ()=>{return(
        <div className="AllNews">{
        reqAllNews.map((reqOneNews)=>{
            return(
                <OneNews2 idnews={reqOneNews.idnews} namenews = {reqOneNews.namenews} datapublish = {reqOneNews.datepublish} />
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
