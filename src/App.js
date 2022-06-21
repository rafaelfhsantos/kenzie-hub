import "./App.css";
import Cadastro from "./Pages/Cadastro";
import GlobalStyle from "./styles/global";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
