import React, { useState } from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import Players from '../Players/Players';

const Home = () => {
    const[playersArray,setPlayersArray]=useState({});
    const handleInfoCart=(name,match,run,id)=>{
        const singlePlayer={name,match,run,id};
            localStorage.setItem('player',JSON.stringify(singlePlayer));
            setPlayersArray(singlePlayer);
    }
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3'>
            <Players handleInfoCart={handleInfoCart}></Players>
            </div>
            <div className='col-span-1'>
            <PlayerInfo playersArray={playersArray}></PlayerInfo>
            </div>
        </div>
    );
};

export default Home;