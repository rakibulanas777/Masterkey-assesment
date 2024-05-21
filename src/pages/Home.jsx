import React, { useState } from 'react'

const Home = () => {
    const [value, setValue] = useState([
        {
            name: "V",
            name: "H"
        }
    ])
    return (
        <div className=' container mx-auto px-10'>
            <div className="flex gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="py-3 px-6 bg-cyan-600 text-white font-semibold rounded-sm">
                    V
                </button>
                <button className="py-3 px-6 bg-gray-200 text-black font-semibold rounded-sm">
                    H
                </button>
            </div>
        </div>
    )
}

export default Home