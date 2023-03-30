import { info } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const PlayerInfo = ({playersArray}) => {
    const [storedData,setStoredData]=useState({})
    useEffect(()=>{
        const localStorageData=JSON.parse(localStorage.getItem('player'));
        if(localStorageData){
            setStoredData(localStorageData);
        }
        
    },[playersArray])
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Players Info Cart</h1>
            <hr className='w-1/2 mx-auto border-2 border-blue-500'/>
            <p>Player Name: {storedData.name}</p>
            <p>player Matches: {storedData.match}</p>
            <p>player runs: {storedData.run}</p>
        </div>
    );
};

export default PlayerInfo;