import axios from "axios";
import { useState } from "react"
import { IPServer } from "../../config";
import { useNavigate } from "react-router-dom";

export default function AddMain(){
    const [namenews, setNN] = useState();
    const [textnews, setTN] = useState();
    const nav = useNavigate();
    const now = new Date();
    const datepublish = `${now.getDay()}.${now.getMonth()+1}.${now.getFullYear()}`;
    const data ={
        namenews : namenews,
        textnews : textnews,
        datepublish: datepublish
    }
    const GoRes =  async ()=>{
        await axios.post( `${IPServer}createnews`,data)
    }

    return(
        <div>
            <form>
                <h1>Добавление Новостeй</h1>
                <input type="text" onChange={(e)=>{setNN(e.target.value)}} placeholder="Введите заголовок новости" />
                <input type="text" onChange={(e)=>{setTN(e.target.value)}} placeholder="Введите текст новости" />
                <button onClick={(e)=>{e.preventDefault(); GoRes();}}>Добавить</button>
                <button onClick={(e)=>{e.preventDefault(); nav("/");}}>Отмена</button>
            </form>
        </div>
    )
}