import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Messenger from "./pages/Messenger";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home/> : <Registration/>}

        </Route>
        <Route path='/login'>
          {user ? <Redirect to="/"/> :<Login/>}

        </Route>
        <Route path='/register'>
        {user ? <Redirect to="/"/> :<Registration/>}

        </Route>

        <Route path='/messenger'>
        {!user ? <Redirect to="/"/> :<Messenger/>}
      
        </Route>

        <Route path='/profile/:username'>
          <Profile/>

        </Route>
      </Switch>
    </Router>
  )
}

export default App;


