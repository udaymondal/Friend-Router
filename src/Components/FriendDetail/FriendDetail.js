import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();

    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    const friendStyle={
        border: '10px solid gray',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <p>This is friend detail component for user Id: {friendId}</p>
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: <small>{friend.phone}</small></p>
            <p>Profile: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;