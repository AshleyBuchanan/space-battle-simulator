import React from "react";
import './ActionButton.css';

const ActionButton = ({fire}) => (
    <div onClick={fire} className="action-button">
        _Fire!
    </div>
)

export default ActionButton;