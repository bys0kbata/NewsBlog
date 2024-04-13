import axios from "axios";
import {useEffect, useRef, useState} from "react"
import { IPServer } from "../../config";
import { useNavigate } from "react-router-dom";
import "./AddName.scss"
import {Alert, Box, Button, CircularProgress, Paper, TextField, Typography} from "@mui/material";
import {green} from "@mui/material/colors";

export default function AddMain(){
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);
    const [namenews, setNN] = useState(null);
    const [textnews, setTN] = useState(null);
    const nav = useNavigate();
    const now = new Date();
    const timer = useRef();
    const datepublish = now.toLocaleDateString("de-DE");
    const data ={headers:{
        namenews : encodeURI(namenews),
        textnews : encodeURI(textnews),
        datapublish: datepublish
    }}
    useEffect(() => {
        clearTimeout(timer.current);
    }, []);
    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };
    const GoRes =    ()=>{
        if(textnews && namenews){
            setSuccess(false);
            setLoad(true);
            axios.post( `${IPServer}createnews`,"",data)
            .then( (res) => {
                console.log(res);
                if (res.status == 200) {
                    timer.current = setTimeout(() => {
                        setSuccess(true);
                        setLoad(false);
                    }, 2000);
                    timer.current = setTimeout(() => {
                        nav("/")
                    }, 3000);

                }
            })}
        else {
            setVis(true)
        }
    }
    console.log(data);

  const  [Vis, setVis] = useState(false);
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
                {Vis && <Alert severity="error">Введите все необходимые данные.</Alert>}
                 <div>
                     <Box sx={{ m: 1, position: 'relative' }}>
                         <Button
                             variant="contained"
                             sx={buttonSx}
                             disabled={load}
                             onClick={(e)=>{e.preventDefault(); GoRes();}}
                         >
                            Добавить
                         </Button>
                         {load && (
                             <CircularProgress
                                 size={24}
                                 sx={{
                                     color: green[500],
                                     position: 'absolute',
                                     top: '50%',
                                     left: '50%',
                                     marginTop: '-12px',
                                     marginLeft: '-12px',
                                 }}
                             />
                         )}
                     </Box>
                    <Button variant="outlined" color="error" onClick={(e)=>{e.preventDefault(); nav("/");}} sx={{marginLeft:"1vh",marginTop:"1vh"}}>Отмена</Button>
                </div>
            </form>
            </Paper>
            </Box>
        </div>
    )
}