import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;

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
            <Link to={`/friend/${id}`}>Details of {id}</Link>
        </div>
    );
};

export default Friend;