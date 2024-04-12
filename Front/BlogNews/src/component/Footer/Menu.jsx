import {

    Box,
    Button, Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText
} from "@mui/material";

import {Home, MenuRounded, PlusOneTwoTone} from "@mui/icons-material";
import {Fragment, useState} from "react";
import {useNavigate} from "react-router-dom";
import {lightBlue} from '@mui/material/colors';

export default function Menu(){
    const anchor = "right"
    const nav = useNavigate();
    const [state, setState] = useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key="Добавить новость" disablePadding>
                    <ListItemButton onClick={()=>{nav("/addnews")}}>
                        <ListItemIcon>
                            <PlusOneTwoTone />
                        </ListItemIcon>
                        <ListItemText primary="Add" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Все новости" disablePadding>
                    <ListItemButton onClick={()=>{nav("/")}}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Все новости" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );
    return(
        <div id="Menu">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}> <MenuRounded  sx={{color:lightBlue[50]}}/> </Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </Fragment>
        </div>)
}