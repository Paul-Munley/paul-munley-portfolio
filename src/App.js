import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="*">
          <p>page not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
