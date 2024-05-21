import React, { useState } from 'react';

const Home = () => {

    const [buttonGroups, setButtonGroups] = useState([
        [
            {
                id: 1,
                name: "V",
            },
            {
                id: 2,
                name: "H",
            }
        ]
    ]);

    const handleClick = () => {
        const newId = Math.max(...buttonGroups.flat().map(button => button.id)) + 1;
        const newButtonGroups = [...buttonGroups];
        newButtonGroups[newButtonGroups.length - 1].push({ id: newId, name: "V" });
        newButtonGroups[newButtonGroups.length - 1].push({ id: newId + 1, name: "H" });

        setButtonGroups(newButtonGroups);
    };

    console.log(buttonGroups)

    return (
        <div className='container mx-auto px-10'>
            {buttonGroups.map((row, rowIndex) => (
                <div key={rowIndex} className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4">
                    {row.map((button, buttonIndex) => (
                        <button
                            key={button.id}
                            className={`py-3 px-6 ${button.name === "V" ? "bg-cyan-600 text-white" : "bg-gray-200 text-black"} font-semibold rounded-sm`}
                            onClick={() => handleClick(button.name)}
                        >
                            {button.name}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Home;
