import React, { useState } from 'react';
export const Stages=()=>
{   
    const [clues,setclues]=useState(5);
    const [deadends,setdeadends]=useState(2);
    const [stages,setStages]=useState(1);
    const [sol,setsol]=useState(1);
    return (
        <><h1>Stage{stages}</h1>
        <div>

        </div>
        <div>
        <button onClick={()=>{let u=clues-1;if(u<=0){u=0;}setclues(u);}}>Clues-{clues}</button>
        <button onClick={()=>{let u=deadends-1;if (u<=0){u=0;}setdeadends(u);}}>Deadends-{deadends}</button>
        <button onClick={()=>{let u=sol-1;if (u<=0){u=0;}setsol(u);}}>View Solution-{sol}</button>
        <button onClick={()=>{let u=stages+1;setStages(u);}}>Go to next</button>
        </div>
        </>

    );
}