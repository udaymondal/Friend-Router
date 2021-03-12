import React from 'react';

const Friend = (props) => {
    const { name, email } = props.friend;

    const friendStyle={
        border: '2px solid gray',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>E-mail: {email}</p>
        </div>
    );
};

export default Friend;