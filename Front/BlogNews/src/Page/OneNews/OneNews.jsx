import { useLayoutEffect, useState} from "react"
import axios from "axios";
import { IPServer } from "../../config";
import "./OneNews.scss";
import {Box, createTheme, Paper, styled, ThemeProvider} from "@mui/material";
import {Light} from "@mui/icons-material";

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
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "max-content",
        padding:"5vh",
        lineHeight: '60px',
    }));
    const lightTheme = createTheme({ palette: { mode: 'light' } });
    return(
        <div className="OneNews">
            <ThemeProvider theme={lightTheme} >
                <Box sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    width: "50vw",
                    margin: "auto",
                    marginTop:"20vh"
                }}>
                    <Item>
                        <h1>{Info.namenews}</h1>
                        <h3>Дата публикаций: {Info.datepublish}</h3>
                        <h3 className="Text" >{Info.textnews}</h3>
                    </Item>

                </Box>
            </ThemeProvider>
        </div>
    )
}