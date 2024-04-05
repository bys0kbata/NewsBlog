import Main from "../Page/Main/Main";
import OneNews from "../Page/OneNews/OneNews";
import { Route,Routes } from "react-router-dom";
export default function RouterApp(){
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/News/*" element={<OneNews />} />
        </Routes>
    )
}