import React, { useState } from 'react';

const Home = () => {
    const [horizontalButton, setHorizontalButton] = useState([]);
    const [secondH, setSecondH] = useState(0);

    const handleHorizontally = (id) => {
        setHorizontalButton((prevHorizontalButton) => {
            console.log('Previous state:', prevHorizontalButton);
            return [...prevHorizontalButton, id];
        });
    };





    console.log(horizontalButton);
    return (
        <div className='container mx-auto px-10'>
            <div className={`flex mx-auto items-center h-[80vh] flex-row ${horizontalButton.length !== 0 ? 'justify-between' : 'justify-center'}`}>
                <div className="flex gap-4">
                    <button
                        className="py-3 px-6 bg-cyan-600 text-white font-semibold rounded-sm"
                        onClick={() => handleVertically(1)}
                    >
                        V
                    </button>
                    <button
                        className="py-3 px-6 bg-gray-200 text-black font-semibold rounded-sm"
                        onClick={() => handleHorizontally(1)}
                    >
                        H
                    </button>
                </div>
                {horizontalButton.map((id, index) => (
                    <div key={index} className="flex gap-4">
                        <button
                            className={`py-3 px-6 bg-green-600 text-white font-semibold rounded-sm`}
                            onClick={() => handleClick('V')}
                        >
                            V
                        </button>
                        <button
                            className={`py-3 px-6 bg-gray-${200} text-black font-semibold rounded-sm`}
                            onClick={() => handleHorizontally(id + 1)}
                        >
                            H
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
