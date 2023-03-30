import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({handleInfoCart}) => {
    const[players,setPlayers]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                players.map(player=><Player
                handleInfoCart={handleInfoCart}
                key={player.id}
                player={player}
                ></Player>)
            }
        </div>
    );
};

export default Players;