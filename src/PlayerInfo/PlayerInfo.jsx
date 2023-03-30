import React, { useEffect, useState } from 'react';

const PlayerInfo = ({totalRun}) => {
    const [storedRun,setStoredRun]=useState('');
    useEffect(()=>{
        const getRunFromLocalStorage=JSON.parse(localStorage.getItem('playersRun'));
        setStoredRun(getRunFromLocalStorage);
    },[totalRun])
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Players Info Cart</h1>
            <hr className='w-1/2 mx-auto border-2 border-blue-500'/>
            <p>Players Total Run: {storedRun}</p>
        </div>
    );
};

export default PlayerInfo;