import React from 'react';
import "./css/Nav.css";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from '@material-ui/icons/Event';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <Link to="/">
                <IconButton>
                    <HomeIcon fontSize="large" className="home-icon" />
                    <p className="home">Início</p>
                </IconButton>
            </Link>
            <Link to="/event">
                <IconButton>
                    <EventIcon fontSize="large" className="event-icon" />
                    <p className="event">Evento</p>
                </IconButton>
            </Link>
        </div>
    )
}

export default Nav;