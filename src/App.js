import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
