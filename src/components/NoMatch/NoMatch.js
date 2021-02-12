import React from 'react';

const NoMatch = () => {
    return (
        <div style={{
            color: 'white',
            background:'red',
            padding:'20px',
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            textAlign:'center',
            borderRadius:'15px'
        }}>
            <h1> NO MARCH</h1><br/>
            <h2>404</h2>
        </div>
    );
};

export default NoMatch;