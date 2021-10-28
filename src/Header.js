import React from 'react';
import './css/Header.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/menu">
                <IconButton className="button">
                    <DehazeIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
            <Link to ="/">
                <p className="logo3">MatchFAE</p>
            </Link>
            <Link to="/search">
                <IconButton className="button">
                    <SearchIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;