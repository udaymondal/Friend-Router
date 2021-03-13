import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path = "/home">
          <Home />
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
