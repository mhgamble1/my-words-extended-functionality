import React from "react";

// We use Route in order to define the different routes of our application
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ChartTest from "./components/chartTest";
import FullPageWord from "./components/fullPageWord";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import WordList from "./components/wordList";

const App = () => {
  return (
    // <div>
    //   <Navbar />
    //   <Route exact path="/">
    //     <WordList />
    //   </Route>

    //   <FullPageWord />
    // </div>
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path="/">
          <WordList />
        </Route>
        <Route path="/word/:_id">
          <FullPageWord />
        </Route>
        <Route path="/charttest">
          <ChartTest/>
        </Route>
      </React.Fragment>
    </Router>
  );
};

export default App;