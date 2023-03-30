import React, { useState } from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import Players from '../Players/Players';

const Home = () => {
    const[totalRun,setTotalRun]=useState('');
    const handleInfoCart=(run)=>{
        const previousRun=localStorage.getItem('playersRun');
        if(previousRun){
        const updatedRun=parseInt(previousRun)+parseInt(run);
        localStorage.setItem('playersRun',updatedRun);
        setTotalRun(updatedRun);
        }
        else{
        localStorage.setItem('playersRun',run);
        }
    }
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3'>
            <Players handleInfoCart={handleInfoCart}></Players>
            </div>
            <div className='col-span-1'>
            <PlayerInfo totalRun={totalRun}></PlayerInfo>
            </div>
        </div>
    );
};

export default Home;