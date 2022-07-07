import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./main/Main";
import Classification from "./classification/Classification";
import { Provider } from "react-redux";
import "./App.css";
import animal from "./data/animal";
import { createStore } from "redux";

const store = createStore(animal);

const App = () => {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/classification">
            <Classification />
          </Route>
        </Provider>
      </Switch>
    </Router>
  );
};

export default App;
