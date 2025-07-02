import React, {useState, useEffect} from "react";
import Player from './Player';
import ActionButton from './ActionButton';
import './css/SpaceCombatUI.css'

// i borrowed a rollDice from our lessons for gamification purposes.
const rollDice = (sides, times) => 
    Array.from( {length:times}, () => 
        Math.floor( Math.random() * sides) + 1)
        .reduce( (sum, val) => sum + val, 0);

// i raised the state so that a comparison can be made between player and enemy.
// i included fire() inside the component to simplify everything.
// onVictory() is essential for the game to know who won. <-- i did this to keep the game's health-state here in this component.
const SpaceCombatUI = ({onVictory, onRestart}) => {
    const [players, setPlayers] = useState([100, 100]);

    const fire = () => {
        setPlayers(health => 
            (health.map( h => 
                Math.max(h - rollDice(20, 2), 0)
            ))
        );
    }

    // i wanted to keep the restart simple.
    const restart = () => {
        setPlayers([100, 100]);
        onRestart?.();
    }

    // i needed a flag to pass to the ActionButton.
    const stillPlaying = players.every(h => h > 0);

    // this watches the flag and assigns the winner to onVictory.
    useEffect(() => {
        if(!stillPlaying) {
            const winner = players[0] > 0 ? ['Player', 'Enemy'] : ['Enemy', 'Player'];
            onVictory?.(winner);
        }
    }, [stillPlaying]);

    return (
        <div className="space-combat-ui">
            <Player name="Player" health={players[0]}/>
            <ActionButton fire={fire} restart={restart} stillPlaying={stillPlaying}/>
            <Player name="Enemy" health={players[1]}/>
        </div>
    )
}

export default SpaceCombatUI;