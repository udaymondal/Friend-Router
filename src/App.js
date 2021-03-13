import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path = "/home">
          <Home />
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail />
        </Route>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
