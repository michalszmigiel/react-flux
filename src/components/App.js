import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Switch, Route, Redirect } from "react-router-dom";
import FourOhFour from "./FourOhFour";
import ManageCoursePage from "./ManageCoursePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from="/about-me" to="about" />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
};

export default App;
