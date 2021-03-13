import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h3>Total Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }

        </div>
    );
};

export default Home;