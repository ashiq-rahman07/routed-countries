import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData();
    console.log(country)
    return (
        <div>
            <h3>Country Name</h3>
        </div>
    );
};

export default Country;