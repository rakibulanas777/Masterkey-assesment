import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [horizontalButton, setHorizontalButton] = useState([]);
    const [verticalButton, setVerticalButton] = useState([]);

    const handleHorizontally = (id) => {
        setHorizontalButton((prevHorizontalButton) => {
            console.log('Previous horizontal state:', prevHorizontalButton);
            return [...prevHorizontalButton, id];
        });
    };

    const handleVertically = (id) => {
        setVerticalButton((prevVerticalButton) => {
            console.log('Previous vertical state:', prevVerticalButton);
            return [...prevVerticalButton, id];
        });
    };

    const handleClick = (type) => {
        // Implement click handling logic here
    };

    console.log('Horizontal buttons:', horizontalButton);
    console.log('Vertical buttons:', verticalButton);

    const getColor = (type, id) => {
        if (type === 'H') {
            return id % 2 === 0 ? 'blue' : 'gray';
        }
        if (type === 'V') {
            return id % 2 === 0 ? 'purple' : 'cyan';
        }
        return 'white';
    };

    return (
        <div className='container mx-auto px-10'>
            <div className={`flex mx-auto items-center h-[80vh] flex-row ${horizontalButton.length !== 0 ? 'justify-between' : 'justify-center'}`}>
                <div className="flex gap-4">
                    <button
                        style={{ backgroundColor: getColor('V', 1) }}
                        className="py-3 px-6 text-white font-semibold rounded-sm"
                        onClick={() => handleVertically(1)}
                    >
                        V
                    </button>
                    <button
                        style={{ backgroundColor: getColor('H', 1) }}
                        className="py-3 px-6 text-black font-semibold rounded-sm"
                        onClick={() => handleHorizontally(1)}
                    >
                        H
                    </button>
                </div>
                {horizontalButton.map((id, index) => (
                    <div key={index} className="flex gap-4">
                        <button
                            style={{ backgroundColor: getColor('V', id) }}
                            className="py-3 px-6 text-white font-semibold rounded-sm"
                            onClick={() => handleVertically(id)}
                        >
                            V
                        </button>
                        <button
                            style={{ backgroundColor: getColor('H', id + 1) }}
                            className="py-3 px-6 text-black font-semibold rounded-sm"
                            onClick={() => handleHorizontally(id + 1)}
                        >
                            H
                        </button>
                    </div>
                ))}
            </div>

            <Link to="/details" className="text-blue-500 hover:underline mt-4 block">
                Generate Title
            </Link>
        </div>
    );
};

export default Home;
