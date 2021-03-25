import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile"
import MessageList from "./views/MessageList";
import DeleteUserPage from './views/DeleteUserPage'
import NotFound from "./views/NotFound";
import { useStore } from "./store/store.js"
import userList from "./components/UserList";

function App() {
  const token = useStore((state) => state.user.token)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}>
          {token && <Redirect to="/profile" />}
        </Route>
        <Route path='/profile' component={Profile}>
          {!token && <Redirect to="/" />}
        </Route>
        <Route path="/messages" component={MessageList}>
          {!token && <Redirect to="/" />}
        </Route>
        <Route path="/users" component={userList}>
          {!token && <Redirect to="/" />}
        </Route>
        <Route path="/delete-user" component={DeleteUserPage}>
          {!token && <Redirect to="/" />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
