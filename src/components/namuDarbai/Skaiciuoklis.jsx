import style from './Skaiciuoklis.module.css';
import React from 'react';
import { useState } from 'react';





export function Skaiciuoklis() {
    const numberStyle = {
        padding: '1rem',
        fontSize: '2rem',
        lineHeight: '1rem',
        fontWeight: 'bold',
        width: '50px',
        cursor: 'pointer',
    };

    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const arr2 = ["+", "-", "/", "*"];


    let [nr, setNr] = useState(0);
    let [zenklas, setZenklas] = useState("+");


    function updateValue(num) {
        console.log("test")
        setNr(num)
    }

    

    function CreateMyButton(number) {
        return (
            <button style={numberStyle} onClick={() => updateValue(number)}>{number}</button>
        )
    }


    return (
        <div>
            <div className={style.numberContainer}>

                <div className={style.gridContainer}>
                    {arr.map((num) => CreateMyButton(num))}
                </div>

                <div className={style.gridContainerMath}>
                    {arr2.map((num) => CreateMyButton(num))}
                </div>

                <div className={style.gridContainer}>
                    {arr.map((num) => CreateMyButton(num))}
                </div>
            </div>
            <p>Atsakymas: {nr} </p>
        </div>

    );

}


