import React, {useState} from "react";
import Player from './Player';
import ActionButton from './ActionButton';
import './SpaceCombatUI.css'

const fire = () => {
    console.log('fire')
}

const SpaceCombatUI = () => {
    const [players, setPlayers] = useState([]);

    return (
        <div className="space-combat-ui">
            <Player name="Player" health={100}/>
            <ActionButton fire={fire}/>
            <Player name="Enemy" health={0}/>
        </div>
    )
}

export default SpaceCombatUI;