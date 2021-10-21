import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import "./css/SwipeButtons.css";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <div className="dislike">
                <IconButton>
                    <CloseIcon fontSize = "large" />
                </IconButton>
            </div>
            <div className="like">
                <IconButton>
                    <FavoriteIcon fontSize = "large" />
                </IconButton>
            </div>
        </div>
    );
};

export default SwipeButtons;