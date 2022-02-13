import React from "react";
import { Container } from "react-bootstrap";
import './styles/App.css'

// We use Route in order to define the different routes of our application
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ChartDashboard from "./components/chartDashboard";
import FullPageWord from "./components/fullPageWord";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import WordList from "./components/wordList";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Container height="100vh" fluid>
          <Navbar />
          <Route exact path="/">
            <WordList />
          </Route>
          <Route path="/word/:_id">
            <FullPageWord />
          </Route>
          <Route path="/chartdashboard">
            <ChartDashboard />
          </Route>
        </Container>
      </React.Fragment>
    </Router>
  );
};

export default App;