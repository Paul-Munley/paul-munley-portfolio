import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route exact path="*">
          <p>page not found</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
