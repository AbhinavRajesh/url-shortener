import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Dashboard from "./pages/dashboard";
import AuthProvider from "./context/AuthProvider";

import { AuthContext, AuthContextInterface } from "./context/AuthProvider";
import { useContext } from "react";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pages/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
