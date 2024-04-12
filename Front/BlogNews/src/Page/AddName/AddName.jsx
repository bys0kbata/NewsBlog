import axios from "axios";
import { useState } from "react"
import { IPServer } from "../../config";
import { useNavigate } from "react-router-dom";
import "./AddName.scss"
import {Box, Button, Paper, TextField, Typography} from "@mui/material";

export default function AddMain(){

    const [namenews, setNN] = useState("");
    const [textnews, setTN] = useState("");
    const nav = useNavigate();
    const now = new Date();
    const datepublish = now.toLocaleDateString("de-DE");
    const data ={headers:{
        namenews : namenews,
        textnews : textnews,
        datapublish: datepublish
    }}
    const GoRes =   ()=>{
        if(textnews && namenews){
        axios.post( `${IPServer}createnews`,"",data)
            .then((res)=>{
                console.log(res);
            })}
    }
    console.log(data);

    return(
        <div className="AddName">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "max-content",
                        height: "max-content",
                        margin:"auto",
                        marginTop:"3vh",
                        paddingBottom: "2.5vh",
                        paddingTop: "2.5vh",
                        paddingLeft: "2.5vw",
                        paddingRight: "2.5vw",
                    },
                }}
            >
            <Paper elevation={3}>
            <form >
                <Typography variant="h5" component="h5">
                    Добавление Новостeй
                </Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Заголовок"
                    onChange={(e)=>{setNN(e.target.value)}}
                    sx={{marginBottom:"1vh",marginTop:"1vh"}}
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Текст Новости"
                    multiline
                    maxRows={40}
                    variant="standard"
                    onChange={(e)=>{setTN(e.target.value)}}
                    sx={{marginBottom:"1vh",marginTop:"1vh", width: "60vh"}}
                />
                 <div>
                    <Button variant="contained" onClick={(e)=>{e.preventDefault(); GoRes();}} sx={{marginRight:"1vh",marginTop:"1vh"}}>Добавить</Button>
                    <Button variant="outlined" color="error" onClick={(e)=>{e.preventDefault(); nav("/");}} sx={{marginLeft:"1vh",marginTop:"1vh"}}>Отмена</Button>
                </div>
            </form>
            </Paper>
            </Box>
        </div>
    )
}