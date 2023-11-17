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
    const naudojamasZymuo = {
        color: 'green',

    }

    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const arr2 = ["+", "-", "/", "*"];
    const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];



    let [nr, setNr] = useState(0);
    let [zenklas, setZenklas] = useState("+");
    let [nr2, setNr2] = useState(0);


    function updateValue(asdf) {
        setNr(asdf)
    }
    function updateZenklas(zen) {
        setZenklas(zen)
    }
    function updateValue3(y) {
        setNr2(y)
    }

    function answer(val1, val2, val3) {

        switch (val2) {
            case "+":
                return val1 + val3;
            case "-":
                return val1 - val3;
            case "*":
                return val1 * val3;
            case "/":
                return val1 / val3;
            default: return 0
        }

    }

    return (

        <div className={style.numberContainer}>

            <div className={style.gridContainer}>
                {arr.map((arrItem) => <button style={numberStyle} onClick={() => updateValue(arrItem)} >{arrItem}</button>)}
                <span className={style.naudojamasZymuo}>{nr}</span> 
            </div>
            <div className={style.gridContainerMath}>
                {arr2.map((arr2Item) => <button style={numberStyle} onClick={() => updateZenklas(arr2Item)} >{arr2Item}</button>)}
                <span className={style.naudojamasZymuo}>{zenklas}</span>
            </div>

            <div className={style.gridContainer}>
                {arr3.map((arr3Item) => <button style={numberStyle} onClick={() => updateValue3(arr3Item)} >{arr3Item}</button>)}
                {nr2}
            </div>

            <p>Atsakymas: {answer(nr, zenklas, nr2)} </p>
        </div>

    );

}