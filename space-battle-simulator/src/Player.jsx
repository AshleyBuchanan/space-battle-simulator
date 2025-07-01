import React from "react";
import './Player.css';

const checkStatus = (points) => {
    return points>0 ? <span className="alive">&#10084;</span> : <span className="dead">&#9760;</span>
}
const Player = ({name, health}) => (
    <div className={`player player-${name}`}>{name} Health: <span className="value">{health}</span> {checkStatus(health)}</div>
)

export default Player;