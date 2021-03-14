import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();
    const anotherMethod = (friendId) => {
        const url2 = `/friend/${friendId}`;
        history.push(url2);
    }
    const friendStyle = {
        border: '2px solid gray',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>E-mail: {email}</p>
            {/* Using Link method */}
            <Link to={`/friend/${id}`}>
                <button>Show User Information</button>
            </Link>
            {/* Using useHistory method */}
            <button onClick={() => anotherMethod(id)}>Another Method</button>
        </div>
    );
};

export default Friend;