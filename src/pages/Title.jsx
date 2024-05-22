import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Tile = ({ letter, onClick }) => {
    return (
        <button className="tile py-3 px-6 text-white font-semibold bg-cyan-600 rounded" onClick={() => onClick(letter)}>
            {letter}
        </button>
    );
};

const GenerateTitle = () => {
    const [outputString, setOutputString] = useState('');

    const handleClick = (letter) => {
        const newOutputString = outputString + letter;
        const updatedOutputString = replaceConsecutiveLetters(newOutputString);
        setOutputString(updatedOutputString);
    };

    const replaceConsecutiveLetters = (str) => {
        return str.replace(/(.)\1{2,}/g, (match) => '_'.repeat(Math.ceil(match.length / 3)));
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="">
            <div className="tile-container flex gap-4 flex-wrap">
                {alphabet.map((letter) => (
                    <Tile key={letter} letter={letter} onClick={handleClick} />
                ))}
            </div>
            <div id="outputString" className='py-3 px-6 font-semibold'>{outputString}</div>
            <Link to="/" className="text-blue-500 hover:underline mt-4 block">
                Go to Home
            </Link>
        </div>
    );
};



export default GenerateTitle;
