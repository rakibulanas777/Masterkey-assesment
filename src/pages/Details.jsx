import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const Details = () => {
    return (
        <div className="p-4">
            <Title />
            <p className="mt-4">This is the details page.</p>
            <Link to="/" className="text-blue-500 hover:underline mt-4 block">
                Back to Home
            </Link>
        </div>
    );
};

export default Details;
