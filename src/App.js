import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFlightComponent from './components/ListFlightComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateFlightComponent from './components/CreateFlightComponent';
import UpdateFlightComponent from './components/UpdateFlightComponent';
import ViewFlightComponent from './components/ViewFlightComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListFlightComponent}></Route>
                          <Route path = "/Flights" component = {ListFlightComponent}></Route>
                          <Route path = "/add-Flight/:id" component = {CreateFlightComponent}></Route>
                          <Route path = "/view-Flight/:id" component = {ViewFlightComponent}></Route>
                          {/* <Route path = "/update-Flight/:id" component = {UpdateFlightComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;