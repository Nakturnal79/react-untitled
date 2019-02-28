import React, { Component } from 'react';
import NaviBar from './components/navibar'
import { Route, Switch ,Redirect} from 'react-router-dom';
import About from './components/about-us';
import Registration from './components/registration';
import Contacts from './components/contacts';
import Error404 from './components/error404';
import MainPage from './components/mainPage';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <NaviBar/>
            <div className="container">
                <Switch>
                    <Route path="/Registration" component={Registration}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Contacts" component={Contacts}/>
                    <Route path="/error404" component={Error404}/>
                    <Route path="/" exact component={MainPage}/>
                    <Redirect to="/error404"/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;
