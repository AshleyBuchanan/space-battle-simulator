import React, { useState } from 'react'
import Title from './Title';
import SpaceCombatUI from './SpaceCombatUI';
import MessageCenter from './MessageCenter';
import './App.css'

function App() {
    const [message, setMessage] = useState('Engage the Enemy!');

    //i wanted to keep the game status, and message handling here, and keep everything else inside their respective components (health etc)
    const handleVictory = (result) => setMessage(`${result[0]} blasts ${result[1]}'s ship into stardust!`);
    const handleRestart = () => {
        console.log('run')
        setMessage('Engage the Enemy!');
    }

    return (
        <>
            <Title/>
            <SpaceCombatUI onVictory={handleVictory} onRestart={handleRestart}/>
            <MessageCenter text={message}/>
        </>
    )
}

export default App
