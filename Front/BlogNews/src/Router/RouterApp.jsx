import AddMain from "../Page/AddName/AddName";
import Main from "../Page/Main/Main";
import OneNews from "../Page/OneNews/OneNews";
import { Route,Routes } from "react-router-dom";
export default function RouterApp(){
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news/*" element={<OneNews />} />
            <Route path="/addnews" element={<AddMain />} />
        </Routes>
    )
}