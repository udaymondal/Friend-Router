import { useEffect, useState } from 'react';
import './App.css';
import Friend from './Components/Friend';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [friends, setFriends] = useState([]);

  useEffect( () => {
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
}

export default App;
