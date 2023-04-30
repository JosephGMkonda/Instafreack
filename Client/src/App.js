import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>

        </Route>
        <Route path='/login'>
          <Login/>

        </Route>
        <Route path='/register'>
          <Registration/>

        </Route>

        <Route path='/profile'>
          <Profile/>

        </Route>
      </Switch>
    </Router>
  )
}

export default App;


