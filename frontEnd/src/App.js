import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Class from "./pages/Class/index";
import Home from "./pages/Home";
import NavbarHeader from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/class" component={Class} />
      </Switch>
    </Router>
  );
}

export default App;
