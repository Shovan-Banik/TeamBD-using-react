import React from 'react';

const Player = ({player,handleInfoCart}) => {
    return (
        <div className='border border-2 border-blue-400 p-5 text-center'>
            <img className='mx-auto' src={player.img} alt="" />
            <h3 className='text-2xl'>Player name: {player.name}</h3>
            <p>Birth Place: {player.BirthPlace}</p>
            <p>Age: {player.age}</p>
            <button onClick={()=>handleInfoCart(player.name,player.ODImatch,player.runs,player.id)} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2">Info Cart</button>

        </div>
    );
};

export default Player;