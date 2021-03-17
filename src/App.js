import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import MessageList  from "./views/MessageList";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={MessageList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
