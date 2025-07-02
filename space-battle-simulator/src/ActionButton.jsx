import React from "react";
import './css/ActionButton.css';

const ActionButton = ({fire, restart, stillPlaying}) => {
    return stillPlaying 
        ? 
            <div onClick={fire} className="action-button">
                _Fire!
            </div> 
        :
            <div onClick={restart} className="action-button restart">
                Restart?
            </div>
}

export default ActionButton;


// i could've shortened this but wanted to keep it obvious with my intent with css.