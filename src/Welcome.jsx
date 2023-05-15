import React from 'react';
import { useLocation} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export const Welcome = () =>{

    const loc=useLocation();
    const navigate = useNavigate();
    let y=loc.state.name;
    let ans="";
    for (let x of y)
    {   
        if (x=="@"){break;}
        ans+=x;
        
    }
    function goto()
    {
        navigate("/game");
    }
    return (<div>
        <h1>Hello,{ans}</h1>
        <h2><u>Instructions</u></h2>
        <ul className="instructions">
            <li>The aim of the puzzle is to assess the soft skills of its users (eg - eye for detail, perseverance, curiosity, etc.)</li>
            <li>The soft skills to be assessed by the puzzle can be chosen by you</li>
            <li>The puzzle should incorporate direct or subtle methods of measuring these soft skills</li>
            <li>The puzzle contains
                <ul className="instructions">
                    <li>Minimum 5 clues</li>
                    <li>Minimum 2 dead-ends</li>
                    <li>Minimum 1 solution</li>
                </ul>
            </li>
        </ul>
        <button onClick={goto}> Start the puzzle </button>
    </div>);
};
